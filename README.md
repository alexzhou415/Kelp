# Kelp

https://kelp-alex.herokuapp.com/#/ (Live Site)

## Introduction

Kelp is a review sharing website that allows users to share their thoughts on the physical businesses they have been to. These reviews help other users gain a better idea of what the business is like without necessarily having to experience it themselves first. A review consists of three things: a rating from 1-5, a body of text explaining the reasoning behind the rating, and optional photos the reviewer may have taken during their experience.


## Technologies used

The Kelp backend was implemented with Ruby on Rails. PostgreSQL was used to manage the relational database, while React/Redux and JavaScript handled the frontend portion of the website. All the JavaScript modules were bundled using Webpack. After users upload their photos, the files are stored on the AWS cloud.


## Features

Reviews are the most important feature of the website. To write a review, users open up a form on the page of the business they are reviewing, and select how many stars they would like to give the business before writing their review. I wanted to let users click on the page in order to select the rating, and have the number of stars change depending on where the user's cursor was located. If clicked, the stars should also stay at the number the user selected.

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
      onMouseEnter={this.handleHover(2)}
      onMouseLeave={this.handleUnhover()}
      onClick={this.handleClick(2)}
      ></div>
```

To only display the stars that the user was hovering over instead of the stars that the user last clicked on, I made two image elements to represent a hovered state and a clicked state. While the container of the images was being hovered over, the image element representing the clicked state would have an opacity of 0. When the cursor leaves the container, the hover image element would have an opacity of 0 instead.

```
.review-form-hovered-stars {
  opacity: 0;
}

.review-form-stars-container:hover .review-form-clicked-stars {
  opacity: 0;
}

.review-form-stars-container:hover .review-form-hovered-stars {
  opacity: 1;
}
```

Another feature that I needed some time to think over was the search function. Users should be able to input multiple words and get relevant results for all of them. The results should also remain even when the page is refreshed, so I needed a way for the query to persist through that. 

![Search](./app/assets/images/search.png?raw=true "Search Results")

In order to be able to search multiple strings, the search component's state contains two properties, one that represents what is displayed to the user as they type in the search bar, and one that is actually passed to the results page to filter down the businesses. As the user types in the search bar, one property updates to the raw string that is being inputted while the other does the same but replacing each space with "%". If the string that the user inputs into the search bar was passed to the results page unaltered, it would have been automatically formatted so that each space becomes other characters which makes parsing the string more difficult. 

```
handleInput(e){
  const query = e.target.value.split(' ').join("%");
  this.setState({searchquery: query, searchwords: e.target.value});
}
```

With the newly formatted search string, the results page simply needs to split the string along each "%" to get an array of all the words the user wants to search. To make the search data in the results page persist in the event of a page refresh, I passed the data through the search property of the link to the results page. This puts the query in the url of the page, ensuring the data never gets lost.

```
<Link to={{
  pathname: '/search',
  search: `${this.state.searchquery}`
}}>
  <button className="search-bar-submit" type="submit">Search</button>
</Link>
```

## Features to be implemented
* Business tags
* User profiles
