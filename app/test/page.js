'use client';

import React, { useState, useEffect } from 'react';

export default function TestPage() {
    const [count, setCount] = useState(0);

    // 使用 useEffect 执行副作用
    useEffect(() => {
        // 更新浏览器标题
        document.title = `You clicked ${count} times`;

        // 可以返回一个清理函数
        return () => {
            // 清理副作用
            console.log(`Cleaning up after count: ${count}`);
        };
    }, [count]); // 仅在 count 变化时执行副作用

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}