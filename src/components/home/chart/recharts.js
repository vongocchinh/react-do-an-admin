import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
class recharts extends Component {
    render() {
        var {product,bill,user,viewPage,countContact,newsletter}=this.props;
        return (
            <div className="chart-container-center-rechart">
                    <Line className="charts"
                        data={{
                        labels: [
                            "Product",
                            "User",
                            "bill",
                            "contact",
                            "viewPage",
                            "newsletter"
                        ],
                        datasets: [
                            {
                            label: "Tổng:",
                            backgroundColor: [
                                "#4DB6AC",
                                "#00ACC1",
                                "#F27BA3",
                                "#FF9D18",
                                "#5C6BC0",
                                "red"
                            ],
                            data: [product, user,bill, countContact, viewPage,newsletter]
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

export default recharts;