import { mdImg, MdImgOptions } from "../src";
import assert from "node:assert";

const properties: [actual: MdImgOptions, expected: string][] = [
    [{ alt: "alt", url: "https://example.com" }, `![alt](https://example.com)`],
    [{ url: "https://example.com" }, `![](https://example.com)`]
];
describe("mdImg", function () {
    properties.forEach((property) => {
        it(`build ${property[1]}`, () => {
            assert.strictEqual(mdImg(property[0]), property[1]);
        });
    });
});
