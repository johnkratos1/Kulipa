import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'



const OnBoardItem = ({title, colored, image, subtitle, titles}) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title} <Text style={styles.colored}>{colored}</Text> {titles}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View>
        <Image source={image} style={styles.img}/>
      </View>
    </View>
  )
}

export default OnBoardItem

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 15,
      alignItems: 'center',
      // borderColor: 'red',
      // borderWidth: 2,
      width,
      height,
      marginHorizontal: -2
    },
    title: {
      color: '#505050',
      fontSize: 33,
      fontWeight: 'bold'
    },
    colored: {
      color: '#2A60F1'
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 28,
      letterSpacing: 2,
      color: '#00000050'
    },
    img: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems:'center',
      width: 350,
      // borderColor: 'red',
      // borderWidth: 1,
      // height:400,
      resizeMode: 'cover',
      marginTop: 40
    },
    text: {}
})