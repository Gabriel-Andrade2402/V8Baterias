import React,{useState} from "react";
import { View,StyleSheet,Text,TouchableNativeFeedback,Image,Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const widthView = Dimensions.get('window').width;

const Requests = () => {

    const [displayProductCompletedOne,setDisplayProductCompletedOne] = useState(0);
    const [displayProductCompletedTwo,setDisplayProductCompletedTwo] = useState(0);

    return (
        <>
        <ScrollView>
            <View>
                <View style={{padding:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"#1C1C1C"}}>Pedidos em Andamento</Text>
                </View>
                <View>
                    <View style={{width:widthView,padding:10,elevation:3,backgroundColor:"#FFFAFA",borderRadius:20,marginBottom:5}}>
                        <View style={{flex:1}}>
                            <View style={{flex:2}}>
                                <Image source={require("../../assets/imgV8/bateriaCral.png")}
                                style={style.imgProduct}/>
                            </View>
                            <View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>NU0DS48D897A5W4ESD</Text>
                            </View>
                        </View>
                        <View style={style.blocoDescription}>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={style.textDescriptionTitle}>Marca:</Text>
                                    <Text style={style.textDescriptionValue}>Cral</Text>
                                </View>
                                <View style={{flex:1,flexDirection:"row"}}>
                                    <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                                    <Text style={style.textDescriptionValue}>40 Ah</Text>
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                                <Text style={style.textDescriptionValue}>Carro</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                                <Text style={style.textDescriptionValue}>2 anos</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Quantidade:</Text>
                                <Text style={style.textDescriptionValue}>3</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Total:</Text>
                                <Text style={style.textDescriptionValue}>R$ 300,00</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",marginTop:10}}>
                                <Text style={{color:"#00FF7F",fontSize:25,fontWeight:"bold"}}>Em andamento</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{width:widthView,height:5,backgroundColor:"#ffaa23"}}></View>
            <View>
                <View style={{padding:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"#1C1C1C"}}>Histórico de pedidos</Text>
                </View>
                <View>
                    <View style={{width:widthView,padding:10,elevation:3,backgroundColor:"#FFFAFA",borderRadius:20,marginBottom:5}}>
                        <View style={{flex:1}}>
                            <View style={{flex:2}}>
                                <Image source={require("../../assets/imgV8/bateriaMoura.png")}
                                style={style.imgProduct}/>
                            </View>
                            <View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>NU0DS48D897A5W4ESD</Text>
                            </View>
                        </View>
                        <View style={style.blocoDescription}>
                            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <Text style={style.textDescriptionTitle}>Marca:</Text>
                                <Text style={style.textDescriptionValue}>Moura</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                                <Text style={style.textDescriptionValue}>40 Ah</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                                <Text style={style.textDescriptionValue}>Carro</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                                <Text style={style.textDescriptionValue}>2 anos</Text>
                            </View>
                        </View>
                        <View style={displayProductCompletedOne==1?style.blocoDescription:style.blocoDescriptionNone}>
                            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <Text style={style.textDescriptionTitle}>Data da compra:</Text>
                                <Text style={style.textDescriptionValue}>08/01/2022</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Data da finalização do pedido:</Text>
                                <Text style={style.textDescriptionValue}>08/01/2022</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Quantidade:</Text>
                                <Text style={style.textDescriptionValue}>2</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Valor total:</Text>
                                <Text style={style.textDescriptionValue}>R$ 400,00</Text>
                            </View>
                        </View>
                        <View style={{padding:10,opacity:0.8}}>
                            <TouchableNativeFeedback onPress={()=>{displayProductCompletedOne==0?setDisplayProductCompletedOne(1):setDisplayProductCompletedOne(0)}}>
                                <View style={style.buttonDetails}>
                                    <Text style={style.titleButtonDetails}>Detalhes</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{width:widthView,padding:10,elevation:3,backgroundColor:"#FFFAFA",borderRadius:20,marginBottom:5}}>
                        <View style={{flex:1}}>
                            <View style={{flex:2}}>
                                <Image source={require("../../assets/imgV8/bateriaHeliar.png")}
                                style={style.imgProduct}/>
                            </View>
                            <View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>NU0DS48D897A5W4ESD</Text>
                            </View>
                        </View>
                        <View style={style.blocoDescription}>
                            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <Text style={style.textDescriptionTitle}>Marca:</Text>
                                <Text style={style.textDescriptionValue}>Heliar</Text>
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
                                <Text style={style.textDescriptionValue}>3 anos</Text>
                            </View>
                        </View>
                        <View style={displayProductCompletedTwo==1?style.blocoDescription:style.blocoDescriptionNone}>
                            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <Text style={style.textDescriptionTitle}>Data da compra:</Text>
                                <Text style={style.textDescriptionValue}>08/01/2022</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Data da finalização do pedido:</Text>
                                <Text style={style.textDescriptionValue}>08/01/2022</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Quantidade:</Text>
                                <Text style={style.textDescriptionValue}>2</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Text style={style.textDescriptionTitle}>Valor total:</Text>
                                <Text style={style.textDescriptionValue}>R$ 400,00</Text>
                            </View>
                        </View>
                        <View style={{padding:10,opacity:0.8}}>
                            <TouchableNativeFeedback onPress={()=>{displayProductCompletedTwo==0?setDisplayProductCompletedTwo(1):setDisplayProductCompletedTwo(0)}}>
                                <View style={style.buttonDetails}>
                                    <Text style={style.titleButtonDetails}>Detalhes</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    imgProduct:{
        height:150,
        width:"100%",
        resizeMode:"contain"
    },
    blocoDescription:{
        flex:1,
        padding:10,
        borderRadius:10
    },
    blocoDescriptionNone:{
        display:"none"
    },
    textDescriptionTitle:{
        flex:1.3,
        fontWeight:"bold",
        alignSelf:"flex-start"
    },
    textDescriptionValue:{
        flex:1,
        alignSelf:"flex-start"
    },
    buttonDetails:{
        padding:5,
        backgroundColor:"#555555",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    },
    titleButtonDetails:{
        fontSize:22,
        color:"#FFFAFA"
    }
});

export default Requests;