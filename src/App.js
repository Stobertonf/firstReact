import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-dom';

const colorGithub = '#010409';


const App = () => {
    return (
    <SafeAreaView>
        <SafeAreaView backgroundColor={'#010409'} barStyle="light-content" />
        <View style={style.container}>
            <Text>Hello World</Text>
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
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});