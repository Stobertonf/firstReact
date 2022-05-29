import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-dom';

const colorGithub = '#010409';
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
               source={{uri:imageProfileGithub}} />
           </View>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor:'#010409',
        flex: 1, //Expande para a tela inteira
    },
    avatar: {
        width:50,
        height:50,
        borderRadius: 100,
        borderColor:'white',
        borderWidth:2, 
    }
   
});