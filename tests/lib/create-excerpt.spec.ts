import createExcerpt from "@/lib/create-excerpt";
import { describe, expect, it } from "vitest";

describe("createExcerpt", () => {
  it("should remove header from the post body", () => {
    const body = "# Title\n\nThis is a test post body with some content.";
    const excerpt = createExcerpt(body);
    expect(excerpt).toBe("This is a test post body with some content.");
  });

  it("should handle empty body", () => {
    const body = "";
    const excerpt = createExcerpt(body);
    expect(excerpt).toBe("");
  });

  it("should sanitize HTML tags", () => {
    const body = "<p>This is <strong>bold</strong> text.</p>";
    const excerpt = createExcerpt(body);
    expect(excerpt).toBe("This is bold text.");
  });
});
