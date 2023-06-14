import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  // ngOnInit() {
  //   const dataset = [10, 20, 30, 40, 50];
  //   const svgWidth = 500, svgHeight = 300, barPadding = 5;
  //   const barWidth = (svgWidth / dataset.length);
  
  //   const svg = d3.select('svg')
  //     .attr('width', svgWidth)
  //     .attr('height', svgHeight);
  
  //   const barChart = svg.selectAll('rect')
  //     .data(dataset)
  //     .enter()
  //     .append('rect')
  //     .attr('y', (d) => svgHeight - d)
  //     .attr('height', (d) => d)
  //     .attr('width', barWidth - barPadding)
  //     .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)
  //     .attr('fill', 'steelblue');
  // }
  constructor() {}

  ngOnInit() {
    const dataset = [30, 10, 20, 40];

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal<string>()
      .domain(dataset.map((d, i) => i.toString()))
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b']);

    const svg = d3.select('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<number>().sort(null);

    const arc = d3.arc<d3.PieArcDatum<number>>()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcs = svg.selectAll('.arc')
      .data(pie(dataset))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => color(i.toString()));

    arcs.append('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .text((d: any) => d.data);
  }
  
  
}
