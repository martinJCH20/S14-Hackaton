import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStackNavigator } from './Router/drawer'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

    render(){
         return (
                <NavigationContainer>
                    <DrawerStackNavigator />
                </NavigationContainer>
          )
    }
}