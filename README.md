# Fetch Users Data from API using JavaScript

This project demonstrates how to fetch user data from an API using JavaScript with **async/await**, handle asynchronous operations, and convert raw response data into usable JavaScript objects.

## Project Overview

This project helps understand:

* How to fetch data from an API
* How `async` and `await` work
* How to handle Promises
* How `fetch()` sends requests
* How `.json()` converts raw response into JavaScript objects
* Error handling using `try...catch`

---

## Technologies Used

* JavaScript
* Fetch API
* Async/Await
* JSON

---

## Code Example

```javascript
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        console.log(users);
    } 
    catch (error) {
        console.log("Error:", error);
    }
}

fetchUsers();
```

---

## How It Works

### 1. `fetch()`

Sends a request to the API server.

```javascript
fetch(url)
```

It returns a Promise.

---

### 2. `await fetch(url)`

Waits until the server sends a response.

```javascript
const response = await fetch(url);
```

---

### 3. `response.json()`

Converts raw response data into a JavaScript object.

```javascript
const users = await response.json();
```

---

### 4. `console.log(users)`

Displays fetched data in the console.

---

## Learning Concepts

This project covers:

* API communication
* URL vs API
* Promise handling
* Asynchronous JavaScript
* JSON parsing
* Error handling

---

## Example Output

```javascript
[
  {
    id: 1,
    name: "Leanne Graham",
    email: "leanne@example.com"
  }
]
```

---

## What I Learned

Through this project, I learned:

* How JavaScript communicates with APIs
* Why `await` is important
* How raw API data becomes usable JavaScript objects
* How async functions pause until data is available

---

## Future Improvements

* Display users on webpage
* Add loading spinner
* Add better error messages
* Search users functionality

---

## Author

**Rayyan**

Learning JavaScript and building real-world projects step by step.
