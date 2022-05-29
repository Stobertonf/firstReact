import React from 'react';
import {View, 
        Image, 
        StyleSheet, 
        SafeAreaView, 
        StatusBar, 
        Text} from 'react-dom';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/49157502?v=4';


const App = () => {
    return (
    <SafeAreaView>
        <SafeAreaView backgroundColor={'#010409'} barStyle="light-content" />
        <View style={style.container}>
           <View>
               <Image 
               acessibilityLabel="Foto na sala."
               style={style.avatar} 
               source={{uri:imageProfileGithub}} 
               />
               <Text style="{[style.defaultText, style.name]}">Stoberton Francisco</Text>
               <Text style="{[style.defaultText, style.nickname]}">Stobertonf</Text>
               <Text style="{[tyle.defaultText, style.description]}">Mobile Developer Flutter</Text>
           </View>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column
        flex: 1, //Expande para a tela inteira
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#010409',
    },
    content:{
        padding: 20,
        justifyContent: 'center',
    },
    avatar: {
        width:50,
        height:50,
        borderRadius: 100,
        borderColor:'white',
        borderWidth:2, 
    },
   defaultText: {
       color: colorFontGithub,
   },
   name: {
       marginTop: 20
       fontSize: 24,
       fontWeight:'bold',
   },
   nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
   },
   description: {
       fontSize:16,
       fontWeight:'bold',
   }
   
});