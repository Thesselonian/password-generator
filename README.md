## Password Generator ##
# Written By Eric Young #

This application is designed to generate a password between 8-128 characters. Upon pushing the button the user is presented with a series of prompts that ask the user how long the password should be and what characters should be included. Toward the end of the project I consulted a tutor and it was brought to my attention that the way the code is structured leaves open the possibility that despite the user requesting a given set of characters the randomization may still leave that a given character type out of the resulting password. This could be fixed by adding a single character from the requested character to the password when the arrays are concatenated, thereby ensuring that at least one character from every requested character set is included. I also just realized that if the user answers no to every character type the password generator presents a string of "undefined" repeated over and over again. A simply if statement that, if true, starts the password generator over again would fix this. I need to move onto other course material for now though. 

Screenshots of the application

![password generator](./assets/images/password-generator.jpg?"Password Generator")
![password generated](./assets/images/password-generated.jpg?"A Password Generated")

