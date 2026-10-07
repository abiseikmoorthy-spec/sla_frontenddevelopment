


const App = () =>{

  const [NameUser,setnameuser]= usestate("")
  const [AgeUser,setAgeUser] = udestate ("")
  const [ ShowData] = usestate([])

  const handlechange = (e)=>{


    setnameuser(e.target .value)

  }
    const handleAge = (e)=>{
      setAgeUers(e.target.value)


  }

  const handleclick = () =>{
    const obj ={id:Date.now() ,Name:nmaeuser}


  }






  return(<>

    <div>
      <input type="text" onchange ={handlechange} placeholder="Enter the Name" />
       <input type="Number"onchange={handleAge} onplaceholder="Enter the Age" />
        <button onclick={handleclick}> Click to login</button>



    </div>

    <div>
     <table border={1}>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {}
      </tbody>
     </table>

    </div>



  </>)
}
export default App