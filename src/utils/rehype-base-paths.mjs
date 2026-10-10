import { sitePath } from './site-path.mjs';
export default function basePaths({ base }) {
    return function transform(tree) {
        function visit(node) {
            if (node.type === 'element' && node.properties) {
                for (const key of ['href', 'src']) {
                    if (typeof node.properties[key] === 'string') node.properties[key] = sitePath(node.properties[key], base);
                }
            }
            node.children?.forEach(visit);
        }
        visit(tree);
    };
}
