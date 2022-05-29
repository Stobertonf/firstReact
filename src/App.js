import React from 'react';
import {View, Text} from 'react-dom';

const App = () => {
    return (
    <View style={style.container}>
        <Text>Hello World</Text>
    </View>
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