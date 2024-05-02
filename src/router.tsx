import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import DashboardView from '@/views/DashboardView';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<AppLayout />}>
                    <Route index element={<DashboardView />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}