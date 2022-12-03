import React from "react";
import './App.css'

function List() {

  const bloglist = [
    {
      id: 1,
      title: "Gambler The",
      desc: "Unspecified intracapsular fracture of left femur, initial encounter for open fracture type I or II",
      author: "Geoffrey Merryman",
    },
    {
      id: 2,
      title: "Snake and Crane Arts of Shaolin (She hao ba bu)",
      desc: "Burns involving 90% or more of body surface with 90% or more third degree burns",
      author: "Angelico Readings",
    },
    {
      id: 3,
      title: "Goddess The (Shen nu)",
      desc: "Other fracture of upper end of right ulna, initial encounter for closed fracture",
      author: "Robinett Lissenden",
    },
    {
      id: 4,
      title: "Black Cadillac",
      desc: "Nondisplaced fracture of lateral condyle of left tibia",
      author: "Murdoch Nottingham",
    },
    {
      id: 5,
      title: "Survival of the Dead",
      desc: "Frostbite with tissue necrosis of unspecified sites",
      author: "Addi Burrus",
    },
  ];

  return (
    <div className="blog_list">
      {bloglist.map((item) => (
        <div className="item_wrapper" key={item.id}>
          <div className="title">
            {item.title}
          </div>
          <div className="author">By: {item.author}</div>
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
