import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import garri from "../assets/images/bag-garri.png"

const Order = ({img=garri, name="Garri", units=10, unitPrice=8000, totalPrice=80000}) => {
  const [quantity, setQuantity] = useState(units)
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
            source={img}
            style={styles.image}
        />
        <Text style={styles.priceTag}>N{totalPrice}</Text>
      </View>
      <View style={styles.orderOperation}>
        <View>
          <Text style={styles.order}>{`${quantity} Units of ${name}`}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.orderQuantity}>
            <Pressable style={styles.addSubtractBtn}
                onPress={()=>setQuantity(prev=>prev <= 1 ? 1:prev-1)}
            >
                <Text style={styles.cartOprationSign}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable style={styles.addSubtractBtn}
                onPress={()=>setQuantity(prev=>prev+1)}
            >
                <Text style={styles.cartOprationSign}>+</Text>
            </Pressable>
          </View>
          <Pressable style={styles.addCartBtn}>
            <Text style={styles.whiteText}>N{quantity*unitPrice}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#DCA422",
    
  },
  imgContainer: {
    width: "30%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    position: "relative",
},
image: {
    width: "100%",
    height: "100%",
  },
priceTag: {
    position: "absolute",
    bottom: 3,
    left: "5%",
    backgroundColor: "#DCA422",
    padding: 3,
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 10,
  },
  orderOperation: {
  width: "70%",
  padding: 10,
  gap: 15,
},
orderQuantity: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
},
order: {
  fontWeight: "bold",
  fontSize: 15,
},
quantityContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
},
addCartBtn: {
  padding: 10,
  backgroundColor: "#CD3301",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
},
whiteText: {
  color: "#FFF",
},
quantity: {
  color: "#FFF",
  backgroundColor: "#CD3301",
  textAlign: "center",
  padding: 5,
  paddingHorizontal: 10,
  borderRadius: 10,
},
addSubtractBtn: {
  width: 40,
  justifyContent: "center",
  alignItems: "center",
},
cartOprationSign: {
  fontWeight: "bold",
  fontSize: 30,
}
})