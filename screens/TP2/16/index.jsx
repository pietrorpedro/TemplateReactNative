import { View, Text } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';

import Feed from "./components/Feed";
import MyFeed from "./components/MyFeed";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Config from "./components/Config";
import PostDetails from "./components/PostDetails";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName={"Feed"}>
                <Drawer.Screen name={"Feed"} component={Feed}/>
                <Drawer.Screen name={"My Feed"} component={MyFeed}/>
                <Drawer.Screen name={"Friends"} component={Friends}/>
                <Drawer.Screen name={"Profile"} component={Profile}/>
                <Drawer.Screen name={"Config"} component={Config}/>
                <Drawer.Screen name={"PostDetails"} component={PostDetails} options={{}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}