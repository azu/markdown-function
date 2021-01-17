# markdown-function

Markdown builder functions.

## Features

- Simple tag builder function
- Escape markdown syntax
- Combination with Template Literal
- [Tiny size(~1kb)](https://bundlephobia.com/result?p=markdown-function)
- Tree Shaking support
- TypeScript

If you want to add more function, Please create issue and Pull Request!

## Install

Install with [npm](https://www.npmjs.com/):

    npm install markdown-function

## Usage

````js
import { mdLink, mdImg, mdCodeBlock, mdEscape } from "markdown-function"
const markdown = `## ${mdLink({ text: "**TITLE**", url: "https://example.com" })}
    
**${mdEscape("**text**")}**    

- list item
- ${mdLink({ text: "__inline__", url: "https://example.com" })} Text

${mdImg({ url: "https://example.com/img.png" })}

${mdCodeBlock({ value: `var a = 1;`, lang: "js" })}
`;
console.log(markdown);
/*
## [\*\*TITLE\*\*](https://example.com)

**\*\*text\*\***

- list item
- [\_\_inline\_\_](https://example.com) Text

![](https://example.com/img.png)

```js
var a = 1;
```
*/
````

## Changelog

See [Releases page](https://github.com/azu/markdown-function/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/markdown-function/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu

## Related

- [Deprecated] [30-seconds/markdown-builder](https://github.com/30-seconds/markdown-builder)
