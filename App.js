import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import InputFormName from "./src/inputs/InputFormName"
import InputFormGender from "./src/inputs/InputFormGender"
import InputFormPhone from "./src/inputs/InputFormPhone"
import InputFormAddress from "./src/inputs/InputFormAddress"
import Main from "./src/Main"
import Result from "./src/Result"

class App extends Component {
  render() {
    return <Main />
  }
}

export default App