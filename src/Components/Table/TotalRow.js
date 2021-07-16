import React from 'react'

import RowClasses from '../Row/Row.module.scss'
import cls from './Table.module.scss'
import { formatNumber } from './../../utils'

export const TotalRow = ({ rows }) => {
  const totalObject = {
    traffic: {
      shows: 0,
      clicks: 0,
      seances: 0,
      ctr: 0,
      clickPrice: 0,
      cost: 0,
    },
    sales: {
      count: 0,
      cpa: 0,
      gain: 0,
    },
    goal: {
      count: 0,
      cpa: 0,
      cr: 0,
    },
  }

  rows.forEach((row) => {
    Object.entries(row.traffic).forEach(([key, value]) => {
      totalObject.traffic[key] += +(value === '-' ? 0 : value)
    })
    Object.entries(row.sales).forEach(([key, value]) => {
      totalObject.sales[key] += +(value === '-' ? 0 : value)
    })
    Object.entries(row.goal).forEach(([key, value]) => {
      totalObject.goal[key] += +(value === '-' ? 0 : value)
    })
  })
  return (
    <div className={RowClasses.Row + ' ' + cls.TotalRow}>
      <div className={RowClasses.Cell}>Итого</div>
      <div className={RowClasses.Cell + ' ' + cls.Cell}>
        <div>{formatNumber(totalObject.traffic.shows)}</div>
        <div>{formatNumber(totalObject.traffic.clicks)}</div>
        <div>{formatNumber(totalObject.traffic.seances)}</div>
        <div>{formatNumber(totalObject.traffic.ctr)}</div>
        <div>{formatNumber(totalObject.traffic.clickPrice)}</div>
        <div className={cls.Cost}>{formatNumber(totalObject.traffic.cost)}</div>
      </div>
      <div className={RowClasses.Cell}>
        <div className={cls.Button}>
          {formatNumber(totalObject.sales.count)}
        </div>
        <div>{formatNumber(totalObject.sales.cpa, 3)}</div>
        <div>{formatNumber(totalObject.sales.gain, 6)}</div>
      </div>
      <div className={RowClasses.Cell}>
        <div>{formatNumber(totalObject.goal.count)}</div>
        <div>{formatNumber(totalObject.goal.cpa, 1)}</div>
        <div>{formatNumber(totalObject.goal.cr, 1)}</div>
      </div>
    </div>
  )
}
