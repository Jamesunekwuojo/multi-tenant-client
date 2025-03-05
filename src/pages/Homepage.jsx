
import { ArrowRight, Building2, Database, Lock, Users } from "lucide-react"
import { Link } from "react-router-dom"
import Mainnav from "../components/Mainnav"
import Button from "../components/Button"
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";

function Homepage() {
  return (
    <div className="bg-background">

      {/* <Mainnav></Mainnav> */}

      <Feature3></Feature3>
      <Feature1></Feature1> 
      <Feature2></Feature2>
      
      {/* <main className="flex-1"> */}

        {/* <Feature1></Feature1> */}
        {/* <Feature2></Feature2> */}



      {/* </main> */}

      
    </div>
  )
}


export default Homepage
