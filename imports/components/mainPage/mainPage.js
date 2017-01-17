import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from '../../api/accounts.js';

import template from './mainPage.html';



class MainPageCtrl {
  constructor($scope) {
    $scope.viewModel(this);
      this.helpers({
        accounts() {
          return Accounts.find({});
        }
      })
  }

}

export default angular.module('mainPage', [
  angularMeteor
])
  .component('mainPage', {
    templateUrl: 'imports/components/mainPage/mainPage.html',
    controller: ['$scope', MainPageCtrl]
  });