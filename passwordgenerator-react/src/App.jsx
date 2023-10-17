import { useState, useCallback } from 'react'

function App() {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useCallBack - to use fn in memory.
  const passwordGenerator = useCallback(()=>{
    let passwd = ''
    let strg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) strg += "0123456789"
    if(charAllowed) strg += "!@#$%^&*()-=+~`{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* strg.length + 1 )
      
      
    }
    
  }, [length, charAllowed, numberAllowed, setPassword])

  


  return (
    <>
     <h1 className='text-3xl font-bold text-center text-black bg-amber-400 '>
      Hello, Prakash Timilsina. Creating the project - Password Generator!
     </h1>
    </>
  )
}

export default App
