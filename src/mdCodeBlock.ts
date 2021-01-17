// https://spec.commonmark.org/0.29/#fenced-code-block
export type MdCodeBlock = {
    value: string;
    lang?: string;
    character?: "backtick" | "tide";
};
export const mdCodeBlock = ({ value, lang = "", character = "backtick" }: MdCodeBlock): string => {
    const codeSymbol = character === "backtick" ? "```" : "~~~";
    /**
     * if the value includes  ```, add character to codeSymbol
     * ````
     * ``` <- value
     * ````
     */
    const fenceSymbol = value.includes(codeSymbol) ? codeSymbol + codeSymbol : codeSymbol;
    // If fenceLang include \n, skip it
    const fenceLang = lang?.includes("\n") ? "" : lang;
    return fenceSymbol + fenceLang + "\n" + value + "\n" + fenceSymbol;
};
