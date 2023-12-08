"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  trackGithubClicked,
  trackLocaleChanged,
  trackShareEvent,
} from "@/lib/analytics/events";
import { Locale, useLocaleStore } from "@/lib/locale";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { locale, setLocale } = useLocaleStore();
  const { toast } = useToast();

  const onShareClicked = () => {
    copySitelinkToClipboard();
    trackShareEvent();
  };

  const copySitelinkToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = "ne-zaman-askeriyeye-gidiyorsun.aziznal.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    if (locale === "en")
      toast({
        title: "Site address copied to clipboard!",
        variant: "success",
      });

    if (locale === "tr")
      toast({
        title: "Site adresi panoya kopyalandı!",
        variant: "success",
      });

    if (locale === "de")
      toast({
        title: "Website-Adresse in die Zwischenablage kopiert!",
        variant: "success",
      });
  };

  const onChangeLocaleClicked = (newLocale: Locale) => {
    setLocale(newLocale);

    trackLocaleChanged({
      from: locale,
      to: newLocale,
    });
  };

  const weekday9thNovember = new Date(
    "2023-11-09T00:00:00.000Z"
  ).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "tr" ? "tr-TR" : "de-DE",
    {
      weekday: "long",
    }
  );

  const daysUntil11thDecember2023Raw = Math.ceil(
    (new Date("2023-12-11T00:00:00.000Z").getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
  );

  const daysUntil11thDecember2023 =
    daysUntil11thDecember2023Raw < 0 ? 0 : daysUntil11thDecember2023Raw;

  const weekday11thDecember = new Date(
    "2023-12-11T00:00:00.000Z"
  ).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "tr" ? "tr-TR" : "de-DE",
    {
      weekday: "long",
    }
  );

  return (
    <main
      className="flex flex-col justify-center items-center min-h-[100vh] text-white py-24 px-12"
      style={{
        background:
          "linear-gradient(45deg, rgba(66,0,0,1) 0%, rgba(18,0,38,1) 57%, rgba(89,0,157,1) 100%)",
      }}
    >
      <div className="flex gap-3">
        <Button
          variant={locale === "en" ? "secondary" : "default"}
          onClick={() => onChangeLocaleClicked(Locale.EN)}
        >
          EN 🌎{" "}
        </Button>

        <Button
          variant={locale === "tr" ? "secondary" : "default"}
          onClick={() => onChangeLocaleClicked(Locale.TR)}
        >
          TR 🇹🇷
        </Button>

        <Button
          variant={locale === "de" ? "secondary" : "default"}
          onClick={() => onChangeLocaleClicked(Locale.DE)}
        >
          DE 🇩🇪{" "}
        </Button>
      </div>

      <div className="text-center font-bold mt-12">
        <h1 className="text-4xl lg:text-7xl">
          {locale === "en" && "When am I going to my Military Service?"}
          {locale === "tr" && "Askeriyeye ne zaman gidiyorum?"}
          {locale === "de" && "Wann gehe ich zum Militärdienst?"}
        </h1>

        <h2 className="text-5xl mt-12 rainbow-text">
          {locale === "en" && (
            <>
              {weekday9thNovember} - 9th November 2023 <br /> (I&apos;m
              already there)
            </>
          )}

          {locale === "tr" && (
            <>
              {weekday9thNovember} - 9. Kasım 2023 <br />
              (Oradayım)
            </>
          )}
          {locale === "de" && (
            <>
              {weekday9thNovember} - 9. November 2023 <br /> (Ich bin schon da){" "}
            </>
          )}
        </h2>
      </div>

      <div className="text-center font-bold mt-24">
        <h1 className="text-4xl lg:text-7xl">
          {locale === "en" && "When am I coming back?"}
          {locale === "tr" && "Ne zaman geri geliyorum?"}
          {locale === "de" && "Wann komme ich zurück?"}
        </h1>

        <h2 className="text-5xl mt-12 rainbow-text">
          {locale === "en" && (
            <>
              {weekday11thDecember} - 11th December 2023 <br />(
              {daysUntil11thDecember2023} days)
            </>
          )}
          {locale === "tr" && (
            <>
              {weekday11thDecember} - 11. Aralık 2023 <br />(
              {daysUntil11thDecember2023} gün)
            </>
          )}
          {locale === "de" && (
            <>
              {weekday11thDecember} - 11. Dezember 2023 <br />(
              {daysUntil11thDecember2023} Tage)
            </>
          )}
        </h2>
      </div>

      <div
        className="mt-24 font-bold cursor-pointer active:text-blue-700 hover:text-blue-700 transition-all"
        onClick={onShareClicked}
      >
        {locale === "en" && <>Share the good news 🎉 </>}
        {locale === "tr" && <>İyi haberi paylaş 🎉 </>}
        {locale === "de" && <>Gute Nachrichten teilen 🎉 </>}
      </div>

      <Link
        className="mt-12 flex gap-2 items-center hover:text-blue-700 transition-all"
        href="https://github.com/aziznal/ne-zaman-askeriyeye-gidiyorsun"
        target="_blank"
        onClick={() => trackGithubClicked()}
      >
        <GithubIcon size={24} />
        <span className="text-sm font-bold">@aziznal</span>
      </Link>
    </main>
  );
}
