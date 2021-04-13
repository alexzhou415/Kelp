class Business < ApplicationRecord
  validates :name, :creator_id, :address, :rating, :category, presence: true
  has_one_attached :photo
  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'

  has_many :reviews,
    foreign_key: :business_id,
    class_name: 'Review'

  private

  def average_rating
    reviews.average(:rating)
  end
end
