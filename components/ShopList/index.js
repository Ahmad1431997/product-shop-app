import React from 'react'
import { StyleSheet,SafeAreaView ,ScrollView } from 'react-native'
import { Center } from 'native-base'
import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import { Spinner } from 'native-base'

const ShopList = ({navigation}) => {
    const shopLoading= useSelector((state)=> state.shops.loading)
    const shops = useSelector(state => state.shops.shops)
    const shopList = shops.map((shop)=> <ShopItem  key={shop.id} shop={shop} navigation={navigation} />)
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>
                 <Center flex={1}>

           {shopLoading ?<Spinner/>: shopList}
            
         </Center>
            </ScrollView>
            </SafeAreaView>
        
    )
}

export default ShopList

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop: StatusBar.currentHeight,
        paddingTop:25,
        marginTop:50
    },
    scrollView: {
    //   backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
