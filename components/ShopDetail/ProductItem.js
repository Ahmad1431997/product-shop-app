import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PRODUCT_DETAIL } from '../Navigation/types'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'

import { TouchableOpacity } from 'react-native'
const ProductItem = ({product,navigation}) => {
    const [quantity,setQuantity]=useState(0);
    return (
        <View>
            <NumericInput onChange={value=>setQuantity(value)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>

<TouchableOpacity
        onPress={() => {quantity,product.id} }
        style={{ /*backgroundColor: 'blue',*/alignItems:"center"}}>
        <Text style={{ fontSize: 20, color: 'darkcyan' }}>Add</Text>
      </TouchableOpacity>
            <Text onPress={()=> navigation.navigate(PRODUCT_DETAIL,{product:product})}>{product.name}</Text>
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
