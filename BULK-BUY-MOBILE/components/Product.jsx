import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import garri from "../assets/images/bag-garri.png"
import React from 'react'

const Product = ({name="Garri", units=10, unitPrice=800, totalPrice=88000, img=garri}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: "bold"}}><Text style={{fontSize: 25}}>{name}:</Text> ({units} units)</Text>
        <Text style={{fontWeight: "bold"}}>1 unit: N{unitPrice}.00</Text>
      </View>
      <View style={styles.imgContainer}>
      <ImageBackground
          source={img}
          style={styles.image}
      />
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>N{totalPrice}</Text>
      </View>
    </Pressable>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    maxWidth: "47%",
    minWidth: "47%",
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    overflow: "hidden",
    flexGrow: 1,
  },
  header: {
    width: "100%",
    gap: 2,
    paddingHorizontal: 15,
  },
  imgContainer: {
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
},
  footer: {
    // width: "100%",
    backgroundColor: "#CD3301",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  price: {
    backgroundColor: "#DCA422",
    color: "#FFF",
    padding: 5,
    borderRadius: 10,
  }
})