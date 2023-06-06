## 機能概要
「カウントアップ」ボタンをクリックすると、画面に初期値で表示されてる数字(0)が1ずつ増える

## 目的
ReactのStateという概念をシンプルなプログラムで理解する

## Stateについて
・State
各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる

## 使い方
Stateを使うときは、useState()関数を利用する。
useStateから実際に使う変数を配列の分割代入で取り出す
 const [num, setNum] = useState(0);

## 備考
今回はボタンをクリックするときにStateが更新されていく機能を実装できることが分かった。ボタンをクリック、
つまり、イベント発生時にStateから取り出した初期の変数を動的に更新していく。

## 次回の課題