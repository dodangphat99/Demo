import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

const { height, width } = Dimensions.get("window");

let initialValues = {
  email: "",
  password: "",
};

export default function App() {
  const onSubmit = async (values) => {
    //viet value submit tai day
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
                      <Text style={{ color: "red" }}>{errors.email}</Text>
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
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    </View>
                  )}
                  <View style={styles.viewTextInput}>
                    <Text style={[styles.textInputLogin]}>Password</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonSignIn}
              >
                <Text style={[styles.viewTextButtonSignIn]}>SUBMIT</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    width: 256,
    height: 49,
    backgroundColor: "#2D7474",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  viewTextButtonSignIn: {
    fontWeight: "500",
    fontSize: 18,
    color: "#ffff",
  },
});

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup.string().required("Password is required"),
});
