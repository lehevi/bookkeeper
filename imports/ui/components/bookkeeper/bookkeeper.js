import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './bookkeeper.html';
import { name as AccountsList } from '../accountsList/accountsList';

class Bookkeeper {}

const name = 'bookkeeper';

// create a module
export default angular.module(name, [
  angularMeteor,
  AccountsList
])
.component(name, {
  template,
  controllerAs: name,
  controller: Bookkeeper
});
