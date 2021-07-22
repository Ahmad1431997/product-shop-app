import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PRODUCT_DETAIL } from '../Navigation/types'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TouchableOpacity } from 'react-native'
import { addItemToCart } from '../../store/action/cartActions'
const ProductItem = ({product,navigation}) => {
    const dispatch = useDispatch();
    const [quantity,setQuantity]=useState(0);
    const handleAdd= ()=>{
        const newItem = { quantity , productId:product.id,total:quantity*product.price }
        dispatch(addItemToCart(newItem));
    }
    return (
        <View>
            <NumericInput onChange={setQuantity}
            totalWidth={120} 
            totalHeight={50} 
            iconSize={25}
            initValue={quantity}
            step={1}
            value={quantity}
            minValue={1}
            // valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='green' 
            leftButtonBackgroundColor='red'/>

<TouchableOpacity
        onPress={ handleAdd }
        style={{ backgroundColor: 'blue',alignSelf:"center",width:150,borderRadius:10,height:25}}>
        <Text style={{ fontSize: 20, color: 'white',textAlign:"center" }}>Add</Text>
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
