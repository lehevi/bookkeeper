import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './accountsList.html';
import { name as AddAccount } from '../addAccount/addAccount';
import {Accounts} from '../../../api/accounts.js';

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
  AddAccount
]).component(name,  {
    template,
    controllerAs: name,
    controller: AccountsList
  }); 