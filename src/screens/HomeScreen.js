'use strict'
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

let cards = [
  {
    src: 'fontawesome',
    name: 'heart',
    color: 'red'
  },
  {
    src: 'entypo',
    name: 'feather',
    color: '#7d4b12'
  },
  {
    src: 'entypo',
    name: 'flashlight',
    color: '#f7911f'
  }
]

const HomeScreen = ({ navigation, route }) => {
  
  function renderList(){
    return cards.map((item, index) => {
      return (
        <View key={index} style={styles.row}>
          { item.name }
        </View>
      );
    });
  }

  return (
    <View style={styles.body}>
      { 
        renderList()
      }
      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Test' })
        }
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  body: {
    justifyContent: 'space-between',
    padding: 10,
  }
});

export default HomeScreen;