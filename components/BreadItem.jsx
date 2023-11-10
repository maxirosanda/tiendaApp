import {View,Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from "react-native"

const BreadItem = ({item,onSelectBread}) =>{
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }
    return <View tyle={styles.breadItem}>
                <TouchableCmp
                    onPress={()=> onSelectBread(item.id,item.title)}
                >
                    <View s>
                        <View style={styles.breadRow}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View>
                            <Text>$ {item.price}</Text>
                        </View>
                    </View>
                </TouchableCmp>
           </View>
}

const styles = StyleSheet.create({
    breadItem:{
        height:100,
        width:"100%",
        backgroundColor:"#ccc",
        padding:8,
        margin:8
    },
    breadRow:{
        flexDirection:"row"
    },
    title:{
        fontSize:20
    }
})

export default BreadItem