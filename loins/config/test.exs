import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :loins, LoinsWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "PGq0chEgA5Y12CMKT2xl6SnVw3vwO9E1LZOvWjGrzxUD4p4RYB/O+21v0gJOj41A",
  server: false

# In test we don't send emails.
config :loins, Loins.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
