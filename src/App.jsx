import React, { useState } from 'react'

const App = () => {

  const onClickCountUp = () => {
    setNum(num + 1);
  }

  {/* 配列の分割代入でuseStateから取り出す。num = stateで使用する変数名　setNum = stateを更新していく関数名 
      numを動的にsetNumで更新していく
  */}
  const [num, setNum] = useState(0);

  return (
    <>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )

}

export default App