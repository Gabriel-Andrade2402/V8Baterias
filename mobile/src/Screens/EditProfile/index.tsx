import React,{useState} from "react";
import { Text,View,ScrollView,Image,StyleSheet,TouchableNativeFeedback} from "react-native";
import { Icon,Input,CheckBox} from "react-native-elements";

const EditProfile = () => {
    const [isSelectedReceivePromotions,setIsSelectedReceivePromotions] = useState(false);
    const [isSelectedReceiveUpdates,setIsSelectedReceiveUpdates] = useState(false);
    const [isSelectedReceiveTerms,setIsSelectedReceiveTerms] = useState(false);
    return (
        <ScrollView>
            <View style={style.containerInputs}>
                <View>
                    <View>
                        <Text style={style.titleInput}>Nome</Text>
                    </View>
                    <View>
                        <Input placeholder='Claudia v8' 
                            value='Claudia v8'
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={style.titleInput}>Email</Text>
                    </View>
                    <View>
                        <Input placeholder='email@gmail.com' 
                            value='claudiaV8@gmail.com'
                            disabled={true}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={style.titleInput}>Celular</Text>
                    </View>
                    <View>
                        <Input placeholder='(11) 98682-1781' 
                            value='(11) 9 86821-781'
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={style.titleInput}>Cpf</Text>
                    </View>
                    <View>
                        <Input placeholder='123.456.789-10' 
                            value='123.456.789-10'
                            disabled={true}
                    />
                    </View>
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
        backgroundColor:"#fcbf5f",
        elevation:2,
    },
    textButton:{
        fontSize:20
    }
});

export default EditProfile;