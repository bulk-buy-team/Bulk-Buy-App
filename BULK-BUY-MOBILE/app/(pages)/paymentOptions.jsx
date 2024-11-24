import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import SearchInput from '../../components/SearchInput';
import Carousel from 'react-native-reanimated-carousel';
import { orderDeals } from '../../data';
import HotDeals from '../../components/HotDeals';
import PaymentMethods from '../../components/PaymentMethods';

const paymentOptions = () => {

    const [selected, setSelected] = useState(null)

    const screenWidth = useWindowDimensions()?.width || 360;

    const safeDeals = orderDeals || [];

    const options = [
        { label: 'Credit card', value: 'creditard' },
        { label: 'PayPal', value: 'payPal' },
        { label: 'Bitcoin', value: 'bitcoin' },
    ];

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
        <View>
            <PaymentMethods
                options={options}
                selected={selected}
                selectOption={setSelected}
            />
        </View>
    </ScrollView>
  )
}

export default paymentOptions

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
      carouselCard: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      },
})