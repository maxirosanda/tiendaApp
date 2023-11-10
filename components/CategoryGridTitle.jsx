import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from "react-native"

const CategoryGridTitle = ({item,onSelected}) => {
    
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
             onPress={() => onSelected(item.id,item.title)}>
                <View  style={{...styles.container,...{backgroundColor:item.color}}} >
                    <Text>{item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )

}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        borderRadius:6,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        borderRadius:6,
        shadowColor:"black",
        shadowOpacity:0.26,
        shadowOffset:{width:0,heigh:2},
        shadowRadius:6,
        elevation:3,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        padding:8,
        backgroundColor:"red"
        
    }

})

export default CategoryGridTitle