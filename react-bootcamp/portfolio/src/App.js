import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = { displayAbout: false };

        //so that "this" can be used inside the helper method
        this.toggleAboutSection = this.toggleAboutSection.bind(this);

        console.log('Component constructor this is ', this);
    }

    toggleAboutSection() {
        this.setState({displayAbout: !this.state.displayAbout});
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
                    <button onClick={this.toggleAboutSection}>Hide section</button>
                </div>) : (<div>
                    <button onClick={this.toggleAboutSection}>Unhide section</button>
                    </div>)
                }
            </div>
        )
    }
}

export default App;

