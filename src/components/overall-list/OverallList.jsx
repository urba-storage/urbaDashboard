import React, { useEffect, useState } from 'react'
import './overall-list.scss'
import { data } from '../../constants'
import Axios from 'axios';

const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>
]

const OverallList = () => {
    const [overAllData,setOverAll]=useState(data);
    useEffect(() => {
            Axios.get("http://localhost:3001/getDelivery").then((response) => {
                let newData=overAllData.overall.map((item)=>{
                    if(item.title=='Orders'){
                        item.value=response.data.length
                    }
                    else if(item.title=='Customers') {
                        item.value=20
                    }
                    else if(item.title=='Products') {
                        item.value=25
                    }
                    else if(item.title=='Revenue') {
                        item.value=2988
                    }
                    return item;
                })
                setOverAll({overall:newData});
            })
            // Axios.get("http://localhost:3001/overalll").then((response) => {
            //     setOverAll(response.data);
            // })
    },[])
    return (
        <ul className='overall-list'>
            {
                overAllData.overall.map((item, index) => (
                    <li className="overall-list__item" key={`overall-${index}`}>
                        <div className="overall-list__item__icon">
                            {icons[index]}
                        </div>
                        <div className="overall-list__item__info">
                            <div className="title">
                                {item.value} 
                            </div>
                            <span>{item.title}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default OverallList
