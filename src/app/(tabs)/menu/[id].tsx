import { Stack, useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native";
import products from "@asset/data/products"
import ProductItem from "@/src/components/ProductItem";

const ProductItemDetail = () => {
    const {id} = useLocalSearchParams(); 
    const product = products[Number(id)]
    console.log(products[Number(id)])

    return (
        <View>
            <Stack.Screen options={{title: `${product.name}`}}/>
            <Text> Product Detail of ID: {product.id} </Text>
        </View>
    )
}

export default ProductItemDetail