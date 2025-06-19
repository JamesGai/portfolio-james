import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPage } from './projects.page';

describe('Tab2Page', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
