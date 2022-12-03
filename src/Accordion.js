import React, { useState } from "react";
import './App.css'

function Accordion() {
  const acc_list = [
    {
      id: 1,
      title: "Gambler, The",
      desc: "Unspecified intracapsular fracture of left femur, initial encounter for open fracture type I or II",
    },
    {
      id: 2,
      title: "Snake and Crane Arts of Shaolin (She hao ba bu)",
      desc: "Burns involving 90% or more of body surface with 90% or more third degree burns",
    },
    {
      id: 3,
      title: "Goddess, The (Shen nu)",
      desc: "Other fracture of upper end of right ulna, initial encounter for closed fracture",
    },
    {
      id: 4,
      title: "Black Cadillac",
      desc: "Nondisplaced fracture of lateral condyle of left tibia",
    },
    {
      id: 5,
      title: "Survival of the Dead",
      desc: "Frostbite with tissue necrosis of unspecified sites",
    },
  ];

  const [isShow, setIsShow] = useState(false);
//   const showAccordian = () => {
//     setIsShow(current => !current);
//   };

  return (
    <div className="accoudian">
      {acc_list.map((item) => (
        <div className="item_wrapper" key={item.id}>
          <div className="title" onClick={() => setIsShow(!isShow)}>
            {item.title}
          </div>
          <div className="desc" style={{display: isShow ? 'block' : 'none'}}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
