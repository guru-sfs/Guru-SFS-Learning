import React,{useState} from "react";
function Header({age}){
    var [a, b] = useState(10);
    return (
      <>
          <h1>Welcome</h1>
          <h1>{a}</h1>
          <button onClick={() => b(a + 1)}>Click</button>
          <h2>{age}</h2>
      </>
    );
}
export default Header