import { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph, Button as Btn } from 'react-native-paper';

const InfoText = styled.Text`
  color: red;
  font-style: italic;
  font-size: 50px;
`;

export default function App() {
  const [todos, setTodes] = useState([
    { item: 'Play football', key: '1' },
    { item: 'Read text book', key: '2' },
    { item: 'Cook for family', key: '3' },
    { item: 'Do React Native projects', key: '4' },
    { item: 'Learn to play guiter', key: '5' },
    { item: 'Call dad and mom', key: '6' },
    { item: 'Transfer to electrician', key: '7' },
    { item: 'Transfer to mon', key: '8' },
    { item: 'Transfer to Dad', key: '9' },
  ])
  return (
    <>
      <View style={styles.container}>

        <Text></Text>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/2200' }} />
          <Title>The React Native Abuja Conference</Title>
          <Paragraph>
            This is tech packed Conference for javascript and react Native
            developers
          </Paragraph>
          <Btn mode='contained' color='black' style={{ marginBottom: 5 }}>Get Details</Btn>
          <Button title='Register Today' color="red" />

        </Card>
      </View>
      <SafeAreaView>
        <View style={styles.AD}>
          <InfoText>My Everyday work</InfoText>
          <ScrollView>
            {
              todos.map((todo) => {
                return <Text style={styles.text}>{todo.item}</Text>

              })
            }
          </ScrollView>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  AD: {
    marginTop: Platform.OS == 'android' ? StatusBar.currenHeight : 0,
  },
  text: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    paddingVertical: 24,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  }
});
