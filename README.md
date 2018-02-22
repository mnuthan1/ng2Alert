## ng2-bootstrap-alert

A simple Angular 2 library for displaying alert messages


### Usage
- install library  `npm i ng2-bootstrap-alert --save`
- Install peer dependencies
    - bootstrap  `npm i bootstrap --save`
    - angular material icons  `npm i material-design-icons --save`
StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**
- update **.angular-cli.json**` to include following css files under **styles** section
	- `../node_modules/material-design-icons/iconfont/material-icons.css`
    - `../node_modules/bootstrap/dist/css/bootstrap.min.css`
 - update your **app.module.ts**  
	 - to `import {AlertModule} from 'ng2-bootstrap-alert';`
	 - add `AlertModule` in **imports** section
- update your root (component) html to include `<alert></alert>` 
- From your components start using alert service to display messages
	-  `this.alertService.error("message",ttl,Position);` (import alert service and inject it into the component
	

## Available Methods

|  Method        |Description             |Usage                                 |
|----------------|------------------------|--------------------------------------|
|error           |displays errors         |`this.alertService.error("message")`  |
|warn            |dispalys warnings       |`this.alertService.warn("message")`   |
|info            |dispalys info           |`this.alertService.info("message")`   |
|success         |dispalys success        |`this.alertService.success("message") |

## Method Params

|  Param     |Options     |Required?  |  Default | Description |
|------------|------------|-----------|----------|-------------|
|message     |String      |Yes        |          |Message to display|
|ttl         | int        |No         | 0        | time in sec to display the message |
|info            |dispalys info           |`this.alertService.info("message")`   |
|success         |dispalys success        |`this.alertService.success("message") |
