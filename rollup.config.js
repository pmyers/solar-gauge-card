import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';

export default {
    input: ['src/solar-gauge-card.ts'],
    output: {
        dir: './dist',
        format: 'esm',
        inlineDynamicImports: true,
    },
    plugins: [
        resolve(),
        typescript(),
        terser(),
        serve({
            open: true,
            contentBase: './dist',
            host: 'localhost',
            port: 5000,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }),
    ],
};