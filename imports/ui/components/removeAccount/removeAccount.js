import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './removeAccount.html';
import {Accounts} from '../../../api/accounts';

class RemoveAccount{
	remove(){
		console.log("about to remove");
		if(this.account){
			Accounts.remove(this.account._id);
		}
	}
}

const name = 'removeAccount';

export default angular.module(name, [
	angularMeteor
	]).component(name, {
		template,
		bindings:{
			account: "<"
		},
		controllerAs: name,
		controller: RemoveAccount
	});