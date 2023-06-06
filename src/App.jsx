import React, { useState } from 'react'

const App = () => {

  const onClickCountUp = () => {
    setNum(num + 1);
  }
  const [num, setNum] = useState(0);

  return (
    <>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
  
}

export default App