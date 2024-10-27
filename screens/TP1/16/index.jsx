import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function App() {
    return (
        <ScrollView style={{flex: 1, padding: 20}}>
            <View>
                <Text style={styles.text}>
                    O React Native, desenvolvido pela Meta, revolucionou a forma como desenvolvemos
                    aplicativos mobile, permitindo a criação de interfaces utilizando JavaScript e React.
                    A arquitetura do React Native é uma mistura entre o desenvolvimento web e mobile, proporcionando
                    um conjunto rico de ferramentas e componentes para o desenvolvimento de aplicações fluidas.
                </Text>
                <Text style={styles.text}>
                    O React e o React Native compartilham muitos conceitos e componentes fundamentais. Ambos utilizam
                    paradigmas de programação declarativa, a reconciliação virtual do DOM e o fluxo unidirecional de dados.
                    No entanto, existem diferenças entre os dois. Enquanto o React renderiza componentes diretamente no DOM
                    do navegador, o React Native renderiza componentes para as views nativas do mobile. Essa diferença é
                    fundamental, pois permite que as aplicações de React Native tenham um desempenho nativo e acessem as
                    funcionalidades do dispositivo, como câmera, GPS e outros.
                </Text>
                <Text style={styles.text}>
                    A arquitetura do React Native pode ser dividida em camadas principais. Na camada JavaScript, o desenvolvedor
                    escreve o código React, definindo componentes, a lógica e a interação com o usuário. O JavaScript engine
                    executa esse código. A camada bridge é responsável pela comunicação entre a camada JavaScript e a camada
                    nativa. Ela serializa as chamadas de função JavaScript e as envia para a thread nativa, onde são executadas.
                    Por fim, na camada nativa, os componentes são renderizados e as APIs do sistema são acessadas; a camada nativa
                    é específica para cada plataforma, garantindo que a aplicação tenha um aspecto nativo.
                </Text>
                <Text style={styles.text}>
                    A arquitetura do React Native oferece um poderoso conjunto de ferramentas para o desenvolvimento de aplicativos
                    mobile de alta performance e cross-platform. Ao combinar a flexibilidade e a declaratividade do React com
                    as capacidades nativas das plataformas móveis, o React Native permite que os desenvolvedores criem experiências
                    de usuário ricas e envolventes.
                </Text>
                <Text style={styles.text}>
                    REACT NATIVE DOCUMENTATION. Getting Started. Disponível em: https://reactnative.dev/docs/getting-started>. Acesso em: [22/10/2024].
                </Text>
                <Text style={styles.text}>
                    MEDIUM. React Native: do Bridge ao Fabric. Disponível em: https://medium.com/syngentadigital-insights/react-native-do-bridge-ao-fabric-como-essa-arquitetura-funciona-por-dentro-parte-01-391e87ee615c. Acesso em: [22/10/2024].
                </Text>
                <Text style={styles.text}>
                    YOUTUBE. Arquitetura MVVM no React Native. Disponível em: https://www.youtube.com/watch?v=RGRfXh54d9U>. Acesso em: [22/10/2024].
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 5,
    }
})
