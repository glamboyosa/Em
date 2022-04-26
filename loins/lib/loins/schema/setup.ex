defmodule Loins.Schema.Setup do
  alias Memento

  @doc """
  Creates the mnesia schema , assigns to memory and creates the DB
  Returns [:ok]
  """

  def setup_db(tables) do
    nodes = [node()]
    Memento.stop()
    Memento.Schema.create(nodes)
    Memento.start()
    # create tables in DB
    tables
    |> Enum.each(&Memento.Table.create!(&1, disc_copies: nodes))
  end
end
