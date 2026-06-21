import React from 'react';
import { Leaf, Sprout, TestTubes, FlaskConical, PackageOpen, LayoutGrid, CheckCircle2, Factory, ShieldCheck, FileCheck2, Handshake, Mail, MessageSquare, Phone } from 'lucide-react';
import Background3D from './components/Background3D';

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    requirement: 'Dry Vegetables',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  
  const steps = [
    { title: "Spec Selection", desc: "Define precise moisture levels, sizes (flaked, minced, powdered), and physical specifications." },
    { title: "Commercial Quotation", desc: "Receive competitive transparent FOB, CIF, or CNF quotes grounded in global trading standards." },
    { title: "Product Sampling", desc: "Review real physical samples dispatched directly from Nashik to confirm exact profile and aroma." },
    { title: "Production & QA", desc: "Processing in ISO, HACCP & FSSAI certified facilities with rigorous micro-testing at every checkpoint." },
    { title: "Custom Packaging", desc: "Secure bulk 25kg paper bags or fully moisture-proof retail pouches, tailored to your design preferences." },
    { title: "Export Documentation", desc: "Hassle-free customs handling with precise Phytosanitary, Origin, and Quality health certificate execution." },
    { title: "Secure Dispatch & Shipping", desc: "Expert container stuffing, port distribution, and maritime tracking for perfect cross-border transit." },
    { title: "Post-Arrival Partnership", desc: "Continuous cargo delivery verification, custom support, and proactive planning for future seasons." }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#064e3b]/20 bg-transparent text-[#1f2937] relative overflow-x-hidden">
      <Background3D />
      
      {/* Nature Mountain & Topography Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fcfbf7]">
        {/* Topography vector accent at the top left */}
        <svg className="absolute -top-10 -left-10 w-[700px] h-[700px] opacity-[0.05] text-[#064e3b]" viewBox="0 0 500 500" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 100 Q 150 50 250 150 T 450 100" strokeWidth="0.75" />
          <path d="M 50 150 Q 150 100 250 200 T 450 150" strokeWidth="0.75" />
          <path d="M 50 200 Q 150 150 250 250 T 450 200" strokeWidth="0.75" />
          <path d="M 50 250 Q 150 200 250 300 T 450 250" strokeWidth="0.75" />
          <path d="M 50 300 Q 150 250 250 350 T 450 300" strokeWidth="0.75" />
          <path d="M 50 350 Q 150 300 250 400 T 450 350" strokeWidth="0.75" />
          <path d="M 50 400 Q 150 350 250 450 T 450 400" strokeWidth="0.75" />
        </svg>

        {/* Sunset Glowing Sun behind the mountain crest */}
        <div className="absolute bottom-[35%] right-[10%] xl:right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-500/8 to-transparent blur-3xl"></div>

        {/* Majestic Overlapping Mountain Silhouettes / Nashik Western Ghats at the bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-[60vh] min-h-[380px] opacity-[0.24] text-[#064e3b]" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mountGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="mountGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="mountGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          
          {/* Layer 1: Furthest High Peaks */}
          <path d="M0 280 L200 160 L420 310 L640 130 L860 250 L1080 110 L1300 290 L1440 190 L1440 600 L0 600 Z" fill="url(#mountGrad1)" opacity="0.55" />
          
          {/* Layer 2: Mid Rounded Ridges */}
          <path d="M0 350 Q220 260 440 370 T880 300 T1320 380 T1440 330 L1440 600 L0 600 Z" fill="url(#mountGrad2)" opacity="0.7" />
          
          {/* Layer 3: Mid-close sharp rocky peaks */}
          <path d="M0 430 L280 330 L550 450 L820 350 L1100 470 L1350 340 L1440 420 L1440 600 L0 600 Z" fill="url(#mountGrad3)" opacity="0.85" />

          {/* Layer 4: Foreground soft rolling valley heights */}
          <path d="M0 510 Q400 430 800 520 T1440 490 L1440 600 L0 600 Z" fill="#064e3b" opacity="0.2" />
        </svg>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#fcfbf7]/60 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#064e3b]">KanhaiyaExim</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium opacity-80 text-[#1f2937]">
            <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
            <a href="#products" className="hover:opacity-100 transition-opacity">Products</a>
            <a href="#capabilities" className="hover:opacity-100 transition-opacity">Capabilities</a>
            <a href="#process" className="hover:opacity-100 transition-opacity">Process</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex bg-[#064e3b] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#064e3b]/20 hover:scale-105 transition-transform">
            Get a Quote
          </a>
          <button className="md:hidden text-[#1f2937] opacity-80">
            <LayoutGrid className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 relative z-10">
            <div className="max-w-2xl py-20 flex flex-col justify-center">
              <div>
                <span className="text-[#064e3b] font-bold text-xs uppercase tracking-widest">Premium Indian Agriculture</span>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mt-4 mb-6 tracking-tighter text-[#1f2937]">
                  Dry Excellence from <span className="text-[#064e3b] relative inline-block">India</span> to the World.
                </h1>
                <p className="text-lg opacity-70 max-w-xl leading-relaxed mb-10 text-[#1f2937]">
                  Based in Nashik, Maharashtra. We connect Indian agricultural excellence to global markets, supplying premium dry whole foods, exact-spec powders, and fully customized food product solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#products" className="bg-[#064e3b] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#064e3b]/20 hover:bg-[#064e3b]/90 transition-all">
                    Explore Products
                  </a>
                  <a href="#contact" className="bg-white/40 backdrop-blur-sm border border-transparent hover:border-white px-8 py-3.5 rounded-full font-bold transition-all text-[#1f2937]">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE GRID */}
        <section id="products" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 text-[#1f2937]">Our Expertise</h3>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] tracking-tight max-w-2xl">Supplying the ingredients that power global brands.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { title: 'Dry Vegetables', icon: <Sprout className="w-5 h-5" />, desc: 'Onion, Garlic, Potato, Cabbage, Carrot.' },
                { title: 'Dry Fruits & Herbs', icon: <Leaf className="w-5 h-5" />, desc: 'Mint, Coriander, Mango, Banana, Apple.' },
                { title: 'Spray-Dried', icon: <FlaskConical className="w-5 h-5" />, desc: 'Fine-mesh powders for instant dissolution.' },
                { title: 'Custom Food Products', icon: <TestTubes className="w-5 h-5" />, desc: 'Tailor-made formulation based on your recipes.' },
                { title: 'Nutraceutical', icon: <CheckCircle2 className="w-5 h-5" />, desc: 'Specialty botanical extracts and superfoods.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/40 backdrop-blur-sm border border-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-[#064e3b] mb-4">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold leading-tight block uppercase text-[#1f2937] mb-2">{item.title}</span>
                  <p className="text-xs opacity-70 leading-relaxed text-[#1f2937]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="capabilities" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 text-[#1f2937]">Capabilities</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-8">Built on the foundation of Indian agriculture, designed for global standards.</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Direct Farmer Sourcing', desc: 'Eliminating middlemen to guarantee fair trade and absolute traceability from soil to shipment.' },
                    { title: 'Strict Quality Control', desc: 'ISO, HACCP, and FSSAI certified facility partners ensuring 100% microbiologically safe output.' },
                    { title: 'Private Label & Custom Packaging', desc: 'From bulk 25kg paper bags to retail-ready pouches. Connect with us to discuss your exact branding and custom packaging specifications.' },
                    { title: 'Reliable Export Documentation', desc: 'Flawless execution of Phytosanitary certificates, Certificate of Origin, and customs compliance.' },
                  ].map((feat, idx) => (
                    <div key={idx} className="bg-white/40 backdrop-blur-sm border border-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#1f2937] text-sm uppercase tracking-wide">{feat.title}</h4>
                      <p className="opacity-70 text-sm mt-1 text-[#1f2937]">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#064e3b]/10 to-amber-500/10 rounded-[40px] transform rotate-3 scale-105 opacity-50 blur-xl pointer-events-none"></div>
                <div className="bg-white/60 backdrop-blur-md border border-white p-10 rounded-[32px] shadow-xl relative text-center">
                   <h3 className="font-serif italic text-2xl text-[#064e3b] mb-6">"Our promise is consistency. In color, in flavor, and in delivery."</h3>
                   <div className="flex items-center justify-center gap-6 pt-6 border-t border-black/5">
                      <div className="text-center"><div className="text-3xl font-bold text-[#1f2937]">20+</div><div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-1">Countries</div></div>
                      <div className="w-px h-10 bg-black/10"></div>
                      <div className="text-center"><div className="text-3xl font-bold text-[#1f2937]">100%</div><div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-1">Traceable</div></div>
                      <div className="w-px h-10 bg-black/10"></div>
                      <div className="text-center"><div className="text-3xl font-bold text-[#1f2937]">50+</div><div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-1">Products</div></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section id="process" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#064e3b]">The Pipeline</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] tracking-tight mt-1">The 8-Step Export Journey</h2>
              <p className="text-sm opacity-70 mt-2 text-[#1f2937]/80">From crop harvesting and inspection to your final warehouse delivery, we ensure seamless global standards.</p>
            </div>

            <div className="bg-[#064e3b] text-[#fcfbf7] p-8 md:p-10 rounded-3xl shadow-xl shadow-[#064e3b]/20 relative overflow-hidden">
              {/* Subtle ambient visual pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Horizontal Stepper Line for Large Screens */}
                <div className="hidden lg:block absolute top-[22px] left-[6%] right-[6%] h-[2px] bg-white/20 -z-0">
                  <div 
                    className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-500"
                    style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  ></div>
                </div>

                {/* Steps Horizontal Row */}
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 mb-10 relative z-10">
                  {steps.map((item, idx) => {
                    const isActive = idx === activeStep;
                    const isCompleted = idx < activeStep;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-xl py-2"
                      >
                        {/* Circle Indicator */}
                        <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${
                          isActive 
                            ? 'bg-amber-500 border-amber-500 text-white scale-110 shadow-lg shadow-amber-500/30' 
                            : isCompleted
                              ? 'bg-white text-[#064e3b] border-white'
                              : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white'
                        }`}>
                          {idx + 1}
                        </div>
                        {/* Label name */}
                        <span className={`hidden md:block text-[10px] lg:text-xs font-bold uppercase tracking-wider mt-3 max-w-[100px] transition-all duration-200 ${
                          isActive ? 'text-amber-400 font-extrabold opacity-100' : 'text-white/60 group-hover:text-white/95'
                        }`}>
                          {item.title.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Dynamic Pane */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10 transition-all duration-300">
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                      Phase {String(activeStep + 1).padStart(2, '0')} — Process Detail
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1 mb-3 tracking-tight">
                      {steps[activeStep].title}
                    </h3>
                    <p className="opacity-95 text-sm md:text-base leading-relaxed text-[#fcfbf7]/90 max-w-2xl">
                      {steps[activeStep].desc}
                    </p>
                  </div>
                  
                  {/* Phase Control Navigation Buttons */}
                  <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                      className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-xl transition-all disabled:pointer-events-none text-white cursor-pointer"
                      title="Previous Step"
                    >
                      <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-xl transition-all disabled:pointer-events-none text-white cursor-pointer"
                      title="Next Step"
                    >
                      <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Subtitle credentials info */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold tracking-widest opacity-50 text-[#fcfbf7] mt-8 pt-6 border-t border-white/15 gap-4">
                  <span>8 STAGES SECURE PIPELINE SYSTEM</span>
                  <span>EST. NASHIK MAHARASHTRA, INDIA</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TEAM & CONTACT */}
        <section id="contact" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* CONTACT FORM */}
              <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-6 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1f2937] tracking-tight mb-2">Inquiry Form Prepared</h3>
                    <p className="text-sm text-gray-600 mb-8 max-w-md leading-relaxed">
                      We have prepared your inquiry. To notify <strong className="text-emerald-900 font-semibold">KanhaiyaExim</strong> instantaneously, please select a dispatch method below:
                    </p>
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                      <a
                        href={`mailto:kanhaiyaexim@yahoo.com?subject=B2B Import Inquiry from ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(
                          `Dear KanhaiyaExim Team,\n\nI would like to submit a commercial import inquiry.\n\nSPECIFICATIONS:\n- Name: ${formData.name}\n- Company: ${formData.company || 'N/A'}\n- Email: ${formData.email}\n- Requirement: ${formData.requirement}\n\nDETAILED MESSAGE:\n${formData.message}\n\nPlease provide a CIF/FOB quotation at your earliest convenience.\n\nBest regards,\n${formData.name}`
                        )}`}
                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#064e3b] text-white font-bold rounded-xl shadow-lg shadow-[#064e3b]/20 hover:scale-[1.02] transition-transform text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Dispatch via Email (kanhaiyaexim@yahoo.com)
                      </a>
                      <a
                        href={`https://wa.me/919699265156?text=${encodeURIComponent(
                          `Hello KanhaiyaExim, this is ${formData.name} from ${formData.company || 'N/A'}. I'm interested in ${formData.requirement}.\nEmail: ${formData.email}\nMessage: ${formData.message}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] transition-transform text-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Message on WhatsApp (Fastest)
                      </a>
                    </div>
                    <button
                      onClick={() => {
                        setFormData({ name: '', company: '', email: '', requirement: 'Dry Vegetables', message: '' });
                        setSubmitted(false);
                      }}
                      className="text-xs text-gray-500 underline hover:text-emerald-800 transition-colors mt-8"
                    >
                      Fill another inquiry form
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold mb-8 text-[#1f2937] tracking-tight">Inquiry Portal</h2>
                    <form 
                      className="flex flex-col gap-5" 
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[#1f2937]">Full Name</label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-gray-50 border-none rounded-xl p-3.5 text-sm text-[#1f2937] outline-none focus:ring-2 focus:ring-[#064e3b]/20 transition-all" 
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[#1f2937]">Company</label>
                          <input 
                            type="text" 
                            placeholder="Global Trade Ltd" 
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-gray-50 border-none rounded-xl p-3.5 text-sm text-[#1f2937] outline-none focus:ring-2 focus:ring-[#064e3b]/20 transition-all" 
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[#1f2937]">Email</label>
                        <input 
                          type="email" 
                          required
                          placeholder="contact@email.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-gray-50 border-none rounded-xl p-3.5 text-sm text-[#1f2937] outline-none focus:ring-2 focus:ring-[#064e3b]/20 transition-all" 
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[#1f2937]">Requirement</label>
                        <select 
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="bg-gray-50 border-none rounded-xl p-3.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#064e3b]/20 transition-all appearance-none"
                        >
                          <option>Dry Vegetables</option>
                          <option>Dry Fruits & Herbs</option>
                          <option>Powders & Spray-Dried</option>
                          <option>Custom Formulation</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1 mb-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[#1f2937]">Message</label>
                        <textarea 
                          rows={3} 
                          required
                          placeholder="Please detail volume or spec requirements..." 
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-gray-50 border-none rounded-xl p-3.5 text-sm text-[#1f2937] outline-none focus:ring-2 focus:ring-[#064e3b]/20 transition-all resize-none"
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-[#064e3b] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#064e3b]/20 hover:scale-[1.02] transition-transform">
                        Submit Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* TEAM CARDS */}
              <div className="lg:col-span-5 bg-[#1f2937] text-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-50">Strategic Leadership</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { name: 'Abhijeet Tidke', role: 'Founder & Director', phone: '919699265156' },
                      { name: 'Pritesh Khode', role: 'Export Sales & Business Development', phone: '919322548985' },
                      { name: 'Ansh Tidke', role: 'Sourcing & Procurement', phone: '919226816373' },
                    ].map((person, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div>
                          <p className="font-bold text-sm">{person.name}</p>
                          <p className="text-xs opacity-60 mt-0.5">{person.role}</p>
                        </div>
                        <a 
                          href={`https://wa.me/${person.phone}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-green-600 p-2.5 rounded-full text-white shadow-lg hover:bg-green-500 transition-colors"
                          aria-label={`WhatsApp ${person.name}`}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Embedded Contact Info */}
                <div className="mt-12 pt-8 border-t border-white/10 text-xs opacity-70">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" /> KanhaiyaExim@yahoo.com
                  </div>
                  <div>Kanhaiya Farm, Janori, Nashik, MH 422206</div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-12 pt-12 pb-8 border-t border-black/5 bg-[#fcfbf7] relative z-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-[11px] text-[#1f2937]">
          <div className="md:col-span-1">
            <p className="font-bold uppercase tracking-widest opacity-40 mb-2 mt-1 -ml-1">
              <span className="bg-[#064e3b] text-white px-2 py-1 rounded">K</span> anhaiyaExim
            </p>
            <p className="opacity-80">Premium Indian Agriculture.</p>
          </div>
          <div className="md:col-span-1">
            <p className="font-bold uppercase tracking-widest opacity-40 mb-2">Location</p>
            <p className="opacity-80">Kanhaiya Farm, Janori, Nashik, MH 422206, India</p>
          </div>
          <div className="md:col-span-1">
            <p className="font-bold uppercase tracking-widest opacity-40 mb-2">Credentials</p>
            <p className="opacity-80 uppercase leading-relaxed">
              GSTIN: 27DAVPT••••Q1ZK<br/>
              IEC: DAVPT••••Q<br/>
              Udyam: UDYAM-MH-23-••••371
            </p>
          </div>
          <div className="md:col-span-1 md:text-right flex flex-col justify-end">
            <p className="opacity-80 mb-4">Sourced from FSSAI, ISO, HACCP & GMP Certified manufacturing partners.</p>
            <p className="opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} KanhaiyaExim</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/919699265156" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
      
    </div>
  );
}
