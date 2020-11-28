import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

 var data = [
    {
        question: 'I am familiar with the interview process'
    },
    {
        question: 'I am comfortable having an interview over video chat'
    },
    {
        question: 'I know how to use STAR statements to communicate my value'
    },
    {
        question: 'I know how much money I need to make in my next job'
    },
    {},
  ];

const InitialQuestionnaireType2 = ({navigation}) => {
const [response, getQuestionResponse] = useState();

  const questionResponse = (response) => {
    responses[questionNum] = response;
  //store user's response to question
  }

  return (
    <View style={styles.container}>

      <Text> Question #5 </Text>

      <View style = {styles.questionContainer}>
        <Text> Select True (Thumbs Up) or False (Thumbs Down) for the following statements: </Text>
      </View>

       <Text> I am familiar with the interview process </Text>
       <View style = {styles.buttonView}>
           <TouchableOpacity style = {styles.buttonContainerGreen}>
             <MaterialCommunityIcons
               style = {styles.iconButton}
               name="thumb-up"
               color="green"
               size={15}
             />
             </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonContainerRed}>
             <MaterialCommunityIcons
               name="thumb-down"
               color = "red"
               size={15}
             />
           </TouchableOpacity>
       </View>

       <Text> I am comfortable having an interview over video chat </Text>
       <View style = {styles.buttonView}>
      <TouchableOpacity style = {styles.buttonContainerGreen}>
        <MaterialCommunityIcons
          style = {styles.iconButton}
          name="thumb-up"
          color="green"
          size={15}
        />
        </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonContainerRed}>
        <MaterialCommunityIcons
          name="thumb-down"
          color = "red"
          size={15}
        />
      </TouchableOpacity>
  </View>

       <Text>I know how to use STAR statements to communicate my value</Text>
        <View style = {styles.buttonView}>
           <TouchableOpacity style = {styles.buttonContainerGreen}>
             <MaterialCommunityIcons
               style = {styles.iconButton}
               name="thumb-up"
               color="green"
               size={15}
             />
             </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonContainerRed}>
             <MaterialCommunityIcons
               name="thumb-down"
               color = "red"
               size={15}
             />
           </TouchableOpacity>
       </View>

       <Text> I know how much money I need to make in my next job </Text>
        <View style = {styles.buttonView}>
           <TouchableOpacity style = {styles.buttonContainerGreen}>
             <MaterialCommunityIcons
               style = {styles.iconButton}
               name="thumb-up"
               color="green"
               size={15}
             />
             </TouchableOpacity>
           <TouchableOpacity style = {styles.buttonContainerRed}>
             <MaterialCommunityIcons
               name="thumb-down"
               color = "red"
               size={15}
             />
           </TouchableOpacity>
       </View>

       <TouchableOpacity
           style = {[styles.defaultButton, {padding: 10}]}>
           <Text style = {styles.textButton}> Submit </Text>
       </TouchableOpacity>

      <StatusBar style="auto" />
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
      color: "white",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonContainer: {
      width: "20%",
      margin: 10,
      backgroundColor: "white",
      borderRadius: 40,
      alignItems: "center",
      textAlign: "center",
      padding: 20,
      borderWidth: 2,
      borderColor: "#004473",
    },
    buttonContainerRed: {
      width: 30,
      height: 30,
      backgroundColor: "white",
      borderRadius: 40,
      alignItems: "center",
      textAlign: "center",
      justifyContent:"center",
      borderWidth: 2,
      borderColor: "red",
      margin: 20
    },
    buttonContainerGreen: {
       width: 30,
      height: 30,
      backgroundColor: "white",
      borderRadius: 40,
      alignItems: "center",
      textAlign: "center",
      justifyContent:"center",
      borderWidth: 2,
      borderColor: "green",
      margin: 20
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
    buttonView: {
        flex:1,
        flexDirection: 'row',
    },
});

export default InitialQuestionnaireType2;
