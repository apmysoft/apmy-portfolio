import { sitePath } from '../utils/site-path.mjs';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
    if (!site) throw new Error('El sitemap necesita la URL pública de Astro.');
    const entries = await getCollection('portfolio', entry => !entry.data.draft);
    const paths = [...new Set([...entries.map(entry => entry.data.path), '/proyectos/', '/blog/', '/politica-de-cookies/'])].sort();
    const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    const urls = paths.map(path => `  <url><loc>${escape(new URL(sitePath(path), site).href)}</loc></url>`).join('\n');
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
};
