import React from 'react';
import {StyleSheet,View,ScrollView,Image,Dimensions} from 'react-native'
import { Text,Icon} from 'react-native-elements';

const Help = () => {
    return (
        <>
        <ScrollView>
            <View style={{flex:1,backgroundColor:"#FFFAFA",paddingRight:30,elevation:10}}>
                <View><Text style={{fontWeight:"bold",fontSize:25,paddingLeft:15}}>Contatos e redes</Text></View>
                <View style={{flex:1,flexDirection:"row",maxHeight:60,justifyContent:"center"}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingRight:10,alignItems:"center",borderRightColor:"#4F4F4F",borderRightWidth:2}}>
                         <View style={{flex:1,alignItems:"center"}}> 
                            <Image style={{resizeMode:"contain",maxWidth:"70%",maxHeight:"70%"}}
                            source={require("../../assets/icons/iconFacebook.png")}/>
                        </View>
                        <Text>Baterias v8</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:1,alignItems:"center"}}> 
                            <Image style={{resizeMode:"contain",maxWidth:"70%",maxHeight:"70%"}}
                            source={require("../../assets/icons/iconWhatsapp.png")}/>
                        </View>
                        <Text>11 99597-0360</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row",maxHeight:60,justifyContent:"center"}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingRight:10,alignItems:"center",borderRightColor:"#4F4F4F",borderRightWidth:2}}>
                        <View style={{flex:1,alignItems:"center"}}> 
                            <Image style={{resizeMode:"contain",maxWidth:"70%",maxHeight:"70%"}}
                            source={require("../../assets/icons/iconYoutube.png")}/>
                        </View>
                        <Text>Baterias v8</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:1,alignItems:"center"}}> 
                            <Image style={{resizeMode:"contain",maxWidth:"70%",maxHeight:"70%"}}
                            source={require("../../assets/icons/iconInstagram.png")}/>
                        </View>
                        <Text>Baterias v8 oficial</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1,paddingTop:15}}>
                <View style={{flex:1,flexDirection:"row",maxHeight:60,width:"100%"}}>
                    <View style={{flex:1}}> 
                        <Image style={{resizeMode:"contain",maxWidth:"100%",maxHeight:"100%"}}
                        source={require("../../assets/icons/iconRaio.png")}/>
                    </View>
                    <View style={{flex:4,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"black",fontSize:25}}>Sobre nós</Text>
                    </View>
                    <View style={{flex:1}}> 
                        <Image style={{resizeMode:"contain",maxWidth:"100%",maxHeight:"100%"}}
                        source={require("../../assets/icons/iconRaio.png")}/>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingLeft:30,paddingRight:10}}>
                    <Text>Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.Sed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                        sequi nesciunt. Neque orro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                        quis nostrum exercitationem ullam corporis uscipit laboriosam, nisi ut aliquid 
                        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                        velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
                        voluptas nulla pariatur?
                    </Text>
                </View>
            </View>
        </ScrollView>
        </>
    );
};

const style = StyleSheet.create({

});

export default Help;