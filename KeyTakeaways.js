import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';

const KeyTakeaways = ({navigation}) => {
  const [score, setScore] = useState(1);

  return (
    <View style={styles.container}>

    <Text style = {[styles.defaultText, {fontWeight: "bold"}, {margin: 20}]}>1. What are your Key Takeaways?</Text>
    <Text style = {[styles.defaultText, {margin: 20}]}> Please complete the exercise before clicking the "Next" button to move on in the course. </Text>

    <Text style = {{marginBottom: 5}}> Key Takeaway #1 </Text>
    <View style = {{borderWidth: 1, borderRadius: 10, marginBottom: "3%", width: "60%"}}>
        <TextInput
            autoCapitalize="none"
            returnKeyType= "go"
            style={styles.input}
        />
    </View>

    <Text style = {{marginBottom: 5}}> Key Takeaway #2 </Text>
    <View style = {{borderWidth: 1, borderRadius: 10, marginBottom: "3%", width: "60%"}}>
        <TextInput
            autoCapitalize="none"
            returnKeyType= "go"
            style={styles.input}
        />
    </View>

    <Text style = {{marginBottom: 5}}> Key Takeaway #3 </Text>
    <View style = {{borderWidth: 1, borderRadius: 10, marginBottom: "3%", width: "60%"}}>
        <TextInput
            autoCapitalize="none"
            returnKeyType= "go"
            style={styles.input}
        />
    </View>

    <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity
           style = {[styles.defaultButton, {padding: 10}]}>
           <Text style = {styles.textButton}> Back </Text>
        </TouchableOpacity>
        <TouchableOpacity
           style = {[styles.defaultButton, {padding: 10}]}>
           <Text style = {styles.textButton}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
   },
   contentContainer: {
    padding: 20
   },
   button: {
      padding: 20,
      fontSize: 15,
      fontFamily: "arial",
      textAlign: "center",
      color: "#0061A5",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonContainer: {
      width: "20%",
      margin: 10,
      backgroundColor: "#004473",
    },
    questionContainer: {
        width: "70%",
        margin: 20,
        alignItems: "center",
        padding: 10
    },
    navBtnContainer: {
        margin: 20
    },
    reviewQuestionnaireContainer: {
        backgroundColor: "#FFF",
        padding: 10,
        width: "30%",
        borderColor: "#004473",
        borderRadius: 20,
        alignItems: "center",
        margin: 10
    },
    defaultButton: {
        backgroundColor: "#004473",
        width: "15%",
        margin: 20,
        marginTop:30
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        fontSize: 18
    },
    textScore: {
        color: "#CF4B04",
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20
    },
    defaultButton: {
        backgroundColor: "#004473",
        margin: 20,
        marginTop:30
    },
    textButton: {
        color: "white",
        alignItems: "center",
        textAlign: "center",
        fontSize: 18
    },
    input: {
      textAlign: "left",
      fontSize:20,
      width: "100%",
      color: "#022169"
    },
});

export default KeyTakeaways;
