import { Spinner } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
const ProductList = ({products,navigation}) => {
    // const products = useSelector(state => state.products.products)
    const productLoading=useSelector(state=> state.products.loading)
    const productList = products.map((product)=> <ProductItem navigation={navigation} key={product.id} product={product} />)
    return (
        <View>
            {productLoading? <Spinner/> : [productList]}
            <Text></Text>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})
