import React,{useState} from "react";
import {Text,StyleSheet,View,TouchableNativeFeedback,Image,Dimensions} from 'react-native';
import { FlatList,ScrollView} from 'react-native-gesture-handler';
import { Icon,Input,CheckBox} from "react-native-elements";

const widthView = Dimensions.get("window").width;


const Address = () => {
    const [displayAddress1,setdisplayAddress1] = useState(0);
    const [displayAddress2,setdisplayAddress2] = useState(0);
    return(
        <ScrollView style={{backgroundColor:"#FFFAFA"}}>
            <View style={{padding:15,borderRadius:15}}>
                <Text style={style.titleInput}>Endereços cadastrados</Text>
                <View style={{backgroundColor:"#FFFAFA",borderRadius:10,elevation:2,padding:15}}>
                    <TouchableNativeFeedback onPress={()=>{displayAddress1==0?setdisplayAddress1(1):setdisplayAddress1(0)}}>
                        <View style={{flex:1,flexDirection:"row",padding:10,justifyContent:"center",alignItems:"center"}}>
                            <Icon name="label-important" size={35}/>
                            <Text style={{marginLeft:20,fontStyle:"italic",fontWeight:"bold",fontSize:25}}>Rua antonio ****</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={displayAddress1==1?style.displayOn:style.displayOff}>
                        <View>
                            <View style={{flex:1}}>
                                <Text>Rua</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Rua antonio pires' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Número</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='123' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Cep</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='12345-678' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Ponto de referência</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Perto do supermercado' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Observação</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Casa verde' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#FFFAFA",borderRadius:10,elevation:2,padding:15,marginTop:10}}>
                    <TouchableNativeFeedback onPress={()=>{displayAddress2==0?setdisplayAddress2(1):setdisplayAddress2(0)}}>
                        <View style={{flex:1,flexDirection:"row",padding:10,justifyContent:"center",alignItems:"center"}}>
                            <Icon name="label-important" size={35}/>
                            <Text style={{marginLeft:20,fontStyle:"italic",fontWeight:"bold",fontSize:25}}>Rua antonio ****</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={displayAddress2==1?style.displayOn:style.displayOff}>
                        <View>
                            <View style={{flex:1}}>
                                <Text>Rua</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Rua antonio pires' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Número</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='123' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Cep</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='12345-678' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Ponto de referência</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Perto do supermercado' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Observação</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='Casa verde' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{padding:10}}>
                <TouchableNativeFeedback style={{marginBottom:5}}>
                        <View style={style.buttonRegistry}>
                            <Text style={style.textButton}>Confirmar alterações</Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    titleInput:{
        fontSize:17,
        fontWeight:"bold"
    },
    buttonRegistry:{
        height:40,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ffaa23",
        elevation:5,
    },
    textButton:{
        fontSize:20
    },
    displayOn:{
        display:"flex"
    },
    displayOff:{
        display:"none"
    }
});

export default Address;