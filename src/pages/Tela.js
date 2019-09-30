import React from 'react';
import {Button} from 'react-native';

export default class Tela extends React.Component {
    static navigationOptions = {
        title: 'Tela'
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <Button 
               title = 'Home'
               onPress = { () => navigate('Home') }
            />
        );
    }
}