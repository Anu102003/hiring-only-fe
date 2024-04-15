import React from 'react';
import ReactApexChart from 'react-apexcharts';
const ColumnbarChart=()=>{
 return (
 <div className="Colmnbarchart">
 <ReactApexChart
 options={{
 chart: {
 height: 350,
 type: 'bar',
 },
 xaxis: {
 categories: ["Grammar","Programming","Coding","Code Mark"],
 position: 'top',
 axisBorder: {
 show: false
 },
 axisTicks: {
 show: false
 },
 crosshairs: {
 fill: {
 type: 'gradient',
 gradient: {
 colorFrom: '#D8E3F0',
 colorTo: '#BED1E6',
 stops: [0, 100],
 opacityFrom: 0.4,
 opacityTo: 0.5,
 }
 }
 },
 tooltip: {
 enabled: true,
 }
 },
 yaxis: {
 axisBorder: {
 show: false
 },
 axisTicks: {
 show: false,
 },
 labels: {
 show: false,
 formatter: function (val) {
 return val + "%";
 }
 }
 },
 }}
 type="bar"
 height={350}
 width={500}
 series={[{
 name: 'Inflation',
 data: [3, 1, 5, 22],
 }]}
 />
 </div>
 );
}

export default ColumnbarChart;