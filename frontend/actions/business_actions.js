import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

const removeBusiness = (businessId) => ({
  type: REMOVE_BUSINESS,
  businessId
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});


export const request