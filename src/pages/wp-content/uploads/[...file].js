import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import media from '../../../data/legacy-media.json';

export const getStaticPaths = () =>
    Object.entries(media).map(([historicalPath, source]) => {
        const file = historicalPath.slice('/wp-content/uploads/'.length);
        if (!file || file.split('/').some(part => part === '..' || part === '.')) {
            throw new Error(`Ruta histórica inválida: ${historicalPath}`);
        }
        if (!source.startsWith('/images/') || source.split('/').includes('..')) {
            throw new Error(`Recurso seleccionado inválido: ${source}`);
        }
        return { params: { file }, props: { source } };
    });

export const GET = async ({ props }) => {
    const source = props.source;
    const bytes = await readFile(resolve('public', `.${source}`));
    const extension = source.split('.').pop()?.toLowerCase();
    const contentType = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' }[extension ?? ''];
    if (!contentType) throw new Error(`Formato no admitido: ${source}`);
    return new Response(new Uint8Array(bytes), { headers: { 'Content-Type': contentType } });
};
