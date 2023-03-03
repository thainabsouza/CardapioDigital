import React, { useState } from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';



export default function cartItem({data, addAmount, removeAmount}) {
    const [amount, setAmount] = useState(data?.amount)

    function handleIcrease(){
        addAmount();
        setAmount(item => item + 1)
    }

    function handleDecrease(){
        removeAmount()
        if(amount ===0){
            setAmount(0);
            return;
        }

        setAmount(item => item -1)

    }

    

 return (
   <View style={styles.container} >
    <View>
    
    
    <Text style={styles.title} >{data.name}</Text>
    <Text style={styles.price} > R${data.price}</Text>
    </View>
    <View style={styles.amountContainer} >
        <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
            <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIcrease}>
            <Text>+</Text>
        </TouchableOpacity>

    </View>
    
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
        fontWeight: 'bold',
        fontSize:15,
        alignItems:'center'

        

    
    }, 
    price:{
        fontSize:16,
        
        
    },
    amountContainer:{
        marginTop:14,
        marginBottom:14,
        flexDirection: 'row',
        alignItems:'center',
        
    },
    buttonAdd:{
        backgroundColor:'#FF8000',
        padding:6,
        paddingLeft:14,
        paddingRight:14,
        borderRadius:2
    },
    amount:{
        marginLeft:14,
        marginRight:14,
        
    }
    
   
})