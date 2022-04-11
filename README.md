# Em - Create Short Links ! 🚀 

Em is a URL link shortener offering custom links and analytics !

## Architecture

```
.
├── README.md
├── bubba
│   ├── cupcake
├── loins
```

- **[`Loins`](https://github.com/glamboyosa/Em/blob/main/loins)**: `Loins` is the Elixir Websocket server responsible for handling the logic of creating unique cryptographically secure keys for our short links as well as custom links.

- **[`Bubba`](https://github.com/glamboyosa/Em/blob/main/bubba)**: `Bubba` is the Express TypeScript REST API responsible for authentication, analytics, payment and most importantly redirection logic for our short links to the intended original link.

- **[`Cupcake`](https://github.com/glamboyosa/Em/blob/main/bubba/cupcake)**: `Cupcake` is the React TypeScript UI. It handles authentication, link creation, analytics, payment and more!

## Future Addons - `Angel`

Angel is the tentative Rust terminal application providing developers the ability to create short links right from the terminal.

> **NOTE** This is currently in the ideation phase.
