import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
