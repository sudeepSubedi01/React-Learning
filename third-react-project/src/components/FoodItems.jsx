import Item from "./Item"
import styles from './FoodItems.module.css'
import FoodInput from './FoodInput'

const FoodItems = ({pItem}) =>{   //or we can also use - props
                                  //destructing the props object
  //let foodItems = []
  // let foodItems = ['dal', 'rice', 'tea', 'roti', 'salad']

  return(
    <div className={styles.FoodItemsClass}> 
    <h1>Healthy Foods</h1>
    <FoodInput/>
    <ul>
        {/* {(props.pItem).map((item) => (
          <Item key={item} foodItem = {item}   />
        )) }  */}
        {pItem.map((item) => (
          <Item key={item} foodItem = {item}   />
        )) } 
    </ul>
    </div>
  )
}

export default FoodItems

//FoodItems = component
// foodItems = array
// foodItem = prop key
// when we pass sth as prop, prop becomes an object containing all those passed values