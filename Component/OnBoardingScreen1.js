import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnBoardItem from './OnBoardItem'
import { StatusBar } from 'expo-status-bar'

const img1 = require('../assets/onBoard/onBoard1.png')
const img2 = require('../assets/onBoard/onBoard2.png')
const img3 = require('../assets/onBoard/onBoard3.png')

const {width, height} = Dimensions.get('window')

const slides = [1,2,3]


const OnBoardingScreen1 = ({navigation}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const updateSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currIndex = Math.round(contentOffsetX / width)
    setCurrentSlide(currIndex)
  }
  const Dots = () => {
    return (
      <View style={{
        height: 15,
        // paddingHorizontal: 5,
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 5
       }}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          {slides.map((_, index)=> ( <View style={[styles.indicator, currentSlide == index && {backgroundColor: '#00000097', width: 20, height: 5, }]} />))}
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', height, width}}>
      <StatusBar style='auto'/>
      <Dots />
          <ScrollView horizontal 
            contentContainerStyle={{height}} showsHorizontalScrollIndicator={false} 
            pagingEnabled
            onMomentumScrollEnd={updateSlideIndex}
            >
            <OnBoardItem title='Access variety of' colored='services' titles='from a single app' image={img1} subtitle='Lorem ipsum dolor sit umen lorem ipsum dolor.' />
            <OnBoardItem title='Access variety of' colored='services' titles='from a single app' image={img2} subtitle='Lorem ipsum dolor sit umen lorem ipsum dolor.' />
            <OnBoardItem title='Access variety of' colored='services' titles='from a single app' image={img3} subtitle='Lorem ipsum dolor sit umen lorem ipsum dolor.' />
          </ScrollView>

          <View style={{marginBottom: 50, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <TouchableOpacity style={{backgroundColor: '#E3E1E1', height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius:5}} onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={{fontSize: 18}}>Log in</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#2A60F1', height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius:5}} onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={{color: '#fff', fontSize: 18}}>Create Account</Text> 
            </TouchableOpacity>
          </View>
    </SafeAreaView>
      )

}

export default OnBoardingScreen1

const styles = StyleSheet.create({
  indicator: {
    height: 5,
    width: 10,
    backgroundColor: '#00000050',
    marginHorizontal: 0.5,
    borderRadius: 10,
    marginRight: 3
  }
})