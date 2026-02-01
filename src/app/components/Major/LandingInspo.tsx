'use client'
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShoppingBasket, 
  Wrench, 
  MapPin, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Zap
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Responsive Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-100">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">EDEN<span className="text-emerald-600">PLUS</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 font-semibold text-slate-600">
              <a href="#services" className="hover:text-emerald-600 transition">Services</a>
              <a href="#groceries" className="hover:text-emerald-600 transition">Groceries</a>
              <a href="#subscriptions" className="hover:text-emerald-600 transition">Subscriptions</a>
            </div>

            <div className="hidden md:block">
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition">
                Download App
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4">
            <a href="#services" className="block text-lg font-bold">Services</a>
            <a href="#groceries" className="block text-lg font-bold">Groceries</a>
            <a href="#subscriptions" className="block text-lg font-bold">Subscriptions</a>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">Get Started</button>
          </div>
        )}
      </nav>



      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Total Home Intelligence</h2>
              <p className="text-lg text-slate-500">Managing multiple homes? We support parents and offices with ease.</p>
            </div>
            <div className="bg-slate-100 p-1 rounded-xl flex">
              <button className="bg-white px-6 py-2 rounded-lg font-bold shadow-sm">Home Services</button>
              <button className="px-6 py-2 rounded-lg font-bold text-slate-500">Groceries</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Wrench />, title: "Plumbing & AC", desc: "Expert repairs with AI estimation." },
              { icon: <ShoppingBasket />, title: "Fresh Groceries", desc: "Essentials delivered to your doorstep." },
              { icon: <Smartphone />, title: "Multi-Address", desc: "Manage Home, Office, & Parents." },
              { icon: <Star />, title: "Quality Guarantee", desc: "Free rework within 72 hours." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-[#013328] hover:bg-white transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#013328] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage;