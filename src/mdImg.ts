import { escape } from "./escape";

export type MdImgOptions = {
    url: string;
    alt?: string;
};
export const mdImg = ({ url, alt = "" }: MdImgOptions): string => {
    if (!/^https?:/.test(url)) {
        return alt;
    }
    return `![${escape(alt)}](${url})`;
};
