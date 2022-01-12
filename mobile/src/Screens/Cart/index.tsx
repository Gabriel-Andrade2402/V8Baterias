import React,{useState} from "react";
import {Text,StyleSheet,View,TouchableNativeFeedback,Image,Dimensions,ScrollView} from 'react-native';
import { Icon,Input,CheckBox} from "react-native-elements";


const Cart = () =>{
    const dimensions = Dimensions.get("window"); 
    const widthTela = dimensions.width;
    const heightTela = dimensions.height;
    const [buscarNaLoja,setbuscarNaLoja] = useState(false);
    const [isReceberEmCasa,setIsReceberEmCasa] = useState(false);
    const [addressMandatory,setAddressMandatory] = useState(0);
    const [creditMandatory,setCreditMandatory] = useState(0);
    const [opacityPix,setOpacityPix] = useState(0.4);
    const [opacityBoleto,setOpacityBoleto] = useState(0.4);
    const [opacityCreditCard,setOpacityCreditCard] = useState(0.4);


    return (
        <>
        <ScrollView>
        <View style={{flex:1,
            height:0.5*heightTela,
            width:widthTela,
            backgroundColor:"#FFFAFA",
            padding:20}}>
            <View style={{flex:2,flexDirection:"row"}}>
                <Image source={require("../../assets/imgV8/bateriaHeliar.png")}
                style={style.imgProduct}/>
                <View style={{flex:1}}>
                    <View style={{alignSelf:"flex-end",marginRight:20,justifyContent:"center"}}>
                        <Icon name="delete-sweep" size={30} color="#FF4500"/>
                    </View>
                    <View style={style.blocoDescription}>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={style.textDescriptionTitle}>Marca:</Text>
                            <Text style={style.textDescriptionValue}>Heliar</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                            <Text style={style.textDescriptionValue}>20 Ah</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                            <Text style={style.textDescriptionValue}>Moto</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                            <Text style={style.textDescriptionValue}>5 anos</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1.5}}>
                <View style={style.blocoDescriptionDescricao}>
                    <Text style={style.textDescriptionTitle}>Descrição:</Text>
                    <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                </View>
                <Text style={style.textDescriptionMonetario}>R$250,00</Text>
            </View>
        </View>
        <View style={{width:0.9*widthTela,height:2,backgroundColor:"#1C1C1C",opacity:0.5,borderRadius:30,alignSelf:"center"}}></View>
        <View style={{flex:1,
            height:0.5*heightTela,
            width:widthTela,
            backgroundColor:"#FFFAFA",
            padding:20}}>
            <View style={{flex:2,flexDirection:"row"}}>
                <Image source={require("../../assets/imgV8/bateriaHeliar.png")}
                style={style.imgProduct}/>
                <View style={{flex:1}}>
                    <View style={{alignSelf:"flex-end",marginRight:20,justifyContent:"center"}}>
                        <Icon name="delete-sweep" size={30} color="#FF4500"/>
                    </View>
                    <View style={style.blocoDescription}>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={style.textDescriptionTitle}>Marca:</Text>
                            <Text style={style.textDescriptionValue}>Heliar</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                            <Text style={style.textDescriptionValue}>20 Ah</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                            <Text style={style.textDescriptionValue}>Moto</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                            <Text style={style.textDescriptionValue}>5 anos</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1.5}}>
                <View style={style.blocoDescriptionDescricao}>
                    <Text style={style.textDescriptionTitle}>Descrição:</Text>
                    <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                </View>
                <Text style={style.textDescriptionMonetario}>R$200,00</Text>
            </View>
        </View>
        <View style={{width:0.9*widthTela,height:2,backgroundColor:"#1C1C1C",opacity:0.5,borderRadius:30,alignSelf:"center"}}></View>
        <View style={{flex:1,
            height:0.5*heightTela,
            width:widthTela,
            backgroundColor:"#FFFAFA",
            padding:20}}>
            <View style={{flex:2,flexDirection:"row"}}>
                <Image source={require("../../assets/imgV8/bateriaMoura.png")}
                style={style.imgProduct}/>
                <View style={{flex:1}}>
                    <View style={{alignSelf:"flex-end",marginRight:20,justifyContent:"center"}}>
                        <Icon name="delete-sweep" size={30} color="#FF4500"/>
                    </View>
                    <View style={style.blocoDescription}>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={style.textDescriptionTitle}>Marca:</Text>
                            <Text style={style.textDescriptionValue}>Moura</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                            <Text style={style.textDescriptionValue}>44 Ah</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                            <Text style={style.textDescriptionValue}>Carro</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                            <Text style={style.textDescriptionValue}>5 anos</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1.5}}>
                <View style={style.blocoDescriptionDescricao}>
                    <Text style={style.textDescriptionTitle}>Descrição:</Text>
                    <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                </View>
                <Text style={style.textDescriptionMonetario}>R$300,00</Text>
            </View>
        </View>
        <View style={{width:0.9*widthTela,height:2,backgroundColor:"#1C1C1C",opacity:0.5,borderRadius:30,alignSelf:"center"}}></View>
        <View style={{padding:10}}>
            <Text style={{flex:1,fontSize:20,color:"#1C1C1C"}}>Completar a compra</Text>
            <Text style={{flex:1,fontSize:16,fontWeight:"bold",marginTop:15}}>Selecione uma das opções abaixo</Text>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"#f2f2f2"}}>
                <View style={style.blocoFilter}>
                    <CheckBox
                        checked={buscarNaLoja}
                        onPress={(e)=>{if(buscarNaLoja){
                            setbuscarNaLoja(false);
                            
                        }else{
                            setbuscarNaLoja(true);
                            setAddressMandatory(0);
                            setIsReceberEmCasa(false);
                        }}
                        }
                    />
                    <Text style={style.titleFilter}>Retirar em loja</Text>
                </View>
                <View style={style.blocoFilter}>
                    <CheckBox
                        checked={isReceberEmCasa}
                        onPress={(e)=>{if(isReceberEmCasa){
                            setIsReceberEmCasa(false);
                            setAddressMandatory(0);
                        }else{
                            setIsReceberEmCasa(true);
                            setAddressMandatory(1);
                            setbuscarNaLoja(false);
                        }}}
                    />
                    <Text style={style.titleFilter}>Receber em casa</Text>
                </View> 
            </View>
            <View style={addressMandatory==0?style.containerAddressNone:style.containerAddress}>
                <Text style={{flex:1,fontSize:16,fontWeight:"bold",marginTop:15}}>Selecione o endereço de entrega</Text>
                <View style={{padding:10,flex:1,marginTop:3,alignItems:"center",justifyContent:"center",elevation:3,backgroundColor:"#FFFAFA",borderRadius:10}}>
                    <Text style={{fontSize:17}}>Rua antonio ****</Text>
                </View>
                <View style={{padding:10,flex:1,marginTop:3,alignItems:"center",justifyContent:"center",elevation:3,backgroundColor:"#FFFAFA",borderRadius:10}}>
                    <Text style={{fontSize:17}}>Rua marcos ****</Text>
                </View>
            </View>
            <View>
                <Text style={{flex:1,fontSize:16,fontWeight:"bold",marginTop:15}}>Selecione a forma de pagamento</Text>
                <View style={{flexDirection:"row",padding:10}}>
                    <View style={{flex:1,borderRadius:30,opacity:opacityPix}}>
                        <TouchableNativeFeedback onPress={()=>{
                            if(opacityPix==0.4){
                                setOpacityPix(1);
                                setOpacityCreditCard(0.4);
                                setOpacityBoleto(0.4);
                                setCreditMandatory(0);
                            }else{
                                setOpacityPix(0.4);
                            }
                        }}>
                            <Image style={{resizeMode:"contain",
                            borderRadius:30,maxWidth:"100%",
                            height:70}} source={require("../../assets/icons/iconPix.png")}/>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flex:1,borderRadius:30,opacity:opacityBoleto}}>
                        <TouchableNativeFeedback onPress={()=>{
                            if(opacityBoleto==0.4){
                                setOpacityBoleto(1);
                                setOpacityCreditCard(0.4);
                                setOpacityPix(0.4);
                                setCreditMandatory(0);
                            }else{
                                setOpacityBoleto(0.4);
                            }
                        }}>
                            <Image style={{resizeMode:"contain",
                            borderRadius:30,maxWidth:"100%",
                            height:70}} source={require("../../assets/icons/iconBoleto.png")}/>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flex:1,borderRadius:30,opacity:opacityCreditCard}}>
                        <TouchableNativeFeedback onPress={()=>{
                            if(opacityCreditCard==0.4){
                                setOpacityCreditCard(1);
                                setOpacityBoleto(0.4);
                                setOpacityPix(0.4);
                                setCreditMandatory(1);
                            }else{
                                setOpacityCreditCard(0.4);
                                setCreditMandatory(0);
                            }
                        }}>
                            <Image style={{resizeMode:"contain",
                            borderRadius:30,maxWidth:"100%",
                            height:70}}
                            source={require("../../assets/icons/iconPaymentTypes.png")}/>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
            <View style={creditMandatory==0?style.containerCreditNone:style.containerCredit}>
                <View style={{padding:10,flex:1,marginTop:3,alignItems:"center",justifyContent:"center",elevation:3,backgroundColor:"#FFFAFA",borderRadius:10}}>
                    <Text style={{fontSize:17}}>1234 **** **** ****</Text>
                </View>
                <View style={{padding:10,flex:1,marginTop:3,alignItems:"center",justifyContent:"center",elevation:3,backgroundColor:"#FFFAFA",borderRadius:10}}>
                    <Text style={{fontSize:17}}>1011 **** **** ****</Text>
                </View>
            </View>
        </View>
        <View style={{marginTop:15}}>
            <TouchableNativeFeedback>
                <View style={{alignItems:"center",borderRadius:20,backgroundColor:"#ffaa23",padding:10}}>
                    <Text style={{fontSize:20}}>Confirmar pedido total R$ 750,00</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    blocoDescription:{
        flex:1,
        backgroundColor:"#f2f2f2",
        padding:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    blocoDescriptionDescricao:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#f2f2f2",
        padding:10,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    textDescriptionTitle:{
        flex:1.3,
        fontWeight:"bold",
        alignSelf:"flex-start"
    },
    textDescriptionValue:{flex:1,
        alignSelf:"flex-start"
    },
    textDescriptionMonetario:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        fontSize:30,
    },
    imgProduct:{flex:1,
        height:"100%",
        width:"30%",
        resizeMode:"contain"
    },
    linhaLaranja:{
        height:5,
        backgroundColor:"#fcbf5f"
    },
    titleFilter:{
        fontSize:14,
        fontWeight:"bold"
    },
    blocoFilter:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    containerAddress:{
        flex:1,
        display:"flex"
    },
    containerAddressNone:{
        display:"none"
    },
    containerCredit:{
        flex:1,
        display:"flex"
    },
    containerCreditNone:{
        display:"none"
    }

});

export default Cart;