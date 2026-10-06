import { AudioLines } from "lucide-react";
import { business } from "@/site.config";

/* Text logo: a small icon mark + the business name. A trailing " AI", if any, gets the accent color. */
export function Logo() {
  const match = business.name.match(/^(.*?)(\s+AI)$/);

  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="hidden size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-accent-700 text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.8)] min-[400px]:flex">
        <AudioLines aria-hidden className="size-[18px]" strokeWidth={2.5} />
      </span>
      <span className="text-[17px] leading-tight font-bold tracking-tight text-fg sm:text-lg">
        {match ? (
          <>
            {match[1]}
            <span className="text-accent-400">{match[2]}</span>
          </>
        ) : (
          business.name
        )}
      </span>
    </span>
  );
}
