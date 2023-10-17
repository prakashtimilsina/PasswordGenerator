import { useState, useCallback, useEffect } from "react";

function App() {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallBack - to use fn in memory.
  const passwordGenerator = useCallback(() => {
    let passwd = "";
    let strg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) strg += "0123456789";
    if (charAllowed) strg += "!@#$%^&*()-=+~`{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strg.length + 1);
      passwd += strg.charAt(char);
    }
    setPassword(passwd);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 
      my-8 text-orange-400 bg-gray-500"
      >
        <h1 className="text-white text-center font-bold my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-green-400 text-black px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed} 
            id="numberInput" 
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed} 
            id="characterInput"
            onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label htmlFor="charaterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
