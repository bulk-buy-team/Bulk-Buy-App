import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Pressable style={{ paddingHorizontal: 10 }} onPress={() => {}}>
            <MaterialCommunityIcons name="bell" color="#000" size={20} />
          </Pressable>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'products') {
            iconName = focused ? 'cube' : 'cube-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#CD3301',
          margin: 10,
          borderRadius: 30,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: 'Home', headerTitle: 'Home' }}
      />
      <Tabs.Screen
        name="cart"
        options={{ tabBarLabel: 'Cart', headerTitle: 'My Cart' }}
      />
      <Tabs.Screen
        name="products"
        options={{ tabBarLabel: 'Products', headerTitle: 'Product List' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarLabel: 'Profile', headerTitle: 'Profile' }}
      />
    </Tabs>
  );
};

export default TabLayout;
