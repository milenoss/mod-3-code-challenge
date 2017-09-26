# JavaScript Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- ES6 Classes
- Fetching from APIs

## Instructions

Today we're building RandoPic, an app for viewing a random picture.

A RandoPic user will be able to do four things:
  - 'like' a picture
  - see a picture's displayed likes
  - comment on each picture
  - and read comments about each picture

## Using the API
  You'll be give an random number to use with this API. The number represents the id of the picture you'll want to access from the API. **Before you start this project, replace the "1" with your unique id number in index.js.** This will be the image id you'll be working with for this code challenge.

  - To get the picture info about a single picture make a **get** request to this endpoint:
  ```
  http://CHANGE THIS/images/:picture_id
  ```
  The response for this request should include a picture url, number of likes, and a picture's comments.

  - To add a 'like' to a picture, make a **post** request to this endpoint:
  ```
  http://CHANGE THIS/likes/:picture_id
  ```
  This request will respond the the updated image data.

  - To add a comment to a picture, make a **post** request to this endpoint:
  ```
  http://CHANGE THIS/comments/:picture_id
  ```
  This request will respond with the updated image data.

  - To delete a comment, make a **delete** request to this endpoint:
  ```
  http://CHANGE THIS/comments/:picture_id
  ```
  This request will respond with the updated image data.

### Functionality demo
ADD HERE

## Getting Started
1. Check out examplePage.html to see an example of the HTML you'll want to generate for a photo. NOTE that examplePage.html is a static html page; you'll be dynamically rendering html for an image using JavaScript.

2. Look at the code provided for you in the 'src' folder.

3. **Prioritize making code that works over attempting all of the deliverable.** Make each part work before moving on to the next step.

## Deliverables

1. Open index.js and find the "DOMContentLoaded" event listener. This event listener should make a fetch request to get a picture and parse .json() from the response. (Try logging the results to make sure your request works!)

2. Now, you'll need to use the results and generate HTML to append to the DOM. Start by simply rendering each picture. (Remember that you have an Image class in Image.js) Next, build upon your render function to add the following HTML along with each picture:
  - the number of likes for a picture
  - a button to 'like' a picture
  - a form to add a comment
  - all of the picture's comments in an unordered list (Remember that you have a Comment class in Comment.js)

Use the data available to you to render the picture's comments and number of likes.   

3. Now, build out the 'like' button functionality.

First, make a button that, on click, increases the number of likes rendered to the user on the font-end.

Next, the app should persist the 'like' to the database by making a post request to the API with the picture's id. Don't worry about sending along any other info with this post request. The API will handle the logic of incrementing the picture's likes.

4. Next, create the ability to add a comment.

First, append the comment as a new list item in the comment list when a user submits the comment form.

Once that part is working, persist the data by making a post request to the database with the comment's text and the picture's id.

5. Lastly, create the ability to delete a comment. Think about when you'll want to add the event listener to the delete button, and how you'll get the comment's id to post to the API.
