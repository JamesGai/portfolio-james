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
      title: 'Website Tour Guide & Chatbot',
      introduction:
        'During my internship at Loadrite, I built a chatbot that lets users ask questions like “Where’s the dashboard?” and get pointed to the right place. It was all about making site navigation smoother and more intuitive.',
      images: [
        'assets/images/loadrite1.png',
        'assets/images/loadrite2.jpg',
        'assets/images/loadrite3.jpg',
      ],
      goal: 'The main goal was to help users navigate the site effortlessly using everyday language. Instead of clicking through menus, users could just ask, and the chatbot would guide them straight to the right section using the integrated tour system.',
      techStack: [
        'Angular',
        'Ionic',
        'TypeScript',
        'Node.js',
        'C#',
        'AWS',
        'Docker',
        'Jasmine',
        'Cypress',
      ],
      github: '',
    },
    {
      title: 'Gesture Generation for Pepper Robot',
      introduction:
        'For my final year project, I worked on making the Pepper robot more expressive by teaching it to gesture while talking. We used audio cues and machine learning to make its movements feel more natural.',
      images: [
        'assets/images/pepper1.jpg',
        'assets/images/pepper2.png',
        'assets/images/pepper3.png',
      ],
      goal: 'The project aimed to generate human-like gestures in sync with speech for the Pepper robot. This improves how engaging and relatable the robot feels during interactions, especially in educational or public settings.',
      techStack: ['Python', 'PyTorch', 'GANs', 'Trello'],
      github: 'https://github.com/jgai284/P4P-Speech2Gesture',
    },
    {
      title: 'UoAMedia',
      introduction:
        'I led the build of a media platform focused on youth engagement. The platform integrated AI tools and media resources to keep users involved and creative.',
      images: [
        'assets/images/uoamedia1.png',
        'assets/images/uoamedia2.png',
        'assets/images/uoamedia3.png',
        'assets/images/uoamedia4.png',
      ],
      goal: 'The goal was to create a vibrant, youth-friendly platform that blends media content with AI-driven features, making it easier for young users to discover, contribute, and stay inspired through digital media.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Figma', 'Trello'],
      github:
        'https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales.git',
    },
    {
      title: 'DemoBlaze Performance Testing',
      introduction:
        'Using Apache JMeter, I tested how well DemoBlaze handles heavy traffic. I simulated a bunch of users doing real shopping tasks and analyzed where it started to slow down.',
      images: [
        'assets/images/demoblaze1.png',
        'assets/images/demoblaze2.png',
        'assets/images/demoblaze3.png',
      ],
      goal: 'This project aimed to test the scalability and responsiveness of the DemoBlaze e-commerce site by generating high-traffic scenarios. The insights helped pinpoint bottlenecks and improve performance under stress.',
      techStack: ['JMeter', 'Performance Testing'],
      github: '',
    },
    {
      title: 'FlashGamer',
      introduction:
        'I built a mobile app that lets users explore a collection of video games stored in Firebase. It’s like a simple but fun game catalog in your pocket.',
      images: ['assets/images/flashgamer1.png'],
      goal: 'The app’s goal was to provide users with a smooth way to browse and search for video games through an intuitive mobile interface, powered by real-time Firebase data and a clean Android UI.',
      techStack: ['Firebase', 'Android', 'Java'],
      github: '',
    },
    {
      title: 'Pendulum',
      introduction:
        'I created a secure desktop app to help manage warehouse stock, including logging inventory, generating reports, and confirming updates by email.',
      images: [
        'assets/images/pendulum1.png',
        'assets/images/pendulum2.png',
        'assets/images/pendulum3.png',
      ],
      goal: 'The purpose of this app was to simplify warehouse operations by offering inventory tracking, reporting tools, and secure user authentication. It also supported email notifications for real-time updates on inventory changes.',
      techStack: ['Java', 'JavaFX', 'OAuth', 'MySQL', 'JavaMail API'],
      github: 'https://github.com/James777G/StorageSystem.git',
    },
  ];

  async openProjectDetail(project: any) {
    const modal = await this.modalCtrl.create({
      component: ProjectDetailModalComponent,
      componentProps: {
        title: project.title,
        introduction: project.introduction,
        images: project.images,
        goal: project.goal,
        techStack: project.techStack,
        github: project.github,
      },
    });
    await modal.present();
  }
}
