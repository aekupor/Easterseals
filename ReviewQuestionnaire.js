import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

const ReviewQuestionnaire = ({navigation}) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [questionText, setQuestionText] = useState("I feel totally comfortable in my understanding of: \n\n • What employers want in an employee \n • The tools I need to conduct an effective job search \n • Goal setting and am able to set effective goals \n • Setting a schedule for my daily tasks during job search \n • How to dress appropriately for the job search");
  const [response, getQuestionResponse] = useState();
  const responses = new Array(8);
  const ReviewModules = ({qNum}) => {
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

    <Button
        title = "Curriculum"
        onPress={() => navigation.navigate('Curriculum')}
    />
      <Text>Question { questionNum } of 8</Text>
      <Text> Response: {responses[questionNum]} </Text>

      <View style = {styles.questionContainer}>
        <Text> {questionText} </Text>
      </View>
      <View style = {styles.buttonContainer}>
          <Button
            onPress={(event) => questionResponse("Strongly Agree")}
            title="Strongly Agree"
          />
      </View>
      <View style = {styles.buttonContainer}>
          <Button
            onPress={(event) => questionResponse("Agree")}
            title="Agree"
          />
      </View>
      <View style = {styles.buttonContainer}>
          <Button
            onPress={(event) => questionResponse("Disagree")}
            title="Disagree"
          />
      </View>
      <View style = {styles.buttonContainer}>
          <Button
            onPress={(event) => questionResponse("Strongly Disagree")}
            title="Strongly Disagree"
          />
      </View>
      <View style={{ flexDirection: 'row', margin: 10 }}>
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
      </View>
      <ReviewModules qNum = "1"> </ReviewModules>
      <ReviewModules qNum = "2"> </ReviewModules>
      <ReviewModules qNum = "3"> </ReviewModules>
      <ReviewModules qNum = "4"> </ReviewModules>
      <ReviewModules qNum = "5"> </ReviewModules>
      <ReviewModules qNum = "6"> </ReviewModules>
      <ReviewModules qNum = "7"> </ReviewModules>
      <ReviewModules qNum = "8"> </ReviewModules>

      <View style = {styles.buttonContainer}>
        <Button
            //onPress={}
            title="Submit"
        />
      </View>
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
    }
});

export default ReviewQuestionnaire;
