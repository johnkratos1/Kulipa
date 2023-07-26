import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
// import { Container } from 'native-base'
import OnBoardingScreen from './Component/OnBoardingScreen';
import LoginScreen from './Component/LoginScreen';
import SignUpScreen from './Component/SignUpScreen';
import OnBoardingScreen1 from './Component/OnBoardingScreen1';

const Stack = createNativeStackNavigator()

function Sp1({navigation}){
  setTimeout(() => {
    navigation.replace('Sp2')
  }, 2000)
  return(
    <ImageBackground style={{flex: 1}} source={require('./assets/splash1.png')} />
  )
}

function Sp2({navigation}){
  setTimeout(() => {
    navigation.replace('OnBoardingScreen1')
  }, 2000)
  return(
    <ImageBackground style={{flex: 1}} source={require('./assets/splash4.png')} />
  )
}

export default function App() {
  return (
  
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Sp1' screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Sp1" component={Sp1} />
        <Stack.Screen name="Sp2" component={Sp2} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A60F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    // width: '30',
    // height: '30'
  }
});
