import { Input, InputLabel } from '@mui/material';
import './App.css'; 
import {useState,useEffect } from 'react'

function Inp({k,v}) {
  const [F,setV] = useState(v)
  useEffect(()=>localStorage.setItem(k,v),[])
  const a = (newV) =>{ localStorage.setItem(k, newV.target.value); setV(newV.target.value)}
  return ( <><InputLabel title={k}>{k}
        <Input onChange={a} title={k} value={F}></Input> </InputLabel></>
  );
}

export default Inp;
