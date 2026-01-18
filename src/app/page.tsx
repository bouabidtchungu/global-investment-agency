import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export') 
// or if middleware is bypassed. It ensures we land on the default locale.
export default function RootPage() {
    redirect('/en');
}
