import { Center } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native'

export default function Home() {
    return (
        <Center flex={1} >
        <View >

            <Text style={styles.title}>Cookies and Beyond</Text>
            <Text>Where cookie maniacs gather</Text>
            {/* <Image style={styles.image} source={{uri:"https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"}} /> */}
            <ImageBackground style={styles.image} source={{uri:"https://images-ext-1.discordapp.net/external/_TfH9K-abB-kgoRtCA8T0WyXYfv3fGVh4EZonNW_Fbg/%3Fv%3D1596110448/https/cdn.shopify.com/s/files/1/0431/6427/0756/files/build-your-own-box_600x600%402x.jpg?width=966&height=670"}} />
            <TouchableOpacity
        onPress={() => alert('Welcome')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Welcome</Text>
      </TouchableOpacity>
        </View>
            </Center>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight: 'bold',
    },
    image:{
        width:500,
        height:800,
    },
})
