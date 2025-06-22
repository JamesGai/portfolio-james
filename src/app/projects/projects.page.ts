import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor],
})
export class ProjectsPage {
  constructor(private modalCtrl: ModalController) {}

  projects = [
    {
      title: 'Project 1',
      description:
        'This is a detailed description of Project 1. It involves building a chatbot system...',
      images: [
        'assets/icons/profile.png',
        'assets/icons/ml.png',
        'assets/icons/llm.png',
      ],
      goal: 'Enable users to navigate the site using natural language queries.',
      techStack: ['Angular', 'Ionic', 'TypeScript', 'Node.js'],
      github: 'https://github.com/yourusername/chatbot-navigation',
    },
    {
      title: 'Project 2',
      description:
        'This is a detailed description of Project 2. It’s about deploying ML models using Docker and AWS...',
      images: [
        'assets/icons/ml.png',
        'assets/icons/docker.png',
        'assets/icons/python.png',
      ],
      goal: 'Enable users to navigate the site using natural language queries.',
      techStack: ['Angular', 'Ionic', 'TypeScript', 'Node.js'],
      github: 'https://github.com/yourusername/chatbot-navigation',
    },
    {
      title: 'Project 3',
      description:
        'This is a detailed description of Project 3. It focuses on gesture generation using GANs...',
      images: [
        'assets/icons/llm.png',
        'assets/icons/c sharp.png',
        'assets/icons/react.png',
      ],
      goal: 'Enable users to navigate the site using natural language queries.',
      techStack: ['Angular', 'Ionic', 'TypeScript', 'Node.js'],
      github: 'https://github.com/yourusername/chatbot-navigation',
    },
  ];

  async openProjectDetail(project: any) {
    const modal = await this.modalCtrl.create({
      component: ProjectDetailModalComponent,
      componentProps: {
        title: project.title,
        description: project.description,
        images: project.images,
        goal: project.goal,
        techStack: project.techStack,
        github: project.github,
      },
    });
    await modal.present();
  }
}
