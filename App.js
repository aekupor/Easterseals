import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

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
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
