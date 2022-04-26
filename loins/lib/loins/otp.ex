defmodule Loins.OTP do
  alias __MODULE__.Schema.OTP
  import Memento

  @moduledoc """
  This module is creates helper functions for interacting with the DB.
  """
  def get_otp({email, otp}) do
    guards = [
      {:==, :email, email},
      {:==, :otp, otp}
    ]

    Query.select(OTP, guards)
    |> Map.from_struct()
  end
end
