# TL;DR Description 
A simple javascript grapher. With variables x and y but i dont reccomend you to do something like `x**(2)+y`

# WARNING: DO NOT USE IN WEBSITES. VULNERABLE 
This is a vulnerable program, DO NOT USE FOR ONLINE WEBSITES

it has the javascript `eval()` vulnerability, Heres a example

```js
// input="//"
input=process.argv[1]
a = eval(input) // a=// (ERROR!) 
console.log(a)
```
# Description


You have x and y to work with. The `y=` is already added at the start no need to add it; 

Example:
```js
x*Math.sin(x)
```

![MathSinXTimesX](pics/Screenshot_20240223-152004.jpg)
