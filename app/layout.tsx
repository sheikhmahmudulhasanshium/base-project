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
        <meta name="description" content={params.description} />
      </head>
      <body className=''>
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
