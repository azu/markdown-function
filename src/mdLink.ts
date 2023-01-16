import { mdEscape } from "./mdEscape.js";
import { TrustedValue } from "./trusted.js";

export type MdLinkOptions = {
    text: string | TrustedValue;
    url: string;
    title?: string | TrustedValue;
};
export const mdLink = ({ text, url, title }: MdLinkOptions): string => {
    if (title) {
        return `[${mdEscape(text)}](${url} "${mdEscape(title)}")`;
    }
    return `[${mdEscape(text)}](${url})`;
};
