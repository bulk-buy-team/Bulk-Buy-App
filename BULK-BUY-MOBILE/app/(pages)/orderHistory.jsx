import { FlatList, SafeAreaView, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import SearchInput from '../../components/SearchInput';
import HistoryCard from '../../components/HistoryCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { orderDetails } from '../../data';

const OrderHistory = () => {
  const screenWidth = useWindowDimensions()?.width || 360;

  const safeOrderDetails = orderDetails || [];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={safeOrderDetails}
        renderItem={({ item }) => <HistoryCard {...item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={<View style={{ height: 15 }} />}
        ListHeaderComponent={
          <View style={[styles.searchInputContainer, { width: screenWidth > 600 ? '80%' : '95%' }]}>
            <SearchInput />
          </View>
        }
        ListFooterComponent={<View style={{ height: 20 }} />}
        contentContainerStyle={styles.contentContainer}
      />
    </GestureHandlerRootView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  contentContainer: {
    gap: 15,
    padding: 15,
    backgroundColor: '#FFF',
    paddingBottom: 30,
  },
  searchInputContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    alignSelf: 'center',
  },
});
