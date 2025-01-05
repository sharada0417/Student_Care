import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
export default function Login() {

  const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
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
        padding: 10
    },
    imagepad:{
        padding: 20,
         alignItems: 'center',
        flex: 2,
        marginBottom: 10
    },
    image:{
        width: '80%',
        height: 70,
    },
    
    scrollView: {
        flexGrow: 1,
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        marginTop:10,
        backgroundColor: '#5b1166',
        padding:5
    },
    footertext:{
        color:'white'
    }
});