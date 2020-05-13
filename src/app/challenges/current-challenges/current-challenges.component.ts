import { Component } from '@angular/core';

@Component({
  selector: 'ns-current-challenges',
  templateUrl: './current-challenges.component.html',
  styleUrls: ['./current-challenges.component.css'],
  moduleId: module.id
})
export class CurrentChallengesComponent {
  challenges = [];
  i = 1;

  addChallenge(challenge: string) {
      this.challenges.push({ id: this.i++, value: challenge });

  }

  onDelete(id: string) {
      this.challenges = this.challenges.filter(challenge => challenge.id !== id);

      if (this.challenges.length === 0) {
          this.i = 1;
      }
  }
}
