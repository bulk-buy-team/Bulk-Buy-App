import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function WelcomeBanner() {
  return (
    <View style={styles.container}>
        <View style={styles.profileDetails}>
          <FontAwesome name="user-circle-o" color={"#000"} size={60} style={styles.userIcon}/>
          <View>
              <Text style={styles.nameText}>Welcome Emmanuel!</Text>
              <Text style={styles.text}>You have been missed</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#DCA422",
      padding: 10,
      borderRadius: 10,
  },
  profileDetails: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 20,

  },
  userIcon: {
      backgroundColor: "#F6F6F6",
      borderRadius: 50,
  },
  nameText: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 25,
  },
  text: {
      color: "#FFF",
  }
})