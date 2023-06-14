import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from "d3";

interface DataPoint {
  date: Date;
  value: number;
}


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  private createChart(): void {
    const data: DataPoint[] = [
      { date: new Date('2023-01-01'), value: 10 },
      { date: new Date('2023-02-01'), value: 20 },
      { date: new Date('2023-03-01'), value: 15 },
      { date: new Date('2023-04-01'), value: 25 },
      { date: new Date('2023-05-01'), value: 18 },
      { date: new Date('2023-06-01'), value: 30 },
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

   
      const x = d3.scaleTime()
  .domain(d3.extent(data, (d: DataPoint) => d.date) as [Date, Date])
  .range([0, width]);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, (d: DataPoint) => d.value) as number])
  .range([height, 0]);


    const line = d3.line<DataPoint>()
      .x((d: DataPoint) => x(d.date))
      .y((d: DataPoint) => y(d.value));

    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom<Date>(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft<number>(y));
  }

}
