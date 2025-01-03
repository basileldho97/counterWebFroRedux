import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-5 bg-black' style={{width: "100%", height: "100vh"}}>
        <Counter/>
     </div>
    </>
  )
}

export default App
