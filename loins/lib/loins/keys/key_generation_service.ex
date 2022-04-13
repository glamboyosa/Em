defmodule Loins.Keys.KeyGenerationService do
  @doc """
  Generates a crytographically randomly secure string.
  Returns {:ok, key}
  """
  def gen_hash do
    symbols = '0123456789abcdefghijklmnopqrstuvwxyz'
    symbol_count = Enum.count(symbols)
    key = for _ <- 1..6, into: "", do: <<Enum.at(symbols, :rand.uniform(symbol_count))>>
    {:ok, key}
  end
end
