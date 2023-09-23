import {useState} from 'react';
import './App.css';
import { SubmitButton } from './components/SubmitButton'

function App() {
  // 使用 useState 宣告變數跟函式
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // 宣告 data 來儲存 input 資料
  const [data, setData] = useState({name:'',email:''})
  // 宣告一個事件處理函式, 當按下 Submit 按鈕後執行, 將 name 和 email 存入變數中
  const handleSubmit = ()=> {
    setData({name, email})
  }
  return (
    <>
      <h1>title</h1>
      <form id="form" className="form">
        <div>
          <label className="label-input">name: </label>
          <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <label className="label-input">email: </label>
          <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <SubmitButton handleSubmit={handleSubmit}/>
        </div>
      </form>
      <div>
        <span>{data.name}</span>
        <span>{data.email}</span>
      </div>
    </>
  );
}

export default App;


