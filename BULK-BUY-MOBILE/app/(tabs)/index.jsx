import { FlatList, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import SearchInput from '../../components/SearchInput';
import WelcomeBanner from '../../components/WelcomeBanner';
import Carousel from 'react-native-reanimated-carousel';
import HotDeals from '../../components/HotDeals';
import FeaturedProducts from '../../components/FeaturedProducts';
import { deals, featuredProducts } from '../../data';
import PurchaseContributors from "../../components/PurchaseContributors"
import { contributions } from '../../data';

const Home = () => {

  useEffect(() => {
    const prepare = async () => {
      try {
        // Prevent splash screen from hiding automatically
        await SplashScreen.preventAutoHideAsync();
        // Hide the splash screen once resources are ready
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Splash screen error:", error);
      }
    };
  
    prepare();
  }, []);
  
  const screenWidth = useWindowDimensions()?.width || 360;
  
  // Fallback for data
  const safeDeals = deals || [];
  const safeFeaturedProducts = featuredProducts || [];
  const safeContributions = contributions || [];
  
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
      <View style={styles.featuredProducts}>
        <FlatList
          data={safeFeaturedProducts}
          renderItem={({ item }) => <FeaturedProducts {...item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.carouselCard}>
        <Carousel
          loop
          width={screenWidth}
          height={140}
          autoPlay
          autoPlayInterval={7000}
          data={safeContributions}
          renderItem={({ item, index }) => (
            <PurchaseContributors key={index} {...item} />
          )}
        />
      </View>
    </ScrollView>
  );
  
};

export default Home;

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
  featuredProducts: {
    // borderWidth:1,
    width: "100%",
    height: 250,
  },
});

