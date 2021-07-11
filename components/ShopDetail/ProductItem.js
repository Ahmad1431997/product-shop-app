import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductItem = ({product}) => {
    return (
        <View>

            <Text>{product.name}</Text>
            <Text>{product.price} JD</Text>
            <Text>{product.description}</Text>
            <Image style={styles.img} source={{uri:product.image}}/>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
    }
})
