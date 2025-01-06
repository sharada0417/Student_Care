import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isSecure, setIsSecure] = useState(true);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!data.username || !data.password) {
      setError("Please fill all fields");
      return;
    }

    // Mock data to test login without StudentsDb.js
    const students = [
      { username: "Alice.j", password: "s123" },
      { username: "bob.smith", password: "securePass456" },
    ];

    const student = students.find((s) => s.username === data.username);

    if (!student || student.password !== data.password) {
      setError("Please check your username and password");
      return;
    }

    setError(""); // Clear any previous error
    navigation.navigate("home", { student });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.view}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PaperProvider>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.imagepad}>
                <Image source={require('../assets/uovlogo.png')} style={styles.image} />
              </View>
              <View style={styles.body}>
                <Text style={styles.bodytext}>STUDENT LOGIN</Text>
              </View>
              <View style={styles.form}>
                <TextInput
                  label="Username"
                  mode="outlined"
                  placeholder="Enter your username"
                  style={styles.input}
                  value={data.username}
                  onChangeText={(text) => setData({ ...data, username: text })}
                />
                <TextInput
                  label="Password"
                  mode="outlined"
                  placeholder="Enter your password"
                  style={styles.input}
                  value={data.password}
                  onChangeText={(text) => setData({ ...data, password: text })}
                  secureTextEntry={isSecure}
                  right={
                    <TextInput.Icon
                      icon={isSecure ? "eye" : "eye-off"}
                      onPress={() => setIsSecure(!isSecure)}
                    />
                  }
                />
              </View>
              <View style={styles.btn}>
                <Button
                  mode="contained"
                  style={[{ backgroundColor: '#5b1166' }]}
                  onPress={handleLogin}
                >
                  Login
                </Button>
              </View>
              {error && (
                <View style={styles.error}>
                  <Icon name="alert-circle" size={20} color="red" />
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}
              <View style={styles.footer}>
                <Text style={styles.footertext}>MyApp © 2024</Text>
              </View>
            </View>
          </ScrollView>
        </PaperProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 10,
  },
  imagepad: {
    padding: 20,
    alignItems: 'center',
    flex: 2,
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: 70,
    resizeMode: 'contain',
  },
  footer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#5b1166',
    padding: 5,
  },
  footertext: {
    color: 'white',
  },
  body: {
    height: 150,
    width: '100%',
    padding: 50,
    marginLeft: 20,
  },
  bodytext: {
    fontSize: 30,
  },
  btn: {
    marginBottom: 220,
    marginTop: 10,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f4edf7",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
