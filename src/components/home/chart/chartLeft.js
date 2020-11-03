import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";


export default class chartLeft extends Component {
   
    render() {
        var {product,bill,user}=this.props;
       
        return (
            <div className="chart-container-left">
                    <Bar className="chart-combo"
                        data={{
                        labels: [
                            "Product",
                            "User",
                            "bill",
                            "contact",
                            "viewPage"
                        ],
                        datasets: [
                            {
                            label: "Tổng:",
                            backgroundColor: [
                                "#4DB6AC",
                                "#00ACC1",
                                "#F27BA3",
                                "#FF9D18",
                                "#5C6BC0"
                            ],
                            data: [product, user,bill, 10, 3]
                            }
                        ]
                        }}
                        options={{
                        legend: { display: false },
                        title: {
                            display: true,
                            text: "Thống kê cửa hàng"
                        }
                        }}
                    />
                </div>
        )
    }
}
