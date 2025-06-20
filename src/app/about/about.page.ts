import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonModal,
    IonButton,
  ],
})
export class AboutPage {
  isModalOpen = false;
  modalTitle = '';
  modalContent = '';

  openModal(interest: string) {
    this.isModalOpen = true;
    switch (interest) {
      case 'exercise':
        this.modalTitle = 'Exercise';
        this.modalContent = 'I enjoy strength training and cardio at the gym.';
        break;
      case 'tableTennis':
        this.modalTitle = 'Table Tennis';
        this.modalContent =
          'I regularly play competitive table tennis with friends.';
        break;
      case 'gaming':
        this.modalTitle = 'Gaming';
        this.modalContent = 'Favorite games: Valorant, CS2, and Elden Ring.';
        break;
      case 'music':
        this.modalTitle = 'Music';
        this.modalContent =
          'I enjoy EDM, Lo-fi beats, and instrumental soundtracks.';
        break;
      case 'firearms':
        this.modalTitle = 'Firearms';
        this.modalContent =
          'I am interested in the mechanics and design of firearms.';
        break;
    }
  }
}
