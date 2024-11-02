import {View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Item from "./Item";
import {useEffect, useState} from "react";

export default function ListScreen({addToCart}) {
    const [items, setItems] = useState([
        {
            title: "Arroz",
            desc: "Arroz branco, tipo 1, 5kg.",
            price: 20.99,
            photo: "https://www.rampinelli.com.br//uploads/produto/arroz-branco-1698345336.png?w=800&amp;h=700"
        },
        {
            title: "Feijão",
            desc: "Feijão preto, 1kg.",
            price: 7.50,
            photo: "https://cdn.shopify.com/s/files/1/0579/9742/6861/products/CariocaKicaldo_6cc42923-f35b-4d3b-94cd-1bc7e91e25f2-806636.png?v=1656107462&width=480&height=480"
        },
        {
            title: "Açúcar",
            desc: "Açúcar refinado, 1kg.",
            price: 4.00,
            photo: "https://ibassets.com.br/ib.item.image.big/b-4833275fead844009be156e0d8ca1e30.png"
        },
        {
            title: "Macarrão",
            desc: "Macarrão espaguete, 500g.",
            price: 5.25,
            photo: "https://giassi.vtexassets.com/arquivos/ids/1158478/Macarrao-de-Semola-com-Ovos-Penne-Renata-Pacote-500g.png?v=638509726134830000"
        }
    ]);


    return (
        <ScrollView>
            <View style={styles.container}>
                {items.map((item, index) => (
                    <View style={styles.item} key={index}>
                        <Item
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            photo={item.photo}
                            addToCart={addToCart}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        position: "relative",
    },
    item: {
        marginVertical: 10
    },
});
