import React,{useState} from 'react';
import {Text} from 'react-native-elements';
import { Dimensions,ScrollView,View,Image,StyleSheet } from 'react-native';

const imagesStorys = [
    require("../../assets/imgV8/arteTeste1.png"),
    require("../../assets/imgV8/arteTeste2.png"),
    require("../../assets/imgV8/arteTeste3.png")
];
const dimensions = Dimensions.get("window"); 
const widthTela = dimensions.width;
const heightTela = dimensions.height; 

const Storys =()=>{
    const [active,setActive] = useState(0);
    const changeStory = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== active){
            setActive(slide);
        }
    }      

    return (
        <>
            <View styles={{width:widthTela,height:200}}>
                <ScrollView pagingEnabled 
                showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={changeStory} 
                style={{width:widthTela,height:200}}>
                    {
                    imagesStorys.map((value,index)=>(
                        <Image
                            key={index}
                            source={value}
                            style ={{width:widthTela,height:200,resizeMode:"contain"}}
                        />
                    ))
                    }
                </ScrollView>
                <View style={{flexDirection:"row",
                position:"absolute",
                bottom:15,alignSelf:"center"}}>
                    {
                        imagesStorys.map((i,k)=>(
                            <Text
                                key={k} 
                                style={k==active ? style.ballStoryactive : style.ballStory}>
                                ⬤
                            </Text>
                        ))
                    }
                </View>
            </View>
        </>
    )

};
const style = StyleSheet.create({
    ballStory:{
        color:"#888",
        margin:3
    },
    ballStoryactive:{
        color:"white",
        margin:3
    },
});

export default Storys;