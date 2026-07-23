export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message, memory } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Chybí zpráva"
    });
  }

  const q = message.toLowerCase();
  
  if(q.includes("jmenuji se")) {
  const name = message.replace(/jmenuji se/i,"").trim();

  if (q.includes("pamatuješ si moje jméno") || q.includes("jak se jmenuji")) {

  if (memory) {
    return res.status(200).json({
      reply: "Ano. Pamatuji si, že se jmenuješ " + memory + "."
    });
  } else {
    return res.status(200).json({
      reply: "Zatím neznám tvoje jméno."
    });
  }

}

  let reply = "Tento příkaz se ještě učím.";

  if (q.includes("ahoj")) {
    reply = "Dobrý den. STARK AI je online.";
  }

  else if (q.includes("kdo jsi")) {
    reply = "Jsem STARK AI, osobní asistent vytvořený pro pomoc a informace.";
  }

  else if (q.includes("počasí")) {
  reply = "Nemám zatím přístup k živému počasí, ale tuto funkci můžeme později přidat.";
}

else if (q.includes("čas")) {
  reply = "Aktuální čas zjistíte podle hodin vašeho zařízení.";
}

  else if (q.includes("projekt")) {
    reply = "STARK AI je webový osobní asistent s futuristickým rozhraním.";
  }

  else if (q.includes("pomoc")) {
    reply = "Mohu odpovídat na základní otázky a postupně se učit nové funkce.";
  }

else if (q.includes("iron man") || q.includes("tony stark")) {
  reply = "Tony Stark je génius, miliardář a tvůrce technologie inspirované Jarvisem. STARK AI se snaží inspirovat podobným futuristickým stylem.";
}

else if (q.includes("kdo tě vytvořil")) {
  reply = "Byl jsem vytvořen jako osobní AI asistent STARK AI.";
}

else if (q.includes("programování") || q.includes("kód")) {
  reply = "Pomohu s učením programování, vysvětlením kódu a tvorbou projektů.";
}

else if (q.includes("hra") || q.includes("hry")) {
  reply = "Mohu pomoci s informacemi o hrách, nastavením a tipy.";
}

else if (q.includes("vtip")) {
  reply = "Proč programátor chodí spát? Protože má vypnutý systém.";
}

else if (q.includes("děkuji") || q.includes("díky")) {
  reply = "Není zač. STARK AI je vždy připraven pomoci.";
}
  res.status(200).json({
    reply
  });
}