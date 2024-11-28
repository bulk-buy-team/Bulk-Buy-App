import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { FlatList } from 'react-native-gesture-handler';
import SearchInput from '../../components/SearchInput';
import HotDeals from '../../components/HotDeals';
import Order from '../../components/Order';
import { featuredProducts, orderDeals } from '../../data';

const Cart = () => {
  const screenWidth = useWindowDimensions().width;

  // Fallback for data
  const safeDeals = orderDeals || [];
  const safeFeaturedProducts = featuredProducts || [];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={safeFeaturedProducts}
        renderItem={({ item }) => <Order {...item}/>}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={<View style={{height: 15}}></View>}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={[styles.searchInputContainer, { width: screenWidth > 600 ? "80%" : "95%" }]}>
              <SearchInput />
            </View>
            <View style={styles.carouselCard}>
              <Carousel
                loop
                width={screenWidth}
                height={140}
                autoPlay
                autoPlayInterval={10000}
                data={safeDeals}
                renderItem={({ item, index }) => <HotDeals key={index} {...item} 
                btnBg = {"#DCA422"}
                containerBg={"#CD3301"}
              />
              }
              />
            </View>
            <View style={{marginTop: 30}}>
              <Text style={styles.orderCount}>{`Your order (${safeFeaturedProducts.length})`}</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <Pressable style={styles.listFooter}>
            <Text style={styles.whiteText}>Place order</Text>
          </Pressable>
        }
        contentContainerStyle={styles.contentContainer}
      />
    </GestureHandlerRootView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    marginBottom: 15,
  },
  searchInputContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    alignSelf: "center",
    marginBottom: 15,
  },
  carouselCard: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  orderCount: {
    fontWeight: "bold",
    fontSize: 20,
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
});
