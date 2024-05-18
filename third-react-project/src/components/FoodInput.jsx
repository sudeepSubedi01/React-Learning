const FoodInput = () => {
  let var1 = ''
  const handleChange =()=>{
    console.log('Event is handled')
    var1 = event.target.value
    // console.log(var1)
    document.querySelector('.updateLive').innerText = var1
  }
  return(
    <>
    <input type="text" placeholder="Enter a food name" onChange={handleChange} />
    <p className="updateLive" ></p>
    </>
  )
}
export default FoodInput