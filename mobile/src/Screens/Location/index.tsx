import React from 'react';
import {View,Text,ScrollView,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Location = () => {
    return (
        <>
            <ScrollView>
                <View style={{padding:10}}>
                    <View style={style.containerLocation}>
                        <View style={style.containerInformationsLocation}>
                            <View >
                                <Icon name="location-on" size={140}/>
                            </View>
                            <View style={style.containerTitleLocation}>
                                <Text style={style.titleLocation}>Itaquaquecetuba</Text>
                            </View>
                            <View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Descrição:</Text>
                                    <Text style={style.containerDescriptionLocation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                                </View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Serviços:</Text>
                                    <Text style={style.containerDescriptionLocation}>Balanceamento, auto-elétrica</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.containerButtonGps}>
                            <TouchableOpacity>
                                <Text style={style.textButton}>Adicionar rota ao GPS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.containerLocation}>
                        <View style={style.containerInformationsLocation}>
                            <View >
                                <Icon name="location-on" size={140}/>
                            </View>
                            <View style={style.containerTitleLocation}>
                                <Text style={style.titleLocation}>Itaim Paulista</Text>
                            </View>
                            <View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Descrição</Text>
                                    <Text style={style.containerDescriptionLocation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                                </View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Serviços:</Text>
                                    <Text style={style.containerDescriptionLocation}>Balanceamento, alinhamento, auto-elétrica</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.containerButtonGps}>
                            <TouchableOpacity>
                                <Text style={style.textButton}>Adicionar rota ao GPS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.containerLocation}>
                        <View style={style.containerInformationsLocation}>
                            <View >
                                <Icon name="location-on" size={140}/>
                            </View>
                            <View style={style.containerTitleLocation}>
                                <Text style={style.titleLocation}>Guarulhos</Text>
                            </View>
                            <View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Descrição:</Text>
                                    <Text style={style.containerDescriptionLocation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                                </View>
                                <View style={style.containerSubTitle}>
                                    <Text style={style.subTitle}>Serviços:</Text>
                                    <Text style={style.containerDescriptionLocation}>Balanceamento, Alinhamento, Auto-elétrica</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.containerButtonGps}>
                            <TouchableOpacity>
                                <Text style={style.textButton}>Adicionar rota ao GPS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    containerLocation:{
        marginTop:10,
        backgroundColor:"#FFFAFA",
        elevation:5,
        borderRadius:15,
    },
    containerInformationsLocation:{
        padding:10
    },
    containerTitleLocation:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    titleLocation:{
        fontSize:30,
        fontWeight:"bold",
    },
    containerSubTitle:{
        flex:1,
        flexDirection:"row"
    },
    subTitle:{
        fontWeight:"bold",
        fontSize:15
    },
    textButton:{
        fontSize:20,
        color:"#FFFAFA"
    },
    containerButtonGps:{
        backgroundColor:"#fdbb53",
        padding:5,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:"center",
        alignItems:"center",
    },
    containerDescriptionLocation:{
        width:300
    }

});

export default Location;