import { Center } from 'native-base';
import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'

const ProductDetail = ({route}) => {
    const {product}= route.params;
    return (
        <Center flex={1}>

<Image style={styles.img} source={{uri: product.image}} />
            <Text>{product.name}</Text>
            <Text>{product.price} JD</Text>
            <Text>{product.description}</Text>
            
        </Center>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    img:{
        width:100,
        height:100
    }
})
