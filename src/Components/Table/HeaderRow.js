import React from 'react'

import cls from './Table.module.scss'
import RowClasses from '../Row/Row.module.scss'
import icons from '../../icons/style.module.css'

export const HeaderRow = () => {
  return (
    <div>
      <div className={cls.HeaderRow + ' ' + RowClasses.Row}>
        <div className={cls.Cell + ' ' + RowClasses.Cell}>
          <div className={cls.HeaderName}>Источники трафика</div>
        </div>
        <div className={cls.Cell + ' ' + RowClasses.Cell}>
          <div className={cls.HeaderName}>Трафик</div>
          <div className={cls.Options}>
            <div className={icons['icon-cog']}></div>
            <div className={icons['icon-question-circle']}></div>
          </div>
        </div>
        <div className={cls.Cell + ' ' + RowClasses.Cell}>
          <div className={cls.HeaderName}>
            <img
              alt="crm"
              src="https://testing1.alytics.ru/images/multichannel/crm.png"
            />{' '}
            Продажи
          </div>
          <div className={cls.HeaderUnderName}>
            <img
              alt="linear"
              src="https://testing1.alytics.ru/images/goal_models/png/model_linear.png"
            />
            Линейная модель
          </div>
          <div className={cls.Options}>
            <div className={icons['icon-cog']}></div>
            <div className={icons['icon-question-circle']}></div>
          </div>
        </div>
        <div className={cls.Cell + ' ' + RowClasses.Cell}>
          <div className={cls.HeaderName}>
            <img
              alt="composite"
              src="https://testing1.alytics.ru/images/multichannel/composite.png"
            />
            Цель с осн. GA
          </div>
          <div className={cls.HeaderUnderName}>
            <img
              alt="composite"
              src="https://testing1.alytics.ru/images/goal_models/png/composite.png"
            />
            Составная цепь
          </div>
          <div className={cls.Options}>
            <div className={icons['icon-cog']}></div>
            <div className={icons['icon-question-circle']}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
