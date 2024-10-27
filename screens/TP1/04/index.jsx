import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useState} from "react";

export default function App() {

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            "url": "https://arteref.com/wp-content/uploads/2019/04/las-meninas-de-diego-vela%CC%81zquez-painting.jpg",
            "title": "As Meninas, Diego Velázquez",
        },
        {
            "url": "https://arteref.com/wp-content/uploads/2019/04/mona-lisa-leonardo-da-vinci.jpg",
            "title": "Mona Lisa﻿, Leonardo da vinci ",
        },
        {
            "url": "https://arteref.com/wp-content/uploads/2019/04/night-watch-rembrandt.jpg",
            "title": "A Ronda Noturna, Rembrandt",
        },
        {
            "url": "https://arteref.com/wp-content/uploads/2019/04/school-of-athens-raphael-painting-1024x795.jpg",
            "title": "A escola de Atenas, Rafael",
        },
    ]

    function nextImage() {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    function previousImage() {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{images[currentImage].title}</Text>
            <Image
                source={{ uri: images[currentImage].url }}
                style={style.image}
            />
            <View style={style.buttons}>
                <Button title="Anterior" onPress={previousImage}/>
                <Button title="Próxima" onPress={nextImage}/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
      fontSize: 20,
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
})