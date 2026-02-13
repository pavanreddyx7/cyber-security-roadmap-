// CONVERTED REACT VERSION - App.tsx
// This replaces the Next.js app structure

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import JobsPage from './pages/JobsPage';
import SalaryPage from './pages/SalaryPage';
import ResourcesPage from './pages/ResourcesPage';

import './App.css';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="min-h-screen flex flex-col bg-background text-foreground">
                    <Navbar />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/roadmap" element={<RoadmapPage />} />
                            <Route path="/jobs" element={<JobsPage />} />
                            <Route path="/salary" element={<SalaryPage />} />
                            <Route path="/resources" element={<ResourcesPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
