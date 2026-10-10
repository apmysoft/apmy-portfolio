import { readFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import sharp from 'sharp';

/** Reserve each local image's space without altering the author's source or pixels. */
export default function localImages() {
    const publicRoot = resolve('public');
    return async function transform(tree) {
        const images = [];
        function visit(node) {
            if (node.type === 'element' && node.tagName === 'img' && String(node.properties?.src).startsWith('/images/')) images.push(node);
            node.children?.forEach(visit);
        }
        visit(tree);
        await Promise.all(images.map(async (node, index) => {
            const file = resolve(publicRoot, `.${decodeURIComponent(node.properties.src)}`);
            if (!file.startsWith(`${publicRoot}${sep}`)) throw new Error('Imagen fuera de public/');
            const metadata = await sharp(await readFile(file)).metadata();
            node.properties.width = metadata.width;
            node.properties.height = metadata.height;
            node.properties.loading = index === 0 ? 'eager' : 'lazy';
            node.properties.decoding = 'async';
        }));
        // Dense screenshots remain readable on narrow screens through their original.
        function linkScreenshots(node) {
            if (!node.children) return;
            node.children = node.children.map(child => {
                if (node.tagName !== 'a' && child.tagName === 'img' && /^\/images\/(caliber-guard|mi-canal-youtube)\//.test(child.properties.src)) {
                    return { type: 'element', tagName: 'a', properties: {
                        href: child.properties.src,
                        className: ['screenshot-original'],
                        ariaLabel: `Abrir imagen a tamaño original: ${child.properties.alt ?? ''}`,
                    }, children: [child] };
                }
                linkScreenshots(child);
                return child;
            });
        }
        linkScreenshots(tree);
    };
}
