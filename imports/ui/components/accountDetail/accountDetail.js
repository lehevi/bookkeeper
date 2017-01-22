import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './accountDetail.html';

class AccountDetail{
	constructor($stateParams){
		'ngInject';
		 this.accountId = $stateParams.accountId;
	}
}

const name = "accountDetails";

export default angular.module(name, [
	angularMeteor, 
	 uiRouter
	]).component(name, {
		template,
		controllerAs: name,
		controller: AccountDetail
	}).config(config);

function config($stateProvider){
	'ngInject';
	$stateProvider.state('accountDetails',{
		url: '/accounts/:accountId',
		template: '<account-details></account-details>'
	});
}


