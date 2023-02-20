import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MouseScreen from "../screens/mouseScreen";
import TecladoScreen from "../screens/tecladoScreen";


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Mouse" component={MouseScreen}/>
                    <Tab.Screen name="Teclado" component={TecladoScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )

    }
}
