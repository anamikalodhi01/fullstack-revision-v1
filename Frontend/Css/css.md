##  What we cover

1. Reset & Google Fonts
2. CSS Variables (:root)
3. Header (Flexbox)
4. Container (CSS Grid)
5. Sidebar
6. Main
7. Sections
8. Card Grid
9. Cards
10. Responsive Design

### :root

global storage area for your css. anything define here is available throughout your stylsheet.

```
:root{
    --primary:#6366F1;
}
```

```
button{
    background:var(--primary);
}
```

### Flexbox

a css layout system used to arrange items in a row or a column. It as a smart container that automatically arranges its children. only works on direct children.

example:

```
<div class="container">
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
</div>
```

without any css

```
Home
About
Contact
```

with flexbox

```
.container{
    display:flex;
}
```

> now the browser arranges the children in one row
```
Home    About    Contact
```

### justify-content

this property works on the main axis. since flexbox defaults to a horizontal direction


```
justify-content:space-between;
```

without justify-content
they stay together

```
Title Search
```

with 

```
Title                          Search
```

### align-items

this controls the cross axis. for a row, cross axis is vertical.

without 

```
align-items:center;
```

everything sits at the top

```
+----------------------+

Title

Search

+----------------------+
```

with

everything moves to the vertical center

```
+----------------------+

     Title   Search

+----------------------+
```




