import React, { useEffect, useState} from 'react';
import { fetchData } from "./api"

import { Chart , Cards , CountryPicker } from "./Components";

import styles from "./App.module.css";

const App = ()=>{
  const [ mainData, setMainData ] = useState({})
  useEffect(()=>{
    const getData = async() =>{
      const data = await fetchData();
      setMainData(data);
    };
    getData();
  }, []);

  console.log(mainData)
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  )
}

export default App;
