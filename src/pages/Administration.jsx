import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Administration = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Conseil d'Administration Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Conseil d'Administration! Here you can review and approve strategic decisions.</p>
          <div className="mt-4 space-y-2">
            <Button variant="outline">Gérer Profil</Button>
            <Button variant="outline">Gérer Demande</Button>
            <Button variant="outline">Gérer Client</Button>
            <Button variant="outline">Gérer Crédit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Administration;