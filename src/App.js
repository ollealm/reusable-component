import React from 'react'

import { Card } from "./lib/Card.js";
import styled from "styled-components/macro";

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <AppContainer>
      <ThinnerCard
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="Title"
        secondaryText="Secondary text"
      >
        <p>Child content here!</p>
      </ThinnerCard>

      <Card title="Only title" secondaryText="Secondary text" />

      <Card>
        <h3>Hello from children</h3>
      </Card>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 500px;
`;