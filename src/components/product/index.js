import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function product({data, addToCart}) {
 return (
   <View style={styles.container}>
    <Image style={styles.foto} source={data.img}/>
    <View>
        
    <Text style={styles.title}>{data.name}</Text>
    <Text style={styles.price} >{data.price}</Text>
    </View>
    <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={styles.buttonText} >+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#994C00',
        borderRadius:2,
        marginBottom:14,
        padding:8,
        paddingBottom:14,
        paddingTop:14,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    title:{
        display:'flex',
        fontWeight: 'bold',
        
    },
    buttonAdd:{
        paddingStart:12,
        paddingEnd:12,
        backgroundColor:'#FF8000',
        paddingTop:6,
        paddingBottom:6,
        borderRadius:2
    },
    foto:{
        width:50,
        height:50,
        marginBottom:11,
        marginTop:11,
        borderRadius:3,
        left:4
        

        
    }
})