import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Freelancers } from './pages/Freelancers';
import { AiPocketManager } from './components/AiPocketManager';
import { Page } from './types';

// Simple placeholder components for other pages
const Features = () => (
  <div className="container mx-auto px-6 py-24">
    <h1 className="text-4xl font-bold text-blue-900 mb-6">All Features</h1>
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <p>Detailed breakdown of Nova Pocket Manager, Pots, and Loans coming soon.</p>
    </div>
  </div>
);

const Trust = () => (
  <div className="container mx-auto px-6 py-24">
    <h1 className="text-4xl font-bold text-blue-900 mb-6">Why Trust Nova?</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-4">VEON Backing</h3>
        <p className="text-slate-600">Global connectivity provider operating in 7 countries.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-4">Square Group</h3>
        <p className="text-slate-600">A legacy of trust in Bangladesh for over 40 years.</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.FREELANCERS:
        return <Freelancers />;
      case Page.FEATURES:
        return <Features />;
      case Page.TRUST:
        return <Trust />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
      <AiPocketManager />
    </Layout>
  );
};

export default App;