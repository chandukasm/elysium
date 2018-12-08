import React, { Component } from 'react';
import { StyleSheet,Image, ScrollView, Text,View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './Containers/HomeScreen';
import BookScreen from './Containers/BookScreen';
import ElectronicsScreen from './Containers/ElectronicsScreen';
import ShoppigCartIcon from './Containers/ShoppingCartIcon';



const AppStackNavigator = createStackNavigator ({
   Home: HomeScreen,
    Books:BookScreen,
    Electronics : ElectronicsScreen,
},{
    navigationOptions:{
        headerTitle : 'shopping app',
        headerRight:(<ShoppigCartIcon/>)
    }
}
)



export default class ShoppingCart extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}


const styles = StyleSheet.create({
 
    MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
    alignItems : 'center'
     
    },

});