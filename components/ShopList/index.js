import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import { Spinner } from 'native-base'
const ShopList = () => {
    const shopLoading= useSelector((state)=> state.shops.loading)
    const shops = useSelector(state => state.shops.shops)
    const shopList = shops.map((shop)=> <ShopItem key={shop.id} shop={shop} />)
    return (
        <View>
           {shopLoading ?<Spinner/>: [shopList]}
            <Text></Text>
        </View>
    )
}

export default ShopList

const styles = StyleSheet.create({})
