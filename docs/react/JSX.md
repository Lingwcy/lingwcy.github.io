# JSX
jsx是（Blob/Typescript） 翻译成对 React.createElement() 的语法糖
## 隐身 children 展开原则

在 React 中，写在组件标签体（开闭标签之间）的所有节点会被编译器自动塞进一个名为 children 的 prop；<br>
当组件内部使用 {...props}（或 {...rest}）把剩余属性全部展开到原生 DOM 元素时，children 也随之被传递并渲染，因此无需显式书写 {children}。

```tsx
export function ItemTest({...props}){
    return (
        <div
        {...props}>
        </div>
    )
}

<ItemTest>
  我们是
  123
</ItemTest>

此时 ItemTest 组件内部的 props 为
props = {
  children: '我是\n123'
}

当props注入到div时，div会自动渲染children
如下结果：
<div>
  我们是
  123
</div>

因为blob会把以下jsx编译为js文件
===> jsx
<ItemTest>
  我们是
  123
</ItemTest>
===> js
React.createElement(
  ItemTest,
  { children: ["我们是","123"] }   
)

```
