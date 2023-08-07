import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { UserContext } from "../context/UserContext";


class App extends React.Component {
  static contextType = UserContext;
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return {isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    let changeMode = this.changeMode;

    return <>
      <UserContext.Provider value={{
        isDarkMode,
        changeMode,
      }}>

      <div className={`bg ${this.context.isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header  />
        <Main  />
        <SwitchButton  />
      </div>
      </UserContext.Provider>
      </>    
  }
}

export default App;
