const InputField = ({val}) =>{

  // console.log('input field rendering')
  return(
    <>
    <div className="inputContainer mx-auto mt-2 ">
      <input className="w-64 h-14" type="text" placeholder="Enter number" readOnly value={val}/>
    </div>
    </>
  )
}

export default InputField