import logo from './logo.svg';
import {useState,useEffect} from "react";
import './App.css';
import Service from './service';

const returnRanNum=async()=>{
  const Request=new Service();
  const num= await Request.getRandomNum().then(data=>data);
  return await num;
}
const useRanNum=(item)=>{
  const [firstVal,setFirstVal]=useState(item);
  const onChange=(item)=>{
    setFirstVal(item);
  }
  return {firstVal,onChange}
}
const useCountTotal=(item)=>{
  const [count,setCount]=useState(item);
  const incCounter=()=>{
    setCount(count=>count+1);
  }
  const decCounter=()=>{
    setCount(count=>count-1)
  }
  const rndCounter = () => {
    setCount(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }
  const resetCounter = () => {
    setCount(0)
  }
  return {count,incCounter,decCounter,rndCounter,resetCounter};
}

const Counter = (props) => {
  const CountTotal=useCountTotal(props.counter);
  return (
    <div className="component">
      <div className="counter">{CountTotal.count}</div>
      <div className="controls">
        <button onClick={CountTotal.incCounter}>INC</button>
        <button onClick={CountTotal.decCounter}>DEC</button>
        <button onClick={CountTotal.rndCounter}>RND</button>
        <button onClick={CountTotal.resetCounter}>RESET</button>
      </div>
    </div>
  )
}
const RndCounter=(props)=>{
  const secondCount=useCountTotal(props.counter);
  return (
    <div className="component">
      <div className="counter">{secondCount.count}</div>
      <div className="controls">
        <button onClick={secondCount.rndCounter}>RND</button>
        <button onClick={secondCount.resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App = () => {
  const firstValue=useRanNum(null),
  secondValue=useRanNum(null);
  useEffect(()=>{
    console.log(returnRanNum().then(data=>data))
    firstValue.onChange(returnRanNum());
    secondValue.onChange(returnRanNum());
    //Возвращаются одни промисы, так и не смог пофиксить
  },[]);
  console.log(firstValue.firstVal)
  return (
      <>
          <Counter counter={firstValue.firstVal}/>
          <RndCounter counter={secondValue.firstVal}/>
      </>
  )
}
export default App;


