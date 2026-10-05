import Script from "next/script";
import { business, GHL_FORM_EMBED_URL, GHL_FORM_HEIGHT } from "@/site.config";
import { isRealUrl, mailHref, telHref } from "@/lib/utils";

/* Option A: your GoHighLevel form, embedded the same way GHL's own embed code does it. */
export function GhlFormEmbed() {
  if (!isRealUrl(GHL_FORM_EMBED_URL)) return <NotConnected />;

  const formId = GHL_FORM_EMBED_URL.split("?")[0].split("/").filter(Boolean).pop() ?? "form";
  const frameId = `inline-${formId}`;

  return (
    <>
      <iframe
        src={GHL_FORM_EMBED_URL}
        id={frameId}
        title="Get started form"
        loading="lazy"
        className="block w-full rounded-2xl border-0 bg-transparent"
        style={{ height: GHL_FORM_HEIGHT }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Get started"
        data-height={GHL_FORM_HEIGHT}
        data-layout-iframe-id={frameId}
        data-form-id={formId}
      />
      {/* GHL's helper script resizes the form to fit its content. */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}

/* Shown until GHL_FORM_EMBED_URL is filled in. Visitors see a simple call/email card. */
function NotConnected() {
  return (
    <div className="rounded-2xl bg-ink-900 p-6 text-center sm:p-10">
      {process.env.NODE_ENV === "development" && (
        <p className="mb-6 rounded-lg border border-dashed border-accent-500/50 bg-accent-500/10 p-3 text-sm text-accent-300">
          Dev note: add your GoHighLevel form link to <code>GHL_FORM_EMBED_URL</code> in site.config.ts.
          This note only shows on your computer.
        </p>
      )}
      <p className="text-xl font-bold text-fg">The quickest way to get started:</p>
      <p className="mt-3 text-lg text-body">
        Email{" "}
        <a
          href={mailHref(business.email)}
          className="font-semibold break-words text-accent-400 underline-offset-4 hover:underline"
        >
          {business.email}
        </a>
        <br />
        or call/text{" "}
        <a href={telHref(business.demoPhone)} className="font-semibold text-accent-400 underline-offset-4 hover:underline">
          {business.demoPhone}
        </a>
      </p>
    </div>
  );
}
