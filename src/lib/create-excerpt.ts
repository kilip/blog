import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import TurndownService from "turndown";
const parser = new MarkdownIt();

export default function createExcerpt(content: string): string {
  let body = content.trim();
  const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
  if (isHTML(body)) {
    body = new TurndownService().turndown(body); // Convert HTML to Markdown
  }
  body = body.replace(/^#{1,6}\s.*$/gm, "");
  return sanitizeHtml(
    parser
      .render(body)
      .split("\n")
      .slice(0, 1)
      .map((str: string) => {
        return str.replace(/<\/?[^>]+(>|$)/g, "").split("\n");
      })
      .flat()
      .join(" ")
  );
}
