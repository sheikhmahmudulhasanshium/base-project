import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    title: string;
    description: string;
  };
}
export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any"/>
        <title>{params.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
        <meta name="description" content={params.description} />
      </head>
      <body className='min-w-max max-w-full w-full flex'>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>        
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    title: string;
    description: string;
  };
}
export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/pubic/favicon.ico" sizes="any"/>
        <title>{params.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
        <meta name="description" content={params.description} />
      </head>
      <body className='min-w-max max-w-full w-full flex items-center justify-center'>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>        
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
