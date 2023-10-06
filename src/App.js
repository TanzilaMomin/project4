import React from "react";
import { Mon } from "./components/Mon";
import "./components/common.css"

function App() {
  return (
    <div className="main">
      <Mon title="Taj Mahal"city="Agra" url="p6"/>
      <Mon title="Char Minaar" city="Hderabad" url="p1"/>
      <Mon title="India Gate" city="Delhi" url="p3"/>
      <Mon title = "Lal Quila" city="Delhi" url="p5"/>
      <Mon title = "Parliment House" city="Delhi" url="p4"/>
      <Mon title = "Mysore Palace" city="Mysore" url="p2" />
      <Mon title = "Victoria Palace" city="Kolkata" url="p7" />
      <Mon title = "Macca Masjid " city="Hyderabad" url="p8" />
      <Mon title = "Qutub Minar " city="New Delhi" url="p9" />
    </div>
  );
}

export default App;
