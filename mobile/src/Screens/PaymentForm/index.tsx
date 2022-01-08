import React,{useState} from "react";
import {Text,StyleSheet,View,TouchableNativeFeedback,Image,Dimensions} from 'react-native';
import { FlatList,ScrollView} from 'react-native-gesture-handler';
import { Icon,Input,CheckBox} from "react-native-elements";

const widthView = Dimensions.get("window").width;

const PaymentForm = () => {
    const [displayCard1,setDisplayCard1] = useState(0);
    const [displayCard2,setDisplayCard2] = useState(0);
    return(
        <ScrollView style={{backgroundColor:"#FFFAFA"}}>
            <View style={{padding:15,borderRadius:15}}>
                <Text style={style.titleInput}>Cartões cadastrados</Text>
                <View style={{backgroundColor:"#FFFAFA",borderRadius:10,elevation:2,padding:15}}>
                    <TouchableNativeFeedback onPress={()=>{displayCard1==0?setDisplayCard1(1):setDisplayCard1(0)}}>
                        <View style={{flex:1,flexDirection:"row",padding:20,justifyContent:"center",alignItems:"center"}}>
                            <Icon name="credit-card" size={35}/>
                            <Text style={{marginLeft:20,fontStyle:"italic",fontWeight:"bold",fontSize:25}}>1234 **** **** ****</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={displayCard1==1?style.displayOn:style.displayOff}>
                        <View>
                            <View style={{flex:1}}>
                                <Text>Número do cartão</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='1234 5678 9101 1123' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Nome no cartão</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='Claudia V8 Baterias' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1}}>
                                    <Text>Data de expiração</Text>
                                    <View style={{flex:1,flexDirection:"row",padding:10}}>
                                        <View style={{flex:3}}>        
                                            <Input value='08'/>
                                        </View>
                                        <Text style={{flex:0.5,fontSize:40}}>/</Text>
                                        <View style={{flex:3}}>        
                                            <Input value='26'/>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <Text>Código de segurança(CVV)</Text>
                                    <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                        <Input value='123' />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#FFFAFA",borderRadius:10,elevation:2,padding:15,marginTop:5}}>
                    <TouchableNativeFeedback onPress={()=>{displayCard2==0?setDisplayCard2(1):setDisplayCard2(0)}}>
                        <View style={{flex:1,flexDirection:"row",padding:20,justifyContent:"center",alignItems:"center"}}>
                            <Icon name="credit-card" size={35}/>
                            <Text style={{marginLeft:20,fontStyle:"italic",fontWeight:"bold",fontSize:25}}>1234 **** **** ****</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={displayCard2==1?style.displayOn:style.displayOff}>
                        <View>
                            <View style={{flex:1}}>
                                <Text>Número do cartão</Text>
                                <View style={{flex:1,flexDirection:"row",width:"100%"}}>
                                    <Input value='1234 5678 9101 1123' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Nome no cartão</Text>
                                <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                    <Input value='Claudia V8 Baterias' />
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1}}>
                                    <Text>Data de expiração</Text>
                                    <View style={{flex:1,flexDirection:"row",padding:10}}>
                                        <View style={{flex:3}}>        
                                            <Input value='08'/>
                                        </View>
                                        <Text style={{flex:0.5,fontSize:40}}>/</Text>
                                        <View style={{flex:3}}>        
                                            <Input value='26'/>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <Text>Código de segurança(CVV)</Text>
                                    <View style={{flex:1,flexDirection:"row",width:"60%"}}>
                                        <Input value='123' />
                                    </View>
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
        backgroundColor:"#fcbf5f",
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

export default PaymentForm;