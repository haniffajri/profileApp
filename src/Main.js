import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Main extends Component {
  render() {
    const { userName, userGender, userAddress, userPhone } = this.props;
    return (
      <View style={Styles.classContainer}>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormName()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{userName}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormGender()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{userGender}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormPhone()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{userPhone}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <TouchableOpacity
            style={Styles.inputContainer}
            onPress={() => this.props.navigateToInputFormAddress()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{userAddress}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputContainer: { width: "70%", backgroundColor: "#e1f7d5" },
  inputResult: { fontSize: 20, marginLeft: 5 },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  },
  textButton: { textAlign: "center", margin: 10 }
});

export default Main;
