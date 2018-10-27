import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
class Main extends Component {
  onPress = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };
  onChangeText = name => this.setState({ name });
  state = {
    name: ""
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter name</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeholder="ex:John Cena"
          value={this.state.name}
        />
        <TouchableOpacity style={styles.buttonText} onPress={this.onPress}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset
  }
});
export default Main;
