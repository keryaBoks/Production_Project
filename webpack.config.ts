import webpack from 'webpack';  
import path from 'path';
import { buildWebpackConfigutation } from './configs/build/buildWebpack.config';
import { BuildENV, BuildPaths } from './configs/build/types/config';

export  default (env : BuildENV) =>{

    const paths : BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev  = mode === 'development';
    
    const config: webpack.Configuration = buildWebpackConfigutation({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
};
