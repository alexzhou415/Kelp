json.extract! user, :id, :username, :email, :location
json.photoUrl url_for(user.photo)