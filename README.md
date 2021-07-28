This is a starter template for [Next.js](https://nextjs.org/learn) and [Moralis](https://docs.moralis.io/).

It is written primarily in Typescript and uses [styled components](https://styled-components.com/) for styling.

## Getting started

Using the [github client](https://cli.github.com/), in your command line run:
```
gh repo create <my-web3-project> --template="https://github.com/ccoyotedev/nextjs-moralis.git"
cd <my-web3-project>
git pull origin main
yarn install
```

To run the app, in your terminal run:
```
yarn dev
```

To connect to Moralis you will need to create a new Moralis project by following the [Moralis documentation]("https://docs.moralis.io/getting-started/quick-start").

Then create a `.env.development` and `.env.production`. Inside both set the the following keys:

```
MORALIS_APPLICATION_ID='[APP_ID]'
MORALIS_SERVER_ID='[SERVER_ID]'
```

