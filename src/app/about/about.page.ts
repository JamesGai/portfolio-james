import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [IonicModule, NgFor],
})
export class AboutPage {
  skills = [
    { label: 'Angular', icon: 'assets/icons/angular.png' },
    { label: 'React', icon: 'assets/icons/react.png' },
    { label: 'JavaScript', icon: 'assets/icons/javascript.png' },
    { label: 'TypeScript', icon: 'assets/icons/typescript.png' },
    { label: 'Python', icon: 'assets/icons/python.png' },
    { label: 'Git', icon: 'assets/icons/git.png' },
    { label: 'Cypress', icon: 'assets/icons/cypress.png' },
    { label: 'Firebase', icon: 'assets/icons/firebase.png' },
    { label: 'JMeter', icon: 'assets/icons/jmeter.png' },
    { label: 'Java', icon: 'assets/icons/java.png' },
    { label: '.NET core', icon: 'assets/icons/.netcore.png' },
    { label: 'Express', icon: 'assets/icons/express.png' },
    { label: 'Flask', icon: 'assets/icons/flask.png' },
    { label: 'C#', icon: 'assets/icons/csharp.png' },
    { label: 'Docker', icon: 'assets/icons/docker.png' },
    { label: 'ML', icon: 'assets/icons/ml.png' },
    { label: 'LLM', icon: 'assets/icons/llm.png' },
    { label: 'Postman', icon: 'assets/icons/postman.png' },
  ];

  interests = [
    { label: 'Gym', icon: 'assets/icons/exercise.png' },
    { label: 'Table Tennis', icon: 'assets/icons/tabeltennis.png' },
    { label: 'Gaming', icon: 'assets/icons/gaming.png' },
    { label: 'Music', icon: 'assets/icons/music.png' },
    { label: 'Firearms', icon: 'assets/icons/firearms.png' },
    { label: 'Cat', icon: 'assets/icons/cat.png' },
  ];
}
