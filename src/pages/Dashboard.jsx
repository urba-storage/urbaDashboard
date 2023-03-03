import React, {useState, useEffect} from 'react'
import Axios from "axios";
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const Dashboard = () => {
    var orders = 0
    const [overAllData,setOverAll]=useState(data);
    useEffect(() => {
            Axios.get("http://localhost:3001/getDelivery").then((response) => {
                let newData=overAllData.summary.map((items)=>{
                    if(items.title=='Orders'){
                        items.value=response.data.length
                        orders = items.value
                        items.percent=49
                        items.subtitle="Total Deliveries made from app"
                    }
                    else if(items.title=='Sales'){
                        items.value = 23
                        items.percent=2
                        items.subtitle="Percentage increase from last week"
                    }
                    else if(items.title=='Customers'){
                        items.value = 36
                        items.percent=0.5
                        items.subtitle="Number of new customers"
                    }
                    else if(items.title=='Revenue'){
                        items.value = 2988
                        items.percent=6
                        items.subtitle="Percentage increase from last week"
                    }
                    return items;
                })

                setOverAll({overall:newData});
            })
            // Axios.get("http://localhost:3001/overalll").then((response) => {
            //     setOverAll(response.data);
            // })
    },[])

    const [overallRev,setRev]=useState(data);
    useEffect(() => {
            Axios.get("http://localhost:3001/getDelivery").then((response) => {
                let newData=overallRev.revenueSummary.map((items)=>{
                    items.title = "Revenue"
                    items.value = '69'
                    return items
                })

                setRev({revenueSummary:newData});
            })
            // Axios.get("http://localhost:3001/overalll").then((response) => {
            //     setOverAll(response.data);
            // })
    },[])


    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-8 col-md-12">
                        <div className="row">
                            {
                                overAllData.overall.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-4 hide-md">
                    {
                        overallRev.revenueSummary.map((item, index) => (
                            <div key={`revenueSummary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                <SummaryBoxSpecial item={item} />
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Box>
                            <RevenueByMonthsChart />
                        </Box>
                    </div>
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Revenue by channel</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    // const [chartData, setChartData] = useState({});

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/getDelivery").then((response) => {
    //         const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
    //         const values = [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]

    //         setChartData({
    //             labels: labels,
    //             datasets: [
    //                 {
    //                     label: 'Revenue',
    //                     data: values
    //                 }
    //             ]
    //         });
    //     })
    // }, []);

    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                    <div>
                        <Bar options={chartOptions} data={chartData} height={'300px'} />
                    </div>
            </div>
        </>
    )
}