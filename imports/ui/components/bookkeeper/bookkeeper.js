import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './bookkeeper.html';
import { name as AccountsList } from '../accountsList/accountsList';
import {name as AccountDetail} from '../accountDetail/accountDetail';
import {name as Navigation} from '../navigation/navigation';

class Bookkeeper {}

const name = 'bookkeeper';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  AccountsList,
  AccountDetail,
  Navigation
])
.component(name, {
  template,
  controllerAs: name,
  controller: Bookkeeper
}).config(config);

function config($locationProvider, $urlRouterProvider){
	'ngInject';
	$locationProvider.html5Mode(true);
 	$urlRouterProvider.otherwise('/accounts');
}