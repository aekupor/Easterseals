import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LIST_DATA = new Array(2).fill('');
const CARD_RADIUS = 8;

const Curriculum = ({navigation}) => {

const Card = ({title, letter}) => (
  <View style={styles.cardWrapper}>
    <View style={styles.cardImageWrapper}>
      <Image
        source={require('./images/square.png')}
        style={styles.cardImage}
      />
      <View style={{position: 'absolute', top: 0, left: 50, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-start'}}>
        <Text style = {[styles.textCardButton, {fontSize: 30}]}>{letter}</Text>
      </View>
    </View>
    <View style={styles.cardTextWrapper}>
      <Text style = {styles.headerText}> {title} </Text>
    </View>
    <TouchableOpacity style = {styles.cardButton}>
         <MaterialCommunityIcons
           name="arrow-right"
           color="white"
           size={15}
         />
    </TouchableOpacity>
  </View>
);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView>
          {/*<TouchableOpacity onPress={() => navigation.navigate('Preassessment')}>
              <Text> Pre-Assessment </Text>
          </TouchableOpacity>*/}
          <Button
              title = "Pre-Assessment"
              onPress={() => navigation.navigate('BeginPreassessment')}
            />
          <Card title="Job Search Basics & Preparation" letter = "A"> </Card>
          <Card title="Interviewing" letter = "G"> </Card>
          <Card title="Employee Etiquette" letter = "H"> </Card>
          <Card title="Self-Assessment" letter = "B"> </Card>
          <Card title="Resumes" letter = "D"> </Card>
          <Card title="Research" letter = "C"> </Card>
          <Card title="Networking (Social Media)" letter = "E"> </Card>
          <Card title="Networking" letter = "F"> </Card>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20
  },
  container: {
    alignItems: "center"
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  logo: {
    width: 50,
    height: 60,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#022169",
    textAlign: "center",
    marginTop: 40
  },
  defaultText: {
    textAlign: "center",
    color: "#022169",
    fontSize: 16,
    padding: 20
  },
  defaultText2: {
      textAlign: "center",
      color: "#022169",
      fontSize: 20,
      padding: 20
  },
  myClubsContainer: {
    padding: 10,
    width: "70%",
    borderColor: "#B3B9BC",
    borderWidth: 5,
    alignItems: "center",
    margin: 10
  },
  startSwipeFooter: {
  },
  headerText: {
    fontSize:20,
    fontWeight: "bold",
    textAlign: "center"
  },
  myClubsPhoto: {
    width: 100,
    height: 150
  },
  myClubsHeader: {
    backgroundColor: "#B3B9BC"
  },
    cardWrapper: {
      height: 150,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: CARD_RADIUS,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
      backgroundColor: '#fff',
    },
    cardImageWrapper: {
      flex: 1,
      overflow: 'hidden',
      borderTopLeftRadius: CARD_RADIUS,
      borderBottomLeftRadius: CARD_RADIUS,
    },
    cardImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      height: 150,
      width: 150
    },
    cardTextWrapper: {
      flex: 1,
      alignItems: "center",
      textAlign: "center",
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    textCardButton: {
        color: "white",
        fontWeight: "bold"
    },
    cardButton: {
        borderRadius: 40,
        height: 20,
        width: 20,
        marginRight: 10,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#004473"
    },
});

export default Curriculum;
