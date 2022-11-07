import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";


export function Login({ navigation }: { navigation: any }) {        //no typescript é preciso fazer uma 'tipagem', funciona sem o fazer mas da este erro
  function openApp() {
    navigation.navigate('Menu')
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!username.trim()) {
      //alert('Please enter username.');
      return 1;
    }
    //Check for the Email TextInput
    if (!password.trim()) {
      //alert('Please enter Password.');
      return 1;
    }

    return 0;

  };

  return (
    <View style={styles.container}>

      <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          />

      <StatusBar style="auto" />

      <View>
        <Text style={styles.text_username}>Username</Text>

        <TextInput
          style={styles.input_username}
          placeholder=""
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View>
        <Text style={styles.text_pass}>Password</Text>
        <TextInput
          style={styles.input_pass}
          placeholder=""
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {[checkTextInput() ? styles.loginBtnWhite : styles.loginBtnBlue]}
        disabled = {checkTextInput()? true : false}
        onPress = {openApp}>
        <Text style={[checkTextInput() ? styles.text_login_btn_white : styles.text_login_btn_blue]}>Login</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.text_register}>Don't have an account yet?</Text>
        <TouchableOpacity>
        <Text style={styles.register_button}>Register here!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },

  logo:{
    margin: 10,
    resizeMode: "center",
    width: 250,
    height: 100,
  },

  image: {
    marginBottom: 40,
  },

  text_username: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width:220,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
  },

  text_pass: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 48,
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
  },

  text_register: {
    fontSize: 17,
    marginBottom: 10,
    marginTop: 48,
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
    textAlign: 'center',
    },

  input_username: {
    fontSize: 17,
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 31,
    width:220,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  input_pass: {
    fontSize: 17,
    backgroundColor: 'white',
    height: 31,
    width:220,
    paddingLeft: 10,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  forgot_button: {
    fontSize: 17,
    height: 30,
    marginBottom: 30,
    marginTop: 10,
    alignSelf: 'center',
  },

  register_button: {
    fontSize: 17,
    height: 30,
    marginBottom: 30,
    alignSelf: 'center',
    color: '#1D5F98',
    textDecorationLine: 'underline',
  },

  text_login_btn_white: {
    width: 78,
    height: 32,
    fontSize: 24,
    lineHeight: 29,
    textAligh: 'center',
    color: 'white',
  },

  text_login_btn_blue: {
    width: 78,
    height: 32,
    fontSize: 24,
    lineHeight: 29,
    textAligh: 'center',
    color: '#EBEBEB',
  },

  loginBtnWhite:{
    width: 97,
    borderRadius: 25,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 3,
    borderBottomColor: "white",
    borderTopColor: "white",
    borderRightColor: "white",
    borderLeftColor: "white",
    paddingLeft: 20,
  },

  loginBtnBlue: {
    width: 97,
    borderRadius: 25,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1D5F98",
    paddingLeft: 20,
  },
});