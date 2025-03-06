export const addCssRuleIfDefined = (rule: string, value: string | number | undefined) =>
    value !== undefined ? `${rule}:${value};` : '';
