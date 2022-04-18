import React from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export declare type ChartProps = {
	min: number,
	max: number,
	delta: number
}

type Point = {
	x: number,
	y: number
}

class Chart extends React.Component<ChartProps> {
  funcMath() {
		let points: Point[] = [];
		let y: number;
		for (let x = this.props.min; x < this.props.max; x += this.props.delta) {
			 y= (3 * Math.pow(x, 3)) - (Math.pow(2, Math.exp(Math.pow(x, 3) - 2 * x * x - 1))) + Math.log(x) / Math.log(13);
			points.push({x: x, y: y});
		}
		return points;
	};


  componentDidMount() {
		const root = am5.Root.new("main");

		let data = this.funcMath();

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
			})
		);

		let xAxis = chart.xAxes.push(
			am5xy.ValueAxis.new(root, {
					renderer: am5xy.AxisRendererX.new(root, {})
				}
			)
		);

		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {})
			})
		);

		let series = chart.series.push(
			am5xy.LineSeries.new(root, {
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "y",
				valueXField: "x",
				tooltip: am5.Tooltip.new(root, {
				})
			})
		);
		series.data.setAll(data);
	}

	render() {
		return <div>
			<div id="main" style={{ width: "100%", height: "900px" }}/>
		</div>;
  };

}
  
  export default Chart;
