import Item from "./Item"

const FoodItems = ({pItem}) =>{   //or we can also use - props
                                  //destructing the props object
  //let foodItems = []
  // let foodItems = ['dal', 'rice', 'tea', 'roti', 'salad']

  return(
    <> 
    <h1>Healthy Foods</h1>
    
    <ul>
        {/* {(props.pItem).map((item) => (
          <Item key={item} foodItem = {item}   />
        )) }  */}
        {pItem.map((item) => (
          <Item key={item} foodItem = {item}   />
        )) } 
    </ul>
      
      
    </>
  )
}

export default FoodItems

//FoodItems = component
// foodItems = array
// foodItem = prop key
// when we pass sth as prop, prop becomes an object containing all those passed values