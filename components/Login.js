import React, { useState } from 'react'; // Import useState
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';

export default function Login() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false); // Declare state for password visibility

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imagepad}>
            <Image source={require('../assets/uovlogo.png')} style={styles.image} />
          </View>
          <View style={styles.body}>
            <Text style={styles.bodytext}>STUDENT LOGIN</Text>
          </View>
          <View style={styles.input}>
            <TextInput label="Username" mode="outlined" keyboardType="default" />
          </View>
          <View style={styles.input}>
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={!passwordVisible} // Toggle visibility based on state
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)} // Toggle state
                />
              }
            />
          </View>
          <View style={styles.btn}>
            <Button mode="contained" style={[{ backgroundColor: '#5b1166' }]}>
              Login
            </Button>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footertext}>MyApp © 2024</Text>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
  },
  scrollView: {
    flexGrow: 1,
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
  input: {
    padding: 5,
    marginVertical: 10,
  },
  btn: {
    marginBottom: 220,
    marginTop: 10,
  },
});
