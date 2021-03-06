import PivotTypes from './PivotTypes'
import {
  PIVOT_DEFAULT_AXIS_LINE_COLOR,
  PIVOT_CHART_FONT_FAMILIES,
  PIVOT_DEFAULT_FONT_COLOR,
  PIVOT_DEFAULT_HEADER_BACKGROUND_COLOR
} from '../../../../globalConstants'

import { IChartInfo } from '../../../../containers/Widget/components/Widget'

const scatter: IChartInfo = {
  id: PivotTypes.Scatter,
  name: 'scatter',
  title: '散点图',
  icon: 'icon-scatter-chart',
  coordinate: 'cartesian',
  requireDimetions: [0, 9999],
  requireMetrics: [1, 9999],
  data: {
    xAxis: {
      title: 'x数据轴',
      type: 'value'
    },
    color: {
      title: '颜色',
      type: 'category'
    },
    size: {
      title: '尺寸',
      type: 'value'
    },
    label: {
      title: '标签',
      type: 'all'
    },
    tip: {
      title: '提示信息',
      type: 'value'
    }
  },
  style: {
    xAxis: {
      showLine: true,
      lineStyle: 'solid',
      lineSize: '1',
      lineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showLabel: true,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR
    },
    yAxis: {
      showLine: true,
      lineStyle: 'solid',
      lineSize: '1',
      lineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showLabel: true,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR,
      showTitleAndUnit: true,
      titleFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      titleFontSize: '12',
      titleColor: PIVOT_DEFAULT_FONT_COLOR
    },
    splitLine: {
      showHorizontalLine: true,
      horizontalLineStyle: 'dashed',
      horizontalLineSize: '1',
      horizontalLineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showVerticalLine: false,
      verticalLineStyle: 'dashed',
      verticalLineSize: '1',
      verticalLineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR
    },
    pivot: {
      fontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      fontSize: '12',
      color: PIVOT_DEFAULT_FONT_COLOR,
      lineStyle: 'solid',
      lineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      headerBackgroundColor: PIVOT_DEFAULT_HEADER_BACKGROUND_COLOR
    }
  }
}

export default scatter
