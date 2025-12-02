import React from 'react';
import { Page } from '../types';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Smartphone, Wifi, Lock } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const trustData = [
  { time: '10am', score: 85 },
  { time: '11am', score: 88 },
  { time: '12pm', score: 92 },
  { time: '1pm', score: 90 },
  { time: '2pm', score: 95 },
  { time: '3pm', score: 98 },
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/20 to-transparent blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-teal-300 text-sm font-semibold mb-6 border border-white/10">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                Now Live in Dhaka & Chittagong
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                টাকা রাখার নতুন ঠিকানা <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Nova Digital Bank
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                Let your money grow while you chase dreams. 100% Digital, 0% Drama. 
                Join 1.8M young Bangladeshis banking smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-500 hover:bg-teal-400 text-blue-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-teal-500/20">
                  Open Account in 2 Min <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate(Page.FEATURES)}
                  className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Explore Features
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-teal-400" />
                  <span>Licensed by Bangladesh Bank</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div>Backed by VEON + Square Group</div>
              </div>
            </div>

            {/* Hero Visual/Mockup */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-72 mx-auto bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-900 h-[500px] rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screen Mockup */}
                  <div className="p-6">
                    <div className="flex justify-between items-center text-white mb-6">
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                      <div className="font-bold">Nova</div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white mb-6 shadow-lg">
                      <div className="text-sm opacity-80">Total Balance</div>
                      <div className="text-3xl font-bold mt-1">৳ 24,500.00</div>
                      <div className="flex gap-2 mt-4 text-xs font-semibold">
                        <span className="bg-white/20 px-2 py-1 rounded">+2.5% Profit</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-6 text-center text-white text-xs">
                      {['Send', 'Add', 'Bill', 'More'].map(item => (
                        <div key={item} className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                            <Zap className="w-5 h-5 text-teal-400" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Score Banner */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Real-Time Trust Score</div>
                <div className="text-2xl font-bold text-slate-900">1.8M Bangladeshis <span className="text-slate-400 text-lg font-normal">trust Nova with</span> ৳ 5,200 Cr</div>
              </div>
            </div>
            
            {/* Tiny Chart */}
            <div className="h-16 w-48 hidden md:block">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trustData}>
                  <Area type="monotone" dataKey="score" stroke="#10b981" fill="#d1fae5" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Logos text representation for strict constraint */}
               <span className="font-bold text-xl text-slate-800">VEON</span>
               <div className="w-px h-8 bg-slate-300"></div>
               <span className="font-bold text-xl text-slate-800">SQUARE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Banking designed for <span className="text-teal-600">Tomorrow</span></h2>
            <p className="text-slate-600">Old banks have branches. We have features that actually help you grow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div onClick={() => onNavigate(Page.FEATURES)} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pocket Manager AI</h3>
              <p className="text-slate-600 mb-6">Built-in AI that tracks your spending and suggests budgets automatically.</p>
              <span className="text-teal-600 font-semibold flex items-center gap-1">Try Demo <ArrowRight className="w-4 h-4" /></span>
            </div>

            {/* Feature 2 */}
            <div onClick={() => onNavigate(Page.FREELANCERS)} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gig-Link Global</h3>
              <p className="text-slate-600 mb-6">Receive payments from Upwork/Fiverr instantly. 50% lower fees than Payoneer.</p>
              <span className="text-purple-600 font-semibold flex items-center gap-1">For Freelancers <ArrowRight className="w-4 h-4" /></span>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wifi className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Offline Mode (USSD)</h3>
              <p className="text-slate-600 mb-6">No internet? No problem. Send money via USSD code *123# securely.</p>
              <span className="text-orange-600 font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Security CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Branchless but never distant.</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-800 p-2 rounded-lg"><Lock className="w-5 h-5 text-teal-400" /></div>
                    <div>
                      <h4 className="font-bold">Biometric Security</h4>
                      <p className="text-slate-400 text-sm">FaceID and Fingerprint login standard.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-800 p-2 rounded-lg"><Shield className="w-5 h-5 text-teal-400" /></div>
                    <div>
                      <h4 className="font-bold">Tk 300 Crore Capital</h4>
                      <p className="text-slate-400 text-sm">Full paid-up capital backing your deposits.</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="md:w-1/2 flex justify-center">
               <img src="https://picsum.photos/id/1/500/300" alt="Security Center" className="rounded-2xl shadow-2xl border-4 border-slate-700 grayscale hover:grayscale-0 transition-all" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};