import '../styles/global.css';

// 顶级react组件
export default function App({ Component, pageProps }) {
  // console.log(Component);
  // console.log(pageProps);
  return <Component {...pageProps} />;
}