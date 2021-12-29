import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    Image,
    ScrollView,
    View,
  } from 'react-native';
import HeaderV8 from '../Components/HeaderV8';
import Storys from '../Components/Storys';
import Commerce from '../Components/Commerce';


const Home  = () => {
    return (
        <>
         <SafeAreaView>
            <ScrollView>
                <HeaderV8/>
                <Storys/>
                <Commerce/>
            </ScrollView>
        </SafeAreaView>
        </>
    );
}
export default Home;