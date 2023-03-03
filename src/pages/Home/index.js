import {useState, useContext } from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/product'
import { CartContext } from '../../contexts/CartContext'





export default function Home(){
    const {cart, addItemCart} = useContext(CartContext)


        const navigation = useNavigation();
        const [products, setProducts] = useState([
            {
            img: require('../../imagens/simples.jpeg'),
            id:'1',
            name: 'Feijoada light completa',
            price:35.99
           
        },
        {
            img: require('../../imagens/completa.jpeg'),
            id:'2',
            name: 'Feijoada Completa',
            price:49.99
           
        },
        {
            img: require('../../imagens/farofa.jpeg'),
            id:'4',
            name: 'Farofa Especial',
            price:29.99
           
        },
        {
            img: require('../../imagens/molho.jpeg'),
            id:'5',
            name: 'Molho de Pimenta',
            price:9.99
           
        },
        {
            img: require('../../imagens/couve.jpeg'),
            id:'6',
            name: 'Couve na Manteiga',
            price:19.99
           
        },
        
        ])

        function handleAddCart(item){
            addItemCart(item)
        }

        return(
        <SafeAreaView style={styles.container} >
            <View  style={styles.cartContent} >
            <Image
                    source={require('../../imagens/Design.png')}
                    style={styles.Logo}
                    />
                <Text style={styles.title}>Opções de Feijoada</Text>
                <TouchableOpacity 
                style={styles.cartButton}
                onPress={() => navigation.navigate("Cart") }
                >
                    {cart.length>=1 && (
                        <View style={styles.dot} >
                        <Text style={styles.dotText} >
                            {cart?.length}
                        </Text>
                    </View>
                    )}
                    
                    <Feather name='shopping-cart' size={30} color="#000"/>
                </TouchableOpacity>
            </View>

            <FlatList
            style={styles.list}
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Product data={item} addToCart={ () => handleAddCart( item )} /> }
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFE5CC',
        paddingEnd:14,
        paddingStart:14
    },
    cartContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 24,
        marginBottom: 24
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        
    },
    dot:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        width:20,
        height:20,
        borderRadius:12,
        position:'absolute',
        zIndex:99,
        bottom:-2,
        left:-4

    },
    dotText:{
        fontSize: 12,
        
    },
    Logo:{
        width:60,
        height:60,
        borderRadius:20
    }
})