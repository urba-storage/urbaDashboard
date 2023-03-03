import images from "./images"
import DataFeed from "./DataFeed"



const data = {
    user: {
        name: 'LockitUp',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '',
            percent: 38
        },
        {
            title: 'Customers',
            subtitle: 'Total visits today',
            value: '',
            percent: 55
        }
    ],
    revenueSummary: [
        {
            title: 'Revenue',
            value: '678',
            chartData: {
                labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
                data: [300, 300, 280, 380, 200, 300, 280, 350]
            }
        }

    ],

    overall: [
        {
            value: '',
            title: 'Orders'
        },
        {
            value: '9.877K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: 
        {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]

        }

}

export default data