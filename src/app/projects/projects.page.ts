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
      introduction: [
        'Built an interactive chatbot using Angular and Ionic during Loadrite internship.',
        'Mapped natural language queries to predefined website tour actions.',
        'Used C# to develop an API Gateway that supported global access.',
        'Trained and deployed a lightweight ML model via Docker on AWS.',
        'Tested the chatbot with Jasmine and Cypress for high reliability.',
      ],
      images: [
        'assets/images/loadrite1.png',
        'assets/images/loadrite2.jpg',
        'assets/images/loadrite3.jpg',
      ],
      goal: 'This project aimed to enhance user navigation by enabling natural language interaction. I developed and integrated a chatbot system that understood common queries and linked them with a dynamic tour guide, significantly improving accessibility and user experience.',
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
      introduction: [
        'Final year research project using GAN-based deep learning models.',
        'Generated human-like gestures for a Pepper robot based on speech audio.',
        'Trained models using PyTorch and analyzed datasets with EDA.',
        'Published findings in ACRA 2024 robotics conference.',
        'Managed planning and updates using Trello.',
      ],
      images: [
        'assets/images/pepper1.jpg',
        'assets/images/pepper2.png',
        'assets/images/pepper3.png',
      ],
      goal: 'This project aimed to give Pepper robot natural co-speech gestures using audio input. I handled everything from data analysis to model training and deployment, resulting in real-time, synchronized robotic movements.',
      techStack: ['Python', 'PyTorch', 'GANs', 'Trello'],
      github: 'https://github.com/jgai284/P4P-Speech2Gesture',
    },
    {
      title: 'UoAMedia',
      introduction: [
        'Led development of an AI-powered platform targeting youth engagement.',
        'Designed wireframes and prototypes using Figma.',
        'Built a full MERN stack web app integrating media and interactive tools.',
        'Collaborated with a team of 6 and managed tasks via Trello.',
        'Implemented AI-driven features to enhance content relevance.',
      ],
      images: [
        'assets/images/uoamedia1.png',
        'assets/images/uoamedia2.png',
        'assets/images/uoamedia3.png',
        'assets/images/uoamedia4.png',
      ],
      goal: 'The goal was to create a digital platform combining media and AI tools to encourage creative participation from young users. I led the full-stack implementation and guided the team through iterative development and testing.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Figma', 'Trello'],
      github:
        'https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales.git',
    },
    {
      title: 'DemoBlaze Performance Testing',
      introduction: [
        'Created performance scripts using Apache JMeter.',
        'Simulated real user traffic on an e-commerce site.',
        'Monitored system behavior under various load scenarios.',
        'Analyzed response time and throughput data.',
        'Identified potential performance bottlenecks.',
      ],
      images: [
        'assets/images/demoblaze1.png',
        'assets/images/demoblaze2.png',
        'assets/images/demoblaze3.png',
      ],
      goal: 'This project evaluated how DemoBlaze handles user load through simulated testing. I used JMeter to analyze performance metrics and recommended optimizations based on the test results.',
      techStack: ['JMeter', 'Performance Testing'],
      github: '',
    },
    {
      title: 'FlashGamer',
      introduction: [
        'Designed and built a mobile app using Java and Android Studio.',
        'Connected with Firebase to retrieve video game data in real time.',
        'Focused on delivering a clean and intuitive UI.',
        'Ranked top 5 out of 45 teams in final presentation.',
        'Received positive feedback for performance and design.',
      ],
      images: ['assets/images/flashgamer1.png'],
      goal: 'The app aimed to let users explore and search video games from a Firebase database with ease. I was responsible for UI/UX design, backend integration, and overall functionality.',
      techStack: ['Firebase', 'Android', 'Java'],
      github: '',
    },
    {
      title: 'Pendulum',
      introduction: [
        'Created a JavaFX desktop app for warehouse stock management.',
        'Worked with a team of 5 to deliver end-to-end functionality.',
        'Integrated OAuth for secure login and authentication.',
        'Used MySQL for persistent data storage.',
        'Implemented two-factor verification with JavaMail API.',
      ],
      images: [
        'assets/images/pendulum1.png',
        'assets/images/pendulum2.png',
        'assets/images/pendulum3.png',
      ],
      goal: 'Pendulum was designed to streamline inventory management for a warehouse using a secure and user-friendly desktop application. I worked on authentication systems, UI, and backend database logic.',
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
