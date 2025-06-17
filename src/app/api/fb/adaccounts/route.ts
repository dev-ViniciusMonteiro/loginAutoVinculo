import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/me/adaccounts?fields=name,account_id&access_token=${session.accessToken}`
    );
    
    const data = await response.json();
    
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching ad accounts:", error);
    return NextResponse.json(
      { error: "Failed to fetch ad accounts" },
      { status: 500 }
    );
  }
}