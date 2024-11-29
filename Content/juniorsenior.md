Aqui vai mais um exemplo no estilo **Junior x Senior**, mostrando um caso em que o "Junior" faz algo com muita repetição manual, enquanto o "Senior" usa uma abordagem mais elegante e eficiente:

---

### **Junior ❌**  
```html
<!-- Repeating the same styles for multiple buttons -->
<button style="background-color: blue; color: white; padding: 10px; border-radius: 5px;">Button 1</button>
<button style="background-color: blue; color: white; padding: 10px; border-radius: 5px;">Button 2</button>
<button style="background-color: blue; color: white; padding: 10px; border-radius: 5px;">Button 3</button>
```

### **Senior ✅**  
```html
<!-- Using CSS for reusable styles -->
<style>
  .btn {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .btn:hover {
    background-color: darkblue;
  }
</style>

<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>
```

**Better:**  -->  Reusable,  Clean, Scalable

---
