import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput'
import Product from '../../components/Product';
import { featuredProducts } from '../../data';

const products = () => {

  const screenWidth = useWindowDimensions()?.width || 360;

  const safeFeaturedProducts = featuredProducts || [];

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.searchInputContainer, { width: screenWidth > 600 ? "80%" : "95%" }]}>
        <SearchInput />
      </View>
      <View style={styles.productListContainer}>
        {safeFeaturedProducts.map((item, index)=>(
          <Product
          key={index}
            {...item}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default products

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: "#FFF",
    gap: 15,
  },
  searchInputContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    alignSelf: "center"
  },
  productListContainer: {
    flex: 1,
    gap: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
  }
})