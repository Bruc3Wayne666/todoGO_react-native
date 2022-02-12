/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [todo, setTodo] = useState({
    title: '',
    steps: [],
  });
  // const [post, setPost] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [number, setNumber] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.mainPage.header}>
        <Text style={styles.mainPage.appTitle}>Todo Go</Text>
      </View>
      {/* <Text style={styles.text}>
        {text === '' ? 'Who are you?' : `Hello ${text}`}
      </Text>
      <TextInput
        onChangeText={handleInput}
        placeholder="Type smt"
        style={styles.input}
        keyboardType="ascii-capable"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    header: {
      width: '100%',
      borderWidth: 2,
      borderColor: 'yellow',
    },
    appTitle: {
      fontSize: 66,
      color: 'white',
      fontWeight: 'bold',
    },
  },
  body: {
    flex: 1,
    backgroundColor: '#333333',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  // input: {
  //   borderWidth: 2,
  //   borderColor: 'green',
  //   borderRadius: 16,
  //   width: '60%',
  //   fontSize: 26,
  //   color: 'yellow',
  //   textAlign: 'center',
  // },
  // text: {
  //   fontSize: 68,
  //   color: '#ffffff',
  //   marginTop: 20,
  // },
});

export default App;
