import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Next.js 4-Page Portfolio',
  description: 'Created for assignment submission',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-6xl w-full mx-auto p-6">{children}</main>
        <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
          © {new Date().getFullYear()} My Next.js Project. All rights reserved.
        </footer>
      </body>
    </html>
  );
}