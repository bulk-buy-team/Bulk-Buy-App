import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const HotDeals = ({title="Bag of beans | Bag of Wheat", deal="Discount 25%", btnText="Order Now", containerBg="#DCA422", btnBg="#CD3301"}) => {
  return (
    <View style={[styles.container, {backgroundColor: containerBg}]}>
      <Text style={styles.title}>{title} <SimpleLineIcons name="arrow-right" size={15} /></Text>
      <Text style={styles.dealText}>{deal}</Text>
      <TouchableOpacity style={[styles.dealBtn, {backgroundColor: btnBg}]}>
        <Link href={"paymentOptions"} style={styles.dealText}>{btnText}</Link>
      </TouchableOpacity>
    </View>
  )
}

export default HotDeals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    dealText: {
        color: "#FFF",
    },
    dealBtn: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
})