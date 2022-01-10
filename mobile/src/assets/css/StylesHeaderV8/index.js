import React from 'react';
import {StyleSheet} from 'react-native';

const StylesHeaderV8 = StyleSheet.create({
    headerV8:{
        display:"flex",
        flex:1,
        height:70,
        padding:10,
        width:"100%",
        flexDirection:"row",
        backgroundColor:"#fcbf5f",
    },
    containerImg: {
        flex:3,
        justifyContent:"center",
        alignItems: "center",
    },
    iconConfig:{
        flex:1,
        justifyContent:"center",
        alignItems: "flex-start",
    },
    navHeader:{
        display:"flex",
        flex:1,
        height:40,
        borderRadius:10,
        width:"100%",
        flexDirection:"row",
        backgroundColor:"#FFFAFA"

    },
    iconProfile:{
        flex:1,
        justifyContent:"center",
    },
    searchContainer:{
        flex:1,
    },
    iconCart:{
        flex:1,
        justifyContent:"center",
    },
    input:{
        width:"100%",
        height:50,
    }
});

export default StylesHeaderV8;