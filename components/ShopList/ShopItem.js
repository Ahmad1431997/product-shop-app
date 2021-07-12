import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SHOP_DETAIL } from '../Navigation/types'

const ShopItem = ({shop,navigation}) => {
    return (
        <View>
            <Text onPress={()=> navigation.navigate(SHOP_DETAIL,{shop:shop})}>{shop.name}</Text>
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
