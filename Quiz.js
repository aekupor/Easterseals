import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const InitialQuestionnaire = ({navigation}) => {
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
                <Button title = "Agree"/>
            </View>
        </View>
    )
  }

  const changeQuestion = () => {
    if (questionNum == 1)
      setQuestionText("I feel totally comfortable in my understanding of: \n\n • What employers want in an employee \n • The tools I need to conduct an effective job search \n • Goal setting and am able to set effective goals \n • Setting a schedule for my daily tasks during job search \n • How to dress appropriately for the job search");
    else if (questionNum == 2)
        setQuestionText("This is Question 2");
    else if (questionNum == 3)
        setQuestionText("This is Question 3");
    else if (questionNum == 4)
        setQuestionText("This is Question 4");
    else if (questionNum == 5)
        setQuestionText("This is Question 5");
    else if (questionNum == 6)
        setQuestionText("This is Question 6");
    else if (questionNum == 7)
        setQuestionText("This is Question 7");
    else if (questionNum == 8)
        setQuestionText("This is Question 8");
  }

  const nextQuestion = () => {
    if (questionNum < 8) {
        setQuestionNum(questionNum+1);
        changeQuestion();
    }
    else {
        navigation.navigate('ReviewQuestionnaire')
    }
  }
  const prevQuestion = () => {
    if (questionNum > 1) {
        setQuestionNum(questionNum-1);
        changeQuestion();
    }
  }
  const questionResponse = (response) => {
    responses[questionNum] = response;
  //store user's response to question
  }

  return (
    <View style={styles.container}>

      <Text> Question #{ questionNum } </Text>

      <View style = {styles.questionContainer}>
        <Text> {questionText} </Text>
      </View>
      <TouchableOpacity
              style = {styles.buttonContainer}
              onPress={(event) => questionResponse("Strongly Disagree")}>
              <Text>Strongly Disagree</Text>
            </TouchableOpacity>
      <TouchableOpacity
              style = {styles.buttonContainer}
              onPress={(event) => questionResponse("Strongly Disagree")}>
              <Text>Strongly Disagree</Text>
            </TouchableOpacity>
      <TouchableOpacity
              style = {styles.buttonContainer}
              onPress={(event) => questionResponse("Strongly Disagree")}>
              <Text>Strongly Disagree</Text>
            </TouchableOpacity>
      <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={(event) => questionResponse("Strongly Disagree")}>
        <Text>Strongly Disagree</Text>
      </TouchableOpacity>
      {/*<View style={{ flexDirection: 'row', margin: 10 }}>
            <View style = {styles.navBtnContainer}>
                <Button
                  onPress={prevQuestion}
                  title="Back"
                />
            </View>

            <View style = {styles.navBtnContainer}>
                <Button
                  onPress={nextQuestion}
                  title="Next"
                />
            </View>
      </View>*/}

       <TouchableOpacity
           style = {[styles.defaultButton, {padding: 10}]}
           onPress={() => navigation.navigate('AssessmentScore')}>
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
});

export default InitialQuestionnaire;
