"use client"
import { StyleSheet, View, Image } from "react-native";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mockCarousel from "../mocks/mock";

export default function Carousels() {
  return (
    <Swiper
      style={styles.wrapper}
      effect={"coverflow"}
      centeredSlides={false}
      pagination={true}
      navigation={true}
      spaceBetween={10}
      coverflowEffect={{
        rotate: 90,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
    >
      {mockCarousel.map((image) => (
        <SwiperSlide>
          <View key={image.id} style={styles.slide}>
            <Image
              source={{ uri: image.img }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
