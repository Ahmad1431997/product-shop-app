import React from "react";
import { StyleSheet, Text,Alert } from "react-native";
import CartItem from "./CartItem";
import { Box, Center,Button } from "native-base";

import { useSelector,useDispatch } from "react-redux";
import { checkoutCart } from "../../store/action/cartActions";
import { SIGNIN } from "../Navigation/types";
import { useNavigation } from "@react-navigation/core";


const CartList = () => {
  const navigation=useNavigation()
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);
  const cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

    const user = useSelector(state=> state.user.user)
    const createButtonAlert = () =>
    Alert.alert(
      "",
      "please log in before checking out",
      [
        {
          text: "signin",
          onPress: () => navigation.navigate(SIGNIN) ,
          style: "cancel"
        },
      ]
    );


    const handleCheckOut=() => {
      user? dispatch(checkoutCart(items)):createButtonAlert();
  }
  console.log(items);
  return (
    <Center flex={1}>
      <Box w="50%">
        
        <Text>{cartList}</Text>
        <Button onPress={handleCheckOut}> Check out</Button>
      </Box>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});
