import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(parseInt(localStorage.getItem("COUNT")))

  useEffect(() => {
    setCount(parseInt(localStorage.getItem("COUNT")))
  }, [])

  useEffect(() => {
    let styleCount = document.querySelector(".count").classList
    localStorage.setItem("COUNT", count)
    document.title = count
    if (count > 0) {
      styleCount.add("positive")
      styleCount.remove("negative", "neutral")
    } else if (count == 0) {
      styleCount.add("neutral")
      styleCount.remove("positive", "negative")
    } else {
      styleCount.add("negative")
      styleCount.remove("positive", "neutral")
    }
  })

  function downCount() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  function upCount() {
    setCount(count + 1)
  }

  return (
    <div className='contador'>
      <span className='count'>{count}</span>
      <div>
        <button onClick={downCount}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={upCount}>+</button>
      </div>
    </div>
  );
}

export default App;
