import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MenuDrawer } from '../Components/Menu/MenuDrawer'
import Scene1 from '../Scenes/Scene1';
import Scene2 from '../Scenes/Scene2';
const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
   // console.warn('props', props)
    return(
        <Drawer.Navigator
        initialRouteName={'Scene1'}        
        drawerContent={(props) => <MenuDrawer {...props}/>}
        >
            <Drawer.Screen
                name='Scene1' 
                component={Scene1}
            />
            <Drawer.Screen
                name='Scene2' 
                component={Scene2}
            />
        </Drawer.Navigator>
    )
}

export {
DrawerStackNavigator
}
