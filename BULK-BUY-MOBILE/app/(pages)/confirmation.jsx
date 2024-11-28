import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const confirmation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainers}>
        <FontAwesome name='check' size={40} color={"#CD3301"}/>
        <Text style={styles.successText}>Successful!</Text>
      </View>
      <View style={styles.subContainers}>
        <Text>Your order number is 85798546</Text>
      </View>
      <View style={styles.subContainers}>
        <Text>You will receive the confirmation email shortly</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.whiteText}>Continue shopping</Text>
      </Pressable>
    </View>
  )
}

export default confirmation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 40,
        paddingTop: 50,
    },
    subContainers: {
        alignItems: "center",

    },
    successText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#CD3301",
    },
    button: {
        backgroundColor: "#CD3301",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
        marginTop: 10,
      },
      whiteText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
      }
})