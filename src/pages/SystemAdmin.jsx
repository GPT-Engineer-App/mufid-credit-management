import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SystemAdmin = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Administrateur Système Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Administrateur Système! Here you can manage system settings and user accounts.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemAdmin;