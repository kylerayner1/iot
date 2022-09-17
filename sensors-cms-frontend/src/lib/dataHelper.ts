import { sortBy, groupBy } from 'lodash'
import moment from 'moment'
import DeviceData from '../interfaces/device-data'
import { DeviceType } from '../interfaces/device'
import { ChartData } from '../interfaces/data-analytics'

const toThousands = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const availableChartColors = [
  '#8dd3c7',
  // '#ffffb3',
  '#bebada',
  '#fb8072',
  '#80b1d3',
  '#fdb462',
  '#b3de69',
  '#fccde5',
  '#d9d9d9',
  '#bc80bd',
  '#ccebc5',
  // '#ffed6f',
]

const generateChartData = (data: DeviceData[]): ChartData[] =>
  sortBy(data, ['reportedAt']).map((deviceData) => ({
    type: deviceData.deviceType,
    value: deviceData.value,
    unit: deviceData.unitName,
    reportedAt: moment.utc(deviceData.reportedAt).format('DD/MM/YYYY HH:mm:ss.SSS'),
  }))

const groupChartData = (data: ChartData[]) => groupBy(data, (d) => d.type)

export { toThousands, availableChartColors, generateChartData, groupChartData }
