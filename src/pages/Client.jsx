import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Client = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Client Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Client! Here you can manage your account and access our services.</p>
          <div className="mt-4 space-y-2">
            <Button variant="outline">Gérer Profil</Button>
            <Button variant="outline">Gérer Demande</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Client;