import React, { useEffect, useRef, useState } from 'react'

import Chart from '../../components/chart'
import { IChartItem } from '../../components/chart/chart-item'

import s from './styles.module.css'

const defaultData: IChartItem[] = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
]

const Main = () => {
  const [items, setItems] = useState<IChartItem[]>(defaultData)
  const autoClickBtnRef = useRef<HTMLButtonElement | null>(null)
  const currentIndent = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => autoClickBtnRef.current?.click(), 0.53 * 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  const updateItems = () => {
    currentIndent.current = 0
    const newItems = items.map((item) => ({
      ...item,
      time: Number.parseFloat((Math.random() * 31).toFixed(2)),
    }))
    setItems(newItems)
  }

  return (
    <div className={s.main}>
      <div className={s.container}>
        <Chart items={items} currentIndentRef={currentIndent} />
        <div className={s.buttons}>
          <button className={`primary-btn`} ref={autoClickBtnRef} onClick={updateItems}>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
