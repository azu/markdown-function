import { mdEscape } from "./mdEscape";

export type MdImgOptions = {
    url: string;
    alt?: string;
};
export const mdImg = ({ url, alt = "" }: MdImgOptions): string => {
    return `![${mdEscape(alt)}](${url})`;
};
