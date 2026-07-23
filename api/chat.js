export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Chybí zpráva"
    });
  }

  const q = message.toLowerCase();

  let reply = "Tento příkaz se ještě učím.";

  if (q.includes("ahoj")) {
    reply = "Dobrý den. STARK AI je online.";
  }

  else if (q.includes("kdo jsi")) {
    reply = "Jsem STARK AI, osobní asistent vytvořený pro pomoc a informace.";
  }

  else if (q.includes("čas")) {
    reply = "Aktuální čas zjistíte podle hodin vašeho zařízení.";
  }

  else if (q.includes("počasí")) {
    reply = "Nemám zatím přístup k živým datům počasí, ale tuto funkci můžeme později přidat.";
  }

  else if (q.includes("projekt")) {
    reply = "STARK AI je webový osobní asistent s futuristickým rozhraním.";
  }

  else if (q.includes("pomoc")) {
    reply = "Mohu odpovídat na základní otázky a postupně se učit nové funkce.";
  }

  res.status(200).json({
    reply
  });
}