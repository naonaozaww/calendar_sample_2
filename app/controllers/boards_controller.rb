class BoardsController < ApplicationController
  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
  end

  private

  def board_params
    params.require(:board).permit(:strat_date, :end_date)
  end
end
