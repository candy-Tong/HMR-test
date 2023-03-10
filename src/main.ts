import { test } from './sub-module';
export const render = () => {
  const el = document.querySelector<HTMLDivElement>('#app')!;
  el.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: accept.ts</h2>
    <p>accept test2</p>
    <p>${test}</p>
  `;
};
render();

// 如果没有下面这一段，修改代码后，整个页面会刷新
if (import.meta.hot) {
  // 调用的时候，调用的是老的模块的 accept 回调
  import.meta.hot.accept((mod) => {
    if (mod) {
      // 老的模块的 accept 回调拿到的是新的模块
      console.log('mod', mod);
      console.log('mod.render', mod.render);
      mod.render();
    }
  });
}
