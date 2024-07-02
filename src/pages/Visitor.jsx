import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Visitor = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Visitor Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, Visitor! Here you can explore our services and learn more about us.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Visitor;