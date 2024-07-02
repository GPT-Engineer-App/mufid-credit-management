import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Client = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Client Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Client! Here you can manage your account and access our services.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Client;