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
               <Text  acessibilityLabel="Nickname: stobertof" style="{[style.defaultText, style.name]}">Stoberton Francisco</Text>
               <Text  acessibilityLabel="Foto na sala:" style="{[style.defaultText, style.nickname]}">Stobertonf</Text>
               <Text  acessibilityLabel="Mobile Developer Flutter:" style="{[tyle.defaultText, style.description]}">Mobile Developer Flutter</Text>
               <Pressable onPress={()=> console.log('github')}>
                <view style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open In Github
                        </Text>
                </view>
               </Pressable>
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
        borderWidth:2, 
        borderRadius: 100,
        borderColor:'white',
    },
   defaultText: {
       color: colorFontGithub,
   },
   name: {
       fontSize: 24,
       marginTop: 20,
       fontWeight:'bold',
   },
   nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
   },
   description: {
       fontSize:16,
       fontWeight:'bold',
   },
   button: {
    padding: 20,  
    marginTop: 20,
    borderRadius: 10,
    color: colorDarkFontGithub,
   },
   textButton: {
    fontSize:16,
    fontWeight:'bold',
},
   
});