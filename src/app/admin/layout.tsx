import AdminSidebar from "@widgets/adminPageWidgets/adminSidebar/ui/sidebar";
import 'primereact/resources/themes/lara-dark-indigo/theme.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <main style={{ marginLeft: '250px', flex: 1 }}>
                {children}
            </main>
        </div>
    );
}
