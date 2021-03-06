export const fetchReview = (id) =>
  $.ajax({
    url: `api/reviews/${id}`,
  });

export const createReview = (review) =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: review,
    contentType: false,
    processData: false,
  });

export const updateReview = (review, id) => {
  
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${id}`,
    data: review,
    contentType: false,
    processData: false,
  });
}

export const deleteReview = (id) =>
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${id}`,
  });
