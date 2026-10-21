// Alternativa vinklar på samma budskap.
// Dessa används som kompletterande förslag
// till huvudinlägget.

export const vanligaInlagg = {
  // Facebook-inlägg
  // Här ligger de mest utvecklade och detaljerade mallarna.
  Facebook: (foretag, typ) => {
    // Specialmallar för pizzerior
    if (typ === "Pizzeria") {
      // Slumpa mellan flera olika pizzeria-inlägg
      const mallar = [
        `🍕 Nytt från ${foretag}

Hos ${foretag} älskar vi att skapa riktigt goda smakupplevelser för våra kunder.

Oavsett om du kommer för lunch, middag eller fredagsmys är du alltid varmt välkommen.

Tack för att ni väljer lokalt! ❤️`,

        `🍕 Veckans favorit

Hos ${foretag} finns alltid något gott att upptäcka.

Vilken pizza är din favorit hos oss? 😋

Berätta gärna i kommentarerna!`,

        `❤️ Tack till våra kunder

Vi vill passa på att tacka alla fantastiska kunder som besöker ${foretag}.

Ert stöd betyder mer än ni tror och hjälper oss göra det vi älskar varje dag.`,

        `👨‍🍳 Bakom kulisserna

Hos ${foretag} arbetar vi varje dag för att skapa mat som vi själva är stolta över.

Kvalitet, smak och service står alltid i fokus.`,
      ];

      return mallar[Math.floor(Math.random() * mallar.length)];
    }

    // Specialmall för frisörer
    if (typ === "Frisör") {
      return `✂️ Hälsning från ${foretag}

Hos ${foretag} handlar det om mer än bara hår.

Vi älskar att hjälpa våra kunder att känna sig trygga, fräscha och nöjda efter varje besök.

Tack för att ni väljer oss och varmt välkommen tillbaka! 💇`;
    }

    // Specialmall för gym
    if (typ === "Gym") {
      return `💪 Hälsning från ${foretag}

Varje träningspass är ett steg närmare dina mål.

Hos ${foretag} vill vi inspirera till rörelse, hälsa och träningsglädje för alla nivåer.

Vi ser fram emot att träna tillsammans med dig!`;
    }

    // Specialmall för naprapater
    if (typ === "Naprapat") {
      return `🩺 Hälsning från ${foretag}

Hos ${foretag} hjälper vi människor att må bättre i vardagen.

Oavsett om det handlar om ryggbesvär, nackproblem eller förebyggande behandling vill vi ge dig rätt stöd på vägen.

Tack för förtroendet och varmt välkommen!`;
    }

    // Specialmall för elektriker
    if (typ === "Elektriker") {
      return `⚡ Hälsning från ${foretag}

Hos ${foretag} hjälper vi kunder med säkra och professionella elinstallationer.

Vi värdesätter kvalitet, trygghet och ett arbete som håller över tid.

Tack för förtroendet och varmt välkommen att kontakta oss!`;
    }

    // Standardmall för företagstyper
    // som ännu inte har egna specialtexter.
    return `🌟 Nytt från ${foretag}

Hos ${foretag} brinner vi för att ge våra kunder bästa möjliga upplevelse.

Som ${typ.toLowerCase()} arbetar vi varje dag med kvalitet, service och personlig omtanke.

Har du inte besökt oss ännu? Vi hälsar dig varmt välkommen!

💬 Har du en fråga? Skriv gärna en kommentar eller kontakta oss direkt.`;
  },

  // Instagram-inlägg
  // Kortare och mer sociala texter.
  Instagram: (foretag, typ) => {
    if (typ === "Pizzeria") {
      return `🍕 Dags för något gott?

Hos ${foretag} bakar vi med kärlek och serverar favoriter varje dag.

Vilken är din favoritpizza? 😍

#pizza #pizzeria #fredagsmys #matglädje #lokalt`;
    }

    if (typ === "Frisör") {
      return `✂️ Ny look, ny energi!

Hos ${foretag} hjälper vi våra kunder att känna sig fräscha och självsäkra varje dag.

Vilken frisyr är du mest sugen på just nu? 💇

#frisör #hårvård #salong #nyfrisyr #skönhet`;
    }

    if (typ === "Gym") {
      return `💪 Dagens motivation från ${foretag}

Varje träningspass räknas, oavsett om målet är styrka, hälsa eller mer energi i vardagen.

Vad tränar du idag? 🔥

#träning #gym #fitness #motivation #hälsa`;
    }

    {
      /* Standardtext */
    }

    return `✨ Hej från ${foretag}!

Vi älskar att hjälpa våra kunder varje dag ❤️

Välkommen förbi!

#${typ.toLowerCase()} #småföretag #lokalt #kundglädje`;
  },

  LinkedIn: (foretag, typ) => {
    if (typ === "Pizzeria") {
      return `${foretag} fortsätter att utveckla sitt erbjudande med fokus på kvalitet, service och goda smakupplevelser.

Vi är stolta över att få vara en del av det lokala näringslivet och uppskattar förtroendet från våra kunder.

Tack till alla som följer vår resa.`;
    }

    return `${foretag} fortsätter att utveckla våra tjänster inom ${typ.toLowerCase()}.

Vårt fokus ligger på kvalitet, långsiktiga relationer och nöjda kunder.

Tack till alla kunder och samarbetspartners som gör resan möjlig.`;
  },
};
