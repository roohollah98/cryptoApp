import React from 'react'
import { Link } from 'react-router-dom'
import style from './btns.module.css'
const BackBtn = () => {
  return (
    <Link to="/">

    <div className={style.backBtn}></div>
    </Link>
  )
}

export default BackBtn