import { View, Text, StyleSheet } from 'react-native';
import Contact from "./Contact";

export default function List({contacts}) {
    return (
        <View style={styles.container}>
            {contacts.map((contact, index) => (
                <Contact
                    avatar={contact.avatar}
                    name={contact.name}
                    address={contact.address}
                    number={contact.number}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
})