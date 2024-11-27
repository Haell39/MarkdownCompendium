## 🛠️ **C Essentials Kit**  
*"Everything you need to start coding in C!"*

---

### 1️⃣ **Basic Structure of a C Program**

```c
#include <stdio.h> // Import standard input/output library

int main() {
    printf("Hello, World!"); // Print statement
    return 0; // Exit program
}


---

## 2️⃣ **Data Types**
| **Type**      | **Description**     | **Example**      |
|---------------|---------------------|------------------|
| `int`         | Integer values      | `int x = 10;`    |
| `float`       | Decimal values      | `float y = 3.14;`|
| `char`        | Single characters   | `char c = 'A';`  |
| `double`      | Double precision    | `double d = 5.99;`|
| `void`        | No value            | `void function()`|

---

## 3️⃣ **Control Structures**
### **If-Else**
```c
if (condition) {
    // Code if true
} else {
    // Code if false
}
```
### **For Loop**
```c
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```
### **While Loop**
```c
int x = 0;
while (x < 5) {
    printf("%d\n", x);
    x++;
}
```

---

## 4️⃣ **Common Functions**
| **Function**       | **Purpose**                 | **Example**                    |
|--------------------|-----------------------------|--------------------------------|
| `printf()`         | Print to console            | `printf("Value: %d", x);`     |
| `scanf()`          | Input from user             | `scanf("%d", &x);`            |
| `strlen()`         | Get string length           | `strlen("hello")`             |
| `strcpy()`         | Copy strings                | `strcpy(dest, source);`       |
| `malloc()` / `free()` | Dynamic memory allocation | `malloc(sizeof(int));`        |

---

## 5️⃣ **Pointers**
```c
int x = 10;
int *ptr = &x; // Pointer stores address of x
printf("%d", *ptr); // Dereference pointer to get value of x
```

---

## 6️⃣ **Array Basics**
```c
int arr[5] = {1, 2, 3, 4, 5}; // Declare and initialize array
printf("%d", arr[2]); // Access 3rd element (index 2)
```

---

## 7️⃣ **Memory Management**
| **Function**  | **Purpose**            | **Example**                  |
|---------------|------------------------|------------------------------|
| `malloc()`    | Allocates memory       | `int *p = malloc(10 * sizeof(int));` |
| `calloc()`    | Allocates zeroed memory| `int *p = calloc(10, sizeof(int));` |
| `realloc()`   | Resizes memory block   | `p = realloc(p, 20 * sizeof(int));` |
| `free()`      | Frees allocated memory | `free(p);`                   |

---

## 8️⃣ **Common Errors to Avoid**
- **Missing `;`**: Always end statements with a semicolon.
- **Mismatched brackets**: Ensure `{}` and `()` are balanced.
- **Using uninitialized variables**: Initialize variables before use.
- **Memory leaks**: Always free allocated memory.

---

## 9️⃣ **Useful Shortcuts**
| **Task**                 | **Code**                              |
|--------------------------|---------------------------------------|
| Swap two variables       | `x ^= y; y ^= x; x ^= y;`            |
| Print array size         | `sizeof(arr) / sizeof(arr[0])`       |
| Ternary conditional      | `result = (a > b) ? a : b;`          |


---



## 🛠️ **C Essentials Kit**  
*"Everything you need to start coding in C!"*

---

### 🔟 **Common Operators**

### Arithmetic Operators:
```c
int a = 10, b = 5;
printf("Addition: %d\n", a + b); // Output: 15
printf("Subtraction: %d\n", a - b); // Output: 5
printf("Multiplication: %d\n", a * b); // Output: 50
printf("Division: %d\n", a / b); // Output: 2
```

### Comparison Operators:
```c
int a = 10, b = 5;
printf("Equal: %d\n", a == b); // Output: 0 (false)
printf("Greater: %d\n", a > b); // Output: 1 (true)
```

### Logical Operators:
```c
int x = 1, y = 0;
printf("AND: %d\n", x && y); // Output: 0 (false)
printf("OR: %d\n", x || y); // Output: 1 (true)
```

---

## 1️⃣1️⃣ **Simulating Classes and Objects using Structs**


```c
#include <stdio.h>
#include <string.h>

// Define a "class" (struct)
struct Car {
    char brand[20];
    int year;
    float price;
};

// Define a "method" for the struct
void printCar(struct Car c) {
    printf("Brand: %s, Year: %d, Price: $%.2f\n", c.brand, c.year, c.price);
}

int main() {
    // Create an "object" (instance of struct)
    struct Car car1;
    strcpy(car1.brand, "Toyota");
    car1.year = 2020;
    car1.price = 30000.0;

    printCar(car1);
    return 0;
}
```

---

## 1️⃣2️⃣ **Working with Vectors (Arrays)**

```c
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40, 50}; // Declare a vector (array)
    
    for (int i = 0; i < 5; i++) { // Loop through the array
        printf("Element %d: %d\n", i, numbers[i]);
    }
    return 0;
}
```

---

## 1️⃣3️⃣ **Working with Sets**

C não possui suporte nativo a conjuntos (sets), mas arrays e funções podem ser usados para simular.

```c
#include <stdio.h>
#include <stdbool.h>

// Function to check if a number exists in a set
bool exists(int set[], int size, int num) {
    for (int i = 0; i < size; i++) {
        if (set[i] == num) return true;
    }
    return false;
}

int main() {
    int set[] = {10, 20, 30, 40, 50}; // Simulate a set
    int size = 5;

    printf("Exists: %d\n", exists(set, size, 20)); // Output: 1 (true)
    printf("Exists: %d\n", exists(set, size, 60)); // Output: 0 (false)
    return 0;
}
```

---

## 1️⃣4️⃣ **Pointers (Bonus)**

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *ptr = &x; // Pointer to the variable x

    printf("Value of x: %d\n", x); // Output: 10
    printf("Address of x: %p\n", &x); // Print address of x
    printf("Value through pointer: %d\n", *ptr); // Access value using pointer
    return 0;
}
```

---

*"Master these fundamentals, and you'll dominate C!"*
```

Agora a numeração está de acordo com os tópicos que você mencionou!