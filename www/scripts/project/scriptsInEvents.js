


const scriptsInEvents = {

	async EventSheet1_Event5_Act3(runtime, localVars)
	{
		clearRoute();
	},

	async EventSheet1_Event22_Act3(runtime, localVars)
	{
		
		
		plotRouteFromConstruct(
		  runtime.globalVars.CurrentLatidue, 
		  runtime.globalVars.CurrentLongitude,
		  runtime.globalVars.TargetPositionLat,
		  runtime.globalVars.TargetPositionLng
		);
		
		goToLastErrorScript();
	},

	async EventSheet1_Event24_Act1(runtime, localVars)
	{
		clearRoute();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

