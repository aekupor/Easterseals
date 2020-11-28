import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Profile Screen
          </Text>
          <Button
            title = "Initial Questionnaire"
            onPress={() => navigation.navigate('BeginInitialQuestionnaire')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;
