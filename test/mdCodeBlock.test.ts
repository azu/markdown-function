import { mdCodeBlock, MdCodeBlock } from "../src/index.js";
import assert from "node:assert";

const properties: [actual: MdCodeBlock, expected: string][] = [
    [{ value: "alert(1)" }, "```\nalert(1)\n```"],
    [{ value: "alert(1)", lang: "js" }, "```js\nalert(1)\n```"],
    [{ value: "alert(1)", lang: "some some" }, "```some some\nalert(1)\n```"],
    [{ value: "alert(1)", lang: "invalid\nline" }, "```\nalert(1)\n```"]
];
describe("mdCodeBlock", function () {
    properties.forEach((property) => {
        it(`build ${property[1]}`, () => {
            assert.strictEqual(mdCodeBlock(property[0]), property[1]);
        });
    });
});
