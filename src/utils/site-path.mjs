/** Prefix local paths once; preserve fragments, external URLs and missing values. */
export function sitePath(value, base = import.meta.env.BASE_URL) {
    if (!value || !value.startsWith('/') || value.startsWith('//')) return value;
    const prefix = base.replace(/\/$/, '');
    if (!prefix || value === prefix || value.startsWith(`${prefix}/`)) return value;
    return `${prefix}${value}`;
}
