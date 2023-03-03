import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'



import Routes from './src/routes/index'
import CartProvider from './src/contexts/CartContext'

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
