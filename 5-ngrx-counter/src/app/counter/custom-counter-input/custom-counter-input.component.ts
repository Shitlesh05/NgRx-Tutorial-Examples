import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  value!: number;
  channelName! : string ; 

  constructor(private store : Store<{ counter : CounterState}>) {}

  ngOnInit() : void {
    this.store.select('counter').subscribe((data)=>{
      console.log('CHANNEL NAME OBSERVABLE CALLED');
      this.channelName = data.channelName;
    });    // used to display the name 
  }

  onAdd(){
    this.store.dispatch(customIncrement({ value : +this.value}))
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName()); // to dispatch the the change in channel name from state
  }

}
