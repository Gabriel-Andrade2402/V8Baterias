import React from "react"
import { View,StyleSheet,TouchableOpacity,Dimensions,Image} from "react-native";
import { Text,Icon,Input } from "react-native-elements";

const heightView = Dimensions.get("window").height;
const widthView = Dimensions.get("window").width;
const Login = () =>{
    return(
        <>
            <View style={{height:heightView,width:widthView}}>
                <View style={{height:"100%",paddingBottom:20,paddingTop:20,paddingRight:10}}>
                    <Image style={{resizeMode:"contain",maxWidth:"55%",maxHeight:"100%",alignSelf:"center"}}
                    source={require("../../assets/utils/BV8_Logo.png")}/>
                    <View style={{paddingLeft:10,paddingRight:10}}>
                        <View style={style.input}>
                            <Text style={style.titleInput}>Cpf/Email</Text>
                            <Input placeholder='Usuario' 
                            leftIcon={
                                <Icon
                                    name = 'person-pin'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        <View style={style.input}>
                            <Text style={style.titleInput}>Senha</Text>
                            <Input placeholder='Senha' 
                            leftIcon={
                                <Icon
                                    name = 'security'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        
                        <TouchableOpacity style={{marginBottom:5}}>
                            <View style={style.buttonLogin}>
                                <Text style={style.textButton}>Logar</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{marginBottom:5}}>
                            <View style={style.buttonRegistry}>
                                <Text style={style.textButton}>Registrar-se</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    titleInput:{
        fontSize:18,
        fontWeight:"200"
    },
    input:{
        borderRadius:15,
    },
    buttonLogin:{
        height:40,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ffaa23",
        elevation:5,
    },
    buttonRegistry:{
        height:40,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFAFA",
        elevation:5
    },
    textButton:{
        fontSize:20
    }
    
});

export default Login;