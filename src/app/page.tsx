"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  // TODO: use zustand with persistent storage?
  const [locale, setLocale] = useState<"en" | "tr" | "de">("en");

  const daysUntil9thNovember2023 = Math.ceil(
    (new Date("2023-11-09T00:00:00.000Z").getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
  );

  const daysUntil9thDecember2023 = Math.ceil(
    (new Date("2023-12-09T00:00:00.000Z").getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <main
      className="flex flex-col justify-center items-center h-[100vh] text-white"
      style={{
        background:
          "linear-gradient(45deg, rgba(66,0,0,1) 0%, rgba(18,0,38,1) 57%, rgba(89,0,157,1) 100%)",
      }}
    >
      <div className="flex gap-3">
        <Button
          variant={locale === "en" ? "secondary" : "default"}
          onClick={() => setLocale("en")}
        >
          EN 🌎{" "}
        </Button>

        <Button
          variant={locale === "tr" ? "secondary" : "default"}
          onClick={() => setLocale("tr")}
        >
          TR 🇹🇷
        </Button>

        <Button
          variant={locale === "de" ? "secondary" : "default"}
          onClick={() => setLocale("de")}
        >
          DE 🇩🇪{" "}
        </Button>
      </div>

      <div className="text-center font-bold mt-12">
        <h1 className="text-7xl">
          {locale === "en" && "When am I going to my Military Service?"}
          {locale === "tr" && "Askeriyeye ne zaman gidiyorum?"}
          {locale === "de" && "Wann gehe ich zum Militärdienst?"}
        </h1>

        <h2 className="text-5xl mt-12 rainbow-text">
          {locale === "en" &&
            `9th November 2023 (${daysUntil9thNovember2023} days)`}
          {locale === "tr" && `9. Kasım 2023 (${daysUntil9thNovember2023} gün)`}
          {locale === "de" && `9. November 2023 (${daysUntil9thNovember2023} Tage)`}
        </h2>
      </div>

      <div className="text-center font-bold mt-24">
        <h1 className="text-7xl">
          {locale === "en" && "When am I coming back?"}
          {locale === "tr" && "Ne zaman geri geliyorum?"}
          {locale === "de" && "Wann komme ich zurück?"}
        </h1>

        <h2 className="text-5xl mt-12 rainbow-text">
          {locale === "en" && `9th December 2023 (${daysUntil9thDecember2023} days)`}
          {locale === "tr" && `9. Aralık 2023 (${daysUntil9thDecember2023} gün)`}
          {locale === "de" && `9. Dezember 2023 (${daysUntil9thDecember2023} Tage)`}
        </h2>
      </div>
    </main>
  );
}
