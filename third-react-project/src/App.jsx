import './App.css'
import ErrorMsg from './components/ErrorMsg'
import FoodItems from './components/FoodItems'
import Container from './components/Container'

function App() {
  //let foodItems = []
  let foodItems = ['dal', 'rice', 'tea', 'roti', 'salad','dal','rice','pizza','burger']
  
  return (
    <Container> 
      <FoodItems pItem ={foodItems} />
      <ErrorMsg pItem={foodItems} />
    </Container>
  )
}

export default App
