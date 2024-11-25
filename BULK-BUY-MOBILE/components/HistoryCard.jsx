import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HistoryCard = ({units=3, name="Garri", time="3:40 pm", date="16 Aug 2024", orderCode="82039df"}) => {
  return (
    <View style={styles.container}>
        <View style={styles.leftCircle}></View>
        <View style={styles.rightCircle}></View>
      <View style={styles.cardMain}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{units} Units of {name}</Text>
            <Text style={styles.whiteText}>{time}</Text>
        </View>
        <View><Text style={styles.whiteText}>{date}</Text></View>
        <View style={styles.orderCode}><Text style={styles.whiteText}>Order code: {orderCode}</Text></View>
      </View>
      <View style={styles.cardFooter}>
        <Link href={"confirmation"} style={styles.link}>View receipt</Link>
      </View>
    </View>
  )
}

export default HistoryCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#E5B24E",
        borderRadius: 15,
        overflow: "hidden",
        position: "relative",
    },
    leftCircle: {
        width: 50,
        height: 50,
        borderRadius: 99,
        position: "absolute",
        top: 50,
        left: -25,
        zIndex: 2,
        backgroundColor: "#FFF",
    },
    rightCircle: {
        width: 50,
        height: 50,
        borderRadius: 99,
        position: "absolute",
        top: 50,
        right: -25,
        zIndex: 2,
        backgroundColor: "#FFF",
    },
    cardMain: {
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    whiteText: {
        color: "#FFF",
    },
    orderCode: {
        marginVertical: 10,
    },
    cardFooter: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CD3301",
        paddingVertical: 10,
    },
    link: {
        padding: 5,
        color: "#FFF",
        width: 150,
        textAlign: "center",
        backgroundColor: "#E5B24E",
        borderRadius: 15,
        fontWeight: "bold",
        fontSize: 15,
    },
})