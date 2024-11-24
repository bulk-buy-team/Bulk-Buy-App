import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import garri from "../assets/images/bag-garri.png"

const FeaturedProducts = ({name="Garri", units=110, unitPrice=110, totalPrice=88000, img=garri}) => {

    const [quantity, setQuantity] = useState(1)
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.imgContainer}>
            <ImageBackground
                source={img}
                style={styles.image}
            />
            <Text style={styles.priceTag}>N{totalPrice}</Text>
        </TouchableOpacity>
        <View >
            <View style={styles.unitsContainer}>
                <View >
                    <Text><Text style={{fontWeight: "bold", fontSize: 20}}>{name}: </Text>{units} units</Text>
                </View>
                <View>
                    <Text><Text style={{fontWeight: "bold", fontSize: 15}}>1 unit: </Text>N{unitPrice}</Text>
                </View>
            </View>
            <View style={styles.addCart}>
                <Pressable style={styles.addCartBtn}>
                    <Text style={styles.whiteText}>Add to cart</Text>
                </Pressable>

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
        </View>
    </View>
  )
}

export default FeaturedProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "space-between",
        marginHorizontal: 10,
        // borderWidth:1,
    },
    imgContainer: {
        width: "100%",
        height: "60%",
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#F6F6F6",
        position: "relative",
        padding: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    priceTag: {
        position: "absolute",
        bottom: 5,
        left: "10%",
        backgroundColor: "#DCA422",
        padding: 5,
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 10,
    },
    unitsContainer: {
        gap: 5,
    },
    addCart: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
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