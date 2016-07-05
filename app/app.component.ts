import { Component } from '@angular/core';

// import { CustomerService } from './customer/customer.service';
// import { CustomersComponent } from './customer/customers.component';

// here is my barrel // future i would just import './customer'
import { CustomersComponent, CustomerService } from './customer/index';
import { ProjectsComponent, ProjectService } from './project/index';

@Component({
  moduleId: module.id,
  selector: 'app-c2c',
  templateUrl: 'app.component.html',
  directives: [CustomersComponent,ProjectsComponent],
  providers: [CustomerService,ProjectService]
})
export class AppComponent {
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Cost to Complete';
  name = 'Ward';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
