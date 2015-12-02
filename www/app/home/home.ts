import {Page, NavController} from 'ionic/ionic'
import {MyComponent} from '../test/test'

@Page({
  templateUrl: 'app/home/home.html',
  directives: [MyComponent],
})
export class HomePage {
  private nav: NavController;
  constructor(nav: NavController) {
    this.nav = nav
  }
}
