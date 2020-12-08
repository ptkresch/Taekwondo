import React from 'react';
import Swiper from 'react-native-web-swiper';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Carousel = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Swiper
          innerContainerStyle={{ height: 200 }}
          from={0}
          minDistanceForAction={0.1}
          loop
          timeout={5}
          controlsProps={{
            dotsTouchable: true,
            dotActiveStyle: { backgroundColor: "#208630" },
            prevPos: "left",
            nextPos: "right",
            prevTitle: "<",
            nextTitle: ">",
            prevTitleStyle: { color: "#fff" },
            nextTitleStyle: { color: "#fff" },
          }}
          springConfig={{ speed: 5, overshootClamping: true }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#061d09e8",
            }}
          >
            <Image
              style={{ width: "100%", height: 200, marginHorizontal: "auto" }}
              source={require("../../assets/images/5.jpg")}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#061d09e8",
            }}
          >
            <Image
              style={{ width: "100%", height: 200, marginHorizontal: "auto" }}
              source={require("../../assets/images/6.jpg")}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#061d09e8",
            }}
          >
            <Image
              style={{ width: "100%", height: 200, marginHorizontal: "auto" }}
              source={require("../../assets/images/4.jpg")}
              resizeMode="contain"
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default Carousel;
