export const fetchBusinesses = () => (
  $.ajax({
    url: 'api/businesses',
    error: (err) => console.log(err)
  })
);

export const fetchBusiness = (id) => (
  $.ajax({
    url: `api/businesses/${id}`,
    error: (err) => console.log(err),
  })
);

export const createBusiness = (business) => (
  $.ajax({
    method: 'POST',
    url: 'api/businesses',
    data: business,
    error: (err) => console.log(err)
  })
);

export const updateBusiness = (business) => (
  $.ajax({
    method: 'PATCH',
    url: `api/businesses/${business.id}`,
    data: business,
    error: (err) => console.log(err)
  })
);

export const deleteBusiness = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/businesses/${id}`,
    error: (err) => console.log(err)
  })
);