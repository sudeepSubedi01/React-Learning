import React from 'react'
import styles from './Item.module.css'

const Item = ({foodItem}) => { 
  //let {foodItem} = props

  const handleBuyClicked = (event) => {
    console.log(event)
    console.log(`${foodItem} is bought`)
  }

  return (
    <>
    <li key={foodItem} >{foodItem} <button className={styles.buyBtn} onClick={(event)=> handleBuyClicked()}>Buy</button></li>

    </>
  )
}

export default Item
