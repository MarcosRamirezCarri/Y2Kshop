import { StatusBar } from 'expo-status-bar';
import NavBar from './app/Navbar/NavBar';
import Carousels from './app/Carousel/Carousel';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar/>
      <Carousels/>
      <Text>YZK Shop</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
