"use client";

import dynamic from "next/dynamic";

export const Navigation = dynamic(() => import("./Navigation"), {
  ssr: false,
});

export const ToastProvider = dynamic(() => import("./ToastProvider"), {
  ssr: false,
});

