import { mdEscape } from "./mdEscape";
import { TrustedValue } from "./trusted";

export type MdImgOptions = {
    url: string;
    alt?: string | TrustedValue;
};
export const mdImg = ({ url, alt = "" }: MdImgOptions): string => {
    return `![${mdEscape(alt)}](${url})`;
};
