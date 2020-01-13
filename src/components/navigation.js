import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Homepage</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blogposts</Link>
      </li>
    </ul>
  </nav>
)
