// lib/serializePayloadRichText.ts
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function textFromNode(node: any): string {
  if (!node) return "";
  if (typeof node.text === "string") return esc(node.text);
  if (Array.isArray(node.children)) return node.children.map(textFromNode).join("");
  return "";
}

function nodeToHTML(node: any): string {
  if (!node) return "";

  const kids = (node.children || []).map(nodeToHTML).join("");

  switch (node.type) {
    case "paragraph":
      return `<p>${(node.children || []).map(textFromNode).join("")}</p>`;

    case "heading": {
      const level = node.tag || node.level || 2; // Lexical dažādās shēmās
      const inner = (node.children || []).map(textFromNode).join("");
      return `<h${level}>${inner}</h${level}>`;
    }

    case "list": {
      const isOrdered =
        node.listType === "number" || node.format === "number" || node.tag === "ol";
      const tag = isOrdered ? "ol" : "ul";
      const inner = (node.children || []).map(nodeToHTML).join("");
      return `<${tag}>${inner}</${tag}>`;
    }

    case "listitem":
      return `<li>${(node.children || []).map(nodeToHTML).join("")}</li>`;

    case "quote":
      return `<blockquote>${(node.children || []).map(nodeToHTML).join("")}</blockquote>`;

    case "link": {
      const url = esc(node.fields?.url || node.url || "#");
      const inner =
        (node.children || []).map(textFromNode).join("") ||
        (node.children || []).map(nodeToHTML).join("");
      const rel = url.startsWith("http") ? ` rel="noopener noreferrer"` : "";
      const target = url.startsWith("http") ? ` target="_blank"` : "";
      return `<a href="${url}"${rel}${target}>${inner}</a>`;
    }

    default:
      // noklusēti – ieliekam bērnus (lai neizkristu saturs)
      if (Array.isArray(node.children)) return node.children.map(nodeToHTML).join("");
      return "";
  }
}

export function serializePayloadRichText(value: any): string {
  if (!value) return "";
  const nodes = value?.root?.children || [];
  return nodes.map(nodeToHTML).join("");
}
