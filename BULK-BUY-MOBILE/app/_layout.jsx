import { Stack } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DCA422',
        },
        headerTintColor: '#FFF',
        headerTitle: () => null,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Pressable onPress={() => alert("Menu button pressed")}>
            <Text style={{ fontSize: 20, color: "#CD3301" }}>Logo</Text>
          </Pressable>
        ),
      }}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
