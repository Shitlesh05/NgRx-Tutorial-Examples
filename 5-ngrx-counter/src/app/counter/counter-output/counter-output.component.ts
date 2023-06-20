import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  
  counter! : number ; 
  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void {
   this.store.select('counter').subscribe((data)=>{
    console.log('COUNTER OBSERVABLE CALLED');
    this.counter = data.counter;
   });   // used to display the counter value
  }
}
