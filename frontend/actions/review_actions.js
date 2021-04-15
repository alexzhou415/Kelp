import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


export const fetchReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.fetchReview(reviewId).then(
    (review) => dispatch(receiveReview(review))
    // (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const createReview = (review) => (dispatch) =>
  ReviewAPIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const updateReview = (review, id) => (dispatch) =>
  ReviewAPIUtil.updateReview(review, id).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.deleteReview(reviewId).then(
    () => dispatch(removeReview(reviewId))
    // (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );
