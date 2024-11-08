---
index: 1
title: "Random Server"
description: "A server that transfers players to a random server out of a list. Allows players to easily discover random servers."
category: "Showcase"
source: "https://github.com/tarna/random-server"
featured: true
---

This is a simple minestom server that transfers the player to a random server in the [servers.json](https://github.com/tarna/random-server/blob/main/servers.json) file.

## Adding a Server
Any user is welcome to add their server to the list. To do this, either create an [issue](https://github.com/tarna/random-server/issues) with the request or create a PR with your server added to [servers.json](https://github.com/tarna/random-server/blob/main/servers.json).

The format for the server is as follows:
```json
{
  "name": "Server Name",
  "address": "server.address.com",
  "port": 25565
}
```

### Accepting Transfers
Make sure the server accepts transfers before requesting it to be added or it will not work.

For regular servers such as [Spigot](https://www.spigotmc.org) and [Paper](https://papermc.io/software/paper), this option is located in [server.properties](https://server.properties) under the `accepts-transfers` option.

For [Velocity](https://velocitypowered.com), this option is located in `velocity.toml` under the `accepts-transfers` option.

## Showcase
You can find the publicly hosted version of this server at `random.tarna.dev`.