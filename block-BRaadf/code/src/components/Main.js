import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { useContext } from "react";

import { UserContext } from "../context/UserContex";


function Main() {
  let value = useContext(UserContext)
  return (
    <>
      <Title text="Text Component" isDarkMode={value.isDarkMode} />
      <Paragraph isDarkMode={value.isDarkMode} />
      <Title text="Card Component" isDarkMode={value.isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={value.isDarkMode} />
      <Banner isDarkMode={value.isDarkMode} />
    </>
  );
}

export default Main;
