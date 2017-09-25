class CreateImageComments < ActiveRecord::Migration[5.1]
  def change
    create_table :image_comments do |t|
      t.references :image, foreign_key: true
      t.references :comment, foreign_key: true

      t.timestamps
    end
  end
end
