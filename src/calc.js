import { colors } from "@mui/material";

export const calc = (inputs) => {
  const aNK = +inputs.monthlySaveZone + +inputs.monthlyNK + +inputs.monthlyNettoMiete
  const bNK = +inputs.monthlySaveZone + +inputs.monthlyNK+ +inputs.monthlyMoreNK
  const aFree = +inputs.monthlyIncome -aNK;
  const bFree = +inputs.monthlyIncome -bNK;
  const months = +inputs.years * 12
  //STOCK
  let m = +inputs.kapital;
  let miete = +inputs.monthlyNettoMiete
  const dataA=[]
  for (let index = 0; index < months; index++) {
    if(index % 12 == 0){
     dataA.push(m);
     miete *= 1+ +inputs.mietkurs
     m*=1+ (+inputs.aktienkurs) }

    m+=+inputs.monthlyIncome -+inputs.monthlySaveZone - +inputs.monthlyNK-miete
  }
  //BUY
   m = 0; 
   let v = +inputs.housePrice
   let debt = +inputs.housePrice+ +inputs.housePriceNK-+inputs.kapital
  const dataB=[]
  for (let index = 0; index < months; index++) {
    if(index % 12 == 0){
     dataB.push(v+m-(debt>0?debt:0));
     debt*=1+ (+inputs.zins) 
     m*=1+ (+inputs.aktienkurs) 
     v*=1+ (+inputs.immokurs)
    }
     if(debt>0)
     debt -=bFree
     else 
      m+=bFree
  }
  //WAIT
   m = +inputs.kapital;
   miete = +inputs.monthlyNettoMiete
  const dataC=[]
  for (let index = 0; index < months; index++) {
    if(index<+inputs.buyOffset){
    if(index % 12 == 0){
     dataC.push(m);
     miete *= 1+ +inputs.mietkurs
     m*=1+ (+inputs.aktienkurs) }
    m+=+inputs.monthlyIncome -+inputs.monthlySaveZone - +inputs.monthlyNK-miete
    }
    else if(index ==+inputs.buyOffset){
    v = +inputs.housePrice
    debt = +inputs.housePrice+ +inputs.housePriceNK-m
   m = Math.max(0,-debt); 
    }
    if (index >=+inputs.buyOffset){
      
    if(index % 12 == 0){
      dataC.push(v+m-(debt>0?debt:0));
      debt*=1+ (+inputs.zins) 
      m*=1+ (+inputs.aktienkurs) 
      v*=1+ (+inputs.immokurs)
     }
      if(debt>0)
      debt -=bFree
      else 
       m+=bFree
    }
  }
  return ({
    others:{aNK,bNK,aFree,bFree},
    xAxis: [{ data: new Array(+inputs.years).fill(0).map((_e,i)=>i) }],
    series: [
      {
        data: dataA,
        showMark: false,
        color:'red',
      },
      {
        data: dataB,
        showMark: false,
        color:'blue',
      },
      {
        data: dataC,
        showMark: false,
        color:'green'
      }, 
    ]
  });
};
