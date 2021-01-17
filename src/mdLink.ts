import { escape } from "./escape";

export type MdLinkOptions = {
    text: string;
    url: string;
    title?: string;
};
export const mdLink = ({ text, url, title }: MdLinkOptions): string => {
    const isURL = /^https?:/.test(url);
    if (!isURL) {
        return text;
    }
    if (title) {
        return `[${escape(text)}](${url} "${escape(title)}")`;
    }
    return `[${escape(text)}](${url})`;
};
