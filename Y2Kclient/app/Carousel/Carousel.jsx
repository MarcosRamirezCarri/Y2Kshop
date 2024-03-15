import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
  } from "react-native";
import mockCarousel from '../mocks/mock';

  const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;

export default function Carousel() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={mockCarousel}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];
  
        
            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <Image source={ item.img } style={styles.posterImage} />
                  <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                    {" "}
                    
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    posterImage: {
      width: "100%",
      height: ANCHO_CONTENEDOR * 1.2,
      borderRadius: 24,
      margin: 0,
      marginBottom: 10,
    },
  });