import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {Colors} from '@/constants/Colors.ts';

const TabLayout = () => {
  return (
    <Tabs screenOptions = {{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY}}>
        <Tabs.Screen name='home'
          options={{
            title: "Home",
            tabBarIcon: ({color}) => <FontAwesome5 name="home" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name='explore' 
               options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome5 name="search" size={24} color={color} />
              }}
        />
        <Tabs.Screen name='profile'
               options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />
              }}
        />
    </Tabs>
  )
}

export default TabLayout