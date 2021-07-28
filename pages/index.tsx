import React from 'react';
import { Layout } from 'components/sections/layout';
import { styled } from 'theme';
import { Panel } from 'components/ui';

const Grid = styled.section`
  display: grid;
  gap: 3.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.a`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.light2};
  padding: 2.4rem;
  color: ${({ theme }) => theme.colors.dark0};

  :hover {
    text-decoration: none;
    border-color: ${({ theme }) => theme.colors.primaryAccent};
  }

  p {
    margin: 0;
  }
`

const Home = () => {
  return (
    <Layout>
      <Panel>
        <h1>Moralis Next.js</h1>
        <p>Get started by editing <b>pages/index.tsx</b>.</p>
        <Grid>
          <Card href="https://nextjs.org/docs/basic-features/pages" target="_blank">
            <h3>Next.js Documentation</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
          <Card href="https://docs.moralis.io/" target="_blank">
            <h3>Moralis Documentation</h3>
            <p>Learn about Moralis' suite of features for easy web3 integration.</p>
          </Card>
          <Card href="https://styled-components.com/" target="_blank">
            <h3>Styled components</h3>
            <p>Learn about the CSS-in-JS tool that bridges the gap between components and styling.</p>
          </Card>
        </Grid>
      </Panel>
    </Layout>
  )
}

export default Home;