import React, { useState, useEffect } from 'react';
import axios from "../../utils/request";
export default function Home() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  const setUserName = () => {
    axios({
      url: 'http://127.0.0.1:3001/setUserInfo',
      method: 'get'
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <div>
      12312313
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={setUserName}>点我设置信息</button>
    </div>
  );
}
