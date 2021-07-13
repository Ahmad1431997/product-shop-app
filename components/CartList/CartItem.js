import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List,Center } from 'native-base'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../../store/action/cartActions'


const CartItem = ({item}) => {
    
    const dispatch = useDispatch();
    const handleDelete= ()=>{
        dispatch(deleteFromCart(item.id))
    }
    console.log(item)
    return (
        

        <List>
            <Center>

            <Text> {item.name}</Text>
            <Text>total price: {+item.price * +item.quantity} JD</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Icon
        onPress={handleDelete}
        name="delete"
        type="antdesign"
        color="#f50"
        
        />
            </Center>
            
        </List>
        
    )
}

export default CartItem

const styles = StyleSheet.create({})
