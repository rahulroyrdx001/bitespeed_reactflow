import React from 'react'
import DnDFlow from './Components/DnDFlow'

export const App = () => {
  return (
  <div style={{margin:"0px"}}>
    <div style={{width:"100%",height:"7vh", background:"#F3F3F3",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
      <button style={{width:"150px",height:"5vh",background:"#FFFF",borderColor:"#615EFC",color:"#615EFC",fontWeight:"bold",borderRadius:"7px",marginRight:"5%"}}>Save Changes</button>
      </div>
    <div style={{width:"100%",height:"93vh"}}><DnDFlow ></DnDFlow></div>
  </div>
    
  )
}
export default App;



