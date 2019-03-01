sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.chart.controller.S0", {

		onInit: function () {
			this._createChartModel();

			//this.getView().setModel(this.oModel);
			this.getView().setModel(this.oModel, "chart");
		},

		onChange: function (oEvent) {
			var oItem = oEvent.getParameters().selectedItem;
			var oContext = oItem.getBindingContext();

			var sTitle = this.getOwnerComponent()
				.getModel("i18n")
				.getResourceBundle()
				.getText("chart_title", oContext.getProperty("Name"));

			this.getView().getModel("chart").setProperty("/properties/title/text", sTitle);

			this.byId("chart").setBindingContext(oContext);

		},

		onSelectData: function (oEvent) {
			debugger;
			//cosole.table()
		},

		_createChartModel: function () {

			var sTitle = this.getOwnerComponent()
				.getModel("i18n")
				.getResourceBundle()
				.getText("chart_title");

			/*			var oModel = new JSONModel({

						});

						this.getView().setModel(oModel, "chart");*/

			this.oModel = new JSONModel({
				properties: {
					legendGroup: {
						layout: {
							position: "bottom",
							alignment: "center"
						}
					},
					title: {
						text: sTitle,
						visible: true,
						style: {
							color: 'orange'
						}
					}
				}
			});
		}

	});
});