import { useState } from "react";
import "./App.css";

function Checklist() {
  const [vehicle1, setVehicle1] = useState(false);
  const [vehicle2, setVehicle2] = useState(false);

  const checkVehicle1 = (e) => {
    setVehicle1(!vehicle1);
  };
  const checkVehicle2 = (e) => {
    setVehicle2(!vehicle2);
  };

  return (
    <div className="checklist">
      <form>
        <h1>I have a bike { vehicle1 ? 'Yes' : 'No' }</h1>
        <h1>I have a car { vehicle2 ? 'Yes' : 'No' }</h1>
        <div className="checkbox">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            onChange={checkVehicle1}
          />
          <label> I have a bike</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            onChange={checkVehicle2}
          />
          <label> I have a car</label>
        </div>
      </form>
    </div>
  );
}

export default Checklist;
