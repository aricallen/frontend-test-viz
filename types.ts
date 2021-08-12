import { ScaleLinear } from "d3-scale";
import { Selection } from 'd3-selection';

type LayoutMargin = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type X = number;
type Y = number;

type Point = [X, Y];

type DataRanges = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

type ChartStructure = {
  margin: LayoutMargin;
  width: number;
  height: number;
  dataRanges: DataRanges;
  // from d3-scale
  xScale: ScaleLinear<number, number>;
  yScale: ScaleLinear<number, number>;
  // from d3-select
  svg: Selection<SVGElement, Point, HTMLBodyElement, null>;
};

type SetupChart = () => ChartStructure;
