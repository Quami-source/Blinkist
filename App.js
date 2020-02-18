import React, { Component } from 'react';
import {StyleSheet, Text, View,Image } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
          <View style={{
            alignItems:"center",paddingTop:250
            }}>
            <Image source={require("./assets/img/Blinklist.png")
            } style={{width:200,height:70}}/>
            <View>
              <Text style={{textAlign:"center",fontSize:18, color:"#010440", fontWeight:"700"}}>Key takeaways from the world's best nonfiction books in 15 minutes</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>
          <View style={{backgroundColor:"#04D94F",width:10,height:10,borderRadius:20}}/>
          <View style={{backgroundColor:"#cccccc",width:10,height:10,borderRadius:20, marginLeft:5}}/>
          <View style={{backgroundColor:"#cccccc",width:10,height:10,borderRadius:20, marginLeft:5}}/>
          <View style={{backgroundColor:"#cccccc",width:10,height:10,borderRadius:20, marginLeft:5}}/>
        </View>

        <View style={{flex:0.5, flexDirection:"row", alignItems:"center", width:340,justifyContent:"center"}}>
            <View style={styles.btn1}>
              <Text style={styles.text1}>Log in</Text>
            </View>
            <View style={styles.btn2}>
              <Text style={styles.text2}>Signup</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  btn1:{
    backgroundColor:"#ffffff", 
    height:40,
    flex:4,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    margin:3
  },
  btn2:{
    backgroundColor:"#7ED955",
    height:40,
    flex:4,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  },
  text1:{color:"#7ED955",
  textAlign:"center",
  fontSize:16,
  fontWeight:"500"
  },
  text2:{color:"#ffffff",
  textAlign:"center",
  fontSize:16,
  fontWeight:"500"
  },
});
