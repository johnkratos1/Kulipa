import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';


const LoginBtn = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10, backgroundColor: '#E3E1E1', height: 45, width: 150, padding: 8, alignItems: 'center', borderRadius: 5}} {...props}>
       <Text style={{fontSize:16}}>Log in</Text>
    </TouchableOpacity>
)
const CreateBtn = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10, backgroundColor: "#2A60F1", height: 45, width: 150, padding: 8, alignItems: 'center', borderRadius: 5}} {...props}>
        <Text style={{fontSize:16, color: '#fff'}}>Create Account</Text>
    </TouchableOpacity>
)
const CompleteBtn = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10, backgroundColor: "#2A60F1", height: 45, width: 150, padding: 8, alignItems: 'center', borderRadius: 5}} {...props}>
        <Text style={{fontSize:16, color: '#fff'}}>Next</Text>
    </TouchableOpacity>
)
const Dots = ({selected}) => {
    let backgroundColor, width;
    backgroundColor = selected ? 'rgba(0,0,0, 0.8)' : 'rgba(0,0,0, 0.2)'
    width = selected ? 18 : 7

    return (
        <View style={{
            width,
            height: 4,
            marginHorizontal: 3,
            backgroundColor
        }}/>
    )
}

const OnBoardingScreen = ({navigation}) => {

  return (
    <View style={{flex:1}}>
     <Onboarding
     SkipButtonComponent={LoginBtn}
     NextButtonComponent={CreateBtn}
     DoneButtonComponent={CompleteBtn}
     DotComponent={Dots}
    //  bottomBarHeight={100}
     bottomBarColor=''
     onSkip={() => navigation.navigate("LoginScreen")}
     onDone={() => navigation.navigate("SignUp")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onBoard/onBoard1.png')} />,
      title: 'Access variety of services from a single app',
      subtitle: 'Lorem ipsum dolor sit umen lorem ipsum dolor.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onBoard/onBoard2.png')} />,
      title: 'Access variety of services from a single app',
      subtitle: 'Lorem ipsum dolor sit umen lorem ipsum dolor.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onBoard/onBoard3.png')} />,
      title: 'Access variety of services from a single app',
      subtitle: 'Lorem ipsum dolor sit umen lorem ipsum dolor.',
    }
        ]} />
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})