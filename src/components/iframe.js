import React from 'react';
import Iframe from 'react-iframe';

export const MyIframe = () => {
    return (
        <Iframe url="https://temple-explorer-demo.netlify.app/"
        width="1000px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
}