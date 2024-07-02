import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Administration = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Conseil d'Administration Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Conseil d'Administration! Here you can review and approve strategic decisions.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Administration;