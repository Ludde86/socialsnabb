export function skapaKampanj({
  foretag,
  tema,
  erbjudande,
  langd,
  aktivStrategi,
}) {
  console.log({
    foretag,
    tema,
    erbjudande,
    langd,
    aktivStrategi,
  });

  let strategi = "";
  let inlagg = [];

  console.log("längd: ", langd);
  console.log("Strategi i motorn:", aktivStrategi);

  if (langd === "3 dagar") {
    strategi = "Lanseringen → Sista chansen";

    inlagg = [
      {
        id: "1",

        dag: "Dag 1",

        steg: "🚀 Lanseringen",

        text: `${foretag} presenterar ${tema}! ${erbjudande}`,

        bildIde: `Visa huvuderbjudandet för ${tema.toLowerCase()}`,

        hashtags: "#kampanj #erbjudande",
      },

      {
        id: "2",

        dag: "Dag 3",

        steg: "⏰ Sista chansen",

        text: `Sista chansen att ta del av ${erbjudande}!`,

        bildIde: "Visa att tiden håller på att rinna ut",

        hashtags: "#sistachansen #erbjudande",
      },
    ];
  }

  if (langd === "1 vecka") {
    strategi = "Nyheten → Värdet → Påminnelsen";

    inlagg = [
      {
        id: "1",
        dag: "Måndag",
        steg: "🎯 Nyheten",
        text: `${foretag} presenterar ${tema}. ${erbjudande}`,
        bildIde: `Bild som visar ${tema.toLowerCase()}`,
        hashtags: "#kampanj",
      },

      {
        id: "2",
        dag: "Onsdag",
        steg: "💎 Värdet",
        text: `Därför ska du inte missa ${erbjudande}.`,
        bildIde: "Visa fördelarna med erbjudandet",
        hashtags: "#erbjudande",
      },

      {
        id: "3",
        dag: "Fredag",
        steg: "⏰ Påminnelsen",
        text: `Snart är det för sent att ta del av ${erbjudande}.`,
        bildIde: "Nedräkning eller begränsad tillgång",
        hashtags: "#sistachansen",
      },
    ];
  }

  if (langd === "2 veckor") {
    strategi = "Teaser → Lansering → Social proof → FAQ → Slutspurt";

    inlagg = [
      {
        id: "1",

        dag: "Dag 1",

        steg: "👀 Teasern",

        text: `Någonting stort är på väg hos ${foretag}...`,

        bildIde: `Skapa nyfikenhet kring ${tema.toLowerCase()}`,

        hashtags: "#snart #kampanj",
      },

      {
        id: "2",

        dag: "Dag 4",

        steg: "🚀 Lanseringen",

        text: `${tema} är nu här! ${erbjudande}`,

        bildIde: "Visa erbjudandet tydligt",

        hashtags: "#nyhet #erbjudande",
      },

      {
        id: "3",

        dag: "Dag 7",

        steg: "⭐ Social proof",

        text: `Många har redan upptäckt ${tema}!`,

        bildIde: "Visa kund eller produkt i användning",

        hashtags: "#kundfavorit #rekommenderat",
      },

      {
        id: "4",

        dag: "Dag 11",

        steg: "💡 FAQ / Värde",

        text: `Här är varför ${erbjudande} är värt att prova.`,

        bildIde: "Förklara fördelarna tydligt",

        hashtags: "#tips #värde",
      },

      {
        id: "5",

        dag: "Dag 14",

        steg: "⏰ Slutspurt",

        text: `Sista chansen att ta del av ${erbjudande}!`,

        bildIde: "Visa att kampanjen snart tar slut",

        hashtags: "#sistachansen #kampanj",
      },
    ];
  }

  return {
    id: Date.now().toString(),

    namn: `${tema} – ${foretag}`,

    foretag,

    tema,

    erbjudande,

    langd,

    strategi,

    skapadDatum: new Date().toISOString(),

    inlagg,
  };
}
