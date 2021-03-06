import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

const InputFormGender = ({ setGender, navigateToMainPage }) => {
  //let userGender= ''
  let userGender = [ {
    value : 'Laki-Laki',
  },{
    value: 'Perempuan',
  }
  ];
  return (
    <View style={Styles.container}>
      <Text style={Styles.textLabel}>Gender:</Text>
      <Dropdown
        //keyboardType="number-pad"
        data={userGender}
        onChangeText={textGender => {
          userGender = textGender;
        }}
        style={Styles.inputName}
      />
      <TouchableOpacity
        onPress={() => {
          setGender(userGender);
          navigateToMainPage();
        }}
        style={Styles.buttonSubmit}
      >
        <Text style={Styles.textButton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 15, paddingLeft: 15 },
  textLabel: { fontWeight: "bold", fontSize: 20 },
  inputName: {
    backgroundColor: "#ccccff",
    width: "80%",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5
  },
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

export default InputFormGender;
