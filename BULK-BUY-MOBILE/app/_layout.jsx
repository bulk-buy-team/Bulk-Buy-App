import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DCA422',
        },
        headerTintColor: '#F6F6F6',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: ()=>(
            <Pressable onPress={()=>alert("Menu button pressed")} >
              <Text style={{fontSize: 20, color: "#CD3301"}}>Menu</Text>
            </Pressable>
          )
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
