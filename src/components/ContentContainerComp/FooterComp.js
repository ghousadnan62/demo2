import React from 'react';
import {Button, Footer, FooterTab, Icon, Text} from "native-base";
import {Actions} from "react-native-router-flux";
/*
* receives props
* ----------------
* activeTabNum
* */

export default class FooterComp extends React.Component {
  /*  state = {
        activeTabHome: null,
        activeTabShop: null,
        activeTabDesinger: null,
        activeTabWishlist: null,
        activeTabProfile: null,

    };

    activeTabHandler = () => {
        if (this.props.activeTabNum === 1) {
            return this.setState({
                activeTabHome: 'active'
            })
        } else if (this.props.activeTabNum === 2) {
            activeTabShop:'active'
        } else if (this.props.activeTabNum === 3) {
            activeTabDesinger:'active'
        } else if (this.props.activeTabNum === 4) {
            activeTabWishlist:'active'
        } else if (this.props.activeTabNum === 5) {
            activeTabProfile:'active'
        }


    };*/

    render() {

        return (

            <Footer>
                <FooterTab style={{
                    display: 'flex'
                }}>

                    <Button active={this.props.activeTabNum=== 1} onPress={() => Actions.homeScreen()}>
                        <Icon name="home"/>
                        <Text>home</Text>
                    </Button>

                    <Button active={this.props.activeTabNum=== 2}  onPress={() => Actions.shopScreen()}>
                        <Icon name="briefcase"/>
                        <Text>Shop</Text>
                    </Button>


                    <Button active={this.props.activeTabNum=== 3} onPress={() => Actions.designerScreen()}>
                        <Icon name="ribbon"/>
                        <Text>Designer</Text>
                    </Button>

                    <Button active={this.props.activeTabNum=== 4}  onPress={() => Actions.wishlistScreen()}>
                        <Icon name="star"/>
                        <Text>Wishlist</Text>
                    </Button>

                    <Button active={this.props.activeTabNum=== 5} onPress={() => Actions.accountScreen()}>
                        <Icon name="person"/>
                        <Text>Me</Text>
                    </Button>

                </FooterTab>

            </Footer>
        )
    };
}

