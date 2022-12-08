import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { colorSchemes, getColorIndex } from "@src/utils.tsx/colorScemes";
import { createContext, useState } from "react";
import styles from "./styles/app.css"

export function links() {
  return [
    {
      rel: "icon",
      href: "../public/favicon.ico",
    },
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect", href:"https://fonts.gstatic.com", crossOrigin: "true"
    },
    {
      rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Koh+Santepheap:wght@300;700&display=swap",
    }
  
  ]
}



export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DASHIMI Portfolio",
  viewport: "width=device-width,initial-scale=1",
});


export const ColorSchemeProvider = createContext({colorScheme: colorSchemes[0], toggleColorScheme: (color: number) => {return;}});

export default function App() {
  const [colorScheme, setColorScheme] = useState<number>(1);


  const providerValue = {
    colorScheme: colorSchemes[colorScheme],
    toggleColorScheme
  };

  function toggleColorScheme(color: number) {
    const colorIndex = getColorIndex(color);

    setColorScheme(colorIndex);
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-basic font-serif" id="body">
        <ColorSchemeProvider.Provider value={providerValue}>
          <Outlet />
        </ColorSchemeProvider.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
