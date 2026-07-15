## Angular Signals
It is a system that tracks how and where your state is used throughout an application. Signals may be either writable or read only.

>You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.


## Directives
Directives are classes that add additional behavior to elements in your Angular applications.

> Built in Directives - we use angular built in directives to manage forms, lists, styles, and what users see.

### Types of Directives
1. Components - Used with template
2. Attribute dir - Chnage the appearance or ebahviour of an element
3. Structural dir - Change the dom layout by adding and removing dom elements.

### Built in attribute directives
listen to and modify beahviour of other html elements, attributes, properties, and components.

| Common Directives |  Details |
|----------|----------|
| NgClass   | Adds and removes a set of CSS classes  | 
| NgStyle  | Adds and removes a set oh html styles  | 
| NgModel  | Adds two-way data binding to an html form element | 

> Built-in directives use only public APIs. They do not have special access to any private APIs that other directives can't access.

> To add or remove a single class, use class binding rather than NgClass.

Example of class binding
```
export class AppComponent {

  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
}
```

```
<h2>Class Binding Example</h2>

<button (click)="toggleClass()">
  Toggle Class
</button>

<br><br>

<div [class.active]="isActive">
  This is a box
</div>
```

```
div {
  width: 250px;
  padding: 20px;
  border: 2px solid black;
}

.active {
  background-color: green;
  color: white;
}
```

Example of ng class
```
export class AppComponent {

  isSuccess = false;
  isBold = false;

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

}
```

```
<h2>ngClass Example</h2>

<button (click)="toggleSuccess()">
  Toggle Success
</button>

<button (click)="toggleBold()">
  Toggle Bold
</button>

<br><br>

<div
  [ngClass]="{
    success: isSuccess,
    bold: isBold
  }">

  This is a box

</div>
```

```
div {
  width: 250px;
  padding: 20px;
  border: 2px solid black;
}

.success {
  background-color: green;
  color: white;
}

.bold {
  font-weight: bold;
  font-size: 22px;
}
```

