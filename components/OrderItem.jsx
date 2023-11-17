import { View, Text, Button } from "react-native"

const OrderItem = ({onDelete}) => {

    return <View>
                <View>
                    <Text>20/05/2023</Text>
                    <Text>$ 5000</Text>
                </View>
                <View>
                    <View><Button title={"ver"}/></View>
                    <View>
                        <Button title="Borrar" onPress={onDelete}/>
                    </View>
                </View>
           </View>
}

export default OrderItem