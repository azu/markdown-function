import { trusted, mdLink } from "../src/index.js";
import assert from "node:assert";

describe("trusted", function () {
    it("should not be escaped", () => {
        assert.strictEqual(
            mdLink({
                text: trusted("***"),
                url: "https://example.com"
            }),
            "[***](https://example.com)"
        );
    });
});
