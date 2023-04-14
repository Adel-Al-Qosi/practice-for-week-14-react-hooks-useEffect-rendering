import { useEffect, useState } from "react"

export default function Main() {
    const [toggleOne, setToggleOne] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect1 Ran')
      }, [])
      useEffect(() => {
        console.log('UseEffect2 Ran')
      }, [toggleTwo])
    return (
        <div>
            {console.log('rendered or re-rendered')}
            <h1>Main Component</h1>
            <button onClick={() => setToggleOne(!toggleOne)}>toggleOne {toggleOne? 'on' : 'off'}</button>
            <button onClick={() => setToggleTwo(!toggleTwo)}>toggleTwo {toggleTwo? 'on' : 'off'}</button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+ 1)}> count </button>
        </div>
    )
}