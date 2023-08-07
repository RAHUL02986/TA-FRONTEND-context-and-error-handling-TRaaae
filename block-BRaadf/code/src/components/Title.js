import { useContext } from "react";
import { UserContext } from "../context/UserContex";

function Title() {

  let value = useContext(UserContext);

  return (
    <h2
      className={`heading ${
        value.isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {value.text}
    </h2>
  );
}

export default Title;