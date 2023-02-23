import React, { useReducer } from 'react'
import './App.css'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispach] = useReducer(reducer, initialState)

  return (
    <>
      Count:{state.count}
      <button onClick={() => dispach({ type: 'decrement' })}>-</button>
      <button onClick={() => dispach({ type: 'increment' })}>+</button>
    </>
  )
}
