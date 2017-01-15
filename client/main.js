import angular from 'angular';
import angularMeteor from 'angular-meteor';

import login from '../imports/components/login/login';

import './main.html';

angular.module('bookkeeper', [
  angularMeteor,
  login.name
]);
