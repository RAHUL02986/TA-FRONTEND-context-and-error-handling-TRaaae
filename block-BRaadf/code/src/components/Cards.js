import Card from "./Card";
import { useContext } from "react";

import { UserContext } from "../context/UserContex";

function Cards() {
  let value = useContext(UserContext)
  return (
    <div className="cards_wrap">
      <Card isDarkMode={ value.isDarkMode} />
      <Card isDarkMode={ value.isDarkMode} />
      <Card isDarkMode={ value.isDarkMode} />
    </div>
  );
}

export default Cards;
