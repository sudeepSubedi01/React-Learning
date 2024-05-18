import './App.css'
import ErrorMsg from './components/ErrorMsg'
import FoodItems from './components/FoodItems'
import StudyProps from './components/StudyProps'

function App() {
  //let foodItems = []
  let foodItems = ['dal', 'rice', 'tea', 'roti', 'salad','dal','rice']
  
  return (
    <> 
    <FoodItems pItem ={foodItems} />
    <ErrorMsg pItem={foodItems} />
    <StudyProps id={15369} name='Hari Bahadur' age={30} isStudent={false}  />
    <StudyProps id={15370} name='Shyam Bahadur' age={35} isStudent={true}  />
    <StudyProps/>

    </>
  )
}

export default App
