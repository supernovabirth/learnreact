import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = { displayAbout: false };

        //so that "this" can be used inside the helper method
        this.unhideAboutSection = this.unhideAboutSection.bind(this);

        console.log('Component constructor this is ', this);
    }

    unhideAboutSection() {
        console.log('unhideAboutSection this is ', this);
        this.setState( { displayAbout: true });
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
                </div>) : (<div>
                    <button onClick={this.unhideAboutSection}>Unhide section</button>
                    </div>)
                }
            </div>
        )
    }
}

export default App;

