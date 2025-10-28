/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

// lib/serializePayloadRichText.ts

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

  // Ja ir "text" mezgls
  if (node.type === "text" && typeof node.text === "string") {
    return esc(node.text);
  }

  // Ja ir "content" lauks
  if (node.type === "text" && typeof node.content === "string") {
    return esc(node.content);
  }

  // Ja ir bērni
  if (Array.isArray(node.children)) {
    return node.children.map(textFromNode).join("");
  }

  return "";
}

function nodeToHTML(node: any): string {
  if (!node) return "";

  switch (node.type) {
    case "paragraph":
      return `<p>${(node.children || []).map(nodeToHTML).join("")}</p>`;

    case "heading": {
      const level = node.tag || node.level || 2;
      const inner = (node.children || []).map(nodeToHTML).join("");
      return `<h${level}>${inner}</h${level}>`;
    }

    case "list":
      // ✅ Payload Lexical “listType”: "bullet" vai "number"
      const isOrdered =
        node.listType === "number" ||
        node.format === "number" ||
        node.tag === "ol";
      const tag = isOrdered ? "ol" : "ul";
      const innerList = (node.children || []).map(nodeToHTML).join("");
      return `<${tag}>${innerList}</${tag}>`;

    case "listitem":
    case "list-item":
      // ✅ Katrs saraksta punkts
      const itemContent = (node.children || [])
        .map((child: any) =>
          child.type === "text" ? textFromNode(child) : nodeToHTML(child)
        )
        .join("");
      return `<li>${itemContent}</li>`;

    case "link": {
      const url = esc(node.fields?.url || node.url || "#");
      const inner = (node.children || []).map(nodeToHTML).join("");
      const rel = url.startsWith("http") ? ` rel="noopener noreferrer"` : "";
      const target = url.startsWith("http") ? ` target="_blank"` : "";
      return `<a href="${url}"${rel}${target}>${inner}</a>`;
    }

    case "quote":
      return `<blockquote>${(node.children || [])
        .map(nodeToHTML)
        .join("")}</blockquote>`;

    case "text":
      return esc(node.text || "");

    default:
      if (Array.isArray(node.children)) {
        return node.children.map(nodeToHTML).join("");
      }
      return "";
  }
}

export function serializePayloadRichText(value: any): string {
  if (!value) return "";

  const nodes =
    value?.root?.children ||
    value?.children ||
    (Array.isArray(value) ? value : []);

  return nodes.map(nodeToHTML).join("");
}
