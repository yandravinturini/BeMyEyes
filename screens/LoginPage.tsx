import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export function Login({ navigation }){        //no typescript é preciso fazer uma 'tipagem', funciona sem o fazer mas da este erro
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

      <svg width="200" height="154" viewBox="0 0 600 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.359 78.2195V76.2914C73.4098 75.4478 77.7481 67.4943 77.7481 59.0587C77.7481 48.5745 70.8792 39.0543 52.5619 39.0543H20.7477V121H52.5619C74.1329 121 80.1583 109.793 80.1583 97.5009C80.1583 86.8961 75.4585 79.0631 61.359 78.2195ZM36.4138 54.7204H51.9593C59.1898 54.7204 62.082 56.528 62.082 62.1919C62.082 67.9763 59.1898 69.7839 51.9593 69.7839H36.4138V54.7204ZM52.5619 104.129H36.4138V85.45H52.5619C60.9975 85.45 64.4922 87.2576 64.4922 94.7292C64.4922 102.321 60.9975 104.129 52.5619 104.129ZM143.069 88.7037C143.069 71.8326 135.598 58.9382 116.075 58.9382C96.0711 58.9382 88.5995 72.7966 88.5995 90.0293C88.5995 101.357 92.5763 121 120.414 121C124.993 121 129.572 121 138.972 118.831V103.406C130.657 105.334 125.234 105.334 121.619 105.334C110.291 105.334 106.314 101.96 104.989 95.9343H143.069V88.7037ZM115.834 74.6043C123.306 74.6043 126.801 77.0144 127.283 83.8834H104.386C105.109 77.376 108.604 74.6043 115.834 74.6043ZM237.49 39.0543L208.086 96.0548H206.158L176.754 39.0543H161.088V121H176.754V76.5324H178.682L198.446 114.854H215.799L235.562 76.5324H237.49V121H253.157V39.0543H237.49ZM307.18 58.9382V86.6551C307.18 96.2958 302.842 99.3085 293.442 99.3085C284.043 99.3085 279.704 96.2958 279.704 86.6551V58.9382H264.038V87.2576C264.038 103.767 271.51 114.975 290.429 114.975C297.66 114.975 303.565 112.323 307.18 108.347V124.615H272.233V140.281H322.846V58.9382H307.18ZM396.135 54.7204V39.0543H342.147V121H396.135V105.334H356.608V87.2576H387.699V71.5916H356.608V54.7204H396.135ZM446.579 58.9382V86.6551C446.579 96.2958 442.241 99.3085 432.841 99.3085C423.442 99.3085 419.103 96.2958 419.103 86.6551V58.9382H403.437V87.2576C403.437 103.767 410.909 114.975 429.828 114.975C437.059 114.975 442.964 112.323 446.579 108.347V124.615H411.632V140.281H462.245V58.9382H446.579ZM523.316 88.7037C523.316 71.8326 515.844 58.9382 496.322 58.9382C476.317 58.9382 468.846 72.7966 468.846 90.0293C468.846 101.357 472.823 121 500.66 121C505.239 121 509.819 121 519.218 118.831V103.406C510.903 105.334 505.48 105.334 501.865 105.334C490.537 105.334 486.561 101.96 485.235 95.9343H523.316V88.7037ZM496.081 74.6043C503.552 74.6043 507.047 77.0144 507.529 83.8834H484.633C485.356 77.376 488.85 74.6043 496.081 74.6043ZM528.662 114.493C537.459 119.192 546.016 121 555.415 121C568.912 121 580.481 115.095 580.481 101.598C580.481 89.7883 573.612 86.2936 555.536 83.0399C545.895 81.2322 544.328 80.7502 544.328 77.9785C544.328 75.5683 546.377 74.6043 550.715 74.6043C557.343 74.6043 566.863 76.5324 575.661 79.6656V63.9995C569.756 61.1073 559.995 58.9382 551.92 58.9382C539.026 58.9382 528.662 65.2046 528.662 77.0144C528.662 87.8602 534.085 93.1626 553.005 95.9343C562.646 97.5009 564.815 97.9829 564.815 101.116C564.815 103.888 562.405 105.334 556.62 105.334C547.703 105.334 539.629 103.165 528.662 97.5009V114.493Z" fill="#1D5F98" />
            <ellipse cx="292.463" cy="76.824" rx="6.03015" ry="10.5445" fill="#A17C6B" />
            <ellipse cx="431.156" cy="76.824" rx="6.03015" ry="10.5445" fill="#A17C6B" />
          </svg>
 
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
        <Text style={styles.text_login}>Login</Text>
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
  },
 
  image: {
    marginBottom: 40,
  },

  text_username: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width:220,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
  },

  text_pass: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 48,
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
  },

  text_register: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
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
    fontFamily: 'Inter',
    fontStyle: 'normal',
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
    fontFamily: 'Inter',
    fontStyle: 'normal',
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
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    height: 30,
    marginBottom: 30,
    marginTop: 10,
    alignSelf: 'center',
  },

  register_button: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    height: 30,
    marginBottom: 30,
    alignSelf: 'center',
    color: '#1D5F98',
    textDecorationLine: 'underline',
  },

  text_login: {
    width: 78,
    height: 32,
    left: 140,
    top: 420,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 29,
    textAligh: 'center',
    color: 'white',
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