import {Button} from 'react-native';

export default function Botao({onPress, text}) {
    return (
        <Button onPress={onPress} title={text}/>
    )
}