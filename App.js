import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/pages/Home';
import Tela from './src/pages/Tela';

const MainNavigation = createStackNavigator({
  Home: {screen: Home},
  Tela: {screen: Tela},
});

const App = createAppContainer(MainNavigation);

export default App;