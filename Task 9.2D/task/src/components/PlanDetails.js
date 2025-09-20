import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Header, List, Button } from 'semantic-ui-react';

const PLAN_CONTENT = {
  free: {
    title: 'Free Plan',
    points: [
      'Access to public articles & tutorials',
      'Basic site search',
      'Community access',
    ],
    cta: { text: 'Continue Free', to: '/' }
  },
  premium: {
    title: 'Premium Plan',
    points: [
      'Custom messages & banners',
      'Themes & content controls',
      'Advanced analytics dashboard',
      'Priority support',
    ],
    cta: { text: 'Go Premium (Coming Soon)', to: '/' }
  }
};

export default function PlanDetails() {
  const { planId } = useParams();
  const data = PLAN_CONTENT[planId];

  if (!data) {
    return (
      <Container text style={{ padding: '3rem 0' }}>
        <Header as="h1">Unknown Plan</Header>
        <p>Try selecting a plan from the list.</p>
        <Button as={Link} to="/plans" color="green">Back to Plans</Button>
      </Container>
    );
  }

  return (
    <Container text style={{ padding: '3rem 0' }}>
      <Header as="h1">{data.title}</Header>
      <List bulleted relaxed>
        {data.points.map((p, i) => <List.Item key={i}>{p}</List.Item>)}
      </List>
      <Button as={Link} to={data.cta.to} color={planId === 'premium' ? 'green' : undefined}>
        {data.cta.text}
      </Button>
      <Button as={Link} to="/plans" basic style={{ marginLeft: 8 }}>
        Back to Plans
      </Button>
    </Container>
  );
}
