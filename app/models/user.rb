class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, :location, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}
  after_initialize :ensure_session_token
  has_many :businesses,
    foreign_key: :creator_id,
    class_name: 'Business'
  has_many :reviews,
    foreign_key: :author_id,
    class_name: 'Review'
  has_one_attached :photo
  before_create 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
