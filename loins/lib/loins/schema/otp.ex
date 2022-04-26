defmodule Loins.Schema.OTP do
  use Memento.Table,
    attributes: [:id, :email, :otp, :expires_in]
end
