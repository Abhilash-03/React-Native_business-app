import { View, Text } from 'react-native'
import React from 'react'
import styles from '../css/main'
import { useUser } from '@clerk/clerk-expo'

const home = () => {
  const {user} = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.highlightedText}>Welcome</Text>
      <Text style={styles.heading}>Hi, {user.firstName}</Text>
    </View>
  )
}

export default home