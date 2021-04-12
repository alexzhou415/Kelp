export const fetchBusinesses = () => (
  $.ajax({
    url: 'api/businesses',
    
  })
);

export const fetchBusiness = (id) => (
  $.ajax({
    url: `api/businesses/${id}`,
    
  })
);

export const createBusiness = (business) => (
  $.ajax({
    method: 'POST',
    url: 'api/businesses',
    data: business,
    
  })
);

export const updateBusiness = (business) => (
  $.ajax({
    method: 'PATCH',
    url: `api/businesses/${business.id}`,
    data: business,
    
  })
);

export const deleteBusiness = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/businesses/${id}`,
    
  })
);