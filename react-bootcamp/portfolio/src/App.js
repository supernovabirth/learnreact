import React, {Component} from 'react';

class App extends Component {
    state = { displayAbout: false };

    toggleAboutSection = () => {
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

