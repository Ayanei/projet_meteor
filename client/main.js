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
    'click .add' : function(event, template){
		event.preventDefault();

		var $pays = template.find("input[name='pays']").value;

       	country.insert({name: $pays});
       	return $pays;

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
    	event.preventDefault();

    	alert($(event.target).closest('input').data('name'));
		var $valueField = template.find(".listPays input[name='newpays']").value;
		console.log($valueField);

		console.log("You Select Client Row " + this.display);


		//alert($(this).next('input').attr('class'));
    	


		// country.update({_id : this._id},{$set:{name : $valueField}});
		// alert("Vous avez bien actualisé le pays "+$valueField);
	}
});