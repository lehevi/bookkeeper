import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import template from './accountsList.html';
import { name as AddAccount } from '../addAccount/addAccount';
import {Accounts} from '../../../api/accounts.js';
import {name as RemoveAccount } from '../removeAccount/removeAccount';

class AccountsList{
  constructor($scope, $reactive){
    'ngInject';
     $reactive(this).attach($scope);
      this.helpers({
          accounts() {
              return Accounts.find({});
          }
      });
  }
}

const name = "accountsList";

export default angular.module(name, [
  angularMeteor, 
  uiRouter, 
  AddAccount,
  RemoveAccount
]).component(name,  {
    template,
    controllerAs: name,
    controller: AccountsList
  }).config(config);

  function config($stateProvider){
    'ngInject';
    $stateProvider
      .state('accounts',{
        url: '/accounts',
        template: '<accounts-list></accounts-list>'
      });
  } 