class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.string :address, null: false
      t.float :rating, null: false
      t.string :website
      t.string :category
      t.timestamps
    end

    add_index :businesses, :name
  end
end
