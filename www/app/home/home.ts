import {Page} from 'ionic/ionic'
import {MyComponent} from '../test/test'

@Page({
  templateUrl: 'app/home/home.html',
  directives: [MyComponent],
})
export class HomePage {
  constructor() {}
}
