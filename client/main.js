import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

country = new Mongo.Collection('country');

Template.display.helpers(
{
	country:function()
	{
		return country.find();
	}
});

Template.add.events({
    'click button' : function(event, template){
		event.preventDefault();

		var $pays = template.find("input[name='pays']").value;

       country.insert({name: $pays});

	}
});

Template.display.events({
    'click .delete' : function(event, template){
		event.preventDefault();

       country.remove(this._id);

	}
});

Template.display.events({
    'click .update' : function(event, template){
		var $valueField = template.find("input[name='newpays']").value;

		country.update({_id : this._id},{$set:{name : $valueField}});
	}
});