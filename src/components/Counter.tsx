import React, {useState} from 'react'
import styles from "./Counter.module.scss"

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter + 1)
    }

    const decrement = () =>{
        setCounter(counter -1)
    }

  return (
    <div>
        {counter}
        <button onClick={increment} className={styles.button}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
