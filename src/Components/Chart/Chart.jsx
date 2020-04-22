import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";


import styles from "./Chart.module.css";

const Chart  = ()=>{
    const [dailyData, setDailyData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            setDailyData(await fetchDailyData());
        }

        fetchData();
    })

    const lineChar = dailyData && <Line data= {{
        labels: dailyData.map(({ date })=> date),
        datasets: [{
            data: dailyData.map(({ confirmed })=> confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
        }, {
            data: dailyData.map(({ deaths })=> deaths),
            label: 'Deaths',
            borderColor: '#red',
            backgroundColor: "rgba(255, 0,0, 0.5)",
            fill: true
        }]
    }}
    />


    return (
        <div className={styles.container}>
            {lineChar}
        </div>
    )
}


export default Chart