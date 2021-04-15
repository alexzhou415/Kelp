import React from 'react';
import {ShowStar} from '../business/business_rating_stars';
import {Link} from 'react-router-dom';
import logo from "../../../app/assets/images/logo_transparent.png";
import HeaderContainer from "../header/header_container";

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    if (true) {
      this.state = {
        body: '',
        rating: 0,
        hoverRating: 0,
        photos: [],
        // errors: this.props.errors,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showStars = this.showStars.bind(this);
    this.describeRating = this.describeRating.bind(this);
    this.renderError = this.renderError.bind(this);
  }
  componentDidMount(){
    // console.log(this.props.review);
    this.props.fetchBusiness(this.props.match.params.businessId);
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId)
        // .then((res) => console.log(res))
        .then((res) => this.setState({body: res.body, rating: res.rating}));
    }
    window.scrollTo(0, 0);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    // console.log(this.props);
    formData.append('review[body]', this.state.body);
    formData.append('review[rating]', this.state.rating);
    formData.append('review[author_id]', this.props.currentUserId);
    formData.append('review[business_id]', this.props.business.id);
    if (this.props.match.params.reviewId) formData.append('review[id]', this.props.review.id);
    
    if (this.state.photos) {
      for (let i = 0; i < this.state.photos.length; i++) {
        formData.append('review[photos][]', this.state.photos[i]);
      }
    }
  
    // console.log(formData);
    if (this.props.match.params.reviewId) {
      this.props.submitReview(formData, this.props.review.id)
        .then(
          () => this.props.history.push(`/businesses/${this.props.match.params.businessId}`),
          () => console.log(this.props)
      )
    }
    else {
      this.props.submitReview(formData)
        .then(
          () => this.props.history.push(`/businesses/${this.props.match.params.businessId}`),
          () => console.log(this.props)
        )
    }
  }

  showStars(action){
    if (action === "click") return ShowStar(this.state.rating);
    return ShowStar(this.state.hoverRating);
  };

  handleHover(stars) {
    return () => this.setState({ hoverRating: stars });
  }

  handleUnhover() {
    return () => this.setState({ hoverRating: 0 });
  }

  handleClick(stars) {

    return () => this.setState({rating: stars,});
  }

  handleInput() {
    return (e) => this.setState({body: e.target.value});
  }
  
  describeRating(){
    const description = ["Select your rating", "Not good", "Could've been better", "OK", "Good", "Great"]
    
    return description[this.state.rating];
  }

  placeholder(){
    return 'I became a member for a month to give it a try. All the equipment is very new and polished. The owner Larry even helped spot me when I was bench pressing! However when I was struggling to finish my last set, Larry got distracted looking in the mirror and I almost...';
  }

  renderError(){
    if (this.props.errors[0]){
      const length = this.props.errors.length
      if (this.props.errors[length-1].includes("Rating")){
        return <div className="review-form-error">To submit your review, please select a star rating for this business.</div>;
      } else if (this.props.errors[length-1].includes("Body")) {
        return <div className="review-form-error">To submit your review, please explain your rating to others.</div>;
      }
      
    }
  }


  render(){
    // console.log(this.props.business);
    // console.log(this.props.review);
    // console.log(this.props);
    if (!this.props.business ) return null;
    if (this.props.match.params.reviewId) {
      if (!this.props.review) return null;
    }

    return (
      <div className="review-page-container">
        <div className="show-page-top-header">
          <div className="show-page-logo-container">
            <Link to="/" className="show-page-logo-link">
              <img className="login-logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="non-frontpage-login">
            <HeaderContainer />
          </div>
        </div>
        <div className="review-form-container">
          <div className="review-form-business-name">
            {this.props.business.name}
          </div>
          <form onSubmit={this.handleSubmit} className="review-form-box">
            <div className="review-form-main-container">
              <div className="review-form-rating-container">
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
                  <div
                    className="review-form-3-star"
                    onMouseEnter={this.handleHover(3)}
                    onMouseLeave={this.handleUnhover()}
                    onClick={this.handleClick(3)}
                  ></div>
                  <div
                    className="review-form-4-star"
                    onMouseEnter={this.handleHover(4)}
                    onMouseLeave={this.handleUnhover()}
                    onClick={this.handleClick(4)}
                  ></div>
                  <div
                    className="review-form-5-star"
                    onMouseEnter={this.handleHover(5)}
                    onMouseLeave={this.handleUnhover()}
                    onClick={this.handleClick(5)}
                  ></div>
                </div>
                <div className="review-form-stars-description">
                  {this.describeRating()}
                </div>
              </div>
              <textarea
                placeholder={this.placeholder()}
                className="review-form-body"
                onChange={this.handleInput()}
                value={this.state.body}
              ></textarea>
              <div className="review-form-error">{this.renderError()}</div>
            </div>
            <div className="review-form-photo-container">
              <div className="review-form-attach-photos">Attach Photos</div>
              <input type="file" className="review-form-photos-upload" onChange={e => this.setState({photos: e.target.files})} multiple/>
            </div>
            <button className="review-form-submit" type="submit">
              Post Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;