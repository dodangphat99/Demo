import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  Modal,
  SCrollView,
} from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";

const { height, width } = Dimensions.get("window");

let initialValues = {
  email: "",
  password: "",
};
let data = [
  {
    id: 1,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 2,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 3,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 4,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 5,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 6,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
  {
    id: 7,
    type: "căn hộ",
    room: "Studio",
    time: "12:12",
    price: "20000000",
    noithat: "Chưa hoàn thiện",
    ghichu: "Cọc 1 tháng trước",
    tennguoibaocao: "Nguyen Van Hieu",
  },
];

export default function App() {
  const [refreshing, setReFreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(async () => {
    const result = await axios.get("http://localhost:3004/userList");
    console.log(result.data);
  }, []);

  refreshTop = () => {
    useEffect();
  };

  const onSubmit = async (values) => {
    // const payload = {
    //   email: values.email,
    //   password: values.password,
    // };
    // const result = await axios.post("http://localhost:3004/userList", payload);
    // console.log(result);
    setShowModal(false);
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Modal transparent={true} visible={showModal}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#000000aa",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.enterInformation}>
                <View>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={onSubmit}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                    }) => (
                      <>
                        <View style={styles.viewLoginInput}>
                          <View style={styles.viewInput}>
                            <TextInput
                              style={styles.input}
                              underlineColorAndroid="transparent"
                              multiline={true}
                              placeholder="Enter email"
                              onChangeText={handleChange("email")}
                              onBlur={handleBlur("email")}
                              value={values.email}
                            ></TextInput>
                            {errors.email && (
                              <View style={styles.viewValidation}>
                                <Text style={{ color: "red" }}>
                                  {errors.email}
                                </Text>
                              </View>
                            )}
                            <View style={styles.viewTextInput}>
                              <Text style={[styles.textInputLogin]}>
                                Email or phone number
                              </Text>
                            </View>
                          </View>

                          <View style={styles.viewInput}>
                            <TextInput
                              style={styles.input}
                              underlineColorAndroid="transparent"
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                              value={values.password}
                              placeholder="Enter password"
                            ></TextInput>
                            {errors.password && (
                              <View style={styles.viewValidation}>
                                <Text style={{ color: "red" }}>
                                  {errors.password}
                                </Text>
                              </View>
                            )}
                            <View style={styles.viewTextInput}>
                              <Text style={[styles.textInputLogin]}>
                                Password
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={handleSubmit}
                              style={styles.buttonSignIn}
                            >
                              <Text style={[styles.viewTextButtonSignIn]}>
                                SUBMIT
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                  </Formik>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            height: 30,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginBottom: 20,
          }}
          onPress={() => setShowModal(true)}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Add</Text>
        </TouchableOpacity>
        <View style={{ width: width,zIndex:3 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return <RenderItem item={item} index={index}></RenderItem>;
            }}
            keyExtractor={(item) => item.id.toString()}
            refreshing={refreshing}
            onRefresh={() => {
              this.refreshTop();
            }}
          ></FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const RenderItem = (props) => {
  return (
    <View style={styles.image_container} key={props.item.id}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ marginTop: 5, marginLeft: 20, width: width - 170 }}>
          <Text style={{ fontSize: 18 }}>{props.item.type}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.room}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.time}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.price}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.noithat}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.ghichu}</Text>
          <Text style={{ fontSize: 18 }}>{props.item.tennguoibaocao}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
  viewInput: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginLeft: 10,
    width: "80%",
    height: 49,
    borderRadius: 5,
    borderColor: "black",
    paddingLeft: 15,
    paddingRight: 5,
  },
  viewValidation: {
    width: (width * 8) / 10,
    marginTop: 5,
    marginLeft: 15,
  },
  viewTextInput: {
    position: "absolute",
    left: 70,
    top: -10,
    backgroundColor: "white",
  },
  textInputLogin: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
  },
  buttonSignIn: {
    width: 150,
    height: 30,
    backgroundColor: "#2D7474",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  image_container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
    width: width - 20,
    backgroundColor: "rgba(200,200,200,0.3)",
    margin: 10,
    borderWidth: 1,
    borderColor: "#2d7474",
  },
  viewTextButtonSignIn: {
    fontWeight: "500",
    fontSize: 12,
    color: "#ffff",
  },
  enterInformation: {
    backgroundColor: "#FFFF",
    margin: "10%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    padding: 20,
  },
});

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup.string().required("Password is required"),
});
