json.extract! user, :id, :username, :email, :location

if user.photo.attached?
  json.photoUrl url_for(user.photo) 

else
  json.photoUrl image_url("default-profile-picture_copy.png")
end