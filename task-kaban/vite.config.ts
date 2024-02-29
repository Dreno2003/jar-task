

import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
import  { resolve } from 'path';


export default defineConfig(({ command, mode }) => {

    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [react()],
        define: {
            // 'process.env.YOUR_STRING_VARIABLE': JSON.stringify(env.YOUR_STRING_VARIABLE),
            // 'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
            // // If you want to exposes all env variables, which is not recommended
            'process.env': env
        },
        resolve: {
          alias: {
            "@": resolve(__dirname, "./src"),
            
            // "@": resolve(__dirname, './'),
            "@assets": resolve(__dirname, "./src/_metronic"),
            "@components":resolve(__dirname, './src/components'),
            "@hooks": resolve(__dirname, './src/hooks'),
            "@models": resolve(__dirname, './src/models'),
            "@services": resolve(__dirname, './src/services'),
            "@utils": resolve(__dirname, './src/utils'),
            "@public": resolve(__dirname, './public'),
            "@constant": resolve(__dirname, './src/constant'),
            "@context": resolve(__dirname, './src/context'),
          }
        }

    };
});




