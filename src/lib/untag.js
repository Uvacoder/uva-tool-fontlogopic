export function untag(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/, "&gt;")
    .replace(/"/, "&quot;")
    .replace(/'/, "&#39;");
}
