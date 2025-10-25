const users = {
  "Tim#1234": "klein",
  "Lena#9999": "groß",
  "BotGhostUser": "kein",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const user = body.user;

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Kein Benutzer angegeben" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const status = users[user] || "kein";

    return new Response(
      JSON.stringify({ user, status }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Ungültige Anfrage" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
