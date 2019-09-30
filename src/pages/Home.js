import React from 'react';
import {Button} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
           title: 'Bem vindo.',
    };
    render(){
        const {navigate} = this.props.navigation;
        return (
            <Button 
                 title="Tela"
                 onPress = { () => navigate('Tela') }
                 />
        );
    }
}
