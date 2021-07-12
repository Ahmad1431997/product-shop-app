import React from 'react'
import { Image, StyleSheet, Text} from 'react-native'
import { useSelector } from 'react-redux'
import ProductList from './ProductList'
import { getProductById } from '../../store/utlis'
import { Center } from 'native-base'
const ShopDetail = ({route,navigation}) => {
    const {shop} = route.params
    const products = useSelector(state=>state.products.products)
    // const shop = useSelector((state) => state.shops.shops[0])
    console.log(shop)
    // const productsFromProductsStore=shop.products.map((product)=>products.find((_product)=>(product.id===_product.id)))
    const productsFromProductsStore = shop.products ? shop.products.map((product)=> getProductById(product.id, products)) : []
    return (
       <Center flex={1}>

             <Text >{shop.name}</Text>
            <Image  style={styles.img} source={{uri:shop.image}}/>
            
            <ProductList navigation={navigation} products={productsFromProductsStore}/>
            
       </Center>
            
       
    )
}

export default ShopDetail

const styles = StyleSheet.create({
    img:{
        width:200,
        height:200,
    },
})
