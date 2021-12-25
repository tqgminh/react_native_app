import React, { useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  Image,
  Button,
  CheckBox,
  RadioButton,
  TouchableWithoutFeedback,
} from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
import TitleBar from "../components/TitleBar";
import { useSelector, useDispatch } from 'react-redux';
import { FILE_URL } from "../api/config";
import { editProfileAPI } from "../redux/actions/userAction";
import { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';


export default function ChangeInfoScreen({ navigation, route }) {
  const { token, phone, username, isLogin, avatar, coverImage, gender, birthday } = useSelector(state => state.userReducer);
  const [newName, setNewName] = useState({ value: username, error: "" });
  const [newGender, setNewGender] = useState({ value: gender, error: "" });
  const [newBirthday, setNewBirthday] = useState({ value: birthday, error: "" });
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  const checkInfo = () => {
    return true;
  }

  const ChangePress = async () => {
    if (!checkInfo()) return;
    setSpinner(true);
    let rs = await editProfileAPI(token, newName.value, newGender.value, newBirthday.value, dispatch);
    setSpinner(false);
    if (rs.success) {
      showMessage({
        title: 'edit profile success!',
        message: 'Cập nhật thông tin thành công!',
        type: 'success',
        position: 'center'
      });
    } else {
      showMessage({
        title: 'edit profile fail!',
        message: 'Có lỗi xảy ra vui lòng thử lại!',
        type: 'danger',
        position: 'center'
      });
    }
  }

  return (
    <View style={styles.container}>

      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />

      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <View>
          <TitleBar navigation={navigation} data={{ text: username }} />
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <View
            style={{
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: FILE_URL + avatar.fileName }}
              style={{ width: 70, borderRadius: 50, height: 70 }}
            />
          </View>
          <View style={{ width: "75%" }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TextInput
                returnKeyType="next"
                value={newName.value}
                defaultValue={newName.value}
                onChangeText={(text) => setNewName({ value: text, error: '' })}
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                returnKeyType="next"
                value={newGender.value}
                defaultValue={newGender.value}
                onChangeText={(text) => setNewGender({ value: text, error: '' })}
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ alignItems: "flex-end", marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                returnKeyType="next"
                value={newBirthday.value}
                defaultValue={newBirthday.value}
                onChangeText={(text) => setNewBirthday({ value: text, error: '' })}
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ alignItems: "flex-end", marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          {/* <TextInput
            placeholder="Username"
            style={{ backgroundColor: "white", height: 50 }}
          ></TextInput> */}
          <View style={{ alignItems: "center", marginTop: 10, width: "100%" }}>
            <Text
              style={{
                backgroundColor: defaultColor,
                width: "60%",
                height: 40,
                borderRadius: 30,
                color: "white",
                textAlignVertical: "center",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
              onPress={ChangePress}
            >
              CẬP NHẬT
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultColor,
  },
  text: {
    color: defaultColor,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 20,
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});
