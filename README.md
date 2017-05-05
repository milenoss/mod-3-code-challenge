# JavaScript Code Challenge

## Objectives

+ Constructors / Prototypes or ES6 Classes
+ Callbacks
+ DOM Manipulation
+ Events and Event Handlers

## Instructions

We're building out a commenting feature in our application with no persistence. A user should be able to create a new comment and have that comment be added into a comment list.

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

## Deliverables

## Part One - Constructors and Prototypes

1. create a constructor for a `Comment`. New comments should initialize with some text.
2. instances of comments should have a prototype method called 'render' that returns a string of an `li` with that comment's text inside.
3. create a constructor for a `CommentList`. New comment lists should initialize with an array of comments (this will be empty to start).
4. instances of CommentList should have a method called 'render' that returns a string of a `ul`. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.
5. instances of CommentList should have a method called 'addComment' that takes in a string. It should instantiate a new Comment and add it to the CommentList's array of comments.

## Part Two - The DOM

6. Create a function in `index.js` called 'renderCommentList'. This function should add an event handler to the form so that when the form submits, we create a new comment and render it out in the comments list. The comments list should render inside of the div with an id of `comment-list`
