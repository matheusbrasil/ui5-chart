sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.chart.controller.S0", {

		onInit: function() {
			this._createChartModel();
			
			this.getView().setModel(this.oModel);
		},

		_createChartModel: function() {
			var oModel = new JSONModel({
				
			});

			this.getView().setModel(oModel, "chart");

		}

	});
});