import { useState, useEffect } from 'react'

const App = () => {
  const [count1 , setCount1] = useState(120)
  const [count2 , setCount2] = useState(0)
  useEffect(() => {
    document.title =`${count1}回クリックされました`
  }, [])
  useEffect(() => {
    console.log('実行')
  },[count1, count2])
  useEffect(() => {
    console.log('実行1')
    setCount2(count2+1)
  },[count1])
  useEffect(() => {
    console.log('実行2')
  },[count2])
  return (
    <div>
      <p>{count1}</p>
      <div>
        <button onClick={()=>setCount1(count1 + 1)}>+1</button>
        <button onClick={()=>setCount1(count1 - 1)}>-1</button>
      </div>
      <p>{count2}</p>
      <div>
        <button onClick={()=>setCount2(count2 + 1)}>+1</button>
        <button onClick={()=>setCount2(count2 - 1)}>-1</button>
      </div>
      <div>
        <button onClick={()=>setCount2(
          (prevCount2) => {
            if(prevCount2 % 3 === 0){
              return prevCount2 / 3
            }
            else{
              return prevCount2
            }
          }
        )} >Divide3</button>
      </div>
    </div>
  );
}

export default App;
