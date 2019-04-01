import {Button, Text} from "native-base";
import React from "react";

/*
* A custom button component
* requires following props
* title
* */

const ButtonComp = (props) => {
    return(
        <Button rounded
            style={{

                backgroundColor: 'black',
                alignSelf: 'center',
                marginTop: 25,
                marginBottom: 20
            }}>
            <Text style={{color:'white'}}>{props.title}</Text>
        </Button>

    )
};


export default ButtonComp;