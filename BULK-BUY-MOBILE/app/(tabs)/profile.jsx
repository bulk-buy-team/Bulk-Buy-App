import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput'
import Carousel from 'react-native-reanimated-carousel'
import { deals } from '../../data'
import HotDeals from '../../components/HotDeals'
import WelcomeBanner from '../../components/WelcomeBanner'
import ProfileContents from '../../components/ProfileContents'

const profile = () => {

  const screenWidth = useWindowDimensions()?.width || 360;
  
  // Fallback for data
  const safeDeals = deals || [];

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.searchInputContainer, { width: screenWidth > 600 ? "80%" : "95%" }]}>
        <SearchInput />
      </View>
      <View style={styles.welcomeBannerContainer}>
        <WelcomeBanner />
      </View>
      <View style={styles.carouselCard}>
        <Carousel
          loop
          width={screenWidth}
          height={140}
          autoPlay
          autoPlayInterval={10000}
          data={safeDeals}
          renderItem={({ item, index }) => (
            <HotDeals key={index} {...item} />
          )}
        />
      </View>
      <View style={styles.paymentContainer}>
        <ProfileContents />
      </View>
    </ScrollView>
  )
}

export default profile

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
    // padding: 5,
    // overFlow: "hidden",
    paddingHorizontal: 10,
    height: 40,
    alignSelf: "center"
  },
  welcomeBannerContainer: {
    width: "100%",
  },
  carouselCard: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paymentContainer: {
    width: "100%",
  }
})