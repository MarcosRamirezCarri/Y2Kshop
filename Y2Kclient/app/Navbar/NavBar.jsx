import { Text, StyleSheet, View, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'space-around',
      placeSelf:'start',
      height: 70,
      width: '100vw'
    },
    navItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      navText: {
        color: '#fff',
        fontSize: 18,
      },
  });

export default function NavBar () {

    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Configuración</Text>
      </TouchableOpacity>
        </View>
    )
}
