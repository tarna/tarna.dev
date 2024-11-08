---
index: 1
title: "Minehut"
description: "Node.js wrapper for the Minehut HTTP API."
category: "Libraries"
link: "https://npmjs.com/package/minehut"
source: "https://github.com/jellz/minehut"
featured: true
---

## Installation
Install minehut with [NPM](https://npmjs.com)

```bash
  npm install minehut
```

## Features
- Get basic Minehut network information.
- Get information about a Minehut server.
- Get a list of online servers.
- Get information about server icons and categories.
- Get information about a Minehut player such as their rank, friends, and if they are online.

## Basic Usage
```ts
const minehut = new Minehut();

async function main() {
    const stats = await minehut.getSimpleStats();
    console.log(stats);

    const lifestealServers = await minehut.servers.getOnlineServers({ category: "lifesteal" });
    console.log(lifestealServers);

    const player = await minehut.players.get('_Tarna_');
    console.log(player);
}
```

For more examples, visit [example.ts](https://github.com/jellz/minehut/blob/master/src/example.ts).

## Contributing
Contributions are always welcome!

See `contributing.md` for ways to get started.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributors
- [@jellz](https://www.github.com/jellz)
- [@tarna](https://www.github.com/tarna)