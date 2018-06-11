import {Component, Input} from '@angular/core'
import {Factory} from "../factory/factory.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() factoryDetails: Factory;

  show() { console.log(this.factoryDetails); }
}
