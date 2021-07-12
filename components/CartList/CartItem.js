import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List,Center } from 'native-base'
const CartItem = ({item}) => {
    return (
        

        <List>
            <Center>

            <Text>{item.name}</Text>
            <Text>{item.price} JD</Text>
            <Text>{item.quantity}</Text>
            </Center>
            
        </List>
        
    )
}

export default CartItem

const styles = StyleSheet.create({})
