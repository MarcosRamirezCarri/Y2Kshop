import { Text, StyleSheet, View } from "react-native"

export default function NavBar () {
    return(
        <View style={styles.container}>
            <Text>Navbar</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 60
    },
  });