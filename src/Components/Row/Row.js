import React, { useState } from 'react'

import RowClasses from '../Row/Row.module.scss'
import cls from '../Table/Table.module.scss'
import icons from '../../icons/style.module.css'
import { formatNumber } from './../../utils'

export const Row = ({
  source,
  traffic,
  sales,
  goal,
  isPaid,
  sources,
  expandend,
}) => {
  const [isSourcesVisible, setSourcesVisible] = useState(false)
  const sourceButton = `icon-${isSourcesVisible ? 'minus' : 'plus'}-square`
  return (
    <>
      <div
        className={`${RowClasses.Row} ${RowClasses.DefaultRow} ${
          isSourcesVisible || expandend ? RowClasses.ExpandedSources : ''
        }`}
      >
        <div className={RowClasses.Cell + ' ' + RowClasses.Source}>
          {sources?.length > 0 ? (
            <span
              className={icons[sourceButton]}
              style={{ cursor: 'pointer' }}
              onClick={() => setSourcesVisible(!isSourcesVisible)}
            ></span>
          ) : (
            <span></span>
          )}

          <div className={RowClasses.SourceImage}>
            <img src={source.image} alt={source.name} />
          </div>
          <div className={RowClasses.SourceInfo}>
            <div className={RowClasses.SourceName}>{source.name}</div>
            <div className={RowClasses.SourceUnderName}>
              {source.description}
            </div>
          </div>
          {isPaid && <span className={RowClasses.Paid}></span>}
        </div>
        <div className={RowClasses.Cell + ' ' + RowClasses.Traffic}>
          <div>{formatNumber(traffic.shows)}</div>
          <div>{formatNumber(traffic.clicks)}</div>
          <div>{formatNumber(traffic.seances)}</div>
          <div>{formatNumber(traffic.ctr)}</div>
          <div>{formatNumber(traffic.clickPrice)}</div>
          <div className={cls.Cost}>{formatNumber(traffic.cost)}</div>
        </div>
        <div className={RowClasses.Cell + ' ' + RowClasses.Sales}>
          <div className={`${sales.count > 0 ? cls.Button : ''}`}>
            {formatNumber(sales.count)}
          </div>
          <div>{formatNumber(sales.cpa, 3)}</div>
          <div>{formatNumber(sales.gain, 6)}</div>
        </div>
        <div className={RowClasses.Cell + ' ' + RowClasses.Goal}>
          <div>{formatNumber(goal.count)}</div>
          <div>{formatNumber(goal.cpa, 2)}</div>
          <div>{formatNumber(goal.cr, 2)}</div>
        </div>
      </div>
      {isSourcesVisible &&
        sources.map((source) => {
          return <Row key={source.source.name} {...source} expandend={true} />
        })}
    </>
  )
}
