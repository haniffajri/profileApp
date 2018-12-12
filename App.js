import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import InputFormName from "./src/inputs/InputFormName";
import InputFormGender from "./src/inputs/InputFormGender";
import InputFormPhone from "./src/inputs/InputFormPhone";
import InputFormAddress from "./src/inputs/InputFormAddress";
import Main from "./src/Main";
import Result from "./src/Result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNeedsTobeRendered: "Main",
      userName: "",
      userGender: "",
      userAddress: "",
      userPhone: "",
    };
  }
  navigateToInputFormName = () => this.setState({ pageNeedsTobeRendered: "inputName" });
  
  navigateToInputFormGender = () => this.setState({pageNeedsTobeRendered: 'inputGender'});

  navigateToInputFormAddress = () => this.setState({pageNeedsTobeRendered: 'inputAddress'});

  navigateToInputFormPhone = () => this.setState({pageNeedsTobeRendered: 'inputPhone'});

  navigateToMainPage = () => this.setState({ pageNeedsTobeRendered: "Main" });

  setUserName = name => this.setState({ userName: name });
  setGender = gender => this.setState({userGender: gender});
  setAddress = address => this.setState({userAddress :address});
  setPhone = phone => this.setState({userPhone :phone});

  render() {
    const { pageNeedsTobeRendered, userName, userGender, userAddress, userPhone } = this.state; // destructing

    if (pageNeedsTobeRendered === "inputName") {
      return (
        <InputFormName
          navigateToMainPage={this.navigateToMainPage}
          setUserName={this.setUserName}
        />
      );
    } else if (pageNeedsTobeRendered === "inputAddress") {
      return <InputFormAddress 
        navigateToMainPage={this.navigateToMainPage}
        setAddress={this.setAddress}
      />;
    } else if (pageNeedsTobeRendered === "inputGender") {
      return (
        <InputFormGender
          navigateToMainPage={this.navigateToMainPage}
          setGender={this.setGender}
        />
      );
    } else if (pageNeedsTobeRendered === "inputPhone"){
      return(
        <InputFormPhone
          navigateToMainPage={this.navigateToMainPage}
          setPhone={this.setPhone}
        />
      )
    }
    return (
      <Main
        userName={userName}
        navigateToInputFormName={this.navigateToInputFormName}
        userGender={userGender}
        navigateToInputFormGender={this.navigateToInputFormGender}
        userAddress={userAddress}
        navigateToInputFormAddress={this.navigateToInputFormAddress}
        userPhone={userPhone}
        navigateToInputFormPhone={this.navigateToInputFormPhone}
      />
    );
  }
}

export default App;
