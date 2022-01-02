import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    Image,
    ScrollView,
    View,
    Dimensions
  } from 'react-native';
import HeaderV8 from '../../Components/HeaderV8';
import Storys from '../../Components/Storys';
import Commerce from '../../Components/Commerce';
import FooterNavigation from '../../Components/FooterNavigation';

const widthView = Dimensions.get("window").width;
const heightView = Dimensions.get("window").height;

const Home  = ({navigation}) => {
    return (
        <>
         <SafeAreaView>
            <View style={{width:widthView,height:heightView}}>
                <View style={{flex:12}}>
                    <ScrollView>
                        <HeaderV8 navigation={navigation}/>
                        <Storys/>
                        <Commerce/>
                    </ScrollView>
                </View>
                <View style={{flex:1}}>
                    <FooterNavigation/>
                </View>
            </View>
        </SafeAreaView>
        </>
    );
}
export default Home;