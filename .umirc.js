
// ref: https://umijs.org/config/
import { resolve } from "path";
export default {
  treeShaking: true,
  hash: true,//生成hash文件名
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'myProjects',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    // 组件库
    '@components': resolve(__dirname, "./src/components"),
    '@utils': resolve(__dirname, "./src/utils"),
  },
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
}
