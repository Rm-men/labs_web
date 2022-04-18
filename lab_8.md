<p align = center>МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>РОССИЙСКОЙ ФЕДЕРАЦИИ
<p align = center>ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>«ВЯТСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
<p align = center>Институт математики и информационных систем
<p align = center>Факультет автоматики и вычислительной техники
<p align = center>Кафедра систем автоматизации управления
<p align = right>Дата сдачи на проверку:
<p align = right>«___» ________________ 2022 г.
<p align = right>Проверено:
<p align = right>«___» ________________ 2022 г.
<p align = center >Отчет по лабораторной работе № 6
<p align = center>по дисциплине
<p align = center>«Web-программирование»
<br/>
<br/>
<br/>
<br/>
<br/>

<p align = right>Разработал студент гр. ИТб-2301-01-00 __________________ /Суслов Р.В./
<p align = right>Проверил преподаватель _________________ /Земцов М.А./
<p align = right>Оценка работы	«___________» 
«____»_____________ 2022 г.
<br/>
<br/>
<br/>
<br/>
<br/>
<p align = center>Киров 2022
<br/><br/>

<p align = justify style="text-indent: 25px;">Цель: создать компонент отрисовки графика функции на целевом фреймворке.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Реализовать вывод графика
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Реализовать вывод графика
<p align = justify style="text-indent: 25px;">
Было создано шаблонное React приложение, в котором добавлен компонент для отображения графика. Для реализации была выбрана библиотека amcharts5. Листинг компонента отрисовки функции приведен в приложении А, программный код компонента App находится в приложении Б. Функция, отвечающая за формирование графика следующая: y = 3 * x^3 - 2^(e^(x^3 - 2 * x^2 - 1)) + log13(x). Визуальное представление графика представлено на рисунке 1.

<p align=center><img src=./src/l8.png></p>
<p align = center>Рисунок 1 - График функции y = 3 * x^3 - 2^(e^(x^3 - 2 * x^2 - 1)) + log13(x)
<br><br>

<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы созданое простое React приложение,  был построен график требуемой функции с помобщю библиотеки amcharts5.

<br><br>
<p align = center>Приложение А

<p align = center>Листинг компонента Charts

```js
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
```
<br><br>

<p align = center>Приложение Б

<p align = center>Листинг компонента App

```js
import React from 'react';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <Chart min={0.01} max={2.46} delta={0.01}/>
    </div>
  );
}

export default App;
```
<br><br>