import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = { displayAbout: true };
    }

    render() {
        let about = (<div>
                    <p>This app is created by Cowtown Software.</p>
                    <p>We created this app in 2020.</p>
                </div>);

        if (!this.state.displayAbout){
            about = null;
        }
        
        return (
            <div>
                <h1>Welcome to My App</h1>
                <p>lorem ipsum dorem ipsum</p>
                <p>Thank you for using my app.</p>
                {about}
            </div>
        )
    }
}

export default App;

