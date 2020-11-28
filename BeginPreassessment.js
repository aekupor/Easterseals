import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const BeginPreassessment = ({navigation}) => {

  return (
    <View style={styles.container}>

    <Text style = {styles.defaultHeader}> Welcome to course B3:</Text>
    <Text style = {[styles.defaultHeader, {color:"#CF4B04"}]}> Course Name</Text>

    <Text style = {styles.defaultText}>Please click the next button to begin the course. </Text>

    <TouchableOpacity
        style = {[styles.defaultButton, {padding: 10}]}
        onPress={() => navigation.navigate('Preassessment')}>
        <Text style = {styles.textButton}> Next </Text>
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
        fontSize: 20,
        padding: 20,
        fontWeight: "bold"
    },
    defaultText: {
        textAlign: "center",
        fontSize: 16,
        padding: 10,
        fontWeight: "bold"
  },
});

export default BeginPreassessment;
