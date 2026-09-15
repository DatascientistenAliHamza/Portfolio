const en = {
  nav: {
      badge: "Open to opportunities",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      toggleMenu: "Toggle menu",
      langToggle: "Svenska",
    },
    hero: {
      prompt: "now streaming: plant_sensor_network.live",
      headlinePre: "I turn shop-floor chaos into ",
      headlineGrad: "signal",
      headlinePost: ", and I genuinely love it.",
      sub: "Hi, I'm Ali. I'm a data scientist who's happiest on an actual factory floor, headphones on, chasing down why a sensor spiked at 3am. I build models and dashboards that maintenance techs are glad to open, not ones that get built once and forgotten.",
      instruments: [
        { target: 47, suffix: "", label: "Power BI reports built for clients, internal tools, and personal projects" },
        { target: 40, suffix: "+", label: "software builds shipped, several running factory automation today" },
      ],
    },
    about: {
      sectionNum: "01",
      title: "About",
      p1: "My background is finance turned manufacturing, so I care as much about whether a sensor reading is trustworthy as whether the model on top of it is clever. Plant data is noisy and mistimed way more often than any textbook admits, and I find that genuinely fun to untangle.",
      p2: "Recent work has centered on predictive maintenance: pulling vibration, temperature, and pressure telemetry off rolling mills and compressors and turning it into failure warnings that reach a technician's phone before the equipment does, not after.",
      p3: "I still walk the floor for every project I take on, because the best feature in my model is usually something a technician mentioned in passing.",
      p4: "What actually drives me is that I genuinely enjoy this: data science, Power BI, anything IT touches. When something doesn't work, I want to solve it, and I'm just as happy finding an unconventional way in as following the obvious one. I'll take initiative on my own ideas once I've got buy-in, and I follow through until the result actually satisfies whoever asked for it. None of that happens in isolation though. The people on the floor or in the business hold the real information, and I see my job as turning that into something clear enough for everyone to act on, which means I'm always happier building something with people than for them. I read, test, and stay close to what's new, because standing still isn't really an option in this field.",
      funFact:
        '// true story: a mis-calibrated vibration sensor once had us chasing a "ghost fault" for two weeks. we found it. it was the sensor.',
      radarCaption: "skill signal strength",
    },
    experience: {
      sectionNum: "02",
      title: "Experience",
      refNote: "Reference available on request",
      entries: [
        {
          id: "01",
          period: "2026",
          role: "Data Scientist, Industrial Automation Project",
          org: "Industrial Production Client",
          desc: "Returned for a focused data science engagement on industrial system automation and machine optimization, separate from earlier Power BI support work, and delivered a project with strong, measurable results.",
        },
        {
          id: "02",
          period: "2025",
          role: "Power BI Analyst",
          org: "Public Sector Client",
          desc: "Built and supported Power BI reporting for a Swedish municipality, translating civic data into dashboards non-technical stakeholders could use directly.",
        },
        {
          id: "03",
          period: "2025",
          role: "Power BI Analyst",
          org: "Sports Club Client",
          desc: "Delivered Power BI reporting for a sports club, consolidating operational and performance data into dashboards the club's staff relied on day to day.",
        },
        {
          id: "04",
          period: "2024 to 2025",
          role: "Production and Power BI Support Practicant",
          org: "Industrial Production Client",
          desc: "Started on the production floor and supported the team's Power BI reporting alongside it, laying the foundation for the industrial automation project that followed in 2026.",
        },
      ],
    },
    projects: {
      sectionNum: "03",
      title: "Selected work",
      rows: [
        {
          id: "row-1",
          status: "2026 · Industrial Production Client",
          title: "Industrial Automation and Machine Optimization",
          desc: "A focused data science engagement on industrial system automation and machine optimization, separate from earlier Power BI support work, that delivered strong, measurable results on the production line.",
          tags: ["Industrial automation", "Process optimization", "Production data"],
        },
        {
          id: "row-2",
          status: "2025 · Public Sector Client",
          title: "Public Sector Operations Reporting",
          desc: "Power BI reporting built for a public sector client, turning civic data into dashboards non-technical stakeholders could open and actually use.",
          tags: ["Power BI", "DAX", "Public sector data"],
        },
        {
          id: "row-3",
          status: "2025 · Sports Club Client",
          title: "Club Operations Dashboard",
          desc: "Power BI reporting for a sports club, consolidating operational and performance data into dashboards the club's staff relied on day to day.",
          tags: ["Power BI", "Sports operations data"],
        },
      ],
      refNote: "Reference available on request",
      sideBadge: "Personal project, built in my free time",
      sideText:
        "A bread bakery line, simulated from start to finish. I wanted to see if the same thinking I use at work (stop time, bad batches, oven temperature) also works for a completely different process.",
      tortilla: {
        title: "Bread Line Monitor",
        statusRunning: "RUNNING",
        statusStopped: "STOPPED",
        lineStoppedLabel: "LINE STOPPED",
        packingHeader: "PACKING AND SHIPPING, ONE BATCH AT A TIME",
        batchLabels: ["6-Pack", "12-Pack", "6-Pack Whole Grain", "12-Pack Whole Grain"],
        desc: "Each disc on the belt is one loaf. It starts pale and turns golden in the oven. A few get flagged and pulled off before packing. The line bakes one size at a time: six packs, then twelve packs, then whole grain versions of both. It fills boxes, loads the truck, and stops now and then, just like a real bakery line. Every stop and reject gets counted.",
      },
      lpreaderBadge: "Internal tool, built to save real time",
      lpreaderIntro:
        "A desktop tool that reads PDF invoices, lets you tag VAT and accounting codes in bulk, and exports straight to Excel.",
      lpreader: {
        title: "LPReader",
        fileLabel: "lpreader.exe",
        reports: [
          {
            id: "overview",
            label: "Overview",
            file: "/LPReader/LPR1.png",
            alt: "LPReader before any invoices are loaded",
            caption: "A small desktop tool that reads PDF invoices and turns them into a clean, editable table.",
          },
          {
            id: "reading",
            label: "Reading Invoices",
            file: "/LPReader/LPR2.png",
            alt: "LPReader reading a multi page PDF invoice",
            caption: "Drop in one or more PDFs and it reads every page, checking each page's total as it goes.",
          },
          {
            id: "table",
            label: "Extracted Lines",
            file: "/LPReader/LPR3.png",
            alt: "Table of extracted invoice lines with dates and amounts",
            caption: "Every line lands in a table with dates, amounts, and which PDF page it came from.",
          },
          {
            id: "vat",
            label: "Bulk VAT",
            file: "/LPReader/LPR4.png",
            alt: "Selecting rows and applying a VAT rate to all of them at once",
            caption: "Select a batch of rows and set the VAT rate on all of them in one click.",
          },
          {
            id: "coding",
            label: "Bulk Coding",
            file: "/LPReader/LPR5.png",
            alt: "Applying an accounting code to selected rows",
            caption: "Same for accounting codes: tag many rows at once, then export straight to Excel or CSV.",
          },
        ],
      },
    },
    powerbi: {
      sectionNum: "04",
      title: "Power BI reports",
      intro:
        "Two reports, two different worlds: a synthetic matchday reporting suite built for this portfolio, and a real internal billing analytics dashboard built for Leadpoint, shown here with client and consultant names redacted.",
      sports: {
        title: "LeadPoint Sports Intelligence",
        fileLabel: "leadpoint_sports_intelligence.pbix",
        reports: [
          {
            id: "overview",
            label: "Overview",
            file: "/powerbi/overview.png",
            alt: "Power BI report: club wide revenue overview across tickets, food, and merchandise",
            caption:
              "The landing view. Total revenue, tickets, and food and merchandise sales at a glance, with revenue trended by month and broken out by payment source.",
          },
          {
            id: "tickets",
            label: "Tickets",
            file: "/powerbi/tickets.png",
            alt: "Power BI report: ticket sales by month, day, and match",
            caption:
              "Ticket sales broken down by month and by day, plus tickets per match. Paid, sponsored, and free tickets are tracked separately throughout the report.",
          },
          {
            id: "tickets-economy",
            label: "Ticket Revenue",
            file: "/powerbi/tickets-economy.png",
            alt: "Power BI report: ticket revenue by payment source and ticket type",
            caption:
              "Revenue by payment source and ticket type, with target tracking against budget for both ticket and shop revenue.",
          },
          {
            id: "food-drink",
            label: "Food and Drink Revenue",
            file: "/powerbi/food-drink.png",
            alt: "Power BI report: food and drink sales by product and month",
            caption:
              "Food and drink sales by product, with a monthly breakdown and a drill down product hierarchy for finding individual items fast.",
          },
          {
            id: "merchandise",
            label: "Merchandise Revenue",
            file: "/powerbi/merchandise.png",
            alt: "Power BI report: merchandise sales by product and month",
            caption: "The same breakdown for jerseys, caps, and other merchandise: which products actually sell, month by month.",
          },
          {
            id: "matches",
            label: "Matches",
            file: "/powerbi/matches.png",
            alt: "Power BI report: matches, competitions, and totals filtered per match",
            caption:
              "Match and competition filters wired into every revenue source at once. Pick a match from the list and the shop, ticket, and item charts update instantly.",
          },
        ],
      },
      billing: {
        title: "LeadPoint Billing Analytics",
        fileLabel: "leadpoint_billing_analytics.pbix",
        reports: [
          {
            id: "overview",
            label: "Overview",
            file: "/powerbi2/overview.png",
            alt: "Power BI report: company billing overview with revenue, billing rate, and hours",
            caption:
              "Company wide billing overview: revenue, average billing rate, and hours, filterable by year, month, and consultant, sourced directly from Fortnox.",
          },
          {
            id: "clients",
            label: "Clients and Brokers",
            file: "/powerbi2/clients.png",
            alt: "Power BI report: billing cost by broker, end client, and engagement type",
            caption:
              "Billing cost broken down by broker, end client, and engagement type, alongside the same monthly revenue trend filtered per client.",
          },
          {
            id: "budget-2025",
            label: "Budget vs Actual 2025",
            file: "/powerbi2/budget-2025.png",
            alt: "Power BI report: budget vs actual result and revenue for 2025",
            caption: "Budget against actual result and revenue for 2025, shown both month by month and accumulated across the year.",
          },
          {
            id: "yoy",
            label: "Year over Year",
            file: "/powerbi2/yoy-comparison.png",
            alt: "Power BI report: this year vs last year revenue comparison by client",
            caption:
              "This year against the same period last year: revenue trend lines side by side, plus billing hours and cost broken down by client.",
          },
          {
            id: "drillthrough-consultant",
            label: "Consultant Drill Through",
            file: "/powerbi2/drillthrough-consultant.png",
            alt: "Power BI report: drill through detail view for a single consultant",
            caption:
              "A drill through page for a single consultant: revenue and billing rate trend over time, their largest end clients, and a full line item detail table.",
          },
          {
            id: "drillthrough-broker",
            label: "Broker Drill Through",
            file: "/powerbi2/drillthrough-broker.png",
            alt: "Power BI report: drill through detail view for a single broker",
            caption:
              "The same drill through, scoped to a single broker: revenue trend, billing rate, largest end clients, and complete line item detail.",
          },
        ],
      },
    },
    cta: {
      heading: "Hiring for a plant floor that needs better signal?",
      body: "I'm actively looking for my next role, ideally somewhere with real machines, real sensors, and a team that wants to trust its data.",
      button: "Say hello",
    },
    footer: {
      headingPre: "Let's put a ",
      headingGrad: "model",
      headingPost: " on your plant floor.",
      footNote: "// portfolio.tsx, last compiled 2026",
    },
  };
export type SiteContent = typeof en;

const sv = {
  nav: {
      badge: "Öppen för nya möjligheter",
      about: "Om mig",
      experience: "Erfarenhet",
      projects: "Projekt",
      contact: "Kontakt",
      toggleMenu: "Öppna meny",
      langToggle: "English",
    },
    hero: {
      prompt: "now streaming: plant_sensor_network.live",
      headlinePre: "Jag förvandlar kaos på fabriksgolvet till ",
      headlineGrad: "signal",
      headlinePost: ", och jag älskar det uppriktigt.",
      sub: "Hej, jag heter Ali. Jag är data scientist och trivs bäst ute på ett riktigt fabriksgolv, med hörlurarna på, och gräver gärna i varför en sensor gav utslag klockan tre på natten. Jag bygger modeller och dashboards som underhållstekniker faktiskt vill öppna, inte sådana som byggs en gång och sedan glöms bort.",
      instruments: [
        { target: 47, suffix: "", label: "Power BI-rapporter byggda åt kunder, interna verktyg och personliga projekt" },
        { target: 40, suffix: "+", label: "mjukvarubyggen levererade, flera i drift för fabriksautomation idag" },
      ],
    },
    about: {
      sectionNum: "01",
      title: "Om mig",
      p1: "Min bakgrund är finans som blev tillverkningsindustri, så jag bryr mig lika mycket om huruvida en sensoravläsning går att lita på som om modellen ovanpå den är smart. Anläggningsdata är brusig och feltajmad betydligt oftare än någon lärobok erkänner, och jag tycker det är genuint roligt att reda ut.",
      p2: "Det senaste arbetet har handlat om prediktivt underhåll: att hämta vibrations-, temperatur- och tryckdata från valsverk och kompressorer och omvandla den till varningar som når en teknikers telefon innan utrustningen stannar, inte efteråt.",
      p3: "Jag går fortfarande ut på golvet för varje projekt jag tar mig an, för den bästa variabeln i min modell är oftast något en tekniker nämnde i förbifarten.",
      p4: "Det som verkligen driver mig är att jag genuint gillar det här: data science, Power BI, allt som rör IT. När något inte fungerar vill jag lösa det, och jag är lika nöjd med att hitta en okonventionell väg dit som att följa den uppenbara. Jag tar gärna initiativ till egna idéer så fort jag fått klartecken, och jag ser till att driva det hela i mål tills resultatet faktiskt tillfredsställer den som bad om det. Inget av det sker isolerat däremot. Personerna ute på golvet eller i verksamheten sitter på den verkliga kunskapen, och jag ser min roll som att göra den tydlig nog för alla att agera på, vilket gör att jag alltid hellre bygger något tillsammans med folk än åt dem. Jag läser på, testar och håller mig nära det som är nytt, för att stå still egentligen inte är ett alternativ i det här fältet.",
      funFact:
        '// sann historia: en felkalibrerad vibrationssensor fick oss att jaga ett "spökfel" i två veckor. vi hittade det. det var sensorn.',
      radarCaption: "kompetensstyrka",
    },
    experience: {
      sectionNum: "02",
      title: "Erfarenhet",
      refNote: "Referens finns på begäran",
      entries: [
        {
          id: "01",
          period: "2026",
          role: "Data Scientist, industriellt automationsprojekt",
          org: "Kund inom industriell produktion",
          desc: "Återvände för ett fokuserat dataanalysuppdrag inom industriell systemautomation och maskinoptimering, separat från det tidigare Power BI-stödet, och levererade ett projekt med starka, mätbara resultat.",
        },
        {
          id: "02",
          period: "2025",
          role: "Power BI-analytiker",
          org: "Kund inom offentlig sektor",
          desc: "Byggde och underhöll Power BI-rapportering för en svensk kommun, och omvandlade kommunal data till dashboards som icke-tekniska intressenter kunde använda direkt.",
        },
        {
          id: "03",
          period: "2025",
          role: "Power BI-analytiker",
          org: "Kund inom idrottsklubb",
          desc: "Levererade Power BI-rapportering för en idrottsklubb, och samlade drift- och prestationsdata i dashboards som klubbens personal förlitade sig på varje dag.",
        },
        {
          id: "04",
          period: "2024 till 2025",
          role: "Praktikant, produktion och Power BI-stöd",
          org: "Kund inom industriell produktion",
          desc: "Började på produktionsgolvet och stöttade teamets Power BI-rapportering parallellt, vilket lade grunden för det industriella automationsprojektet som följde 2026.",
        },
      ],
    },
    projects: {
      sectionNum: "03",
      title: "Utvalda projekt",
      rows: [
        {
          id: "row-1",
          status: "2026 · Kund inom industriell produktion",
          title: "Industriell automation och maskinoptimering",
          desc: "Ett fokuserat dataanalysuppdrag inom industriell systemautomation och maskinoptimering, separat från det tidigare Power BI-stödet, som gav starka och mätbara resultat på produktionslinjen.",
          tags: ["Industriell automation", "Processoptimering", "Produktionsdata"],
        },
        {
          id: "row-2",
          status: "2025 · Kund inom offentlig sektor",
          title: "Rapportering för offentlig verksamhet",
          desc: "Power BI-rapportering byggd för en kund inom offentlig sektor, som omvandlade kommunal data till dashboards som icke-tekniska intressenter faktiskt kunde använda.",
          tags: ["Power BI", "DAX", "Offentlig sektor data"],
        },
        {
          id: "row-3",
          status: "2025 · Kund inom idrottsklubb",
          title: "Driftdashboard för klubbverksamhet",
          desc: "Power BI-rapportering för en idrottsklubb, som samlade drift- och prestationsdata i dashboards som klubbens personal kunde förlita sig på varje dag.",
          tags: ["Power BI", "Idrottsverksamhetsdata"],
        },
      ],
      refNote: "Referens finns på begäran",
      sideBadge: "Personligt projekt, byggt på fritiden",
      sideText:
        "En bagerilinje för bröd, simulerad från start till slut. Jag ville se om samma tänk som jag använder i jobbet (stopptid, dåliga bröd, ugnstemperatur) också funkar för en helt annan process.",
      tortilla: {
        title: "Övervakning av brödlinje",
        statusRunning: "IGÅNG",
        statusStopped: "STOPPAD",
        lineStoppedLabel: "LINJEN STOPPAD",
        packingHeader: "PACKNING OCH LEVERANS, ETT BATCH I TAGET",
        batchLabels: ["6-pack", "12-pack", "6-pack Fullkorn", "12-pack Fullkorn"],
        desc: "Varje skiva på bandet är ett bröd. Det börjar blekt och blir gyllenbrunt i ugnen. Några få bröd blir dåliga och plockas bort innan packning. Linjen bakar en storlek i taget: sex-pack, sedan tolv-pack, och sedan fullkornsvarianter av båda. Den fyller kartonger, lastar lastbilen, och stannar ibland, precis som ett riktigt bageri. Varje stopp och kasserat bröd räknas.",
      },
      lpreaderBadge: "Internverktyg, byggt för att spara riktig tid",
      lpreaderIntro:
        "Ett skrivbordsverktyg som läser PDF-fakturor, låter dig sätta moms och kontering på flera rader samtidigt, och exporterar direkt till Excel.",
      lpreader: {
        title: "LPReader",
        fileLabel: "lpreader.exe",
        reports: [
          {
            id: "overview",
            label: "Översikt",
            file: "/LPReader/LPR1.png",
            alt: "LPReader innan några fakturor lästs in",
            caption: "Ett litet skrivbordsverktyg som läser PDF-fakturor och gör om dem till en ren, redigerbar tabell.",
          },
          {
            id: "reading",
            label: "Läser fakturor",
            file: "/LPReader/LPR2.png",
            alt: "LPReader läser en flersidig PDF-faktura",
            caption: "Släpp in en eller flera PDF:er så läser den varje sida och stämmer av totalsumman.",
          },
          {
            id: "table",
            label: "Extraherade rader",
            file: "/LPReader/LPR3.png",
            alt: "Tabell med extraherade fakturarader, datum och belopp",
            caption: "Varje rad hamnar i en tabell med datum, belopp och vilken PDF-sida den kom från.",
          },
          {
            id: "vat",
            label: "Moms i klump",
            file: "/LPReader/LPR4.png",
            alt: "Markera rader och sätta momssats på alla samtidigt",
            caption: "Markera flera rader och sätt momssatsen på alla samtidigt.",
          },
          {
            id: "coding",
            label: "Kontering i klump",
            file: "/LPReader/LPR5.png",
            alt: "Sätta kontering på markerade rader",
            caption: "Samma sak för kontering: tagga många rader på en gång, exportera sen direkt till Excel eller CSV.",
          },
        ],
      },
    },
    powerbi: {
      sectionNum: "04",
      title: "Power BI-rapporter",
      intro:
        "Två rapporter, två olika världar: en syntetisk matchdagsrapport byggd för den här portfolion, och en riktig intern faktureringsanalys byggd för Leadpoint, visad här med kund- och konsultnamn dolda.",
      sports: {
        title: "LeadPoint Sports Intelligence",
        fileLabel: "leadpoint_sports_intelligence.pbix",
        reports: [
          {
            id: "overview",
            label: "Översikt",
            file: "/powerbi/overview.png",
            alt: "Power BI-rapport: klubbens omsättning över biljetter, mat och merchandise",
            caption:
              "Startvyn. Total omsättning, biljetter och försäljning av mat och merchandise i ett ögonkast, med omsättning per månad och uppdelat på betalningskälla.",
          },
          {
            id: "tickets",
            label: "Biljetter",
            file: "/powerbi/tickets.png",
            alt: "Power BI-rapport: biljettförsäljning per månad, dag och match",
            caption:
              "Biljettförsäljning uppdelad per månad och dag, plus antal biljetter per match. Betalda, sponsrade och fribiljetter hålls isär genom hela rapporten.",
          },
          {
            id: "tickets-economy",
            label: "Biljettintäkter",
            file: "/powerbi/tickets-economy.png",
            alt: "Power BI-rapport: biljettintäkter per betalningskälla och biljettyp",
            caption: "Intäkter per betalningskälla och biljettyp, med målspårning mot budget för både biljett- och shopintäkter.",
          },
          {
            id: "food-drink",
            label: "Mat och dryck",
            file: "/powerbi/food-drink.png",
            alt: "Power BI-rapport: försäljning av mat och dryck per produkt och månad",
            caption:
              "Försäljning av mat och dryck per produkt, med månadsfördelning och en genomsökningsbar produkthierarki för att snabbt hitta enskilda varor.",
          },
          {
            id: "merchandise",
            label: "Merchandise",
            file: "/powerbi/merchandise.png",
            alt: "Power BI-rapport: försäljning av merchandise per produkt och månad",
            caption: "Samma uppdelning för matchtröjor, kepsar och annan merchandise: vilka produkter som faktiskt säljer, månad för månad.",
          },
          {
            id: "matches",
            label: "Matcher",
            file: "/powerbi/matches.png",
            alt: "Power BI-rapport: matcher, tävlingar och totalsummor filtrerade per match",
            caption:
              "Match- och tävlingsfilter kopplade till alla intäktskällor samtidigt. Välj en match i listan så uppdateras shop-, biljett- och artikeldiagrammen direkt.",
          },
        ],
      },
      billing: {
        title: "LeadPoint Billing Analytics",
        fileLabel: "leadpoint_billing_analytics.pbix",
        reports: [
          {
            id: "overview",
            label: "Översikt",
            file: "/powerbi2/overview.png",
            alt: "Power BI-rapport: företagets faktureringsöversikt med omsättning, debiteringsgrad och timmar",
            caption:
              "Företagsövergripande faktureringsöversikt: omsättning, genomsnittlig debiteringsgrad och timmar, filtrerbart på år, månad och konsult, hämtat direkt från Fortnox.",
          },
          {
            id: "clients",
            label: "Kunder och mäklare",
            file: "/powerbi2/clients.png",
            alt: "Power BI-rapport: debiteringskostnad per mäklare, slutkund och uppdragstyp",
            caption:
              "Debiteringskostnad uppdelad per mäklare, slutkund och uppdragstyp, tillsammans med samma månatliga omsättningstrend filtrerad per kund.",
          },
          {
            id: "budget-2025",
            label: "Budget mot utfall 2025",
            file: "/powerbi2/budget-2025.png",
            alt: "Power BI-rapport: budget mot faktiskt resultat och omsättning för 2025",
            caption: "Budget mot faktiskt resultat och omsättning för 2025, visat både månad för månad och ackumulerat över året.",
          },
          {
            id: "yoy",
            label: "År över år",
            file: "/powerbi2/yoy-comparison.png",
            alt: "Power BI-rapport: innevarande år mot föregående år, omsättning per kund",
            caption:
              "Innevarande år mot samma period föregående år: omsättningstrender sida vid sida, plus debiteringstimmar och kostnad uppdelat per kund.",
          },
          {
            id: "drillthrough-consultant",
            label: "Konsult, detaljvy",
            file: "/powerbi2/drillthrough-consultant.png",
            alt: "Power BI-rapport: detaljvy för en enskild konsult",
            caption:
              "En detaljvy för en enskild konsult: omsättnings- och debiteringsgradstrend över tid, deras största slutkunder och en fullständig radnivådetaljtabell.",
          },
          {
            id: "drillthrough-broker",
            label: "Mäklare, detaljvy",
            file: "/powerbi2/drillthrough-broker.png",
            alt: "Power BI-rapport: detaljvy för en enskild mäklare",
            caption:
              "Samma detaljvy, avgränsad till en enskild mäklare: omsättningstrend, debiteringsgrad, största slutkunder och komplett radnivådetalj.",
          },
        ],
      },
    },
    cta: {
      heading: "Söker du någon för ett fabriksgolv som behöver bättre signal?",
      body: "Jag söker aktivt min nästa roll, helst någonstans med riktiga maskiner, riktiga sensorer och ett team som vill kunna lita på sin data.",
      button: "Säg hej",
    },
    footer: {
      headingPre: "Låt oss sätta en ",
      headingGrad: "modell",
      headingPost: " på ditt fabriksgolv.",
      footNote: "// portfolio.tsx, senast kompilerad 2026",
    },
  } satisfies SiteContent;

export const content = { en, sv } as const;
