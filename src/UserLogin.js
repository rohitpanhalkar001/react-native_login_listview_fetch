import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Image,
  StatusBar
} from 'react-native';

import Header from '../src/Header';


export default class City extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: '',
      body: '',
      id: '',
      postId: '',
    }
  }


  login(signUp) {
    let emailId = this.state.email;
    let pass = this.state.password;
    console.warn("email Id is " + emailId);
    console.warn("password is" + pass);

    if (emailId == '' || pass == '') {
      alert('Enter emailId and Password');
    }

    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

    fetch(url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // email: emailId,
          // password: pass,
          email: emailId,
          postId: '',
          body: 'Testing App in React-Native with this API',
          name: 'tony',
          // id:'6'

        }),
      })
      .then(response => response.json())
      .then((responseJson) => {
        this.props.navigation.navigate('Screen2');
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <StatusBar
          backgroundColor="#003366"
          barStyle="light-content"
        />

        <Header title="Login" />


        <View style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          justifyContent: 'center'
        }}>


          <Image
            source={require("../android/app/src/main/assets/login.png")}
            style={{ width: 200, height: 200, alignSelf: 'center' }}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginRight: 10, marginLeft: 10 }}
            placeholder="Email Address"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}>
          </TextInput>

          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, marginLeft: 10, marginTop: 10 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}>
          </TextInput>

          <TouchableHighlight style={{ height: 40, marginRight: 10, marginLeft: 10, marginTop: 10 }}>
            <Button
              title="update Button"
              onPress={() => this.login(true)}>
            </Button>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}