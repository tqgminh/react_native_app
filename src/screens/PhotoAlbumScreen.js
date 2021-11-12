import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Modal } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import ImageElement from "../components/userInfo/ImageElement";
import UserHeader from "../components/userInfo/UserHeader";
import { defaultColor } from "../styles";
export default function PhotoAlbumScreen({ navigation }) {
  const [image, setImage] = useState({
    modalImage: require("../assets/images/nguoi.jpeg"),
    images: [
      require("../assets/images/nguoi.jpeg"),
      require("../assets/images/dao.jpg"),
      require("../assets/images/sunset.jpeg"),
      require("../assets/images/winter.jpg"),
      require("../assets/images/dog.jpeg"),
      require("../assets/images/bridge.jpeg"),
    ],
  });
  const [modalvisible, setModalvisible] = useState(false);
  let images = image.images.map((val, key) => {
    console.log(val);
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setModalvisible(!modalvisible);
          // setImage({ modalImage: image.images[key] });
        }}
      >
        <View style={styles.imagewrap}>
          <ImageElement imgsource={val}></ImageElement>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <UserHeader navigation={navigation} />
      <View style={styles.container}>
        <Modal
          style={styles.modal}
          animationType={"fade"}
          transparent={true}
          visible={modalvisible}
          onRequestClose={() => {
            setModalvisible(!modalvisible);
          }}
        >
          <View style={styles.modal}>
            <Text
              style={styles.text}
              onPress={() => {
                setModalvisible(!modalvisible);
              }}
            >
              Close
            </Text>
            <ImageElement imgsource={image.modalImage}></ImageElement>
          </View>
        </Modal>
        {images}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get("window").height / 3 - 12,
    width: Dimensions.get("window").width / 2 - 4,
    backgroundColor: "#fff",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  text: {
    color: "#fff",
    backgroundColor: "blue",
    // width: "80%",
    // height: 100,
    // alignSelf:'center
  },
});
