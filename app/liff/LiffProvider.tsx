// app/LiffProvider.tsx

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Liff } from "@line/liff";

type LiffContextType = {
  liff: Liff | null;
  liffError: string | null;
};

const LiffContext = createContext<LiffContextType>({ liff: null, liffError: null });

export const LiffProvider = ({ children }: { children: ReactNode }) => {
  const [liff, setLiff] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiff(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  return (
    <LiffContext.Provider value={{ liff, liffError }}>
      {children}
    </LiffContext.Provider>
  );
};

export const useLiff = () => useContext(LiffContext);