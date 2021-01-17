const replacementsTuples: [matchPattern: RegExp, newChar: string][] = [
    [/\*/g, "\\*"],
    [/#/g, "\\#"],
    [/\//g, "\\/"],
    [/\(/g, "\\("],
    [/\)/g, "\\)"],
    [/\[/g, "\\["],
    [/]/g, "\\]"],
    [/</g, "&lt;"],
    [/>/g, "&gt;"],
    [/_/g, "\\_"]
];
export const escape = (text: string): string => {
    return replacementsTuples.reduce((text, replacement) => {
        return text.replace(replacement[0], replacement[1]);
    }, text);
};
