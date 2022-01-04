import React from "react";
import {Text,View,ScrollView,TouchableNativeFeedback,StyleSheet,Dimensions,TouchableOpacity} from "react-native";
import { Icon } from "react-native-elements";
import FooterNavigation from '../../Components/FooterNavigation';

const widthView = Dimensions.get("window").width;
const heightView = Dimensions.get("window").height;

const Menu = ({navigation}) => {
    return (
        <>
            <ScrollView style={{height:0.75*heightView}}>
                <View style={style.headerMenu}>
                    <View style={{flex:1}}>
                        <Icon name="person" color="#363636" size={50}
                        />
                    </View>
                    <View style={{flex:3}}>
                        <Text style={{fontSize:20}}>Gabriel</Text>
                        <Text>gabriel.andrade2402@gmail.com</Text>
                    </View>
                </View>
                <View style={style.optionMenu}>
                    <TouchableNativeFeedback>
                        <View style={style.optionMenu}>
                            <View style={{flex:1}}>
                                <Icon name="edit" color="#fdbb53" size={30}/>
                            </View>
                            <View style={{flex:3}}>
                                <Text>Editar perfil</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.optionMenu}>
                    <TouchableNativeFeedback>
                        <View style={style.optionMenu}>
                            <View style={{flex:1}}>
                                <Icon name="credit-card" color="#fdbb53" size={30}/>
                            </View>
                            <View style={{flex:3}}>
                                <Text>Formas de pagamento</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.optionMenu}>
                    <TouchableNativeFeedback onPress={()=>{navigation.navigate("Location")}}>
                        <View style={style.optionMenu}>
                            <View style={{flex:1}}>
                                <Icon name="location-pin" color="#fdbb53" size={30}/>
                            </View>
                            <View style={{flex:3}}>
                                <Text>Localizações</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.optionMenu}>
                    <TouchableNativeFeedback onPress={()=>{navigation.navigate("Help")}}>
                        <View style={style.optionMenu}>
                            <View style={{flex:1}}>
                                <Icon name="help" color="#fdbb53" size={30}/>
                            </View>
                            <View style={{flex:3}}>
                                <Text>Ajuda</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={{backgroundColor:"#fdbb53",justifyContent:"center",
                    alignItems:"center",padding:10,marginBottom:5,borderRadius:10}}
                    onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={{fontSize:25,color:"#FFFAFA"}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#FFFAFA",justifyContent:"center",
                    alignItems:"center",padding:10,borderRadius:10}}
                    onPress={()=>{navigation.navigate("Registry")}}>
                        <Text style={{fontSize:25,color:"#1C1C1C"}}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{paddingLeft:10,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:7,opacity:0.6,color:"#1C1C1C"}}>By Gabriel (gabriel.andrade2402@gmail.com)</Text>
            </View>
            <View style={{flex:1}}>
                    <FooterNavigation/>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    headerMenu:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        backgroundColor:"#FFFAFA"
    },
    optionMenu:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    }
});
export default Menu;