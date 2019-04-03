import React, {Component} from 'react';
import SplashScreen from './src/Screens/SplashScreen'
import ScreenManager from './src/Screens/ScreenManager'


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    };

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return <SplashScreen />;
        }
        return (
            <ScreenManager/>
        )
    }
}