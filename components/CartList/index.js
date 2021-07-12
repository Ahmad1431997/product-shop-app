import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CartItem from './CartItem'
import { List,Box ,Center} from 'native-base'
import items from "./data"
const CartList = () => {
    const cartList= items.map((item)=> <CartItem key={item.id} item={item}/>)
    return (
        <Center flex={1}>

            <Box w="50%">

            



            {cartList}
            <Text></Text>

           
            </Box>
        </Center>
       
    )
}

export default CartList

const styles = StyleSheet.create({})
