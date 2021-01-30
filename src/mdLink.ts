import { mdEscape } from "./mdEscape";

export type MdLinkOptions = {
    text: string;
    url: string;
    title?: string;
};
export const mdLink = ({ text, url, title }: MdLinkOptions): string => {
    if (title) {
        return `[${mdEscape(text)}](${url} "${mdEscape(title)}")`;
    }
    return `[${mdEscape(text)}](${url})`;
};
