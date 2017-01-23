import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './accountDetail.html';
import {Accounts} from '../../../api/accounts.js';

class AccountDetail{
	constructor($stateParams, $scope, $reactive){
		'ngInject';
		$reactive(this).attach($scope);
		this.accountId = $stateParams.accountId;

		this.helpers({
			// account(){
		 //      return Accounts.findOne( {
		 //          _id: $stateParams.accountId
		 //        });
			// },
			accounts() {
              return Accounts.find({});
          	}
          	, 
          	account(){
          		var test = Accounts.find({});
          		var idB = $stateParams.accountId;
				var res = idB.split('"');
          		var title;
          		var ID; 
          		test.forEach(function(element) {
          	
          			if(element._id == res[1]){
          				title = element.title;
          				ID = element._id;

          				console.log("one " + typeof element._id);
          				console.log("Two " + typeof res[1]);
          			}
				}); 
				return Accounts.findOne({ _id: ID });
          	}
		});
	}
	save(){

		Accounts.update({
			_id: this.account._id
		},{
			$set: {
				title: this.account.title,
				amount: this.account.amount
			}
		},(error)=>{
			if(error){
				console.log("Some error with update");
			}else{
				console.log("Done amigo");
			}
		});
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


