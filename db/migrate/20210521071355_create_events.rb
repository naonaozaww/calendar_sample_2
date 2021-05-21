class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.datetime :start_at, null: false
      t.datetime :end_at, null: false
      t.integer :week_number
      t.references :board, foreign_kye: true, null: false
      t.references :mode, foreign_kye: true, null: false
      t.timestamps
    end
  end
end
