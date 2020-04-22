import React, { useEffect, useState} from 'react';
import { fetchData } from "./api"

import { Chart , Cards , CountryPicker } from "./Components";

import styles from "./App.module.css";

const App = ()=>{
  const [ mainData, setMainData ] = useState(null)
  const [country, setCountry ] = useState("");

  useEffect(()=>{
    const getData = async() =>{
      const data = await fetchData();
      setMainData(data);
    };
    getData();
  }, []);

  const onHandleCountryChange =async (country)=>{
    const data = await fetchData(country);
    console.log(data)
    setMainData(data);
    setCountry(country)
  }

  if(!mainData){
    return <p>loading...</p>
  }

  return (
    mainData && (<div className={styles.container}>
      <Cards data={mainData}/>
      <CountryPicker data={mainData} onHandleCountryChange={onHandleCountryChange}/>
      <Chart data={mainData}/>
    </div>)
  )
}

export default App;
