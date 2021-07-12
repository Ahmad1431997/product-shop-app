import React from 'react'
import { StyleSheet } from 'react-native'
import { Center } from 'native-base'
import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import { Spinner } from 'native-base'
const ShopList = ({navigation}) => {
    const shopLoading= useSelector((state)=> state.shops.loading)
    const shops = useSelector(state => state.shops.shops)
    const shopList = shops.map((shop)=> <ShopItem  key={shop.id} shop={shop} navigation={navigation} />)
    return (
        <Center flex={1}>

           {shopLoading ?<Spinner/>: shopList}
            
        </Center>
        
    )
}

export default ShopList

const styles = StyleSheet.create({})
