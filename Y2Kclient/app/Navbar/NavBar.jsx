import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import theme from "../theme";

export default function NavBar () {
    return(
        <View style={styles.container}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Y2K</Text>
          </View>
            <View style={styles.navItem}>
            <TouchableOpacity >
        <Text style={styles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navText}>Configuración</Text>
      </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    position: 'sticky',
    flexDirection: 'row',
    backgroundColor: theme.colors.textPrimary,
    justifyContent: 'space-between',
    alignItems: 'center',
    placeSelf:'start',
    height: 60,
    width: '100vw',
    padding: '12px',
  },
  navItem: {
      flex: 1,
      gap: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navText: {
      color: theme.colors.textFourth,
      fontSize: theme.fontsSizes.big,
      fontWeight: theme.fontWeight.semiBold
    },
});
