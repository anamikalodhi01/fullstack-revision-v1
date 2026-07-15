## Baiscs

> js framework for web development.
> Single page application(No Refresh on clicks)
> Developed by google and based on MVC architecture
> fast loading, fast development and provide lot of features validation lib, routing, component based structure
> React does not have routing and validation lib

### Command to install angular cli 
```
npm i -g @angular/cli
```

### To create application
```
ng new my-app
```

### Check version of agular
```
ng --version
```

> In js we do not define type but in ts we define type

{{}} known as interpolation

> Diff between dependencies and dev dependencies : 
dep :- These are packages your application needs to run.
Required in production.
Installed when someone installs your project.
Examples: @angular/core, @angular/common, rxjs, bootstrap

dev :- These are packages only needed during development.
Used for building, testing, linting, formatting, etc.
Not required to run the built application in production.
Examples: @angular/cli, typescript, karma, eslint

### Structure 
- index.html  -> entry point of html file, sbse phle ye run hoti hai
- main.ts -> entry point of ts file, ye decide krti hai sbse phle konsa component load hoga 

> angular.json config of whole project and also tell how files run and which will run first.

> tsconfig.app.json - config for app ts files 
> tsconfig.json - consig for all ts files 

## Interpolation
display ts data in ui by writing it in html file
> can write js code directly in {{}}

## Angular CLI
Commands that help you to develop Agular Application

### Command to create component
```
ng generate component login
ng g c login
```

### Command to create pipes
```
ng generate pipe testPipe
```

### To get all commands
```
ng help
```

> Component ka name change krna hai to selector main changes krne hote hain

## Components
building blocks of application.for making features we use component

### Selector
A selector is a custom HTML tag (or CSS selector) that Angular uses to identify where a component should be displayed.

> two types of component - normal and inline

> angular override html tag

### Custom Component
These are components which we make manually without using commands.

## Function call on Button Click
> When call other function inside a function then use this.otherFunction() use this to call

## Define data Type in Angular
look at app.component.html and ts

## Make Counter in Angular

## Events
performing any action on ui is known as event

```
  handleEvent(event: any){
    console.log("Event handled", event.type);      // event handled click
    console.log("Event target", (event.target as Element).className);    // event target bttn
      console.log("Event target", event.target);    // pura div miljayega
  }
```

> mouseevent, mouseleave, blur, focus

## Get and Set Input field Value
> Make input field pass and function
> Get value with event
> Get value with template reference variable

### Eg of get value
```
export class GetandsetinpfieldvalComponent {
  name = ""
  getName(event: Event){
    this.name = (event.target as HTMLInputElement).value;
    
  }
}

```
<h1>Get and Set Input Field Value</h1>
<h1>{{name}}</h1>
<input type="text" (input)="getName($event)" placeholder="Enter user name">
<br><br>
<button>Get Value</button>
```

### Eg of set value
```
  setName(){
    this.name = "Sam";
  }
```

```
<button (click)="setName()">Set Name</button>
```

## Style Option
har component ke liye alg style file main style krna pdega 

## If Else Condition
We can put condition in both files in ts it is same as js but in html it is diff

> if else and else if both are diff becoz there is only two condition in if else but there can be multiples in else if 




