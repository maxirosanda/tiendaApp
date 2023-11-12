import {View,Button} from "react-native"

const ShowCart = ({handlerShowCart}) => {
    return <View>
                <Button title="Carrito" onPress={handlerShowCart}/>
           </View>

}

export default ShowCart