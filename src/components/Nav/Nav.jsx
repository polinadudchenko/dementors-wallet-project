import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/images/icons/home.svg';
import { ReactComponent as StatsIcon } from 'assets/images/icons/stats.svg';
import { ReactComponent as DollarIcon } from 'assets/images/icons/dollar.svg';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              [s.link, isActive ? s.active : ''].join(' ')
            }
            to="/"
          >
            <HomeIcon className={s.icon} />
            <span className={s.linkText}>Главная</span>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              [s.link, isActive ? s.active : ''].join(' ')
            }
            to="/stat"
          >
            <StatsIcon className={s.icon} />
            <span className={s.linkText}>Статистика</span>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              [s.link, isActive ? s.active : ''].join(' ')
            }
            to="/exchange-rate"
          >
            <DollarIcon className={s.icon} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
