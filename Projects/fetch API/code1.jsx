import { FlatList, StyleSheet, Text, View } from 'react-native';
import React,{useEffect,useState} from 'react';

const App = () => {
  const [products,setProducts] =useState([]);

  useEffect(() =>{
  getAllProducts();
  },[]);
  
  const getAllProducts =async()=>{
  const response=await fetch("https://fakestoreapi.com/products");
  const data= await response.json();
  setProducts(data);

  return (
    <View>
      <FlatList data={products} renderItem={ProductCard} key={()}/>
    </View>
  );
};
const ProductCard =({item})=> {
  return(
    <View>
      <Text>{item.title}</Text>
     
    </View>
  );
};

export default App

const styles = StyleSheet.create({})
