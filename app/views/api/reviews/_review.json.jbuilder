json.extract! review, :id, :body, :rating, :author_id, :business_id, :created_at, :updated_at
json.photoUrls review.photos.map { |file| url_for(file)}