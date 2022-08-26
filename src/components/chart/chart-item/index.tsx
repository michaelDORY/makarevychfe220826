import React, { FC } from 'react'

import s from './styles.module.css'

export const BAR_WIDTH = 310

export const getBarWidth = (time: number, allTime: number) => BAR_WIDTH * (time / allTime)

export interface IChartItem {
  name: string
  time: number
}

interface Props {
  label: string
  time: number
  indent: number
  allTime: number
}

const ChartItem: FC<Props> = (props) => {
  const { label, time, indent, allTime } = props

  return (
    <div className={s.container}>
      <div className={s.item}>
        <p className={s.label}>{label}</p>
        <div className={s.bar} style={{ width: `${BAR_WIDTH}px` }}>
          <div
            data-testid='activePart'
            className={s.activePart}
            style={{ width: `${getBarWidth(time, allTime)}px`, marginLeft: `${indent}px` }}
          >
            {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartItem
