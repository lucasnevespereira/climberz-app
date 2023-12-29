import { Tabs } from 'expo-router';
import Colors from '../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary
    }}>
      <Tabs.Screen name='index' options={{
        headerShown: false,
        tabBarLabel: 'Meets',
        tabBarIcon: ({ size, color }) => <FontAwesome5 name="mountain" size={size} color={color} />,
      }} />
      <Tabs.Screen name='profile' options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ size, color }) => <FontAwesome5 name="user" size={size} color={color} />,
      }} />
    </Tabs>
  );
}
