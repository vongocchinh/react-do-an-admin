import React, { Component } from 'react'
import { Doughnut } from "react-chartjs-2";
export default class chartRight extends Component {

    brandArr=(brand)=>{
    var Arr=[];
    if(brand){
        for(let i=0;i<brand.length;i++){
            Arr.push(brand[i].brandName);
            }
        }else{
            return <p className="loading">Loading...</p>
        }
        return Arr;
    }
    totalProduct=(product,brand)=>{
       var count=0;
        var ArrTotal=[];
        if(product&&brand){
            for(let i=0;i<brand.length;i++){
                for(let j=0;j<product.length;j++){
                    if(brand[i].brandId===product[j].brand){
                        count++;
                    }
                }
                ArrTotal.push(count);
                count=0;
            }
        }
        return ArrTotal;
    }
    render() {
        var {productStore,brand}=this.props;
       
        
        return (
            <div className="chart-container-right">
            <Doughnut
                data={{
                labels: this.brandArr(brand),
                datasets: [
                    {
                    label: "Thống kê sản phẩm (sp)",
                    backgroundColor: [
                        "#FF7000",
                        "#E91E63",
                        "#3cba9f",
                        "#57BB63",
                        "#FF9877",
                        "#BF457C",
                        "#994b99",
                        "#707CBC",
                        "#97BB63",
                        "#FF97e7",
                        "#BF451C",
                        "#9999e9",
                        "#707C2C",
                        "#97BB03",
                        "#FF6677",
                        "#BF337C",
                        "#991199",
                        "#7011BC",
                        "#973e63"
                    ],
                    data:this.totalProduct(productStore,brand)
                    }
                ]
                }}
                option={{
                title: {
                    display: true,
                    text: "Thống kê số lượng sản phẩm "
                }
                }}
            />
        </div>
        )
    }
}
