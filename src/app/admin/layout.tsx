import AdminSidebar from "@widgets/adminPageWidgets/adminSidebar/ui/sidebar";
import 'primereact/resources/themes/lara-light-green/theme.css';

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
