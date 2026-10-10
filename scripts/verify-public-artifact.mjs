import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const forbidden = new Set(['documentacion', '.git', '.codex', '.agents', '.aws', 'node_modules']);
const allowed = new Set(['.html', '.css', '.js', '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico', '.woff', '.woff2', '.txt']);
const errors = [];
const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
for (const file of tracked) {
    if (file.split('/').some(part => forbidden.has(part) || part.startsWith('.env'))) {
        errors.push(`Archivo privado registrado en Git: ${file}`);
    }
}
let count = 0;
function walk(directory, prefix = '') {
    for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
        const relative = path.posix.join(prefix, item.name);
        const file = path.join(directory, item.name);
        if (forbidden.has(item.name) || item.name.startsWith('.')) {
            errors.push(`Ruta privada en artefacto: ${relative}`);
            continue;
        }
        const stat = fs.lstatSync(file);
        if (stat.isSymbolicLink() || (stat.isFile() && stat.nlink > 1)) {
            errors.push(`Enlace no admitido en artefacto: ${relative}`);
        } else if (stat.isDirectory()) {
            walk(file, relative);
        } else if (stat.isFile()) {
            count++;
            if (!allowed.has(path.extname(relative).toLowerCase()) && relative !== 'sitemap.xml') {
                errors.push(`Tipo de archivo no publicable: ${relative}`);
            }
        } else {
            errors.push(`Recurso no regular: ${relative}`);
        }
    }
}
if (!fs.existsSync('dist/index.html') || !fs.existsSync('dist/404.html')) {
    errors.push('Faltan páginas principales del build.');
}
if (fs.existsSync('dist')) walk('dist');
if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
} else {
    console.log(`Artefacto comprobado: ${count} archivos; rutas y formatos permitidos, sin documentación registrada en Git.`);
}
