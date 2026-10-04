/* =============================================================================
   SITE CONFIG: all of the site's text, prices, and on/off switches live here.

   • Change any text between the quotes, then save.
   • Placeholders look like [THIS]. Search this file for "[" to find any left.
   • Icons come from https://lucide.dev/icons. To swap one, import it below.
   ============================================================================= */

import {
  AudioLines,
  BellRing,
  CalendarCheck,
  ClipboardList,
  MapPin,
  Moon,
  PhoneIncoming,
  Siren,
  Voicemail,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* -----------------------------------------------------------------------------
   SWITCHES
   -------------------------------------------------------------------------- */

/** Show the Testimonials section. Flip to true once you add at least one below. */
export const SHOW_TESTIMONIALS = false;

/**
 * Show the "Call the Demo" buttons and the big demo section.
 * Turn on once your GoHighLevel AI number is live and set as business.demoPhone.
 * While off, those buttons say "Book a Consultation" instead.
 */
export const SHOW_DEMO = false;

/**
 * Which consultation form the site shows:
 *   "custom-form" → the built-in form. Each request is emailed to you (via Web3Forms),
 *                   and also sent to GoHighLevel if GHL_WEBHOOK_URL is filled in.
 *   "ghl-embed"   → your GoHighLevel form instead (uses GHL_FORM_EMBED_URL).
 */
export const CONTACT_FORM_MODE: "ghl-embed" | "custom-form" = "custom-form";

/**
 * Web3Forms access key. Get one free at https://web3forms.com (enter your email and
 * they email you the key). Requests are sent to the email you signed up with.
 */
export const WEB3FORMS_ACCESS_KEY = "1c59ed53-8288-4468-8397-55274c7da2e1";

/** GoHighLevel form URL. In GHL: Sites → Forms → Integrate → copy the iframe "src" link. */
export const GHL_FORM_EMBED_URL = "[GHL FORM EMBED URL]";

/** Height of the embedded GHL form in pixels. Raise it if the form looks cut off. */
export const GHL_FORM_HEIGHT = 640;

/** Optional. GoHighLevel inbound webhook URL (Automation → Workflows → trigger: Inbound Webhook). */
export const GHL_WEBHOOK_URL = "[GHL INBOUND WEBHOOK URL]";

/* -----------------------------------------------------------------------------
   BUSINESS INFO
   -------------------------------------------------------------------------- */

export const business = {
  name: "VoicePilot AI",
  owner: "Prahaladh",
  /** Your GoHighLevel number the AI answers. Used by the demo buttons (see SHOW_DEMO). */
  demoPhone: "[GHL DEMO NUMBER]",
  /** How people reach you directly. Write it how you want it shown. Tap-to-call links are built from it. */
  phone: "(425) 786-6510",
  phoneHours: "Weekdays after 4 PM, anytime on weekends",
  email: "prahaladh@voicepilotwa.com",
  emailHours: "Best during the day. I reply same day.",
  city: "Bellevue",
  state: "WA",
  homeBase: "Bellevue & Renton",
  serviceAreas: ["Bellevue", "Renton", "Kirkland", "Redmond", "Kent", "Issaquah"],
  serviceRegion: "the Eastside and South King County",
  tagline: "AI receptionist and missed-call text-back for HVAC and plumbing companies.",
};

/* -----------------------------------------------------------------------------
   SEO (what Google and link previews show)
   Your domain goes in public/CNAME. Everything else is read from there.
   -------------------------------------------------------------------------- */

export const seo = {
  title: `AI Receptionist for HVAC & Plumbing Companies | ${business.name}`,
  description:
    "Stop losing jobs to missed calls. An AI receptionist for HVAC and plumbing companies in Bellevue, Renton, and the Eastside. Answers calls, texts back, and gets jobs on your schedule.",
};

/* -----------------------------------------------------------------------------
   HEADER
   -------------------------------------------------------------------------- */

export const header = {
  demoLabel: "Call the Demo",
  consultLabel: "Book a Consultation",
  consultLabelShort: "Book a Call", // shown on phones, where space is tight
  // "href" must match a section id on the page. Don't change those.
  nav: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

/* -----------------------------------------------------------------------------
   1. HERO
   -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "For Eastside HVAC & plumbing companies",
  headline: "Stop losing jobs to missed calls.",
  /** Part of the headline shown in the accent color. */
  headlineHighlight: "missed calls.",
  subhead:
    "An AI receptionist for HVAC and plumbing companies. Answers every call, texts back every missed one, and gets the job on your schedule.",
  // With SHOW_DEMO on: "Call Our Demo Line" + "Book a Consultation".
  // With it off: "Book a Consultation" + "See Pricing".
  demoCta: "Call Our Demo Line",
  consultCta: "Book a Consultation",
  pricingCta: "See Pricing",
  trustPoints: ["Local to Bellevue & Renton", "No contracts", "Set up in days"],

  /** The sample job summary shown next to the headline. */
  exampleCard: {
    callLabel: "Incoming call",
    callSub: "Answered after hours",
    label: "New job booked",
    time: "7:42 PM",
    rows: [
      { label: "Customer", value: "Dana K." },
      { label: "Problem", value: "Water heater leaking" },
      { label: "Location", value: "Renton" },
      { label: "Booked", value: "Tomorrow morning" },
    ],
    alert: "Marked urgent. Sent to your phone.",
    chip: "Missed callers get a text instantly",
    caption: "Example of the text you get after a call.",
  },
};

/* -----------------------------------------------------------------------------
   2. THE PROBLEM
   -------------------------------------------------------------------------- */

export const problem = {
  eyebrow: "The problem",
  headline: "You're under a sink, on a roof, or driving.",
  body: "The caller doesn't leave a voicemail. They call the next company.",
  cards: [
    {
      icon: Voicemail,
      title: "Most callers won't leave a voicemail",
      text: "They hang up and try the next number on Google.",
    },
    {
      icon: Siren,
      title: "Emergencies go to whoever answers first",
      text: "A burst pipe or a dead furnace won't wait for a callback.",
    },
    {
      icon: Moon,
      title: "After-hours calls are often the biggest jobs",
      text: "Things break at night and on weekends. That's when people pay to get it fixed.",
    },
  ] satisfies IconCard[],
};

/* -----------------------------------------------------------------------------
   3. HOW IT WORKS
   -------------------------------------------------------------------------- */

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Every call gets handled. You just show up to the job.",
  intro: "Here's what one evening looks like.",
  steps: [
    {
      time: "7:41 PM",
      icon: PhoneIncoming,
      title: "Dana in Renton calls. You're on a job in Kent.",
      text: "Her water heater is leaking. You can't pick up.",
    },
    {
      time: "7:41 PM",
      icon: AudioLines,
      title: "VoicePilot answers in your company's name.",
      text: "It gets her address and the problem, then books her for tomorrow morning. Hang-ups get a text instantly.",
    },
    {
      time: "7:43 PM",
      icon: BellRing,
      title: "You get a text with the job, marked urgent.",
      text: "Everything you need before you're back in the truck.",
    },
    {
      time: "8:00 AM",
      icon: CalendarCheck,
      title: "You show up and do the job.",
      text: "It didn't go to the next company on Google.",
    },
  ] satisfies (IconCard & { time: string })[],
};

/* -----------------------------------------------------------------------------
   4. DEMO CALLOUT
   -------------------------------------------------------------------------- */

export const demo = {
  eyebrow: "Hear it live",
  headline: "Don't take my word for it. Call it yourself.",
  body: "Hear exactly what your customers would hear.",
  buttonLabel: "Call the Demo Line",
  tip: "Try saying: “My AC stopped working. Can someone come out today?”",
};

/* -----------------------------------------------------------------------------
   5. PRICING
   "style" controls the card look: "light", "featured" (accent color), or "dark".
   Put the "featured" plan anywhere; on phones it always shows first.
   -------------------------------------------------------------------------- */

export const pricing = {
  eyebrow: "Pricing",
  headline: "One-time setup. Then a simple monthly plan.",
  intro: "One recovered job usually pays for the month.",
  /** Highlighted line under the pricing heading. */
  trial: "Try it free for 14 days. Your trial starts the day your system goes live.",
  /** Added after the setup amount on the three receptionist plans (not Website Only). */
  setupSuffix: ", only if you keep it after the trial",
  /** Highlighted box under the plan cards. */
  guarantee: {
    title: "Results guarantee:",
    text: "if VoicePilot doesn't catch at least one call you would've missed in your first month, your next month is free.",
  },
  /**
   * Each plan has a one-time setup fee.
   *   setupFee: ""      → card says "+ one-time setup fee" (amount discussed on the consultation)
   *   setupFee: "$497"  → card says "+ $497 one-time setup"
   */
  plans: [
    {
      name: "Missed-Call Text-Back",
      price: "$97",
      period: "/mo",
      setupFee: "$99",
      description: "Never lose a caller to voicemail again.",
      style: "light",
      features: ["Instant text to every missed caller", "Two-way texting from your phone", "Monthly report"],
      cta: "Book a Consultation",
    },
    {
      name: "AI Receptionist",
      price: "$179",
      period: "/mo",
      setupFee: "$199",
      description: "Every call answered, day or night.",
      style: "featured",
      badge: "Most Popular",
      features: [
        "Everything in Text-Back",
        "Answers calls 24/7",
        "Books jobs or sends them to you to confirm",
        "Flags emergencies right away",
      ],
      cta: "Book a Consultation",
    },
    {
      name: "Complete Package",
      price: "$249",
      period: "/mo",
      setupFee: "$499",
      description: "Phones and website, handled.",
      style: "dark",
      features: ["Everything in AI Receptionist", "Professionally built website", "Hosting and updates included"],
      cta: "Book a Consultation",
    },
  ] satisfies Plan[],
  consult: {
    title: "Not sure which plan fits?",
    text: "Book a quick consultation. We'll look at your calls and see if it's a fit.",
    button: "Book a Consultation",
  },
  /** The slim card under the three plans. */
  websiteOnly: {
    name: "Website Only",
    description: "Just need a website? A clean, fast site built to get you calls.",
    price: "$49",
    period: "/mo",
    setupFee: "$799",
    features: ["Hosting included", "Updates when you need them"],
    cta: "Book a Consultation",
  },
  finePrint: "No long-term contracts. Cancel anytime.",
};

/* -----------------------------------------------------------------------------
   6. WHY WORK WITH ME
   -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "Why work with me",
  headline: "You work with me, not a software company.",
  /**
   * Your photo: put a JPG in public/images/ and set the path, e.g. "/images/prahaladh.jpg".
   * A portrait (4:5) about 800×1000 px and under 200 KB works best.
   * Leave it "" to hide the photo; the section rearranges itself.
   */
  photo: "",
  photoAlt: "Prahaladh, owner",
  points: [
    {
      icon: MapPin,
      title: "Local and focused",
      text: "I'm Prahaladh. I'm local, and I only work with HVAC and plumbing companies around Bellevue and Renton.",
    },
    {
      icon: Wrench,
      title: "Done for you",
      text: "I set everything up. You don't touch any software.",
    },
    {
      icon: ClipboardList,
      title: "A report every month",
      text: "I don't disappear. Every month you get a simple report: calls answered, leads recovered, jobs booked.",
    },
  ] satisfies IconCard[],
};

/* -----------------------------------------------------------------------------
   7. TESTIMONIALS (hidden until SHOW_TESTIMONIALS = true)
   Two kinds:
     { type: "text",  quote: "...", name: "Mike R.", company: "R&R Plumbing", location: "Kent" }
     { type: "video", videoUrl: "https://www.youtube.com/watch?v=XXXX", name: "...", company: "..." }
   Video links can be YouTube, Vimeo, or an .mp4 file in public/videos/.
   Only use real customers, with their permission.
   -------------------------------------------------------------------------- */

export const testimonials = {
  eyebrow: "Testimonials",
  headline: "What contractors say",
  items: [
    // { type: "text", quote: "", name: "", company: "", location: "" },
    // { type: "video", videoUrl: "", name: "", company: "", location: "" },
  ] as Testimonial[],
};

/* -----------------------------------------------------------------------------
   8. FAQ
   -------------------------------------------------------------------------- */

export const faq = {
  eyebrow: "FAQ",
  headline: "Questions contractors ask",
  // "demoOnly: true" questions only show while SHOW_DEMO is on.
  items: [
    {
      question: "Is the demo line what my customers will hear?",
      answer:
        "No. The demo is the bare minimum, with no customization. Your line is built around your business: your company name, your services, your service area, and the way you talk to customers. I work with every client personally, so callers feel like they reached your office.",
      demoOnly: true,
    },
    {
      question: "Will my customers know they're talking to an AI?",
      answer:
        "It answers in your company's name with a natural voice and handles interruptions like a real receptionist. If someone asks directly, it's honest about being an AI. Most callers just want their problem handled, and it handles it.",
    },
    {
      question: "What exactly does it say to my customers?",
      answer:
        "We write the script together during setup: your greeting, services, service area, what counts as an emergency, and what it should book versus pass to you. Nothing goes live until you approve it.",
    },
    {
      question: "What happens with an emergency call at 2 AM?",
      answer:
        "You decide what counts as an emergency, like no heat in winter or an active leak. Those calls are texted to you right away with the caller's name, address, and problem. If someone reports a gas smell, it tells them to get out and call Puget Sound Energy or 911 first.",
    },
    {
      question: "Do I need a new phone number?",
      answer:
        "No. You keep your number. Calls you don't pick up forward to VoicePilot, and I set that up with you. Customers never see a different number.",
    },
    {
      question: "How does it know my schedule?",
      answer:
        "It connects to your calendar, or books into morning and afternoon windows you set. No calendar? It takes the request and texts you to confirm.",
    },
    {
      question: "Where do the leads go?",
      answer:
        "Every call and text lands in one inbox on your phone with a summary: name, number, address, problem, and what was booked. You can text customers back from the same app.",
    },
    {
      question: "What if it gets something wrong?",
      answer:
        "You get a summary and transcript of every call, so nothing's hidden. If something's off, tell me and I'll fix the script, usually the same day.",
    },
    {
      question: "How is this different from an answering service?",
      answer:
        "Most answering services bill by the minute, read a generic script, and take a message. VoicePilot picks up instantly, knows your business, books the job, and costs one flat monthly price.",
    },
    {
      question: "What does setup cost, and is there a contract?",
      answer:
        "You get 14 days free, starting the day your system goes live. If you keep it, there's a one-time setup fee ($99, $199, or $499 depending on the plan), then it's month-to-month. Cancel anytime. And if it doesn't catch at least one call you would've missed in your first month, your next month is free.",
    },
    {
      question: "What counts as a call I would've missed?",
      answer:
        "Any call you didn't pick up that VoicePilot answered or texted back, and the caller responded. You'll see every one in your monthly report.",
    },
  ] as FaqItem[],
};

/* -----------------------------------------------------------------------------
   9. CONTACT / GET STARTED
   -------------------------------------------------------------------------- */

export const contact = {
  eyebrow: "Book a consultation",
  headline: "Want to see what you're missing?",
  body: "Tell me a little about your business and I'll reach out to set up a short call.",
  nextStepsHeading: "What happens next",
  nextSteps: [
    { title: "You fill this out", text: "It takes about a minute." },
    { title: "I reach out", text: "By phone or email, at the time you pick." },
    {
      title: "We see if it's a fit",
      text: "A short call about your calls, your schedule, and what you'd want handled. No pressure.",
    },
  ],
  altLabel: "Prefer to reach out yourself?",
  /** Used by the built-in form (CONTACT_FORM_MODE = "custom-form"). */
  form: {
    tradeOptions: ["HVAC", "Plumbing", "Other"],
    bestTimeOptions: ["Weekday after 4 PM", "Weekend", "Anytime"],
    /** Subject line of the email you get. {name} and {business} are filled in. */
    emailSubject: "New consultation request: {name}, {business}",
    submitLabel: "Book My Consultation",
    /** Optional SMS opt-in checkbox under the phone field. "Privacy Policy" and "Terms" become links. */
    smsConsentLabel:
      "I agree to receive text messages from VoicePilot AI about my inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. See our Privacy Policy and Terms.",
    consent: "By sending this, you agree to be contacted about your request by phone or email.",
    successText: "Got it. I'll reach out soon at the time you picked.",
    errorText: "That didn't go through. Please try again, or call or email me instead.",
  },
};

/* -----------------------------------------------------------------------------
   10. FOOTER
   -------------------------------------------------------------------------- */

export const footer = {
  serviceAreaLabel: "Serving",
};

/* -----------------------------------------------------------------------------
   PRIVACY PAGE (/privacy)
   Plain-language policy. The "Text messages" part is what phone carriers look
   for when they approve business texting (A2P 10DLC). Keep it in.
   -------------------------------------------------------------------------- */

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "October 1, 2026",
  sections: [
    {
      heading: "What I collect",
      body: [
        "The consultation form collects your name, business name, phone, email, trade, best time to reach you, message, and whether you agreed to receive text messages.",
        "If you call the VoicePilot demo line, the call may be recorded and transcribed.",
      ],
    },
    {
      heading: "How I use it",
      body: [
        "I use your information to reply to you and to set up and support your service.",
        "I don't sell your information. I don't share it, except with the software I use to run the service.",
      ],
    },
    {
      heading: "SMS Messaging",
      body: [
        "By providing your phone number and checking the consent box, you agree to receive text messages from VoicePilot AI related to your inquiry and our services. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe or HELP for help. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.",
      ],
    },
    {
      heading: "This website",
      body: [
        "This site doesn't use advertising or tracking cookies.",
        "Form entries are emailed to me through Web3Forms and may be saved in GoHighLevel, the software I use to manage leads. Both have their own privacy policies.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "Want your information corrected or deleted? Email or call me and I'll take care of it.",
      ],
    },
  ],
};

/* -----------------------------------------------------------------------------
   TERMS PAGE (/terms)
   The "SMS Terms" part is what phone carriers look for (A2P 10DLC). Keep it in.
   -------------------------------------------------------------------------- */

export const terms = {
  title: "Terms",
  lastUpdated: "October 1, 2026",
  intro: `These terms cover ${business.name}, based in ${business.homeBase}, ${business.state}.`,
  sections: [
    {
      heading: "SMS Terms",
      body: [
        "Program: text messages about inquiries, appointments, and services from VoicePilot AI.",
        "Message frequency varies.",
        "Msg & data rates may apply.",
        `Reply STOP to cancel at any time. Reply HELP for help, or email ${business.email}.`,
        "Carriers are not liable for delayed or undelivered messages.",
        "Consent to receive text messages is not a condition of purchase.",
      ],
    },
    {
      heading: "Services",
      body: [
        "VoicePilot AI provides the services described on this website, such as AI call answering, missed-call text-back, and websites. The exact setup for your business is agreed on during your consultation.",
      ],
    },
    {
      heading: "No guaranteed results",
      body: [
        "We work hard to help you catch more calls and book more jobs, but we can't guarantee specific results, such as a number of calls, leads, or booked jobs.",
      ],
    },
    {
      heading: "Billing and cancellation",
      body: [
        "Plans are month-to-month, with a one-time setup fee where noted. There's no long-term contract, and you can cancel anytime.",
      ],
    },
  ],
};

/* -----------------------------------------------------------------------------
   Types (you don't need to edit anything below this line)
   -------------------------------------------------------------------------- */

export type IconCard = { icon: LucideIcon; title: string; text: string };

export type FaqItem = { question: string; answer: string; demoOnly?: boolean };

export type Plan = {
  name: string;
  price: string;
  period: string;
  setupFee: string;
  description: string;
  style: "light" | "featured" | "dark";
  badge?: string;
  features: string[];
  cta: string;
};

export type Testimonial =
  | { type: "text"; quote: string; name: string; company: string; location?: string }
  | {
      type: "video";
      videoUrl: string;
      name: string;
      company: string;
      location?: string;
      quote?: string;
    };
