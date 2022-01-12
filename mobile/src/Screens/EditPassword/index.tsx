import React,{useState} from "react";
import { Text,View,ScrollView,Image,StyleSheet,TouchableNativeFeedback} from "react-native";
import { Icon,Input,CheckBox} from "react-native-elements";

const EditPassword = () => {
    return (
        <ScrollView>
            <View style={style.containerInputs}>
                <View>
                    <View>
                        <Text style={style.titleInput}>Senha antiga</Text>
                    </View>
                    <View>
                        <Input placeholder=''
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={style.titleInput}>Nova senha</Text>
                    </View>
                    <View>
                        <Input placeholder=''
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={style.titleInput}>Confirmar nova senha</Text>
                    </View>
                    <View>
                        <Input placeholder=''
                        />
                    </View>
                </View>
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
    containerInputs:{
        padding:20,
        backgroundColor:"#F8F8FF"
    },
    titleInput:{
        fontSize:17,
        fontWeight:"bold"
    },
    lineAndAlignJusti:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    buttonRegistry:{
        height:40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ffaa23",
        elevation:2,
    },
    textButton:{
        fontSize:20
    }
});

export default EditPassword;