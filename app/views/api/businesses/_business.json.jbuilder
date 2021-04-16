json.extract! business, :id, :name, :creator_id, :address, :rating, :category
json.photoUrls business.photos.map { |file| url_for(file)}
json.average_rating business.average_rating