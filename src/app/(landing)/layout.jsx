import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AppProvider from '../providers/AppProvider';

const inter = Inter({ subsets: ['latin'] });

export default function LandingLayout({ children }) {
    return (
        <AppProvider>
            <div className='w-full'>
                {/* NAVBAR */}
                <Navbar />

                {children}
            </div>
        </AppProvider>
    );
}
