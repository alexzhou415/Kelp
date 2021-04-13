export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
  return business.reviewIds.map((reviewId) => reviews[reviewId]);
};
