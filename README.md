# JavaScript Code Challenge

## Objectives

- Constructors / Prototypes or ES6 Classes
- Callbacks
- DOM Manipulation
- Events and Event Handlers

## Instructions

We're building out a commenting feature in our application with no persistence. A user should be able to create a new comment and have that comment be added into a comment list. The comment list can be filtered via keyword.

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

## Deliverables

## Part One - Create a solution utilizing jQuery only.

1. Create a working solution in `solution.js`

  - The input field for comments/filter has been provided for you.
  - When submit button is clicked, comments should be added to a comment list. A new comment's text should appear in the ul with the id of "comments-list"
  - In a second input field, a user should be able to type a keyword and filter the same comments list based on that provided keyword.

    - _filtering comments_: if a comment does not contain the search term it should **NOT** be visible in the comment list

## Part Two - Refactoring with Constructors and Prototypes (feel free to use either ES5 or ES6)

1. Create a JS class / constructor for a `Comment`. New comments should initialize with some text.
2. Instances of comments should have a prototype method called 'render' that returns a string of an `li` with that comment's text inside.
3. Create a class / constructor for a `CommentList`. New comment lists should initialize with an array of comments (this will be empty to start).
4. Instances of CommentList should have a method called 'render' that returns a string of a `ul`. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.
5. Instances of CommentList should have a method called 'addComment' that takes in a string. It should instantiate a new Comment and add it to the CommentList's array of comments.
