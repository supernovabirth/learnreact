import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';

ReactDOM.render(<Header/>, document.getElementById('root'));

class CubeSat {
    constructor(name, launchDate) {
        this.name = name;
        this.launchDate = launchDate;
    }

    downlink() {
        console.log('CubeSat', this.name, 'was launched on', this.launchDate);
    }
}

const orbitOne = new CubeSat('Orbit One', '12/20/2020');

orbitOne.downlink();

console.log(orbitOne);

class deepSpace extends CubeSat {
    constructor(name, launchDate, destination, speed, currentLocation){
        super(name,launchDate);
        this.destination = destination;
        this.speed = speed;
        this.currentLocation = currentLocation;
    }

    getCurrentStats(){
        console.log('Current Speed:', this.speed);
        console.log('Current Location:', this.currentLocation);
    }
}

const deepSpaceOne = new deepSpace('DeepSpaceOne', '12/12/2021', 'Jupiter', '5000km/s', '12N45W');

deepSpaceOne.getCurrentStats();
deepSpaceOne.downlink();
console.log(deepSpaceOne);