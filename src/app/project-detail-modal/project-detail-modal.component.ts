import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-modal',
  templateUrl: './project-detail-modal.component.html',
  styleUrls: ['./project-detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProjectDetailModalComponent {
  @Input() title!: string;
  @Input() images!: string[];
  @Input() tasks!: string[];
  @Input() techStack!: string[];
  @Input() github!: string;

  currentImageIndex = 0;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }

  nextImage() {
    if (this.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }
  }

  prevImage() {
    if (this.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
