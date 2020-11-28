import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import ProgressScreen from './pages/ProgressScreen';
import JobBoardScreen from './pages/JobBoardScreen';
import ProfileScreen from './pages/ProfileScreen';
import CoursesScreen from './pages/CoursesScreen';
import Curriculum from './Curriculum';
import BeginPreassessment from './BeginPreassessment'
import Preassessment from './Preassessment';
import AssessmentScore from './AssessmentScore';
import Quiz from './Quiz';
import Video from './Video';
import InitialQuestionnaire from './InitialQuestionnaire';
import BeginInitialQuestionnaire from './BeginInitialQuestionnaire'
import InitialQuestionnaireType2 from './InitialQuestionnaireType2'
import KeyTakeaways from './KeyTakeaways'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProgressStack() {
  return (
      <Stack.Navigator
        initialRouteName="Progress"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ title: 'Progress Page' }}/>
      </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile Page' }}/>
        <Stack.Screen
            name="BeginInitialQuestionnaire"
            component={BeginInitialQuestionnaire}
        />
        <Stack.Screen
          name="InitialQuestionnaire"
          component={InitialQuestionnaire}
        />
        <Stack.Screen
          name="InitialQuestionnaireType2"
          component={InitialQuestionnaireType2}
        />
      </Stack.Navigator>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Courses"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{ title: 'Courses Page' }}/>
      <Stack.Screen
        name="Curriculum"
        component={Curriculum}
      />
      <Stack.Screen
        name="BeginPreassessment"
        component={BeginPreassessment}
      />
      <Stack.Screen
        name="Preassessment"
        component={Preassessment}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
      />
      <Stack.Screen
        name="AssessmentScore"
        component={AssessmentScore}
      />
      <Stack.Screen
        name="Video"
        component={Video}
      />
      <Stack.Screen
        name="KeyTakeaways"
        component={KeyTakeaways}
      />
    </Stack.Navigator>
  );
}

function JobBoardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Job Board"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Job Board"
        component={JobBoardScreen}
        options={{ title: 'Job Board Page' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="ProgressStack"
          component={ProgressStack}
          options={{
            tabBarLabel: 'Progress',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="Progress"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="CoursesStack"
          component={CoursesStack}
          options={{
            tabBarLabel: 'Courses',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }} />

        <Tab.Screen
          name="JobBoardStack"
          component={JobBoardStack}
          options={{
            tabBarLabel: 'Job Board',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="detail"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="person"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;
