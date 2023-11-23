import { Component } from '@angular/core';
interface JackpotCard {
  iconPath: string;
  flipped: boolean;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jackpotCardsMock: JackpotCard[] = [
    {
      name: 'Slot',
      iconPath: '/assets/icons/slot-icon.png',
      flipped: false
    },
    {
      name: 'Roulette',
      iconPath: '/assets/icons/roulette-icon.png',
      flipped: false
    },
    {
      name: 'Poker',
      iconPath: '/assets/icons/poker-icon.png',
      flipped: false
    },
    {
      name: 'Poker',
      iconPath: '/assets/icons/poker-icon.png',
      flipped: false
    },
    {
      name: 'Roulette',
      iconPath: '/assets/icons/roulette-icon.png',
      flipped: false
    },
    {
      name: 'Slot',
      iconPath: '/assets/icons/slot-icon.png',
      flipped: false
    },
    {
      name: 'Poker',
      iconPath: '/assets/icons/poker-icon.png',
      flipped: false
    },
    {
      name: 'Roulette',
      iconPath: '/assets/icons/roulette-icon.png',
      flipped: false
    },
    {
      name: 'Slot',
      iconPath: '/assets/icons/slot-icon.png',
      flipped: false
    }
  ];
  jackpotCards: JackpotCard[] = [];
  flippedJackpotCards: string[] = [];
  jackpotCardWinner: string | null = null;
  constructor() {
    this.jackpotCards = JSON.parse(JSON.stringify(this.jackpotCardsMock)).sort(this.randomSortFunction);
  }

  flipJackpotCard(jackpotCard: JackpotCard, index: number) {
    if(!this.jackpotCardWinner) {
      if(!this.jackpotCards[index].flipped) {
        this.jackpotCards[index].flipped = true;
        this.flippedJackpotCards.push(jackpotCard.name);
    
        let sameFlippedJackpotCardCounter = 0;
        this.flippedJackpotCards.forEach(flippedJackpotCard => {
          if(flippedJackpotCard === jackpotCard.name) {
            sameFlippedJackpotCardCounter += 1;
          }
        });
    
        if(sameFlippedJackpotCardCounter === 3) {
          this.jackpotCardWinner = jackpotCard.name;
        }
      }
    }
  }
  randomSortFunction(a: any, b: any) {
    return 0.5 - Math.random();
  }
  reset() {
    this.jackpotCards = JSON.parse(JSON.stringify(this.jackpotCardsMock)).sort(this.randomSortFunction);
    this.jackpotCardWinner = null;
    this.flippedJackpotCards = [];
  }
}
