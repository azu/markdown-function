# markdown-function

Markdown builder functions.

## Features

- Simple tag builder function
- Escape markdown syntax
- Use with Template Literal
- LightWeight utils
- Tree Shaking support

## Install

Install with [npm](https://www.npmjs.com/):

    npm install markdown-function

## Usage

````js
import { mdLink, mdImg, mdCodeBlock } from "markdown-function"

const title = "title";
const url = "https://example.com";
const src = "https://example.com/img.png";
const code = "var a = 1;";
const markdown = `## ${mdLink({ title, url })}
    
- Text ${mdLink({ title, url })}

${mdLink({ src })}

${mdCodeBlock({ code })}
`;
console.log(markdown);/*
## [\*\*TITLE\*\*](https://example.com)
    
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
