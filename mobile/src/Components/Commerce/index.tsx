import React,{useState} from 'react';
import {View,Image,Text, ScrollView,Dimensions,Button,StyleSheet} from 'react-native';
import StylesCommerce from '../../assets/css/StylesCommerce';
import {Input,Icon,CheckBox} from "react-native-elements";
import FooterNavigation from '../FooterNavigation';

const Commerce = () => {
    const listMarca = [
        { value: 'Moura', label: 'Moura' },
        { value: 'Heliar', label: 'Heliar' },
        { value: 'Cral', label: 'Cral' }
    ];
    const [isSelectedMoura,setIsSelectedMoura] = useState(false);
    const [isSelectedHeliar,setIsSelectedHeliar] = useState(false);
    const [isSelectedCral,setIsSelectedCral] = useState(false);
    const dimensions = Dimensions.get("window"); 
    const widthTela = dimensions.width;
    const heightTela = dimensions.height;

    return (
        <>
        <View style={StylesCommerce.navHeader}>
            <View style={StylesCommerce.searchContainer}>
            <Input placeholder='Faça uma busca aqui...' 
                leftIcon={
                    <Icon
                        name = 'search'
                        size ={20}
                    />
                }
        
                />
            </View>
        </View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"#f2f2f2"}}>
            <View style={style.blocoFilter}>
                <CheckBox
                    checked={isSelectedMoura}
                    onPress={(e)=>{if(isSelectedMoura){
                        setIsSelectedMoura(false);
                    }else{
                        setIsSelectedMoura(true);
                    }}}
                />
                <Text style={style.titleFilter}>Moura</Text>
            </View>
            <View style={style.blocoFilter}>
                <CheckBox
                    checked={isSelectedHeliar}
                    onPress={(e)=>{if(isSelectedHeliar){
                        setIsSelectedHeliar(false);
                    }else{
                        setIsSelectedHeliar(true);
                    }}}
                />
                <Text style={style.titleFilter}>Heliar</Text>
            </View>
            <View style={style.blocoFilter}>
                <CheckBox
                    checked={isSelectedCral}
                    onPress={(e)=>{if(isSelectedCral){
                        setIsSelectedCral(false);
                    }else{
                        setIsSelectedCral(true);
                    }}}
                />
                <Text style={style.titleFilter}>Cral</Text>
            </View>
        </View>
        <ScrollView style={{flex:1}}>
            <View style={{flex:1,
                height:0.5*heightTela,
                width:widthTela,
                backgroundColor:"#FFFAFA",
                padding:10}}>
                <View style={{flex:2,flexDirection:"row"}}>
                    <Image source={require("../../assets/imgV8/bateriaMoura.png")}
                    style={style.imgProduct}/>
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
                </View>
                <View style={{flex:1.5}}>
                    <View style={style.blocoDescriptionDescricao}>
                        <Text style={style.textDescriptionTitle}>Descrição:</Text>
                        <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                    </View>
                    <Text style={style.textDescriptionMonetario}>R$XX,xx</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Adicionar ao carrinho"
                            color="#3CB371"
                        />
                    </View>
                </View>
            </View>
            <View style={style.linhaLaranja}></View>
            <View style={{flex:1,
                height:0.5*heightTela,
                width:widthTela,
                backgroundColor:"#FFFAFA",
                padding:10}}>
                <View style={{flex:2,flexDirection:"row"}}>
                    <Image source={require("../../assets/imgV8/bateriaHeliar.png")}
                    style={style.imgProduct}/>
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
                <View style={{flex:1.5}}>
                    <View style={style.blocoDescriptionDescricao}>
                        <Text style={style.textDescriptionTitle}>Descrição:</Text>
                        <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                    </View>
                    <Text style={style.textDescriptionMonetario}>R$XX,xx</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Adicionar ao carrinho"
                            color="#3CB371"
                        />
                    </View>
                </View>
            </View>
            <View style={style.linhaLaranja}></View>
            <View style={{flex:1,
                height:0.5*heightTela,
                width:widthTela,
                backgroundColor:"#FFFAFA",
                padding:10}}>
                <View style={{flex:2,flexDirection:"row"}}>
                    <Image source={require("../../assets/imgV8/bateriaCral.png")}
                    style={style.imgProduct}/>
                    <View style={style.blocoDescription}>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={style.textDescriptionTitle}>Marca:</Text>
                            <Text style={style.textDescriptionValue}>Cral</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                            <Text style={style.textDescriptionValue}>150 Ah</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                            <Text style={style.textDescriptionValue}>Caminhão</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                            <Text style={style.textDescriptionValue}>3 anos</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1.5}}>
                    <View style={style.blocoDescriptionDescricao}>
                        <Text style={style.textDescriptionTitle}>Descrição:</Text>
                        <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                    </View>
                    <Text style={style.textDescriptionMonetario}>R$XX,xx</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Adicionar ao carrinho"
                            color="#3CB371"
                        />
                    </View>
                </View>
            </View>
            <View style={style.linhaLaranja}></View>
            <View style={{flex:1,
                height:0.5*heightTela,
                width:widthTela,
                backgroundColor:"#FFFAFA",
                padding:10}}>
                <View style={{flex:2,flexDirection:"row"}}>
                    <Image source={require("../../assets/imgV8/bateriaCral.png")}
                    style={style.imgProduct}/>
                    <View style={style.blocoDescription}>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={style.textDescriptionTitle}>Marca:</Text>
                            <Text style={style.textDescriptionValue}>Cral</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Amperagem:</Text>
                            <Text style={style.textDescriptionValue}>150 Ah</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Veiculo:</Text>
                            <Text style={style.textDescriptionValue}>Caminhão</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row"}}>
                            <Text style={style.textDescriptionTitle}>Tempo estimado de vida:</Text>
                            <Text style={style.textDescriptionValue}>3 anos</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1.5}}>
                    <View style={style.blocoDescriptionDescricao}>
                        <Text style={style.textDescriptionTitle}>Descrição:</Text>
                        <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                    </View>
                    <Text style={style.textDescriptionMonetario}>R$XX,xx</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Adicionar ao carrinho"
                            color="#3CB371"
                        />
                    </View>
                </View>
            </View>
            <View style={style.linhaLaranja}></View>
            <View style={{flex:1,
                height:0.5*heightTela,
                width:widthTela,
                backgroundColor:"#FFFAFA",
                padding:10}}>
                <View style={{flex:2,flexDirection:"row"}}>
                    <Image source={require("../../assets/imgV8/bateriaMoura.png")}
                    style={style.imgProduct}/>
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
                </View>
                <View style={{flex:1.5}}>
                    <View style={style.blocoDescriptionDescricao}>
                        <Text style={style.textDescriptionTitle}>Descrição:</Text>
                        <Text style={{flex:3}}>Lorem ipsum dolor sit amet, consectetur] adipiscing elit, sed do</Text>
                    </View>
                    <Text style={style.textDescriptionMonetario}>R$XX,xx</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Adicionar ao carrinho"
                            color="#3CB371"
                        />
                    </View>
                </View>
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
        fontSize:17,
        fontWeight:"bold"
    },
    blocoFilter:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"}

});

export default Commerce;