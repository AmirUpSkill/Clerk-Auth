import { currentUser } from "@clerk/nextjs/server"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const user = await currentUser();  

  return (
    // This div centers the content vertically and horizontally within the <main> tag from the layout
    <div className="h-full flex flex-col items-center justify-center container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Hello, World! 👋</h1>
        <p className="text-muted-foreground mt-2">Welcome back, {user?.firstName || 'User'}.</p>
      </div>

      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-muted-foreground">Name:</span>
            <span className="font-semibold">{user?.firstName} {user?.lastName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-muted-foreground">Email:</span>
            <span>{user?.emailAddresses[0]?.emailAddress}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}