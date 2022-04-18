/* eslint no-use-before-define: 0 */
import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import VueloComponent from '../containers/VueloComponent'
import { setVuelos } from '../redux/actions/vuelosActions'

const VuelosListing = () => {
    const vuelos = useSelector((state)=> state)

    const dispacth = useDispatch();

    const fetchVuelos = async () => {
        const response = await axios
        .get("https://raw.githubusercontent.com/SamuelCarmona83/MyJson/main/db.json")
        .catch((err)=>{
            console.log(err)
        })
        dispacth(setVuelos(response.data));
    }

    useEffect(()=> {
        fetchVuelos();
    }, []);
    console.log("Vuelos: ", vuelos)
    return(
        <div className="ui grid container">
            <VueloComponent/>
        </div>
    )
}

export default VuelosListing;