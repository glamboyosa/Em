defmodule Loins.Application do
  import Loins.Schema.Setup
  alias Loins.Schema.OTP
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      LoinsWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Loins.PubSub},
      # Start the Endpoint (http/https)
      LoinsWeb.Endpoint
      # Start a worker by calling: Loins.Worker.start_link(arg)
      # {Loins.Worker, arg}
    ]

    # setup Mnesia
    setup_db([OTP])
    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Loins.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    LoinsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
