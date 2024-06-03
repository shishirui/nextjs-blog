---
title: '关于 CSS-in-JS 的介绍'
date: '2024-06-02'
---

CSS-in-JS 是一种在 JavaScript 文件中编写和管理 CSS 样式的方法。它将样式与组件的逻辑和结构紧密结合，使得开发者可以在同一个文件中管理组件的所有方面。这种方法在 React 等现代前端框架中非常流行。以下是对 CSS-in-JS 的详细解释和常见实现方式。

### CSS-in-JS 的优点

1. 组件化：CSS-in-JS 可以使样式和组件的逻辑绑定在一起，便于组件的复用和维护。
2. 动态样式：可以根据组件的状态或属性动态生成样式，而不需要额外的全局样式表。
3. 避免命名冲突：通过生成唯一的类名，避免全局命名空间污染和样式冲突。
4. 更好的开发体验：很多 CSS-in-JS 解决方案提供了强类型支持和自动补全，提高开发效率。

### 常见的 CSS-in-JS 库

1. Styled Components
2. Emotion
3. JSS
4. Linaria

### 示例

##### Styled Components

Styled Components 是一个流行的 CSS-in-JS 库，使用标签模板字面量语法来定义样式。

安装：

```
npm install styled-components
```

使用：

```
// App.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}

export default App;
```

##### Emotion

Emotion 是另一个强大的 CSS-in-JS 库，提供了高性能的样式解决方案。

安装：

```
npm install @emotion/react @emotion/styled
```

使用：

```
// App.js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyle = css`
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <button css={buttonStyle}>Normal Button</button>
      <Button primary>Primary Button</Button>
    </div>
  );
}

export default App;
```

### 动态样式

CSS-in-JS 的一个重要特性是能够根据组件的状态或属性动态生成样式。

```
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.active ? 'green' : 'red')};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Button active={active} onClick={() => setActive(!active)}>
        {active ? 'Active' : 'Inactive'}
      </Button>
    </div>
  );
}

export default App;
```

### 总结

CSS-in-JS 提供了一种在 JavaScript 中编写 CSS 的方法，通过这种方式，可以更好地管理和组织样式，特别是在组件化开发中。常见的 CSS-in-JS 库包括 Styled Components 和 Emotion，它们提供了强大的功能和灵活性，帮助开发者编写高性能、可维护的样式。