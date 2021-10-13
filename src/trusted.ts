export const TrustedSymbol = Symbol("Trusted Value");
export type TrustedValue = {
    trustedSymbol: Symbol;
    value: string;
};
export const isTrustedValue = (value: any): value is TrustedValue => {
    return (
        typeof value === "object" &&
        value !== null &&
        "trustedSymbol" in value &&
        value["trustedSymbol"] === TrustedSymbol
    );
};
export const trusted = (str: string) => {
    return {
        trustedSymbol: TrustedSymbol,
        value: str
    };
};
