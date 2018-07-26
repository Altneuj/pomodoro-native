import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './components/Timer'
import styles from './assets/styles'

export default class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      counterType : null
    }
  }
  handleState = (type) => {
    console.log('runnning')
    this.setState({counterType: type})
  }
  handleCounterType = (type) => {
    this.setState({counterType: type})
  }
  render() {
    if(!this.state.counterType) {
    return (
      <View style={styles.container}>
      <Text> What would You like to start with? </Text>
      <Button title='Pomodoro' onPress={() => this.handleCounterType('pomodoro')}/>
      <Button title='Break' onPress={() => this.handleCounterType('break')}/>  
      </View>   
      );
    } else {
      return (
        <View style={styles.container}>
        <Timer type={this.state.counterType} handleState = {this.handleState} />
        </View>
      )
    }
  }
}


