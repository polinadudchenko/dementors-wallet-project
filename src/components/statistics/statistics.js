import React from 'react';
import s from 'components/statistics/statistics.module.css';

export default function Statistics() {
  return (
    <div className={s.box_statistics}>
      <div className={s.box_circle}>
        <p className={s.title_statistics}>Статистика</p>
        <div className={s.circle}></div>
      </div>

      <div className={s.container_statistics}>
        <div className={s.box_data}>
          <div className={s.months}>Месяц</div>
          <div className={s.years}>Год</div>
        </div>

        <div className={s.box_category_summa}>
          <p className={s.category}>Категория</p>
          <p className={s.summa}>Cумма</p>
        </div>
        <ul className={s.list_statistics}>
          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Основные расходы</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Продукты</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Машина</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Забота о себе</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Забота о детях</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Товары для дома</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Образование</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Досуг</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>Другие расходы</p>
            <p className={s.statistics_summa}>0</p>
          </li>

          <li>
            <p className={s.info_statistics}>Расходы:</p>
            <p>000</p>
          </li>

          <li>
            <p className={s.info_statistics}>Доходы:</p>
            <p>0000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
