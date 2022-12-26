import { Link } from 'react-router-dom'
// import './Nav.css'
import styles from './Nav.module.css'

function Nav() {
  return (
    <header className={styles['header']}>
      <div className={styles['box']}>
        <h1 className={styles['h1']}><Link to="/" className={styles['a']}>HOME</Link></h1>
        <ul className={styles['ul']}>
          <li><Link to="list01" className={styles['a']}>sample01</Link></li>
          <li><Link to="list02" className={styles['a']}>sample02</Link></li>
          <li><Link to="list03" className={styles['a']}>sample03-0</Link></li>
          <li><Link to="list03/list03-01" className={styles['a']}>sample03-1</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
