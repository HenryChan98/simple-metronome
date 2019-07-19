import React, { Component } from 'react';
import './MetronomeApp.css';
import sound1 from './sound1n.wav';
import sound2 from './sound2n.wav';

class MetronomeApp extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      running: false,
      bpm: 100,
      beatsPerMeasure:4,
      count: 0
    };

    this.sound1 = new Audio(sound1);
    this.sound2 = new Audio(sound2);
  }

  handleBpm = event =>{
    const bpm = event.target.value;
    
  if (this.state.playing) {
    this.setState({
      count: 0,
      bpm: event.target.value,
    });
    clearInterval(this.timer);
    this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
  
  } else {

    this.setState({ bpm });
  }
  }

  buttonhandler = () => {
    if (this.state.running){
      clearInterval(this.timer);

      this.setState({
        running: false
      });
    } else {
        this.timer = setInterval(
          this.playsound,
          (60/this.state.bpm) *1000
        );
        this.setState(
          {
            count: 0,
            running: true
          },
          this.playsound
        );
      }
    };
  
  playsound = () => {
    const { count, beatsPerMeasure } = this.state;

    if(count % beatsPerMeasure === 0){
      this.sound1.play();
    } else {
      this.sound2.play();
    }

    this.setState( state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };
  
  
  
  render(){
    
    const {running,bpm} = this.state;

  return (
    
    <div className="MetronomeApp" >
           
      
      <div className="metronome">
       
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input 
          type="range" 
          min="60" 
          max="240" 
          value={bpm} 
          onChange={this.handleBpm}
          />
        </div>

        
        <button onClick = { this.buttonhandler} >
        {running ? 'Stop' : 'Start'}
        </button>


      </div>

     
    </div>
    
         )
         }
}

export default MetronomeApp;
