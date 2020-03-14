import React, {Component} from 'react';

class RegularClass{}

class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);

console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to My App</h1>
                <p>lorem ipsum dorem ipsum</p>
            </div>
        )
    }
}

export default App;

