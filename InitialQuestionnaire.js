import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

 var data = [
    {
        question: 'I know who I am, the marketable skills I possess, and the job that I want.',
        response: ["True", "False"]
    },
    {
        question: 'I would like to learn how to research: (Select all that apply)',
        response: ["Industries", "Companies", "Hiring Managers", "Occupations", "Salary"]
    },
    {
        question: 'Regarding my resume: (Only check one answer)',
        response: ["I need a resume", "I want one-on-one resume assistance", "I want to learn how to write my own resume", "I don’t need resume assistance"]
    },
    {
        question: 'I could use help with: (Select all that apply)',
        response: ["Using LinkedIn", "My elevator pitch", "Writing a professional email", "Cover letters"]
    },
    {},
  ];

const InitialQuestionnaire = ({navigation}) => {

const [questionNum, setQuestionNum] = useState(1);
const [questionText, setQuestionText] = useState(data[0].question);
const [questionRes, setQuestionRes] = useState(data[0].response);

const [response, getQuestionResponse] = useState();
const [numOptions, setNumOptions] = useState();


  const QuestionOption = () => {
    return data[questionNum-1].response.map((option) => {
        return (
            <TouchableOpacity
              style = {styles.buttonContainer}>
              <Text>{option}</Text>
            </TouchableOpacity>
        )
    })
  }

  const changeQuestion = () => {
    setQuestionText(data[questionNum-1].question);
  }

  const nextQuestion = () => {
    if (questionNum < 4) {
        setQuestionNum(questionNum+1);
        changeQuestion();
    }
    else {
        navigation.navigate('InitialQuestionnaireType2')
    }
  }

  const questionResponse = (response) => {
    responses[questionNum] = response;
  //store user's response to question
  }

  return (
    <View style={styles.container}>

      <Text style = {styles.defaultText}> Question #{ questionNum } </Text>

      <View style = {styles.questionContainer}>
        <Text> {questionText} </Text>
      </View>

       <QuestionOption></QuestionOption>

       <TouchableOpacity
           style = {[styles.defaultButton, {padding: 10}]}
           onPress = {nextQuestion}>
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
      borderColor: "#004473"
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
    defaultText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
      },
});

export default InitialQuestionnaire;
