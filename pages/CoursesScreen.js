import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView
} from 'react-native';

const CoursesScreen = ({ route, navigation }) => {
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
            You are on Courses Screen
          </Text>

        </View>
      </View>
      <Button
        title = "Curriculum"
        onPress={() => navigation.navigate('Curriculum')}
      />

      <Button
        title = "Key Takeaways"
        onPress={() => navigation.navigate('KeyTakeaways')}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default CoursesScreen;
