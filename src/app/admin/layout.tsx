import AdminSidebar from "@widgets/adminPageWidgets/adminSidebar/ui/sidebar";
// import 'primereact/resources/themes/arya-purple/theme.css';////
// import 'primereact/resources/themes/luna-green/theme.css';////
// import 'primereact/resources/themes/lara-dark-amber/theme.css';/////
// import 'primereact/resources/themes/fluent-light/theme.css'/////;
import 'primereact/resources/themes/lara-light-green/theme.css';
// import 'primereact/resources/themes/saga-green/theme.css';
// import 'primereact/resources/themes/lara-light-amber/theme.css';
// import 'primereact/resources/themes/lara-light-blue/theme.css';
// import 'primereact/resources/themes/lara-light-cyan/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-teal/theme.css';

// import 'primereact/resources/themes/md-light-indigo/theme.css';
// import 'primereact/resources/themes/mira/theme.css';
// import 'primereact/resources/themes/nano/theme.css';
// import 'primereact/resources/themes/nova/theme.css';
// import 'primereact/resources/themes/nova-alt/theme.css';
// import 'primereact/resources/themes/rhea/theme.css';
// import 'primereact/resources/themes/soho-light/theme.css';
// import 'primereact/resources/themes/vela-green/theme.css';
// import 'primereact/resources/themes/viva-light/theme.css';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main style={{ display: 'flex' }}>
            <AdminSidebar />
            <section style={{ marginLeft: '250px', flex: 1 }}>
                {children}
            </section>
        </main>
    );
}
