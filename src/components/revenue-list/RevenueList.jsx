import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { data } from '../../constants'
import './revenue-list.scss'
import ProgressBar from '../progressbar/ProgressBar'

const RevenueList = () => {
    const [revenueList, setRevenue] = useState(data);
    useEffect(() => {
    Axios.get("http://localhost:3001/getDelivery").then((response) => {
        let newData=revenueList.revenueByChannel.map((items)=>{
            if(items.title=='Direct') {
                items.value=65
            }
            else if(items.title=='External search') {
                items.value=10
            }
            else if(items.title=='Referal') {
                items.value=10
            }
            else if(items.title=='Social') {
                items.value=15
            }
            return items;
        })

        setRevenue({revenueByChannel:newData});
    })
    // Axios.get("http://localhost:3001/overalll").then((response) => {
    //     setOverAll(response.data);
    // })
},[])

    return (
        <ul className='revenue-list'>
            {
                data.revenueByChannel.map((item, index) => (
                    <li className="revenue-list__item" key={`revenue-${index}`}>
                        <div className="revenue-list__item__title">
                            {item.title}
                            <span className={
                                `${item.value < 50 ? 'txt-success' : 'txt-danger'}`
                            }>
                                {item.value}%
                            </span>
                        </div>
                        <div>
                            <ProgressBar value={item.value} />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default RevenueList
