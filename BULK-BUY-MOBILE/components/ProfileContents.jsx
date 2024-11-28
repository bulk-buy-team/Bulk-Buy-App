import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'

const ProfileContents = () => {

    const options = [
        {iconFamily: FontAwesome, iconName: "money", text: "Payments" },
        {iconFamily: Ionicons, iconName: "document-text-outline", text: "Order History" },
        {iconFamily: FontAwesome, iconName: "question", text: "FAQs" },
        {iconFamily: MaterialIcons, iconName: "local-phone", text: "Support" },
        {iconFamily: Ionicons, iconName: "settings-outline", text: "Settings" },
        {iconFamily: MaterialIcons, iconName: "logout", text: "Logout" },
    ]
  return (
    <View style={styles.container}>
      {options.map((option, index)=>(
        <View style={styles.rowContainer} key={index}>
        <option.iconFamily name={option.iconName} size={20} color={"#FFF"}/>
        <Text style={styles.text}>{option.text}</Text>
      </View>
      ))}
    </View>
  )
}

export default ProfileContents

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: "100%",
        gap: 10,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        padding: 10,
        backgroundColor: "#CD3301",
        borderRadius: 20,
        paddingLeft: 20,
    },
    text: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
    }
})