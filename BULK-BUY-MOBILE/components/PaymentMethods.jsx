import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PaymentMethods = ({options, selected, selectOption}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.optionsContainer}>
       {options.map((option, index)=>(
         <TouchableOpacity 
          onPress={() => selectOption(option.value)}
          style={styles.optionRow} 
          key={index}>
          <View style={styles.rowTitle}>
            <View style={styles.emptyBg}></View>
            <Text style={styles.option}>{option.label}</Text>
          </View>
          <View style={[styles.ring, option.value === selected && {borderColor: "#CD3301"}]}>
            <View style={[styles.circleBackground, option.value === selected && {backgroundColor: "#CD3301"}]}></View>
          </View>
       </TouchableOpacity>
       ))}
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.optionRow}>
          <Text>Delivery Charge</Text>
          <Text>N0.00</Text>
        </View>
        <View style={styles.optionRow}>
          <Text>Sub total</Text>
          <Text>N99,000.00</Text>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.option}>Total</Text>
          <Text style={styles.option}>N99,000.00</Text>
        </View>
      </View>
      <Pressable style={styles.listFooter}>
        <Text style={styles.whiteText}>Checkout</Text>
      </Pressable>
    </View>
  )
}

export default PaymentMethods

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  optionsContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    gap: 10,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  emptyBg: {
    width: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "#CD3301",
    borderRadius: 10,
    marginRight: 20,
  },
  option: {
    fontWeight: "bold",
    fontSize: 15,
  },
  ring: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    // borderColor: "#CD3301",
    borderColor: "#999999",
    borderRadius: 99,
  },
  circleBackground: {
    width: 1,
    padding: 5,
    margin: 2,
    // backgroundColor: "#CD3301",
    backgroundColor: "#999999",
    borderRadius: 99,
  },
  listFooter: {
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