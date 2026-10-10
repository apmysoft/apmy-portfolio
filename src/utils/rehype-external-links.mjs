/** Apply the site's link policy to rendered Markdown, including MDX content. */
export default function externalLinks({ site }) {
    const ownHost = new URL(site).hostname.replace(/^www\./, '');
    return function transform(tree) {
        function visit(node) {
            if (node.type === 'element' && node.tagName === 'a' && node.properties?.href) {
                const url = new URL(String(node.properties.href), site);
                const internal = url.hostname === ownHost || url.hostname.endsWith(`.${ownHost}`);
                if (['http:', 'https:'].includes(url.protocol) && !internal) {
                    node.properties.target = '_blank';
                    const rel = String(node.properties.rel ?? '').split(/[\s,]+/).filter(Boolean);
                    node.properties.rel = [...new Set([...rel, 'noopener'])];
                }
            }
            node.children?.forEach(visit);
        }
        visit(tree);
    };
}
