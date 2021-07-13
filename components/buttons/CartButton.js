import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CART_LIST } from "../Navigation/types";
import { useSelector } from "react-redux";
import { Button } from "native-base";
const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector(state=> state.items.items)
  let total =0;
   items.forEach((item) => (total += item.quantity));
  return (
    <View>
      <Button style={{backgroundColor:"#eee"}} onPress={() => navigation.navigate(CART_LIST)}>
      <Text style={{color:"red",fontWeight:"bold",fontSize:18}}>{total}</Text>
      <Icon
       
        name="shopping-cart"
        type="entypo"
        color="#f50"
        
        />
       
        </Button>
        
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
