import { mdImg, MdImgOptions } from "../src";
import assert from "assert";

const properties: [actual: MdImgOptions, expected: string][] = [
    [{ alt: "alt", url: "https://example.com" }, `![alt](https://example.com)`],
    [{ url: "https://example.com" }, `![](https://example.com)`],
    [{ url: "invalid url", alt: "alt" }, `alt`]
];
describe("mdImg", function () {
    properties.forEach((property) => {
        it(`build ${property[1]}`, () => {
            assert.strictEqual(mdImg(property[0]), property[1]);
        });
    });
});
