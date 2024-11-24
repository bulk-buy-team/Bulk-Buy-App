import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import CustomProgressBar from './CustomProgressBar'
import { Link } from 'expo-router'

const purchaseContributors = ({product="Rice", units=30, totalUnits=112}) => {
    const progress = units/totalUnits
  return (
    <View style={styles.container}>
      <Text style={styles.product}>General Analysis: {product} <SimpleLineIcons name="arrow-right" size={15} /></Text>
      <Text style={styles.text}>Number of units purchased</Text>
      <View style={styles.barContainer}>
        <CustomProgressBar progress={progress} />    
      </View>
      <View style={styles.contributors}>
        <View style={styles.noUnits}>
            <AntDesign name="dropbox" color="#CD3301" size={30} />
            <Text style={styles.text}>+{units} units</Text>
        </View>
        {/* <Pressable> */}
            <Link href={"orderHistory"} style={styles.text}>View all</Link>
        {/* </Pressable> */}
      </View>
    </View>
  )
}

export default purchaseContributors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DCA422",
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    product: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        color: "#FFF",
    },
    barContainer: {
        width: "90%",
    },
    contributors: {
        width: "90%",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    noUnits: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    }
})