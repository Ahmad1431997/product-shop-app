import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ShopItem = ({shop}) => {
    return (
        <View>
            <Text>{shop.name}</Text>
            <Image style={styles.img} source={{uri:shop.image}}/>
        </View>
    )
}

export default ShopItem

const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
    }
})
