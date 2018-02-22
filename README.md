## ng2-bootstrap-alert

A simple Angular 2 library to display alert messages


### Usage
- install library  `npm i ng2-bootstrap-alert --save`
- Install peer dependencies
    -- bootstrap  `npm i bootstrap --save`
    -- angular material icons  `npm i material-design-icons --save`
- update `.angular-cli.json` to include following css under `Styles` array
    -- `../node_modules/material-design-icons/iconfont/material-icons.css`
    -- `../node_modules/bootstrap/dist/css/bootstrap.min.css`
- update your app.module.ts  with `import {AlertModule} from 'ng2-bootstrap-alert';`
- add `AlertModule` in `imports` array
- add `<alert></alert>` to your root html 
- start using AlertService   `this.alertService.error("message",ttl,Position);`
    | Method | Description |
    | ------------- | ------------- |
    | error  | to display error message  |
    | warn  | to display warning message  |
    | success | to display success message |
    | info | to display info message|

- All the methods takes 3 parameters
    | Param | Required | Options | Default |
    | ------------- | ------------- |
    | message  | Yes |  |  |
    | ttl  | No  |  integer |0 - user has to close the message manually |
    | Poistion | No | PositionType.TOP_LEFT,PositionType.TOP_RIGHT,PositionType.BOTTOM_LEFT, PositionType.BOTOM_RIGHT,PositionType.DEFAULT |PositionType.DEFAULT|