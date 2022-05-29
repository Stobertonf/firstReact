import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-dom';

const App = () => {
    return (
    <SafeAreaView>
        <SafeAreaView backgroundColor={'pink'} barStyle="dark-content" />
        <View style={style.container}>
            <Text>Hello World</Text>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex: 1, //Expande para a tela inteira
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});