import {Meteor} from 'meteor/meteor'
import {Accounts} from '../imports/api/accounts.js';

Meteor.startup( () => {
    if( Accounts.find().count() === 0){
        const accounts = [{
        'title': 'Bank 1 ',
        'amount': 200
        }, {
        'title': 'Bank 2 ',
        'amount': 230
        }, {
        'title': 'Bank 3 ',
        'amount': 340.6
        }];
        accounts.forEach((ac) =>{
            Accounts.insert(ac);
        });
    }
    
});
