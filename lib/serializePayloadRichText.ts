/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

// lib/serializePayloadRichText.ts

// HTML escapings — aizsardzībai pret XSS
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Teksta mezglu pārveidošana (tiek izmantota visur)
function textFromNode(node: any): string {
  if (!node) return "";

  // Vienkāršs teksta mezgls
  if (typeof node.text === "string") return esc(node.text);

  // Lexical gadījums: type: "text", content: "..."
  if (node.type === "text" && typeof node.content === "string") {
    return esc(node.content);
  }

  // Ja ir bērni (nested struktūra)
  if (Array.isArray(node.children)) {
    return node.children.map(textFromNode).join("");
  }

  return "";
}

// Galvenā funkcija, kas katru mezglu pārveido HTML
function nodeToHTML(node: any): string {
  if (!node) return "";

  switch (node.type) {
    case "paragraph":
      return `<p>${(node.children || []).map(textFromNode).join("")}</p>`;

    case "heading": {
      const level = node.tag || node.level || 2;
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
    case "list-item":
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

    // Nezināms tips — mēģinām izdrukāt bērnus
    default:
      if (Array.isArray(node.children)) {
        return node.children.map(nodeToHTML).join("");
      }
      return "";
  }
}

// Publiskā funkcija, ko importē RenderBlocks u.c.
export function serializePayloadRichText(value: any): string {
  if (!value) return "";

  // Payload richText glabājas kā Lexical root
  const nodes = value?.root?.children || value?.children || [];
  return nodes.map(nodeToHTML).join("");
}
