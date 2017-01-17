import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './login.html';


class LoginCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
  login(){
    console.log("LOgin bro");
  }
}

export default angular.module('login', [
  angularMeteor
])
  .component('login', {
    templateUrl: 'imports/components/login/login.html',
    controller: LoginCtrl
  });