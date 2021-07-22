import React, { useState } from 'react'
import { StyleSheet, View,Text } from 'react-native'
import {Button, Center, Input} from "native-base"
import { useDispatch } from 'react-redux'
import { signin } from '../../store/action/authActions'
import { HOME, SIGNUP } from '../Navigation/types'
const Signin = ({navigation}) => {

    const dispatch = useDispatch();
    
    const [user,setUser]=useState({
        username:"",
        password:"",
    })
    const handleSubmit =()=>{
        dispatch(signin(user,navigation))
        
    }
    return (
        <View style={{marginTop:200}}>
            <Input
           
            autoCapitalize={false}
            onChangeText={(username)=>setUser({...user, username})}
      w="80%"
      mx={4}
      placeholder="enter username"
   
    />
       <Input
            secureTextEntry={true}
            autoCapitalize={false}
            onChangeText={(password)=>setUser({...user, password})}
      w="80%"
      mx={4}
      placeholder="enter password"
   
    />
    <Center>
     <Button onPress={handleSubmit} style={{width:100,marginTop:10,fontWeight:"bold"}} >Submit</Button>
           <Text style={{marginTop:80,color:"gray"}}>sign up if you don't have an account</Text> 
           <Button  onPress={()=>navigation.navigate(SIGNUP)} style={{fontWeight:"bold",width:100,backgroundColor:"#3d405b"}} >Sign Up</Button>
           </Center>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({})
