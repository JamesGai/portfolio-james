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
        'A smart ML-based chatbot designed to improve user experience on complex web applications. By allowing users to ask questions in plain language, the system guides them directly to the right part of the website using a built-in tour feature. It combines conversational AI with UI navigation to make web interfaces more intuitive.',
      images: [
        'assets/images/loadrite1.png',
        'assets/images/loadrite2.jpg',
        'assets/images/loadrite3.jpg',
      ],
      tasks: [
        'Built a ML-based (LLM-base got discarded) chatbot using Angular and Ionic during internship',
        'Also built a website tour guide using 3rd party library',
        'Used C# to develop an API Gateway that supported global access',
        'Trained and deployed a lightweight ML model via Docker on AWS',
        'Tested the chatbot with Jasmine and Cypress for high reliability',
        'Managed planning and updates using Jira',
      ],
      techStack: [
        'Angular & Ionic',
        'TypeScript',
        'C#',
        '.NET core',
        'AWS',
        'Docker',
        'Jasmine',
        'Cypress',
        'Machine Learning',
        'Large Language Model',
        'Jira',
      ],
      github: '',
    },
    {
      title: 'Gesture Generation for Pepper Robot',
      introduction:
        'An AI-driven robotics project aimed at making humanoid robots more expressive and natural in communication. It focuses on generating synchronized gestures for the Pepper robot based on real-time audio input, enhancing user engagement in scenarios like education, customer service, and events.',
      images: [
        'assets/images/pepper1.jpg',
        'assets/images/pepper2.png',
        'assets/images/pepper3.png',
      ],
      tasks: [
        'Final year research project using GAN-based deep learning models',
        'Generated human-like gestures for a Pepper robot based on speech audio',
        'Trained models using PyTorch and analyzed datasets with EDA',
        'Published findings in ACRA 2024 robotics conference',
        'Managed planning and updates using Trello',
      ],
      techStack: ['Python', 'PyTorch', 'Deep Learning', 'Trello'],
      github: 'https://github.com/jgai284/P4P-Speech2Gesture',
    },
    {
      title: 'UoAMedia',
      introduction:
        'A multimedia web platform created to engage young users through interactive content and AI tools. The platform offers a creative space where users can explore media either manually or recommended by GPT-4o. Everything is within a visually appealing and intuitive interface built for modern digital habits.',
      images: [
        'assets/images/uoamedia1.png',
        'assets/images/uoamedia2.png',
        'assets/images/uoamedia3.png',
        'assets/images/uoamedia4.png',
      ],
      tasks: [
        'Designed UI prototypes using Figma',
        'Built a full MERN stack web app integrating media and interactive tools',
        'Collaborated with a team of 6 and managed tasks via Trello',
      ],
      techStack: [
        'Figma',
        'MongoDB',
        'Express',
        'React',
        'Node.js',
        'Large Language Model',
        'Trello',
      ],
      github:
        'https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales.git',
    },
    {
      title: 'DemoBlaze Performance Testing',
      introduction:
        'A performance benchmarking project targeting an e-commerce site under varying traffic conditions. It uses industry-standard load testing methods to simulate real-world user activity and measure the application’s behavior under stress, helping improve speed, reliability, and user satisfaction.',
      images: [
        'assets/images/demoblaze1.png',
        'assets/images/demoblaze2.png',
        'assets/images/demoblaze3.png',
      ],
      tasks: [
        'Created performance scripts using Apache JMeter',
        'Simulated real user traffic on an e-commerce site',
        'Monitored system behavior under various load scenarios',
        'Analyzed response time and throughput data.',
        'Identified potential performance bottlenecks.',
      ],
      techStack: ['JMeter', 'Performance Testing'],
      github: '',
    },
    {
      title: 'FlashGamer',
      introduction:
        'A mobile app designed for gamers to discover and explore video game titles stored in a cloud database. Built with user-friendly navigation and real-time data updates, the app serves as a lightweight game directory with a clean and responsive Android interface.',
      images: ['assets/images/flashgamer1.png'],
      tasks: [
        'Mocked draft UI using Figma',
        'Designed and built a mobile app using Java and Android Studio',
        'Connected with Firebase to retrieve video game data in real time',
        'Focused on delivering a clean and intuitive UI',
        'Ranked top 5 out of 45 teams in final presentation',
        'Received positive feedback for performance and design',
      ],
      techStack: ['Figma', 'Firebase', 'Android Development', 'Java'],
      github: '',
    },
    {
      title: 'Pendulum',
      introduction:
        'A desktop application tailored for managing warehouse inventory securely and efficiently. It supports stock tracking, data persistence, user authentication, and automatic email confirmations, all bundled into a robust and accessible tool for warehouse staff.',
      images: [
        'assets/images/pendulum1.png',
        'assets/images/pendulum2.png',
        'assets/images/pendulum3.png',
      ],
      tasks: [
        'Created a JavaFX desktop app for warehouse stock management',
        'Worked with a team of 5 to deliver end-to-end functionality',
        'Integrated OAuth for secure login and authentication',
        'Used MySQL for persistent data storage',
        'Implemented two-factor verification with JavaMail API',
      ],
      techStack: ['Java', 'JavaFX', 'OAuth', 'MySQL'],
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
        tasks: project.tasks,
        techStack: project.techStack,
        github: project.github,
      },
    });
    await modal.present();
  }
}
