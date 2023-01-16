import { mdEscape } from "./mdEscape.js";
import { TrustedValue } from "./trusted.js";

export type MdImgOptions = {
    url: string;
    alt?: string | TrustedValue;
};
export const mdImg = ({ url, alt = "" }: MdImgOptions): string => {
    return `![${mdEscape(alt)}](${url})`;
};
