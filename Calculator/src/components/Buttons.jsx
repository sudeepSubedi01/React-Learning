const Buttons =({handleClick})=>{
  const btnMem = ['C','1','2','+','3','4','-','5','6','+','7','8','/','=','9','0','.']
  return(
    <>
    <div className="buttonContainer flex flex-wrap	justify-center">
      {btnMem.map((mem)=>{
        return (
        <button className="my-3 mx-4 py-3 px-5 bg-neutral-700 text-white font-bold rounded" onClick={(event)=>handleClick(mem)}> {mem} </button>
        )
      })}
    </div>
    </>
  );
}
export default Buttons