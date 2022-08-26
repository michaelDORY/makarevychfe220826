import React, { FC, MutableRefObject, useMemo } from 'react'

import ChartItem, { type IChartItem, getBarWidth } from './chart-item'

import s from './styles.module.css'

interface Props {
  items: IChartItem[]
  currentIndentRef: MutableRefObject<number>
}

const Chart: FC<Props> = (props) => {
  const { items, currentIndentRef: currentIndent } = props

  const allTime = useMemo(() => {
    return items.reduce((acc, item) => acc + item.time, 0)
  }, [items])

  return (
    <div className='chart'>
      <h2 className={s.title}>Spent time (seconds)</h2>
      <div className={s.items}>
        {items.map(({ name, time }, index) => {
          const indent = currentIndent.current
          if (index === items.length - 1) {
            currentIndent.current = 0
          } else {
            currentIndent.current += getBarWidth(time, allTime)
          }

          return <ChartItem key={name} time={time} label={name} indent={indent} allTime={allTime} />
        })}
      </div>
    </div>
  )
}

export default Chart
