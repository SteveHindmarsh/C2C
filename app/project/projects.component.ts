import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  directives: [ProjectComponent]
})
export class ProjectsComponent implements OnInit {
  // projects: Observable<any[]>;
  projects: any[];

  constructor(private _projectService: ProjectService) {  }

  ngOnInit() {
    // Rx observable version with subscribe function to a project array
    this._projectService.getProjects_RxObservable()
      .subscribe(
        // it worked
        (projects) => this.projects = projects,
        // error
        (err) => { console.log(err); }
      );

    // Straight up promise to array
    // this._projectService.getProjects()
    //   .then((projects) => this.projects = projects)
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Promise<any[]>
    // this.projects = this._projectService.getProjects()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Rx observable version
    // this.projects = this._projectService.getProjects_RxObservable()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //     return Observable.of(true);
    //     // now we eat it, but only if the
    //     // message has been communicated to the user
    //   });
  }
}
