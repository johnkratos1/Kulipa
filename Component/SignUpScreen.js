import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import CheckBox from 'react-native-check-box'

const SignUpScreen = ({navigation}) => {
    const [hidePass, setHidePass] = useState(true);
    const [isChecked, setIsChecked] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
    <View>
        <StatusBar style='auto' />
        {/* Back Arrow */}
      <View>
      <AntDesign name={'arrowleft'} 
                size={25} 
                onPress={()=> navigation.goBack()} />
      </View>

      {/* Welcome  */}
      <View style={{marginBottom: 20, marginTop: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to Kulipa 👋</Text>
        <Text style={{fontSize: 20, color: '#00000060'}}>Let's get you started</Text>
      </View>

      {/* form */}
      <View>
        <Text style={styles.text}>Name</Text>
        <TextInput  style={styles.inputText}
                    autoComplete='name'
                    autoCapitalize='words'
                    placeholder='Enter your full name'
        />
        <Text style={styles.text}>Phone number</Text>
        <TextInput  style={styles.inputText}
                    inputMode='tel'
                    placeholder='Enter your mobile number'
        />
        <Text style={styles.text}>Email</Text>
        <TextInput  style={styles.inputText}
                    inputMode='email'
                    keyboardType='email-address'
                    placeholder='Enter a valid Email Address'
        />
        <Text style={styles.text}>Password</Text>
        <TextInput  style={styles.inputText}
                    secureTextEntry={true}
                    placeholder='Enter a SECURE password'
                    // right={
                    //     <TextInput.Icon
                    //       icon="eye"
                    //       onPress={() => setHidePass(!hidePass)}
                    //     />
                    //   }
        />
      
      </View>

        {/* check box and text */}
        <View style={{flexDirection: 'row', marginVertical: 10}}>
            
            <CheckBox isChecked={isChecked} 
                    onClick={()=> {setIsChecked(!isChecked)}} 
                    // checkBoxColor='#00000060'
                    checkedCheckBoxColor='#2A60F1'
                    uncheckedCheckBoxColor='#00000040'
                    />
            <Text style={{color: '#00000060', marginLeft: 2}}>I agree to Kulipa <Text style={{textDecorationLine:'underline',}}>Terms of Services by Privacy Notice</Text></Text>
        </View>

    {/* Sign up Button */}
        <View> 
            <TouchableOpacity style={{marginVertical: 10, alignItems: 'center', padding: 20, backgroundColor: '#2A60F1', borderRadius: 5, marginBottom: 10}}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    {/* footer */}
        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <Text style={{fontSize: 15, color: '#00000070'}}>Already have an account? 
                <TouchableOpacity style={{marginLeft: 10}}
                onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={{color: '#2A60F1', 
                                fontWeight: '900', 
                                // alignItems: 'center', 
                                marginLeft: 5, 
                                textDecorationLine:'underline',
                            }}
                                >
                        Log in
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>

    </View>
    </ScrollView>
    </SafeAreaView>

  )
}

export default SignUpScreen

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
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 5
    }
})