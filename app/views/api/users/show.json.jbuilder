json.user do 
  json.partial! 'api/users/user', user: @user
end

@user.reviews.each do |review| 
  json.reviews do
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.businesses do 
    json.set! review.business.id do 
      json.partial! 'api/businesses/business' , business: review.business
    end
  end
end