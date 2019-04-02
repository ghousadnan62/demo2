import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from './HomeScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);