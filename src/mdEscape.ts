import { isTrustedValue, TrustedValue } from "./trusted";

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
export const mdEscape = (text: string | TrustedValue): string => {
    if (isTrustedValue(text)) {
        return text.value;
    }
    return replacementsTuples.reduce((text, replacement) => {
        return text.replace(replacement[0], replacement[1]);
    }, text);
};
