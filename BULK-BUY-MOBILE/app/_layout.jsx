import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#000"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable onPress={() => {}}>
              <MaterialCommunityIcons name="bell" color="#000" size={20} />
            </Pressable>
          ),
        }}
      >
        <Stack.Screen
          name="(tabs)" // This refers to the layout for tabs, so no title should be shown for this screen.
          options={{
            headerShown: false, // Hide header for the (tabs) layout to prevent displaying "(tabs)" as the title
          }}
        />
        <Stack.Screen
          name="(pages)/orderHistory" // This refers to the layout for tabs, so no title should be shown for this screen.
          options={{
            headerTitle: "Order History"
          }}
        />
        <Stack.Screen
          name="(pages)/paymentOptions" // This refers to the layout for tabs, so no title should be shown for this screen.
          options={{
            headerTitle: "Payment"
          }}
        />
        <Stack.Screen
          name="(pages)/confirmation" // This refers to the layout for tabs, so no title should be shown for this screen.
          options={{
            headerTitle: "Confirmation"
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
