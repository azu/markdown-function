import { mdLink, MdLinkOptions } from "../src/index.js";
import assert from "node:assert";

const properties: [actual: MdLinkOptions, expected: string][] = [
    [{ text: "text", url: "https://example.com" }, `[text](https://example.com)`],
    [{ text: "text", url: "https://example.com", title: "title" }, `[text](https://example.com "title")`],
    // escape
    [
        { text: "<s>**strong**</s>", url: "https://example.com" },
        `[&lt;s&gt;\\*\\*strong\\*\\*&lt;\\/s&gt;](https://example.com)`
    ]
];
describe("mdLink", function () {
    properties.forEach((property) => {
        it(`build ${property[1]}`, () => {
            assert.strictEqual(mdLink(property[0]), property[1]);
        });
    });
});
