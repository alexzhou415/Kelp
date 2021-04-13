class Review < ApplicationRecord
  validates :body, :rating, :author_id, :business_id, presence: true
  validates :rating, inclusion: { in: (1..5) }
  validates :author_id, uniqueness: {scope: :business_id}

  has_one_attached :photo
  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :business,
    foreign_key: :business_id,
    class_name: 'Business'
end
