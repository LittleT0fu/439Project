import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
  "https://i.ibb.co/d4Y2ggg/308161264-1327197721150567-1863746355703016934-n.png",
  "https://i.ibb.co/1635GqZ/306667696-645945110404719-7783403625153196075-n.png",
  "https://i.ibb.co/RyqCvN9/306914316-560465092507838-1984462691901328811-n.png",
];

export default class Image_slider extends Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };
  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {images.map((item, index) => (
            <Image key={index} source={{ uri: item }} style={style.image} />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
          }}
        >
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? { color: "white", margin: 3 }
                  : { color: "gray", margin: 3 }
              }
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { width, height },
  scroll: { width, height },
  image: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingActive: { color: "white", margin: 3 },
  paging: { color: "gray", margin: 3 },
});