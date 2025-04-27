import AccountHeader from '@/widgets/accountWidgets/header/accaountHeader';
import TabBar from '@/widgets/accountWidgets/tabBar/tabBar';
import 'primereact/resources/themes/lara-light-green/theme.css';

export default function PatientLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative'>
            <AccountHeader/>
            <section>
                {children}
            </section>
            <TabBar/>
        </main>
    );
}
