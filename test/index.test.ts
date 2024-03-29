import { mdCodeBlock, mdImg, mdLink, mdEscape } from "../src/index.js";
import assert from "node:assert";

describe("index", function () {
    it("example", () => {
        const markdown = `## ${mdLink({ text: "**TITLE**", url: "https://example.com" })}

**${mdEscape("**text**")}**

- list item
- ${mdLink({ text: "__inline__", url: "https://example.com" })} Text

${mdImg({ url: "https://example.com/img.png" })}

${mdCodeBlock({ value: `var a = 1;`, lang: "js" })}
`;
        assert.strictEqual(
            markdown,
            `## [\\*\\*TITLE\\*\\*](https://example.com)

**\\*\\*text\\*\\***

- list item
- [\\_\\_inline\\_\\_](https://example.com) Text

![](https://example.com/img.png)

\`\`\`js
var a = 1;
\`\`\`
`
        );
    });
});
