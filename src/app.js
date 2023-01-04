import React from 'react';

export default class App extends React.Component {
    dummy = () => {
        return <div>Function called</div>
    }

    render() {
        return (
            <div className={'hello'}>
                <h1>{this.dummy()}</h1>
                <h2>Hello Electrate</h2>
                <img src="./assets/logo.png" />
                <h4>A basic Electron + React.js template</h4>
                <h4>Have Fun!</h4>
            </div>
        );
    }
}
