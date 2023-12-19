class AddMessageToGreetings < ActiveRecord::Migration[7.1]
  def change
    add_column :greetings, :message, :string
  end
end
