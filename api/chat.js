export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message } = req.body;

  const q = message.toLowerCase();

  let reply = "Tento příkaz se ještě učím.";

  if (q.includes("ahoj")) {
    reply = "Dobrý den. STARK AI je online.";
  }

  else if (q.includes("kdo jsi")) {
    reply = "Jsem STARK AI, osobní asistent.";
  }

  else if (q.includes("počasí")) {
    reply = "Nemám zatím přístup k živému počasí.";
  }

  else if (q.includes("čas")) {
    reply = "Čas zjistíte podle svého zařízení.";
  }

  else if (q.includes("projekt")) {
    reply = "STARK AI je futuristický osobní asistent.";
  }

  res.status(200).json({
    reply
  });
}