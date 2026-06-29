## DOM Selection

-> document is html document.

### document.getElementById

```
<html>
<body>

<p id="demo"></p>

<script>
// Access a paragraph Element
const myPara = document.getElementById("demo");

// Change the content of the Element
myPara.innerHTML = "Hello World!";
</script>

</body>
</html>
```

-> getElementById() is a document method.
-> myPara = getElementById("demo") retrieves the "demo" element.
-> innerHTML is an element property.
-> myPara.innerHTML = "Hello World!" changes the property.

### Selecting HTML Elements

| Method | Description |
|--------|-------------|
| `document.getElementById(id)` | Finds an element by its **id**. |
| `document.getElementsByTagName(name)` | Finds all elements with the specified **tag name**. |
| `document.getElementsByClassName(name)` | Finds all elements with the specified **class name**. |
| `document.querySelector(selector)` | Finds the **first** element that matches a CSS selector. |
| `document.querySelectorAll(selector)` | Finds **all** elements that match a CSS selector. |


1. document.getElementById(id)

```
<h1 id="title">Welcome</h1>

const element = document.getElementById("title");
console.log(element.textContent);
```

2. document.getElementsByTagName(name)

```
<p>first</p>
<p>second</p>
<p>third</p>

const para = document.getElementByTagName("p");
console.log(para[0].textContent);
console.log(para[1].textContent);
```

3. document.getElementsByClassName(name)

```
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>

const boxes = document.getElementsByClassName("box");

console.log(boxes[0].textContent);
console.log(boxes[1].textContent);
```

4. document.querySelector(selector)

```
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>

const element = document.querySelector(".text");
console.log(element.textContent);
```

5. document.querySelectorAll(selector)

```
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
<p class="text">Paragraph 3</p>

const elements = document.querySelectorAll(".text");
elements.forEach(element => {
    console.log(element.textContent);
});
```

### Accessing Element Content

1. element.innerHTML -> html content of an element

```
<p id="demo"></p>

const element = document.getElementById("demo");
element.innerHTML = "<b>Hello</b>;

# browser output
Hello   # in bold
```

2. element.textContent -> text content of an element

```
const element = document.getElementById("demo");

// Using textContent
element.textContent = "<b>Hello</b>";

# browser output
<b>Hello</b>
```

> the <b> tags are displayed as text, not interpreted as HTML

> innerHTML = HTML + Text (it understands HTML tags).
> textContent = Text only (it ignores HTML tags and treats them as plain text).

### Accessing Element Attributes

1. element.attribute -> chnage the attribute value of an html element

eg 1. change an image source

```
<img id="myImage" src="cat.jpg" alt="Cat">

const image = document.getElementById("myImage");

image.src = "dog.jpg";
```

the displayed image changes from cat.jpg to dog.jpg.

eg 2. change input placeholder

```
<input id="username" placeholder="Enter name">

const input = document.getElementById("username");

input.placeholder = "Enter your username";
```

2. element.style.property -> style of html element

eg 1. change background color

```
<div id="box">Welcome</div>

const box = document.getElementById("box");

box.style.backgroundColor = "yellow";
```

eg 2. change multiple styles

```
<button id="btn">Click Me</button>

const button = document.getElementById("btn");

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";
button.style.borderRadius = "5px";
```

### Changing element attributes

eg 1. change an image 

```
<img id="myImage" src="cat.jpg" alt="Cat">

const image = document.getElementById("myImage");

image.setAttribute("src", "dog.jpg");
```

eg 2. add a new attribute

```
<p id="text">Hover over me</p>

const paragraph = document.getElementById("text");

paragraph.setAttribute("title", "This is a tooltip");
```

eg 3. disable a btn

```
<button id="btn">Submit</button>

const button = document.getElementById("btn");

button.setAttribute("disabled", "true");
```

### Manipulating Structure

| Method | Description |
|--------|-------------|
| `document.createElement()` | Creates a new HTML element. |
| `document.removeChild()` | Removes an HTML element (child) from its parent. |
| `document.appendChild()` | Adds an HTML element as the last child of a parent element. |
| `document.replaceChild()` | Replaces an existing HTML element with a new one. |
