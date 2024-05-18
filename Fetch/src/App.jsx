import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import DataMap from './components/DataMap.jsx'
import SingleProduct from './components/SingleProduct.jsx'
import Store from './store/Store.jsx'
import AddProduct from './components/AddProduct.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataMap/>} />
        </Routes>
        <Routes>
          <Route path='/showSingleProduct/:id' element={<SingleProduct/>} />
        </Routes>
        <Routes>
          <Route path='/addProduct/' element={<AddProduct/>} />
        </Routes>
        <Routes>
          <Route path='/updateProduct/:id' element={<UpdateProduct/>} />
        </Routes>
      </BrowserRouter>
    </Store>

    
  )
}

export default App
