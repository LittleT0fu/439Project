
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Screen
import OpenScreen from './screens/OpenScreen';
import Court from './screens/Court';
import Court_detail from './screens/Court_detail';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="open" component={OpenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="court" component={Court} options={{
          title: "Court",
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: "#1F8700" },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="detail" component={Court_detail} options={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: "#1F8700" },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F8700'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  },
  touchOcapa: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 50
  },
  Touch2Start: {
    fontSize: 100,
  }
});
