import React, { useEffect, useState } from 'react'

import { Row } from './../Row/Row'

import cls from './Table.module.scss'
import { HeaderRow } from './HeaderRow'
import { TitleRow } from './TitleRow'
import { TotalRow } from './TotalRow'
import { getRows } from './../../api'
import { getSortedRows, formatString } from '../../utils'
import { headerToKey } from './../../utils'

export const Table = () => {
  const [rows, setRows] = useState([])
  const [sortSettings, setSortSettings] = useState({
    title: '',
    asc: 0,
  })

  useEffect(() => {
    const getData = async () => {
      const response = await getRows()
      const rowsFromResponse = await response.json()
      setRows(rowsFromResponse)
    }
    getData()
  }, [setRows])

  const sortBy = (e) => {
    if (e.target.dataset.type !== 'sort-title') return null
    const title = formatString(e.target.textContent)
    const type = formatString(e.target.parentNode.dataset.type)
    const key = title + type
    const header = headerToKey[key]
    const asc = sortSettings.asc ? sortSettings.asc * -1 : 1
    setRows(getSortedRows(header.split('.'), [...rows], asc))
    setSortSettings({ title: key, asc })
  }
  return (
    <div className={cls.Table}>
      <HeaderRow />
      <TitleRow sortBy={sortBy} sortSettings={sortSettings} />
      <div className={cls.Rows}>
        <TotalRow rows={rows} />
        {rows.map((row) => {
          return <Row key={row.source.name} {...row} />
        })}
      </div>
    </div>
  )
}
