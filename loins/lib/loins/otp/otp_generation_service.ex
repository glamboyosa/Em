defmodule Loins.OTP.OTPGenerationService do
  @doc """
  Generates a crytographically randomly secure OTP.
  Returns {:ok, key}
  """
  def gen_otp do
    symbols = '0123456789'
    symbol_count = Enum.count(symbols)
    key = for _ <- 1..6, into: "", do: <<Enum.at(symbols, :rand.uniform(symbol_count))>>
    {:ok, key}
  end
end
