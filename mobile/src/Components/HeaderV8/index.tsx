import React from 'react';
import {View,Image,Text,TextInput} from 'react-native';
import StylesHeaderV8 from '../../assets/css/StylesHeaderV8';
import {Input,Icon} from "react-native-elements";

const HeaderV8 = () => {
    return (
        <>
        <View style={StylesHeaderV8.headerV8}>
            <View
                style = {StylesHeaderV8.iconConfig}
            >
                <Icon
                    name = 'view-headline'
                    color="white"
                    size = {50}
                />
            </View>
            <View
                style = {StylesHeaderV8.containerImg}
            >
                <Image style={{resizeMode:"contain",maxWidth:"35%",maxHeight:"100%",flex:1}}
                    source={require("../../assets/utils/BV8_Logo.png")}/>
            </View>
            <View style={StylesHeaderV8.iconCart}>
                <Image style={{resizeMode:"contain",maxWidth:"80%",maxHeight:"80%",flex:1,
                justifyContent:"center",alignItems:"center"}}
                    source={require("../../assets/icons/iconCarrinho.png")}/>
            </View>
        </View>
        <View style={StylesHeaderV8.navHeader}>
            <View style={StylesHeaderV8.searchContainer}>
            <Input placeholder='Faça uma busca aqui...' 
                leftIcon={
                    <Icon
                        name = 'search'
                        size ={20}
                    />
                }/>
            </View>
        </View>
        </>
    );
}

export default HeaderV8;