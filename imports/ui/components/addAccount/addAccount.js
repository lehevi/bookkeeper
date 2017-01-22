import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './addAccount.html';

import {Accounts} from '../../../api/accounts.js';
 
class AddAccount {
    constructor(){
        this.account = {};
    }
    submit(){
        Accounts.insert(this.account);
        this.reset();
        console.log(" Submit " , this.account);
    }
    reset(){
        this.account = {};
    }

}
 
const name = 'addAccount';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AddAccount
});