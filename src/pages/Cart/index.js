import {useContext} from 'react'
import { View, Image,  Text, StyleSheet, FlatList,  } from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import CardItem from '../../components/cartItem'


export default function Cart(){
    const {cart, addItemCart, removeItemCart,total} = useContext(CartContext);
    return(
        <view style={styles.container} >
            <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtratctor={ (item) => String(item.id) }
            ListEmptyComponent={()=> <Text>Nenhum item no carrinho...</Text>}

            renderItem={ ({item}) => (
                <CardItem
                data={item}
                addAmount={() => addItemCart(item)}
                removeAmount ={ () => removeItemCart(item)}
                />
                

            ) }

                ListFooterComponent={() => <Text style={styles.total}>Total R$ {total}</Text>}

            />
            <Image
            source={require('../../imagens/Design.png')}
            style={styles.Logo}
                    />
        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFE5CC',
        paddingStart:14,
        paddingTop:14
    },
    total:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:24
    },
    Logo:{
        margin: 80,
        
        width:200,
        height:200,
        borderRadius:60
    }
})