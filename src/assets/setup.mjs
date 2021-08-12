/**
 * @return ChartStructure
 */
export const setupChart = () => {
  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 800;
  const height = 800;

  const dataRanges = {
    xMin: 0,
    yMin: 0,
    xMax: 2000,
    yMax: 2000,
  };

  // append the svg object to the div#viz
  const svg = d3
    .select('#viz')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // x axis
  const xScale = d3.scaleLinear().domain([dataRanges.xMin, dataRanges.xMax]).range([0, width]);
  svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

  // y axis
  const yScale = d3.scaleLinear().domain([dataRanges.yMin, dataRanges.yMax]).range([height, 0]);
  svg.append('g').call(d3.axisLeft(yScale));

  return {
    margin,
    width,
    height,
    xScale,
    yScale,
    svg,
    dataRanges,
  };
};
