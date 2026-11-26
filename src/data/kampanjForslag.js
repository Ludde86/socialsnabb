export const kampanjForslag = {
  Pizzeria: [
    {
      id: "weekly_pizza",

      label: "🍕 Veckans pizza",

      prefill: "Veckans pizza - ",

      strategy: {
        strategyType: "fomo_offer",

        goal: "Driva försäljning på veckans pizza",

        angle: "Smak, nygräddat och begränsad tid",

        cta: "Passa på innan veckan är slut",
      },
    },

    {
      id: "daily_lunch",

      label: "🥗 Dagens lunch",

      prefill: "Dagens lunch - ",

      strategy: {
        strategyType: "daily_offer",

        goal: "Locka fler lunchgäster idag",

        angle: "Snabbt, prisvärt och smidigt under arbetsdagen",

        cta: "Välkommen in på lunch eller ring och förbeställ",
      },
    },

    {
      id: "family_bundle",

      label: "👨‍👩‍👧 Familjepaket",

      prefill: "Familjepaket - ",

      strategy: {
        strategyType: "bundle_upsell",

        goal: "Öka snittordervärdet",

        angle: "Gemenskap, bekvämlighet och att slippa laga mat",

        cta: "Beställ familjepaketet idag",
      },
    },

    {
      id: "match_night",

      label: "⚽ Matchkväll",

      prefill: "Matchkväll - ",

      strategy: {
        strategyType: "event_tie_in",

        goal: "Driva försäljning inför ett event",

        angle:
          "Uppladdning, stämning, gemenskap och att ha maten redo före avspark",

        cta: "Beställ innan avspark",
      },
    },

    {
      id: "new_menu",

      label: "🔥 Ny meny",

      prefill: "Ny meny - ",

      strategy: {
        strategyType: "novelty_launch",

        goal: "Få kunder att prova något nytt",

        angle: "Nyfikenhet, nyheter och spännande smaker",

        cta: "Kom in och testa nyheterna idag",
      },
    },
  ],
  Gym: [
    "🏋️ Gratis provträning",
    "🏷️ Medlemskapserbjudande",
    "💪 PT-paket",
    "👥 Värva en vän",
    "🔥 Nytt träningspass",
  ],
  Kafé: [
    "☕ Dagens fika",
    "🥐 Frukost & lunch",
    "🍰 Säsongens bakverk",
    "🥞 Helgbrunch",
    "🎂 Tårtor & catering",
  ],
  Frisör: [
    "⏰ Sista-minuten-tider",
    "✨ Före & efter",
    "☀️ Säsongens look",
    "🎓 Bal, student & bröllop",
    "🧴 Produkterbjudande",
  ],
};
