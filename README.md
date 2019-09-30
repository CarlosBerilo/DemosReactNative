# DemosReactNative
Modelos de componentes React Native, comentados em português para facilitar a compreenção e o estudo dos brasileiros que estão começando a desenvolver.

## Recurso

Navegação entre telas

## Exigências

O ambiente de desenvolvimento do REACT-NATIVE pronto usando configuração da documentação oficial em [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/0.60/getting-started)

## Instruções de configuração

Instalar as bibliotecas:
- react-navigation ( npm install --save react-navigation )
- react-native-gesture-handler ( npm install --save react-native-gesture-handler)
- react-navigation-stack ( npm install --save react-navigation-stack )

## Fluxo
Alterar o arquivo __App.js__ para configurar o gerenciamento da navegação entre telas.

 Fornece uma maneira de seu aplicativo fazer a transição entre telas, onde cada nova tela é colocada no topo de uma pilha. 
 > import {createStackNavigator} from 'react-navigation-stack';

__createAppContainer__ é o componente principal para React renderizar
> import {createAppContainer} from 'react-navigation';

Passa para __navigate__ o nome da tela para fazer o link.
> const {navigate} = this.props.navigation;

> navigate('Tela')

## Lição aprendida
A biblioteca da navegação do REACT-NATIVE é bem simples de compreender e tem outras possibilidades como passar paramentros, configurar cabeçalho.



