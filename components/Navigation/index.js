import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { HOME, CART_LIST, PRODUCT_DETAIL, SHOP_DETAIL, SHOP_LIST } from './types';
import Home from '../Home';
import ShopList from '../ShopList';
import ShopDetail from '../ShopDetail';

import ProductDetail from '../ProductDetail';
import CartList from '../CartList';
import CartButton from '../buttons/CartButton';
const {Navigator,Screen} = createStackNavigator(); 
const StackNavigator = () => {
    return (
        
        <Navigator initialRouteName={HOME} screenOptions={{
            headerStyle:{
                // backgroundColor:"darkcyan",
                
            },
            
            headerTransparent:true,
            cardStyle:{
                backgroundColor:"#eee"
            },
            headerTintColor:"black"
        }}>
            <Screen name={HOME} component={Home} options={{headerShown:false}} />
            <Screen name={SHOP_LIST} component={ShopList} options={{
                title: "Shops",
                headerRight:()=>(<CartButton/>),
            }}/>
            <Screen name={SHOP_DETAIL} component={ShopDetail} options={({route})=>{
            return {headerTitle : route.params.shop.name,headerRight:()=>(<CartButton/>),}
            
        }}/>
        <Screen name ={PRODUCT_DETAIL} component={ProductDetail} options={({route})=>{
            return {headerTitle : route.params.product.name}
            
            
        }} />
        <Screen name={CART_LIST} component={CartList} />
        </Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
