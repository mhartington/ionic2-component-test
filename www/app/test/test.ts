import {Component} from 'angular2/angular2'
import {NavController} from 'ionic/ionic'

@Component({
  template: `
  <h1> Hello World</>
  `,
  selector: "my-test"
})
export class MyComponent {
  private nav: NavController;
  constructor(nav: NavController) {
    this.nav = nav;
    console.log("From myComponent");
  }
}
