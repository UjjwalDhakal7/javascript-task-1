# javascript-task-1
This repo contains javascript tasks part I.

## Javascript is single threaded.
Javascript is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. It's synchronous, but at times that can be harmful. For example, if a function takes awhile to execute or has to wait on something, it freezes everything up in the meanwhile.

## Runtime error
A runtime error occurs while a program is running or when you first attempt to start the application. The error usually appears as a small window, often with an indication of the program that's being affected, and sometimes with an error code and message.

## IIFEs (Immediately Invoked Function Expression)
An IIFE is a function that runs the moment it is invoked or called in the JavaScript event loop.

## foreach() and map()

### forEach()
The forEach() function receives a function as an argument and it applies the same code to every element. It will not return anything, it just applies the conditions to every element. It will not change the original array.

The return value of forEach() method is undefined. The forEach() method does not wait until promises are resolved.

### map()
The map() function receives a function as a parameter and will apply the code on each element and returns an entirely new array. It will not change the original array.
A map() function returns a new array and thus it should only be used if you are going to use the returned array else one should prefer forEach() function.

## Immutability and how it applies in array manipulation.
The concept of immutability is pretty simple and powerful. Basically, an immutable value is something that cannot be changed. Especially when we’re developing our applications, we might end up in some situations where we want to create a new object in our code, containing a new property or value while also maintaining the original value. The concept of immutability can help us to create new objects, making sure that we’re not changing the original value.
