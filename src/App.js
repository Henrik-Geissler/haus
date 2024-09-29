import { Input } from '@mui/material';
import './App.css';
import { LineChart } from '@mui/x-charts/LineChart';
import Inp from './Input'
import {useState,useEffect} from 'react'
import { calc } from './calc';
const fields = [
  ['kapital',50000],
  ['monthlyIncome',4000],
  ['monthlySaveZone',1500],
  ['monthlyNK',400],
  ['monthlyNettoMiete',1400],
  ['years',50],

  
  ['housePrice',350000],
  ['housePriceNK',50000],
  ['monthlyMoreNK',400],
  ['zins',.05],
  ['aktienkurs',.07],
  ['mietkurs',.02],
  ['immokurs',.02],

  ['buyOffset',1],

]

function App() {  
  const [time, setTime] = useState(new Date());
  
const sample = [1, 10, 30, 50, 70, 90, 100];
  const inputs = {}
  for (let each of fields) 
    inputs[each[0]] = localStorage.getItem(each[0]) 

  const outputs = calc(inputs)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <header className="App-header">   
      <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',gap:'10px'}}>      
      <LineChart {...outputs}
    yAxis={[ 
      {   scaleType: 'linear' },
    ]}
      width={300}
      height={200} 
    />      
    <LineChart {...outputs}
    yAxis={[ 
      {   scaleType: 'log',min:1},
    ]}
    width={0}
    height={0} 
  /> </div>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',gap:'10px'}}>
        {fields.map(([k,v])=><Inp v={v} k={k} key={k}></Inp> )}</div>

    <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',gap:'10px'}}>
    {Object.entries(outputs.others).map(([k,v])=><p key={k}>{k}: {v}</p> )}</div>
      </header>
    </div>
  );
}

export default App;
