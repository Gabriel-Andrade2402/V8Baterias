import React from "react";
import { View,Text,Dimensions,StyleSheet,TouchableNativeFeedback} from "react-native";
import { Icon} from "react-native-elements";

const widthView = Dimensions.get("window").width;

const FooterNavigation = ({navigation}) =>{
    return (
        <>
            <View style={style.containerFooter}>
                <View style={style.containerButtonFooter}>
                    <TouchableNativeFeedback onPress={(e)=>{console.log("clicou")}}>
                        <View style={style.viewTouchable}>
                            <Icon name="search" size={30} color="white"/>
                            <Text style={{fontSize:11,color:"white"}}>Search</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.containerButtonFooter}>
                    <TouchableNativeFeedback onPress={()=>{console.log("clicou")}}>
                        <View style={style.viewTouchable}>
                            <Icon name="store" size={30} color="white"/>
                            <Text style={{fontSize:11,color:"white"}}>Loja</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.containerButtonFooter}>
                    <TouchableNativeFeedback onPress={()=>{navigation.navigate("Requests")}}>
                        <View style={style.viewTouchable}>
                            <Icon name="bookmark" size={30} color="white"/>
                            <Text style={{fontSize:11,color:"white"}}>Pedidos</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    containerFooter:{
        flex:1,
        flexDirection:"row",
        width:widthView,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fcbf5f",
    },
    containerButtonFooter:{
        flex:1,
    },
    viewTouchable:{
        justifyContent:"center",
        alignItems:"center"
    }
});

export default FooterNavigation;