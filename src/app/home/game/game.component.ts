import { Component, OnInit } from '@angular/core';
import { Card } from './game.type';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from '../../components/template/template.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, TemplateComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  isCheck: boolean = false;

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame() {
    const images = [
      '🐼',
      '🐻‍❄️',
      '🐭',
      '🐹',
      '🐻',
      '🐨',
      '🐮',
      '🐸',
      '🐼',
      '🐻‍❄️',
      '🐭',
      '🐹',
      '🐻',
      '🐨',
      '🐮',
      '🐸',
    ];
    this.cards = images
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card) {
    if (this.isCheck || card.flipped || card.matched) {
      return;
    }
    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch() {
    this.isCheck = true;
    const [firstCard, secondCard] = this.flippedCards;
    if (firstCard.image === secondCard.image) {
      firstCard.matched = true;
      secondCard.matched = true;
    }

    setTimeout(() => {
      this.flippedCards.forEach((card) => (card.flipped = false));
      this.flippedCards = [];
      this.isCheck = false;
    }, 1000);
  }

  resetGame() {
    this.cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
    });
    this.initializeGame();
  }
}
