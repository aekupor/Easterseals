import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const Preassessment = ({navigation}) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [questionText, setQuestionText] = useState("I feel totally comfortable in my understanding of: \n\n • What employers want in an employee \n • The tools I need to conduct an effective job search \n • Goal setting and am able to set effective goals \n • Setting a schedule for my daily tasks during job search \n • How to dress appropriately for the job search");
  const [response, getQuestionResponse] = useState();
  const responses = new Array(8);
  const ReviewQuestionnaire = ({qNum}) => {
    return (
        <View style = {styles.reviewQuestionnaireContainer}>
            <Text> Question {qNum} </Text>
            <Text> Question 1.........</Text>
            <View style = {styles.buttonContainer}>

            </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>

    <Text style = {[styles.defaultText, {fontWeight: "bold"}]}>Before you begin the module, we will start with a pre-assessment quiz to gauge your prior knowledge of the topic. Click begin when you are ready to start.</Text>

    <TouchableOpacity
        style = {[styles.defaultButton, {padding: 10}]}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style = {styles.textButton}> Begin </Text>
    </TouchableOpacity>

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
});

export default Preassessment;
