import React from 'react'

import RowClasses from '../Row/Row.module.scss'
import cls from './Table.module.scss'
import icons from '../../icons/style.module.css'

export const TitleRow = ({ sortBy, sortSettings }) => {
  const { title, asc } = sortSettings
  const arrow =
    asc === -1 ? (
      <span
        onClick={(e) => e.stopPropagation()}
        className={icons['icon-arrow-down']}
      ></span>
    ) : (
      <span
        onClick={(e) => e.stopPropagation()}
        className={icons['icon-arrow-up']}
      ></span>
    )
  return (
    <div
      className={RowClasses.Row + ' ' + cls.TitleRow}
      onClick={(e) => sortBy(e)}
    >
      <div className={RowClasses.Cell + ' ' + cls.TitleCell} data-type="Source">
        <div data-type="sort-title">
          Название {title === 'НазваниеSource' && arrow}
        </div>
      </div>
      <div
        className={RowClasses.Cell + ' ' + cls.TitleCell}
        data-type="Traffic"
      >
        <div data-type="sort-title">
          Показы{' '}
          <span
            onClick={(e) => e.stopPropagation()}
            className={icons['icon-question-circle-o']}
          ></span>{' '}
          {title === 'ПоказыTraffic' && arrow}
        </div>
        <div data-type="sort-title">
          Клики {title === 'КликиTraffic' && arrow}
        </div>
        <div data-type="sort-title">
          Сеансы {title === 'СеансыTraffic' && arrow}
        </div>
        <div data-type="sort-title">
          CTR, %{' '}
          <span
            onClick={(e) => e.stopPropagation()}
            className={icons['icon-question-circle-o']}
          ></span>{' '}
          {title === 'CTRTraffic' && arrow}
        </div>
        <div data-type="sort-title">
          Цена <br /> клика {title === 'ЦенакликаTraffic' && arrow}
          <div onClick={(e) => e.stopPropagation()}></div>
        </div>
        <div className={cls.Cost} data-type="sort-title">
          Затраты
          <div onClick={(e) => e.stopPropagation()}>
            <span className={cls.Button}>Настроить</span>{' '}
            <span className={icons['icon-question-circle-o']}></span>{' '}
            {title === 'ЗатратыTraffic' && arrow}
          </div>
        </div>
      </div>
      <div className={`${RowClasses.Cell} ${cls.TitleCell}`} data-type="Sales">
        <div data-type="sort-title">
          Кол-во {title === 'Кол-воSales' && arrow}
        </div>
        <div data-type="sort-title">СРА {title === 'СРАSales' && arrow}</div>
        <div data-type="sort-title">
          Выручка {title === 'ВыручкаSales' && arrow}
        </div>
      </div>
      <div className={RowClasses.Cell + ' ' + cls.TitleCell} data-type="Goal">
        <div data-type="sort-title">
          Кол-во {title === 'Кол-воGoal' && arrow}
        </div>
        <div data-type="sort-title">СРА {title === 'СРАGoal' && arrow}</div>
        <div data-type="sort-title">CR, % {title === 'CRGoal' && arrow}</div>
      </div>
    </div>
  )
}
