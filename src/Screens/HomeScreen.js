import React,{Component} from 'react'
import {Container} from "native-base";
import ContentContainer from "../components/ContentContainerComp/ContentContainer";

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <ContentContainer/>
            </Container>
        )
    }
}


