# Kelp

(https://kelp-alex.herokuapp.com/#/ Live Site)

## Introduction

Kelp is a review sharing website that allows users to share their thoughts on the physical businesses they have been to. These reviews help other users gain a better idea of what the business is like without necessarily having to experience it themselves first. A review consists of three things: a rating from 1-5, a body of text explaining the reasoning behind the rating, and optional photos the reviewer may have taken during their experience.


## Technologies used

The Kelp backend was implemented with Ruby on Rails. PostgreSQL was used to manage the relational database, while React/Redux and JavaScript handled the frontend portion of the website. All the JavaScript modules were bundled using Webpack. After users upload their photos, the files are stored on the AWS cloud.


## Features

Reviews are the most important feature of the website. To write a review, users open up a form on the page of the business they are reviewing, and select how many stars they would like to give the business before writing their review. I wanted to let users click on the page in order to select the rating, and have the number of stars change depending on where the user's cursor was located. If clicked, the stars should also stay at the number that the user selected.

![Review](./app/assets/images/review.png?raw=true "Review Form")

This took me more time to implement than I had anticipated. The challenges were displaying the correct number of stars based on where the user's cursor was placed, and only showing the rating that the user selected while the cursor wasn't actually hovering over it. To render the right number of stars, I created 5 div elements in the shape of squares, all connected horizontally. I also set two different state properties for the review rating that would update whenever one of the squares was hovered over or clicked. Each square corresponded with an image of a stars rating from 1-5. 

```
<div className="review-form-stars-container">
    <img
      className="review-form-clicked-stars"
      src={this.showStars("click")}
      alt=""
    />
    <img
      className="review-form-hovered-stars"
      src={this.showStars("hover")}
      alt=""
    />
    <div
      className="review-form-1-star"
      onMouseEnter={this.handleHover(1)}
      onMouseLeave={this.handleUnhover()}
      onClick={this.handleClick(1)}
    ></div>
    <div
      className="review-form-2-star"
```

To only display the stars that the user was hovering over instead of the stars that the user last clicked on, I made two image elements to represent a hovered state and a clicked state. While the container of the images 

app/assets/images/review.png
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

