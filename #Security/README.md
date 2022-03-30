
React等新库会默认进行文本转义
```
<p>
  {message.text}
</p>
```

在 React 元素中渲染任意 HTML，
```
 dangerouslySetInnerHTML={{ __html: message.text }}
 ```


## $$typeof

https://overreacted.io/why-do-react-elements-have-typeof-property/

```
 // 服务端允许用户存储 JSON
let expectedTextButGotJSON = {
  type: 'div',
  props: {
    dangerouslySetInnerHTML: {
      __html: '/* 把你想的放在这里 */'
    },
  },
  // ...
};
let message = { text: expectedTextButGotJSON };

// React 0.13 中有风险
<p>
  {message.text}
</p>
 
```
React 0.13 很容易受到 XSS 攻击。虽然 这个攻击是服务端存在漏洞导致的。

React 0.14 修复手段是在虚拟DOM中添加 $$typeof，使用 Symbol 标记每个 React 元素（element）
React 会检测 element.$$typeof，如果元素丢失或者无效，会拒绝处理该元素。