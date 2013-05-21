
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var savePerson = {};	// @button
	var createPerson = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	savePerson.click = function savePerson_click (event)// @startlock
	{// @endlock
		waf.sources.person.save({
			onSuccess: function(event){
				//console.log(event);
				alert('Thanks ' + event.dataSource.fullName);
				$('#personForm').hide();
			},
			onError: function(event){
				alert("Oh drat! \n" + event.error[0].message);
			}
		});
	};// @lock

	createPerson.click = function createPerson_click (event)// @startlock
	{// @endlock
		$('#personForm').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("savePerson", "click", savePerson.click, "WAF");
	WAF.addListener("createPerson", "click", createPerson.click, "WAF");
// @endregion
};// @endlock
