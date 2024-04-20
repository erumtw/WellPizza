import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizza = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductItemProps = {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  // console.log(product)
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image 
          source={{ uri: product.image || defaultPizza }} 
          style={styles.image} 
          resizeMode='contain'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.light.tint
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
