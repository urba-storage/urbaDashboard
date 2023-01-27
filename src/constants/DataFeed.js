import { useState, useEffect } from "react";
import Axios from "axios";

function DataFeed() {
    const [listOfDeliveries, setListOfDeliveries] = useState([

    ]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getDelivery").then((response) => {
            setListOfDeliveries(response.data)
        })

    }, [])

    console.log(listOfDeliveries)
    var size = listOfDeliveries.length
    return size

}


export default DataFeed