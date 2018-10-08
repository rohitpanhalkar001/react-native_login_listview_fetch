import React from 'react'
import{
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native'

export default class City extends React.Component{

     constructor(){
        super()
        this.state = {
          email:'',
          password:'',
          name:'',
          body:'',
          id:'',
          postId:'',
          result: '------------------',
          isFetching: false,
            

        }
     }  


     login(signUp){
        let emailId = this.state.email;
        let pass = this.state.password; 
        console.warn("email Id is "+emailId);
        console.warn("password is"+pass);

        this.setState = {
          isFetching: true
        }
      
        if(emailId == '' || pass == ''){
          alert('Enter emailId and Password');
        }

        const url='https://jsonplaceholder.typicode.com/posts/1/comments'
        // const url = 'http://18.221.86.3/EchoApp/api/user/' + (signUp ? 'signUp' : 'logIn')

        fetch(url,
              {
                method:'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                // email: emailId,
                // password: pass,
                  email: emailId,
                  postId:'',
                  body:'Testing App in React-Native with this API',
                  name:'tony',
                  // id:'6'

              }),
            })
            .then(response => response.json())
            .then((responseJson) => {
              this.setState={
                isFetching:false
              }
              this.props.navigation.navigate('Screen2')
            })
            // .then(json => alert('Successfully log In'))

          
            // .then((responseJson) => {
            //   this.setState({
            //       isFetching: false,
            //       result: responseJson.status + " " + responseJson.message
              //     if (responseJson.status == 'SUCCESS') {
              //       this.props.navigation.navigate('Screen2');
              //   } else if (responseJson.status == 'FAIL') {
              //       alert(responseJson.message)
              //   }
              // })

            
            //   console.warn('Response', responseJson.status + " " + responseJson.message)

              // if (responseJson.status == 'SUCCESS') {
              //     this.props.navigation.navigate('Screen2');
              // } else if (responseJson.status == 'FAIL') {
              //     alert(responseJson.message)
              // }
          // })
          // .catch((error) => {
          //     console.error(error);
          // });
     }
     
    render(){
        return(
            
           
           <View style={{position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0, 
              justifyContent: 'center'
            }}>

              <TextInput
                  style={{height:40, borderColor:'gray', borderWidth:1, marginRight:10, marginLeft:10}}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  onChangeText = {(email) =>this.setState({email})}>
              </TextInput>      

              <TextInput
                  style={{height:40, borderColor:'gray',borderWidth:1, marginRight:10, marginLeft:10,marginTop:10}}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText = {(password) =>this.setState({password})}>
              </TextInput>      

              <TouchableHighlight style={{height:40, marginRight:10, marginLeft:10,marginTop:10}}>
                  <Button 
                    title="update Button"
                    onPress={()=>this.login(true)}>
                  </Button>
              </TouchableHighlight>

              <ActivityIndicator animating={this.state.isFetching}>
              </ActivityIndicator>
            </View>                
           
        )
    }

    
}