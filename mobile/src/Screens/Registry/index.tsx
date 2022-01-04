import React,{useEffect, useState} from "react";
import {Text,StyleSheet,View,TouchableOpacity,Image,Dimensions} from 'react-native';
import { FlatList,ScrollView} from 'react-native-gesture-handler';
import { Icon,Input,CheckBox} from "react-native-elements";

const widthView = Dimensions.get("window").width;

const Registry = () =>{
    const [isSelectedReceivePromotions,setIsSelectedReceivePromotions] = useState(false);
    const [isSelectedReceiveUpdates,setIsSelectedReceiveUpdates] = useState(false);
    const [isSelectedReceiveTerms,setIsSelectedReceiveTerms] = useState(false);
    const [listDataAddress,setListDataAddress] = useState([{
        key:1,
        road:"",
        number:10,
        cep:"",
        referencePoint:"",
        obs:""
    }]);
    const handleAddAddress = () => {
        const newId = listDataAddress.length+1;
        setListDataAddress([...listDataAddress,{key:newId,road:"",number:15,cep:"",referencePoint:"",obs:""}]);
    };
    const renderDeleteIcon = (listDataAddress) => {
        if(listDataAddress.lenght>1){
            return <View><TouchableOpacity><Icon name="delete-forever" color="#808080"/></TouchableOpacity></View>;
        }else{
            return <View></View>;
        }
    }
    const iconDelete = renderDeleteIcon(listDataAddress);

    const handleRenderAddress = ({key}) => {
        return (<View key={key}>
            <View>{iconDelete}</View>
            <View>
            <Text style={style.titleSubInput}>Rua</Text>
            <Input placeholder='rua...' 
            leftIcon={
                <Icon
                    name = 'apartment'
                    size ={20}
                    color = "#FF8C00"
                />
            }
            />
            </View>
            <View >
                <Text style={style.titleSubInput}>Número</Text>
                <Input placeholder='123' 
                leftIcon={
                    <Icon
                        name = 'chrome-reader-mode'
                        size ={20}
                        color = "#FF8C00"
                    />
                }
                />
            </View>
            <View >
                <Text style={style.titleSubInput}>Cep</Text>
                <Input placeholder='12345-678' 
                leftIcon={
                    <Icon
                        name = 'approval'
                        size ={20}
                        color = "#FF8C00"
                    />
                }
                />
            </View>
            <View >
                <Text style={style.titleSubInput}>Ponto de referência</Text>
                <Input placeholder='próximo a....' 
                leftIcon={
                    <Icon
                        name = 'festival'
                        size ={20}
                        color = "#FF8C00"
                    />
                }
                />
            </View>
            <View >
                <Text style={style.titleSubInput}>Observação</Text>
                <Input placeholder='casa 2' 
                leftIcon={
                    <Icon
                        name = 'announcement'
                        size ={20}
                        color = "#FF8C00"
                    />
                }
                />
            </View>
        </View>);
    }
    return(
        <>
            
            <ScrollView>
                <View style={{width:widthView}}>
                    <Image style={{resizeMode:"contain",maxWidth:"55%",alignSelf:"center"}}
                    source={require("../../assets/utils/BV8_Logo.png")}/>
                    <View style={style.containerInputs}>
                        <View >
                            <Text style={style.titleInput}>Nome completo</Text>
                            <Input placeholder='Nome e sobrenome...' 
                            leftIcon={
                                <Icon
                                    name = 'person-pin'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        <View >
                            <Text style={style.titleInput}>Email</Text>
                            <Input placeholder='email...' 
                            leftIcon={
                                <Icon
                                    name = 'email'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        <View >
                            <Text style={style.titleInput}>celular</Text>
                            <Input placeholder='(12) 934567-8910...' 
                            leftIcon={
                                <Icon
                                    name = 'phone'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        <View >
                            <Text style={style.titleInput}>Cpf</Text>
                            <Input placeholder='123.456.789-10...' 
                            leftIcon={
                                <Icon
                                    name = 'badge'
                                    size ={20}
                                    color = "#FF8C00"
                                />
                            }
                            />
                        </View>
                        <View >
                            <Text style={style.titleInput}>Endereço</Text>
                            
                            <View style={style.subContainer}>
                                <ScrollView horizontal style={{width:widthView}}>
                                    <FlatList 
                                    style={{width:0.7*widthView}}
                                    data={listDataAddress} keyExtractor={item => item.key}
                                    renderItem={handleRenderAddress}/>
                                </ScrollView>
                                <TouchableOpacity onPress={handleAddAddress}>
                                    <View style={style.buttonAddAddress}>
                                        <Text style={style.textButton}>Adicionar novo endereço</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop:15}}>
                                <Text style={style.titleInput}>Senha</Text>
                                <Input placeholder='senha forte...' 
                                leftIcon={
                                    <Icon
                                        name = 'security'
                                        size ={20}
                                        color = "#FF8C00"
                                    />
                                }
                                />
                            </View>
                            <View >
                                <Text style={style.titleInput}>Confirme a senha</Text>
                                <Input placeholder='confirmar senha' 
                                leftIcon={
                                    <Icon
                                        name = 'security'
                                        size ={20}
                                        color = "#FF8C00"
                                    />
                                }
                                />
                            </View>
                            <View style={style.lineAndAlignJusti}>
                                <CheckBox
                                    checked={isSelectedReceivePromotions}
                                    onPress={(e)=>{if(isSelectedReceivePromotions){
                                        setIsSelectedReceivePromotions(false);
                                    }else{
                                        setIsSelectedReceivePromotions(true);
                                    }}}
                                />
                                <Text>Receber promoções por email</Text>
                            </View>
                            <View style={style.lineAndAlignJusti}>
                                <CheckBox
                                    checked={isSelectedReceiveUpdates}
                                    onPress={(e)=>{if(isSelectedReceiveUpdates){
                                        setIsSelectedReceiveUpdates(false);
                                    }else{
                                        setIsSelectedReceiveUpdates(true);
                                    }}}
                                />
                                <Text>Receber atualizações de preços por email</Text>
                            </View>
                            <View style={style.lineAndAlignJusti}>
                                <CheckBox
                                    checked={isSelectedReceiveTerms}
                                    onPress={(e)=>{if(isSelectedReceiveTerms){
                                        setIsSelectedReceiveTerms(false);
                                    }else{
                                        setIsSelectedReceiveTerms(true);
                                    }}}
                                />
                                <Text>Concordo com os termos descritos</Text>
                            </View>                      
                            <TouchableOpacity style={{marginBottom:5}}>
                                <View style={style.buttonLogin}>
                                    <Text style={style.textButton}>Registrar-se</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    lineFlex:{
        flex:1,
        flexDirection:"row"
    },
    justifyAndAlingCenter:{
        justifyContent:"center",
        alignItems:"center"
    },
    lineAndAlignJusti:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    containerInputs:{
        paddingLeft:10
    },
    titleInput:{
        fontSize:17,
        fontWeight:"bold"
    },
    titleSubInput:{
        fontSize:14,
        fontWeight:"bold"
    },
    subContainer:{
        paddingLeft:15,
        paddingRight:15
    },
    buttonLogin:{
        height:40,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FF8C00",
        elevation:5,
    },
    buttonAddAddress:{
        height:40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFAFA",
        elevation:2,
    },
    textButton:{
        fontSize:20
    }
});

export default Registry;