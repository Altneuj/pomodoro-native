import React, {Component} from 'react';
import {Text, View, Stylesheet} from 'react-native';
import styles from '../assets/styles'
import {vibrate} from '../utils'

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    componentDidMount = () => {
        this.interval = setInterval(() => {this.handleTimer()}, 1000)
    }
    componentWillUnmount = () => {
        clearInterval()
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevState.counter)
        console.log(prevState.counter > 5)
        if(this.props.type == 'pomodoro' && this.state.counter > 5){
            vibrate()
            this.props.handleState('break');
            clearInterval(this.interval);
            this.setState({counter: 0})
        }
        if(this.props.type == 'break' && this.state.counter > 10){
            vibrate()
            this.props.handleState('pomodoro');
            clearInterval(this.interval)
            this.setState({counter: 0})
        }
        if(prevProps.type !== this.props.type){
            this.interval = setInterval(() => {this.handleTimer()}, 1000)
        }
    }
    handleTimer = () => {
        this.setState((prevState) => {return {counter: prevState.counter + 1}})
    }
    render(){
        console.log(this.props.type)
        switch(this.props.type){
        case 'pomodoro':
            return (
                <View style={styles.container}>
                    <Text> POMODORO </Text>
                    <Text> {this.state.counter} </Text>
                </View>
                )
        case 'break':
            return (
            <View style={styles.container}>
                <Text> BREAK </Text>
                <Text> {this.state.counter} </Text>
            </View>
        )
        }
    }
}

export default Timer