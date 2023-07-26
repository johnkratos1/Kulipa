import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'

const LoginScreen = ({navigation}) => {
    const [hidePass, setHidePass] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
    <View>
        <StatusBar style='auto' />
        {/* Back Arrow */}
      <View>
      <AntDesign name={'arrowleft'} 
                size={25} 
                onPress={()=> navigation.goBack()} />
      </View>

      {/* Welcome  */}
      <View style={{marginBottom: 25, marginTop: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Log in</Text>
        <Text style={{fontSize: 20, color: '#00000060'}}>Let's get you started</Text>
      </View>

      {/* form */}
      <View>
       
        <Text style={styles.text}>Email</Text>
        <TextInput  style={styles.inputText}
                placeholder='Enter your full name'
                keyboardType='email-address'
        />

        <Text style={styles.text}>Password</Text>
        <TextInput  style={styles.inputText}
                    secureTextEntry={true}
                    placeholder='Enter a SECURE password'
                    right={
                        <TextInput.Icon
                          icon="eye"
                          onPress={() => setHidePass(!hidePass)}
                        />
                      }
        />
      </View>

       

    {/* Sign up Button */}
        <View style={{marginBottom: 5, marginTop: 15}}> 
        <TouchableOpacity style={{marginVertical: 10, alignItems: 'center', padding: 20, backgroundColor: '#2A60F1', borderRadius: 10, marginBottom: 10}}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Log in</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 10}}>
                <Text style={{color: '#2A60F1', }}>
                    Forget Password?
                </Text>
            </TouchableOpacity>
        </View>

    {/* footer */}
        <View style={{marginTop: 160, alignItems: 'center'}}>
            <Text style={{color: '#00000030', fontSize: 15, fontWeight: 'bold'}}>
                ---------------{' '}  OR  {' '}----------------
            </Text>
            <TouchableOpacity style={{marginVertical: 10, alignItems: 'center', padding: 20, backgroundColor: '#ACACAC10', borderRadius: 10, marginBottom: 10, width: 320, borderColor: '#00000040', borderWidth: 1}}>
                <Image source={require('../assets/googleLogin.png')} />
            </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 15, 
        fontWeight: '600', 
        marginBottom: 10, 
        color: '#00000080',
        marginLeft: 2
    },
    inputText: {
        height: 40, 
        borderColor: '#00000030', 
        borderWidth: 2, 
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 5
    }
})