import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to MFC</h1>
      <p>Your trusted partner in banking and credit management.</p>
      <div className="mt-4">
        <Button variant="primary" as={Link} to="/register">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;