import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const BeginInitialQuestionnaire = ({navigation}) => {

  return (
    <View style={styles.container}>

    <Text style = {styles.defaultHeader}> Initial Assessment </Text>

    <Text style = {styles.defaultText}>Thank you for registering for this app. Please answer the following 4 questions to the best of your ability.</Text>
    <Text style = {styles.defaultText}>Your responses will help guide you to the content that is most beneficial for you.</Text>

    <TouchableOpacity
        style = {[styles.defaultButton, {padding: 10}]}
        onPress={() => navigation.navigate('InitialQuestionnaire')}>
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
        backgroundColor: "#DA540C",
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
    defaultHeader: {
        textAlign: "center",
        color: "#022169",
        fontSize: 20,
        padding: 20,
        fontWeight: "bold"
    },
    defaultText: {
        textAlign: "center",
        color: "#022169",
        fontSize: 16,
        padding: 10
      },
});

export default BeginInitialQuestionnaire;
