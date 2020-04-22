import React, { useState , useEffect } from "react";
import { NativeSelect , FormControl} from "@material-ui/core";
import  { fetchCountry } from "../../api"

import styles from "./CountryPicker";

const CountryPicker  = ({onHandleCountryChange})=>{
    const [ country, setCountry ] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            setCountry( await fetchCountry());
        }

        fetchData()
    }, [setCountry])


    return (
        country ? <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> onHandleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {
                    country.map( (country,id) => <option key={id} value={country}>{country}</option>)
                }
            </NativeSelect>  
        </FormControl>: <p>Loading...</p>
    );
}


export default CountryPicker;