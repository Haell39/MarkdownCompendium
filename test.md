### 🟩 **1️⃣ First C# Program**

```csharp
// Import the standard library
using System;

// Define the namespace (code organization)
namespace HelloWorldApp
{
    // Main class
    class Program
    {
        // Main method (entry point)
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!"); // Print to the console
        }
    }
}
```

📝 *Explanation*:  
- `using System`: Imports standard functionalities like input/output.  
- `static void Main`: The starting method executed by the program.  

---

### 🟩 **2️⃣ Variables and Data Types**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        int number = 10;           // Integer
        double price = 19.99;      // Decimal
        string name = "Rafael";    // Text
        bool isLearning = true;   // True/False

        Console.WriteLine($"Number: {number}, Price: {price}");
        Console.WriteLine($"Name: {name}, Is learning: {isLearning}");
    }
}
```

📝 *Explanation*:  
- `int`: Whole numbers.  
- `double`: Decimal values.  
- `string`: Text.  
- `bool`: True or false.  

---

### 🟩 **3️⃣ User Input**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine(); // Reads user input
        Console.WriteLine($"Hello, {name}!");
    }
}
```

📝 *Explanation*:  
- `Console.ReadLine`: Reads text input from the user in the console.  

---

### 🟩 **4️⃣ IF/ELSE Conditional**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine()); // Converts input to integer

        if (age >= 18)
        {
            Console.WriteLine("You are an adult.");
        }
        else
        {
            Console.WriteLine("You are a minor.");
        }
    }
}
```

📝 *Explanation*:  
- `if`: Checks a condition.  
- `else`: Alternative when `if` is false.  

---

### 🟩 **5️⃣ Loops**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        for (int i = 1; i <= 5; i++) // Loop from 1 to 5
        {
            Console.WriteLine($"Number: {i}");
        }
    }
}
```

📝 *Explanation*:  
- `for`: Repeats a block of code until the condition is false.  

---

### 🟩 **6️⃣ Creating Methods (Functions)**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        int result = Add(10, 20); // Calls the Add method
        Console.WriteLine($"Sum result: {result}");
    }

    static int Add(int a, int b) // Method to add two numbers
    {
        return a + b;
    }
}
```

📝 *Explanation*:  
- `static int Add`: Method that returns an integer.  
- `return`: Returns the result of the addition.  

---

### 🟩 **7️⃣ Working with Lists**

```csharp
using System;
using System.Collections.Generic; // Required for lists

class Program
{
    static void Main(string[] args)
    {
        List<string> fruits = new List<string> { "Apple", "Banana", "Orange" };
        fruits.Add("Grape"); // Adds an element to the list

        foreach (string fruit in fruits)
        {
            Console.WriteLine(fruit);
        }
    }
}
```

📝 *Explanation*:  
- `List<string>`: Dynamic list of strings.  
- `foreach`: Iterates over all items in a collection.  

---

### 🟩 **8️⃣ Handling Exceptions (Error Handling)**

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        try
        {
            Console.Write("Enter a number: ");
            int number = int.Parse(Console.ReadLine()); // May throw an exception
            Console.WriteLine($"You entered: {number}");
        }
        catch (FormatException)
        {
            Console.WriteLine("Error: Please enter a valid number.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Execution completed.");
        }
    }
}
```

📝 *Explanation*:  
- `try`: Block to test code that may throw exceptions.  
- `catch`: Handles specific or general exceptions.  
- `finally`: Executes code regardless of whether an exception occurred.  

---

With this topic, you've covered how to manage errors gracefully in C#! It’s a crucial skill for building robust and user-friendly applications. 🚀