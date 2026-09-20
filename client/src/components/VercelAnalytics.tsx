import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

const CONSENT_KEY = "jocach_cookie_consent";
const CONSENT_EVENT = "jocach:consent-change";

export default function VercelAnalytics() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  });

  useEffect(() => {
    const updateConsent = () => {
      setEnabled(window.localStorage.getItem(CONSENT_KEY) === "accepted");
    };
    window.addEventListener(CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(CONSENT_EVENT, updateConsent);
  }, []);

  return enabled ? <Analytics /> : null;
}
