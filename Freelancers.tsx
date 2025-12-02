import React from 'react';
import { Check, DollarSign, Globe, Clock, ArrowRight } from 'lucide-react';

export const Freelancers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-indigo-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="bg-indigo-800 text-indigo-200 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Nova Gig-Link</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bring your Dollars home.<br/>Instantly.</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Stop losing money to exchange rates and hidden fees. The specialized banking route for Bangladeshi freelancers.
          </p>
          <button className="bg-white text-indigo-900 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg">
            Start Receiving Payments
          </button>
        </div>
      </div>

      {/* Comparison */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why switch to Nova?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Competitor */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 opacity-70">
              <h3 className="text-xl font-bold text-slate-500 mb-6">Traditional Methods</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-500">
                  <div className="p-1 bg-red-100 rounded-full"><Clock className="w-4 h-4 text-red-500" /></div>
                  3-5 Business Days
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <div className="p-1 bg-red-100 rounded-full"><DollarSign className="w-4 h-4 text-red-500" /></div>
                  2-3% Exchange Loss
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <div className="p-1 bg-red-100 rounded-full"><Globe className="w-4 h-4 text-red-500" /></div>
                  Complex Verification
                </li>
              </ul>
            </div>

            {/* Nova */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Nova Gig-Link</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="p-1 bg-green-100 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  Instant Settlement (24/7)
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="p-1 bg-green-100 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  Best Market Rate + 2.5% Bonus
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="p-1 bg-green-100 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  Auto Certificate of Earnings
                </li>
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 flex justify-center items-center gap-2">
                Get Virtual Dollar Card <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <img src="https://picsum.photos/seed/tech/600/400" alt="Freelancer working" className="rounded-2xl shadow-2xl opacity-90" />
           </div>
           <div className="md:w-1/2">
             <h2 className="text-3xl font-bold mb-4">Global Virtual Visa</h2>
             <p className="text-slate-400 mb-6 text-lg">
               Need to pay for hosting, Figma, or Adobe Creative Cloud? Use your dollar earnings directly without converting to BDT.
             </p>
             <ul className="space-y-2 mb-8">
               <li className="flex items-center gap-2"><Check className="text-teal-400 w-5 h-5"/> No dual currency endorsement needed</li>
               <li className="flex items-center gap-2"><Check className="text-teal-400 w-5 h-5"/> Zero issuance fee</li>
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
};