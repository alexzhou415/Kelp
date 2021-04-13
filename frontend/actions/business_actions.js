import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = ({business, reviews}) => ({
  type: RECEIVE_BUSINESS,
  business,
  reviews
});

const removeBusiness = (businessId) => ({
  type: REMOVE_BUSINESS,
  businessId
})

const receiveBusinessErrors = (errors) => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});


export const fetchBusinesses = () => dispatch => (
  BusinessAPIUtil.fetchBusinesses().then(
    (businesses) => dispatch(receiveBusinesses(businesses)),
    (errors) => dispatch(receiveBusinessErrors(errors))
  )
);

export const fetchBusiness = (businessId) => dispatch => (
  BusinessAPIUtil.fetchBusiness(businessId).then(
    (business) => dispatch(receiveBusiness(business)),
    (errors) => dispatch(receiveBusinessErrors(errors))
  )
);

export const createBusiness = (business) => dispatch => (
  BusinessAPIUtil.createBusiness(business).then(
    (business) => dispatch(receiveBusiness(business)),
    (errors) => dispatch(receiveBusinessErrors(errors))
  )
);

export const updateBusiness = (business) => dispatch => (
  BusinessAPIUtil.updateBusiness(business).then(
    business => dispatch(receiveBusiness(business)),
    errors => dispatch(receiveBusinessErrors(errors))
  )
);

export const deleteBusiness = businessId => dispatch => (
  BusinessAPIUtil.deleteBusiness(businessId).then(
    () => dispatch(removeBusiness(businessId)),
    errors => dispatch(receiveBusinessErrors(errors))
  )
);