import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductList from './ProductList'
import { getProductById } from '../../store/utlis'
const ShopDetail = () => {
    const products = useSelector(state=>state.products.products)
    const shop = useSelector((state) => state.shops.shops[0])
    console.log(shop)
    // const productsFromProductsStore=shop.products.map((product)=>products.find((_product)=>(product.id===_product.id)))
    const productsFromProductsStore =shop.products.map((product)=>getProductById(product.id,products))
    return (
        <View>
             <Text >{shop.name}</Text>
            <Image  style={styles.img} source={{uri:shop.image}}/>
            
            <ProductList products={productsFromProductsStore}/>
            
            
        </View>
    )
}

export default ShopDetail

const styles = StyleSheet.create({
    img:{
        width:200,
        height:200,
    },
})
