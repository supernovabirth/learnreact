import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = { displayAbout: true };
    }

    render() {
        
        return (
            <div>
                <h1>Welcome to My App</h1>
                <p>lorem ipsum dorem ipsum</p>
                <p>Thank you for using my app.</p>
                {
                this.state.displayAbout ? (<div>
                    <p>This app is created by Cowtown Software.</p>
                    <p>We created this app in 2020.</p>
                </div>) : null
                }
            </div>
        )
    }
}

export default App;

