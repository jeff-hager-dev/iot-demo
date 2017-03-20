import { Component } from '@angular/core';

@Component({
  selector: 'client-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
    selectedExercise: number = 1;
    setExercise(exerciseNumber: number) {
        this.selectedExercise = exerciseNumber;
    }
}
