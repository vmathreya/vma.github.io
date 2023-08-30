
{
	"name": "mycustomwidget",
	"description": "Hello World",
	"newInstancePrefix": "mycustomwidget",
	"eula": "",
	"vendor": "VMA",
	"license": "",
	"id": "mycustomwidget",
	"version": "1.0.1",
	"icon": "",
	"webcomponents": [
		{
			"kind": "main",
			"tag": "custom-button",
			"url": "https://vmathreya/vma.github.io/CustomWidget/Webcomponent.js",
			"integrity": ""	,
			"ignoreIntegrity": true
			
		}		
	],
	"properties": {
		"width": {
			"type": "integer",
			"default": 192
		},
		"height": {
			"type": "integer",
			"default": 32
		}
	},
	"methods": {
		"clear": {
			"description": "Clear the resultset"
		}
	},
	"events": {
		"onClick": {
			"description": "Called when the user clicks the button."
		}
	}
}
