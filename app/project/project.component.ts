import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-project', // <app-project>
  templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {
  @Input() project: { id: number, name: string };

  myColour = 'red';

  ngOnInit() {  }
}

