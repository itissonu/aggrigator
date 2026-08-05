import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Car, Leaf, BarChart3, Zap, ArrowRight, Clock, FileText, Target, CheckCircle2, MessageSquare, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
import { getDaysTo2030 } from '@/lib/mockData';
import heroBg from '@/assets/hero-delhi-ev.jpg';
import heroDelAgg from '@/assets/hero-del-agg.png';
import collageBg from '@/assets/delhi_fleet_ev_collage.png';
import delhiEvVector from '@/assets/delhi_ev_vector_illustration.png';

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);
  return <>{prefix}{count.toLocaleString()}{suffix}</>;
}

function LiveCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });
  
  useEffect(() => {
    const target = new Date("2030-01-01T00:00:00Z").getTime();
    const count = () => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) return;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };
    
    count();
    const timer = setInterval(count, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-sm font-mono mt-1 w-full justify-center text-white">
      <div className="flex flex-col items-center"><span className="text-xl font-bold leading-none">{timeLeft.days}</span><span className="text-[10px] opacity-70">d</span></div><span className="pt-0.5 opacity-50">:</span>
      <div className="flex flex-col items-center"><span className="text-xl font-bold leading-none">{timeLeft.hours.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">h</span></div><span className="pt-0.5 opacity-50">:</span>
      <div className="flex flex-col items-center"><span className="text-xl font-bold leading-none">{timeLeft.min.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">m</span></div><span className="pt-0.5 opacity-50">:</span>
      <div className="flex flex-col items-center"><span className="text-xl font-bold leading-none">{timeLeft.sec.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">s</span></div>
    </div>
  );
}

const features = [
  { title: 'License Management', desc: 'Apply, renew, and track aggregator licenses digitally.', icon: Shield },
  { title: 'Fleet Registration', desc: 'Register vehicles, submit fortnightly declarations.', icon: Car },
  { title: 'EV Compliance Tracker', desc: 'Monitor phase-wise EV adoption targets in real time.', icon: Leaf },
  { title: 'Fee & Wallet System', desc: 'Pay fees, manage wallet, view transaction history.', icon: BarChart3 },
];

export default function Landing() {
  const heroRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px) scale(1.05)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0d5c3a] flex items-center justify-center shadow-sm">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm leading-tight text-slate-900">GACP</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Government Aggregator Compliance Portal</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#scheme" className="hover:text-[#0d5c3a] transition-colors">Scheme</a>
            <a href="#how-it-works" className="hover:text-[#0d5c3a] transition-colors">How it works</a>
            <a href="#ev-targets" className="hover:text-[#0d5c3a] transition-colors">EV Targets</a>
            <a href="#faq" className="hover:text-[#0d5c3a] transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-slate-700 font-semibold hover:bg-slate-100">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#10a352] hover:bg-[#0d8743] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm">Apply for License</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#9ac9df] h-[calc(100vh-4rem)] min-h-[600px] flex flex-col pt-8 sm:pt-12">
        {/* Absolute Background Image (Stretches Full Width) */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            ref={heroRef}
            src={heroDelAgg}
            alt="Delhi Aggregator Portal"
            className="w-full h-full object-cover object-bottom will-change-transform"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center flex-shrink-0">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0d5c3a]/20 text-[#0d5c3a] text-[11px] sm:text-xs font-bold tracking-wide shadow-sm mb-4">
            <CheckCircle2 className="w-4 h-4 text-[#0d5c3a]" />
            <span>TRANSPORT DEPARTMENT · GOVT OF NCT OF DELHI</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0d5c3a] max-w-4xl leading-[1.1]">
            Welcome to the
            <br />
            Delhi Aggregator Portal
          </h1>

          <p className="mt-4 text-[11px] sm:text-xs md:text-sm text-slate-800 max-w-lg mx-auto leading-relaxed font-heading font-medium">
            The unified compliance platform for ride-hailing aggregators, delivery
            service providers and e-commerce fleets — licensing, fleet registration and
            EV targets in one place.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/register">
              <Button className="bg-[#0d5c3a] hover:bg-[#09472d] text-white px-6 py-3 rounded-xl font-bold shadow-md gap-2 h-auto text-sm sm:text-base transition-all">
                Apply for License <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="bg-white hover:bg-slate-50 text-[#0d5c3a] border-slate-300 px-6 py-3 rounded-xl font-bold shadow-sm h-auto text-sm sm:text-base transition-all">
                Track Compliance
              </Button>
            </Link>
          </div>
        </div>

        {/* Flexible spacer to ensure content stays up and image remains visible in viewport */}
        <div className="relative z-0 flex-1 w-full pointer-events-none"></div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-[#1B5E20] border-y border-[#1B5E20]/90 relative z-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"><AnimatedCounter end={12} suffix="+" /></p>
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Licensed Aggregators</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"><AnimatedCounter end={50000} suffix="+" /></p>
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Registered Vehicles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"><AnimatedCounter end={34} suffix="%" /></p>
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">EV Adoption Rate</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <LiveCountdown />
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold mt-2">Days to 2030 Deadline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F8FAFC] border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2E7D32]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-[#2E7D32]/10 hover:-translate-y-1.5 transition-all duration-300 group border border-slate-100/60 relative overflow-hidden">
                {/* Subtle corner gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8F5E9] to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-125 opacity-60" />
                
                <div className="relative z-10 p-3 rounded-xl bg-[#F1F8F1] text-[#2E7D32] w-fit mb-5 group-hover:bg-[#2E7D32] group-hover:text-white transition-colors duration-300 shadow-sm border border-[#2E7D32]/10">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 font-display font-bold text-[#1e293b] text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="relative z-10 text-[13px] text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circulars & Image Split Section */}
      <section id="scheme" className="bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch">
            
            {/* Left Side: Image Collage */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center relative min-h-[400px]">
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full z-10 flex items-center justify-center py-10 px-4">
                
                {/* Back Offset Card */}
                <div className="absolute top-12 left-4 right-12 bottom-16 bg-[#F1F8F1] rounded-3xl border border-[#2E7D32]/20 transform -rotate-6 transition-transform hover:-rotate-3 shadow-inner z-0"></div>
                
                {/* Main Image Card */}
                <div className="absolute top-4 right-4 left-12 bottom-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 hover:-translate-y-2 transition-transform duration-500 group bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/20 to-transparent z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img src={delhiEvVector} alt="Delhi EV Infrastructure Vector Illustration" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Floating Badge (Pill Style) */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-[#2E7D32]/10 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform duration-300">
                    <span className="text-xl leading-none block pt-0.5">🌱</span>
                    <span className="font-bold text-[#2E7D32] text-[13px] tracking-tight uppercase mt-0.5">Zero Fee for EVs</span>
                  </div>
                </div>
                
                {/* Front Overlapping Element */}
                <div className="absolute -bottom-4 -right-2 bg-white p-5 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 z-20 w-56 hover:scale-105 transition-transform duration-300">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shadow-sm">
                       <Zap className="w-6 h-6 fill-current" />
                     </div>
                     <div>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Target</p>
                       <p className="text-2xl font-black text-slate-800 leading-none">100% EV</p>
                     </div>
                   </div>
                   <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner mt-4 border border-slate-200/50">
                     <div className="h-full bg-gradient-to-r from-[#8CC63F] to-[#2E7D32] w-[34%] rounded-full relative">
                       <div className="absolute top-0 right-0 bottom-0 w-6 bg-white/30 skew-x-12 translate-x-3"></div>
                     </div>
                   </div>
                </div>

              </div>
              
              {/* Caption */}
              <p className="text-center text-[13px] font-medium text-slate-500 mt-4 md:mt-2 italic relative z-10 px-8 leading-relaxed">
                "Delhi's fleet going electric — one vehicle at a time"
              </p>
            </div>

            {/* Right Side: Circulars & Quick Links */}
            <div className="w-full lg:w-7/12 bg-[#2E7D32] rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col relative overflow-hidden border border-[#1B5E20]">
              {/* Background abstract element */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
              
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-8 relative z-10 flex items-center gap-4 tracking-tight">
                <div className="w-2.5 h-8 bg-[#FFC107] rounded-full"></div>
                Circulars & Notifications
              </h2>
              
              {/* Circulars List */}
              <div className="flex-1 space-y-1 relative z-10 mb-10">
                {[
                  { text: 'Bank Guarantee Format', isNew: true },
                  { text: 'EV compliance targets shall be applicable from 15-06-2024', isNew: true },
                  { text: 'Portal Launched on 16-03-2024', isNew: true },
                  { text: 'Policy on Aggregator and Delivery Service Provider notified on 21-10-2023', isNew: false },
                  { text: 'Draft policy on Aggregator and Delivery Service Provider announced on 24-05-2023', isNew: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer border-b border-white/10 pb-4 pt-3 last:border-0 hover:bg-white/5 px-3 -mx-3 rounded-xl transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#FFC107] group-hover:text-amber-950 text-white shadow-sm transition-colors duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-white/90 text-[13px] md:text-sm font-medium leading-relaxed group-hover:text-white transition-colors flex-1 pr-2">
                      {item.text}
                    </p>
                    {item.isNew && (
                      <span className="px-2.5 py-0.5 bg-[#E73C33] text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-md animate-pulse flex-shrink-0 mt-1 border border-red-400">New</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Links Grid */}
              <div className="pt-8 border-t border-white/10 relative z-10">
                <h3 className="text-white/60 font-bold text-[11px] uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                  <span>Quick Actions</span>
                  <div className="h-px bg-white/10 flex-1"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Apply for License', icon: FileText },
                    { label: 'Declare My Fleet', icon: Car },
                    { label: 'Check EV Compliance', icon: Target },
                    { label: 'Submit Grievance', icon: MessageSquare },
                  ].map((link, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group border-[3px] border-transparent hover:border-[#8CC63F]/30">
                      <div className="w-12 h-12 rounded-xl bg-[#F1F8F1] text-[#2E7D32] flex items-center justify-center group-hover:bg-[#2E7D32] group-hover:text-white transition-colors duration-300 shadow-inner">
                        <link.icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading font-bold text-sm text-slate-800 leading-tight group-hover:text-[#2E7D32] transition-colors">{link.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-16">
            <span className="text-xl">🌿</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-[#2E7D32]">How It Works</h2>
            <span className="text-xl">🌿</span>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-0.5 border-t-4 border-dashed border-[#2E7D32]/20 z-0"></div>
            
            {[
              { step: 'Step 1', title: 'Apply for License', desc: 'Upload docs online', icon: FileText },
              { step: 'Step 2', title: 'Declare Your Fleet', desc: 'Add vehicles fortnightly', icon: Car },
              { step: 'Step 3', title: 'Track EV Compliance', desc: 'Meet phased targets', icon: Target }
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-full bg-[#F1F8F1] border-[6px] border-white shadow-xl flex items-center justify-center mb-6 text-[#2E7D32] hover:scale-105 transition-transform duration-300">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="px-4 py-1 rounded-full bg-[#FFC107] text-amber-950 font-bold text-xs mb-3 shadow-md">{item.step}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EV Adoption Timeline - Premium Grid Design */}
      <section id="ev-targets" className="bg-slate-50/70 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#2E7D32] mb-4">EV Target Milestones</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Clear, phased electrification goals for aggregators operating in the NCT of Delhi up to 2030.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 relative">
            <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-[#2E7D32] via-[#2E7D32]/50 to-slate-200 -z-10 rounded-full" />
            
            {[
              { time: '6 Months', pct: '5%', past: true, icon: Clock },
              { time: '1 Year', pct: '15%', past: true, icon: Zap },
              { time: '2 Years', pct: '25%', past: true, icon: Car },
              { time: '3 Years', pct: '50%', current: true, icon: BarChart3 },
              { time: '4 Years', pct: '75%', future: true, icon: Shield },
              { time: '5 Years', pct: '100%', future: true, icon: Target },
              { time: '2030 🎯', pct: '100% EV', highlight: true, icon: Leaf },
            ].map((node) => (
              <div key={node.time} className={`relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 min-h-[160px] ${node.current ? 'bg-[#2E7D32] text-white shadow-xl scale-110 z-10 border-4 border-[#2E7D32] hover:scale-115' : node.highlight ? 'bg-gradient-to-br from-[#FFC107] to-amber-500 text-amber-950 shadow-lg hover:shadow-xl hover:-translate-y-1' : node.past ? 'bg-[#F1F8F1] border-2 border-[#2E7D32]/30 shadow-sm hover:border-[#2E7D32]/60' : 'bg-[#F8FCF8] border border-[#2E7D32]/10 opacity-90 hover:opacity-100 hover:bg-[#F1F8F1]'}`}>
                {node.current && (
                  <div className="absolute -top-3.5 px-3 py-1 bg-[#FFC107] text-amber-950 text-[10px] font-bold rounded-full shadow-md uppercase tracking-wider animate-[pulse_2s_infinite]">Current Phase</div>
                )}
                
                <div className={`mb-3 transition-colors ${node.current ? 'text-green-200' : node.highlight ? 'text-amber-900/60' : 'text-[#2E7D32]/50'}`}>
                   <node.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-center leading-tight ${node.current ? 'text-green-100' : node.highlight ? 'text-amber-900' : 'text-[#2E7D32]/70'}`}>
                  {node.time}
                </div>
                
                <div className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${node.current ? 'text-white' : node.highlight ? 'text-amber-950' : node.past ? 'text-[#2E7D32]' : 'text-slate-400'}`}>
                  {node.pct}
                </div>
                
                {node.past && (
                  <div className="absolute top-3 right-3 flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Go Electric? */}
      <section className="bg-slate-50/50 w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#2E7D32] mb-4">Why Go Electric?</h2>
            <p className="text-[#2E7D32]/70 font-medium max-w-2xl mx-auto">Exclusive benefits designed to accelerate the transition to zero-emission mobility.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Zero Annual Fee', desc: 'No annual fee for EVs (vs ₹50–₹200/year for petrol/CNG)', icon: Zap, bg: 'bg-[#F1F8F1]', color: 'text-[#2E7D32]' },
              { title: 'Priority Renewal', desc: 'Fast-tracked license applications and renewals for EV-first fleets', icon: CheckCircle2, bg: 'bg-[#F1F8F1]', color: 'text-[#8CC63F]' },
              { title: 'Cleaner Delhi', desc: 'Contribute to NCT\'s 2030 zero-emission goals and reduce pollution', icon: Leaf, bg: 'bg-[#F1F8F1]', color: 'text-[#2E7D32]' }
            ].map((card) => (
              <div key={card.title} className={`${card.bg} p-8 rounded-[32px] flex flex-col items-center text-center shadow-lg shadow-slate-200/70 hover:shadow-2xl hover:shadow-[#2E7D32]/15 transition-all duration-300 hover:-translate-y-2 border-[5px] border-white group relative overflow-hidden`}>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-bl-full -mr-8 -mt-8 pointer-events-none group-hover:scale-110 transition-transform" />
                
                <div className={`w-20 h-20 rounded-2xl bg-white flex flex-shrink-0 items-center justify-center mb-8 shadow-md border border-[#2E7D32]/10 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 ${card.color} relative z-10 mt-2`}>
                  <card.icon className="w-10 h-10" />
                </div>
                
                <h3 className="font-display font-bold tracking-tight text-xl mb-3 text-slate-800 relative z-10">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px] font-medium relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative bg-white overflow-hidden pt-16 md:pt-24 pb-24">
        <div className="relative bg-white w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12 text-[#2E7D32]">Frequently Asked Questions</h2>
            <div className="space-y-4">
          {[
            { q: 'What happens if I miss the fortnightly declaration?', a: 'Missing the fortnightly declaration window may result in temporary suspension of specific fleet operations, and repeated defaults could attract regulatory fines as per the GACP guidelines.' },
            { q: 'How is annual fee calculated for my fleet?', a: 'The annual fee is calculated based on the number and type of vehicles in your active fleet. While ICE vehicles (Petrol/CNG) attract a fee of ₹50–₹200/year per vehicle, EVs are completely exempt.' },
            { q: 'What is the penalty for EV non-compliance?', a: 'Non-compliance with phased EV targets can lead to progressive penalties, starting from warnings and compounded fines, leading up to license suspension for continuous non-adherence.' }
          ].map((faq, i) => (
            <details key={i} className="group border-2 border-slate-100 rounded-xl bg-white overflow-hidden open:ring-2 open:ring-[#2E7D32]/20 open:border-transparent transition-all">
              <summary className="font-semibold text-slate-800 px-6 py-5 cursor-pointer flex justify-between items-center hover:bg-slate-50 transition-colors list-none">
                {faq.q}
                <span className="text-[#2E7D32] group-open:rotate-45 group-open:bg-[#2E7D32] group-open:text-white transition-all duration-300 w-6 h-6 rounded-full flex items-center justify-center font-bold text-lg leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Innovative Footer */}
      <footer className="bg-[#062417] text-slate-300 relative overflow-hidden border-t border-emerald-900/40">
        {/* Background Subtle Grid & Accent Light */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-emerald-900/50">
            
            {/* Brand Column (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10a352] to-[#0d5c3a] flex items-center justify-center text-white shadow-md shadow-emerald-950/50 border border-emerald-400/20">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-white tracking-tight block leading-tight">
                    Delhi Aggregator Portal
                  </span>
                  <span className="text-[11px] text-emerald-400/90 font-medium tracking-wide block uppercase">
                    Transport Dept · Govt of NCT of Delhi
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
                The single-window digital governance portal for onboarding, fleet electrification monitoring, and license compliance for ride-hailing and delivery service providers.
              </p>

              {/* Realtime Operational Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>System Operational · 100% Uptime</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-emerald-400/90">
                Portals & Services
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li>
                  <Link to="/register" className="hover:text-emerald-400 transition-colors">
                    Aggregator Onboarding
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-emerald-400 transition-colors">
                    Fleet Declaration
                  </Link>
                </li>
                <li>
                  <a href="#ev-targets" className="hover:text-emerald-400 transition-colors">
                    EV Target Calculator
                  </a>
                </li>
                <li>
                  <a href="#scheme" className="hover:text-emerald-400 transition-colors">
                    Bank Guarantee Format
                  </a>
                </li>
                <li>
                  <Link to="/login" className="hover:text-emerald-400 transition-colors">
                    Public Grievance Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policy & Guidelines */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-emerald-400/90">
                Guidelines
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li>
                  <a href="#scheme" className="hover:text-emerald-400 transition-colors">
                    Delhi Policy Gazette 2023
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    EV Charging Grid
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    Fee Exemption Policy
                  </a>
                </li>
                <li>
                  <a href="#scheme" className="hover:text-emerald-400 transition-colors">
                    Circulars & Orders
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    Help & FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpdesk & Contact */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-emerald-400/90">
                Helpdesk & Support
              </h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">Toll-Free Helpline</span>
                    <span className="text-white font-bold">1800-11-3854</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">Official Support Email</span>
                    <span className="text-white font-medium text-xs break-all">aggregator-ev@delhi.gov.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">Headquarters</span>
                    <span className="text-slate-300 text-xs">5/9 Under Hill Rd, Transport Dept, Rajpur Rd, Delhi 110054</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Line */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="text-center md:text-left space-y-1">
              <p>© 2026 Transport Department, Government of NCT of Delhi. All rights reserved.</p>
              <p className="text-[11px] text-slate-500">Designed & Maintained for Delhi EV Aggregator Compliance Scheme.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-[12px]">
              <span className="hover:text-emerald-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-emerald-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-emerald-400 cursor-pointer transition-colors">Hyperlinking Policy</span>
              <span className="hover:text-emerald-400 cursor-pointer transition-colors">Disclaimer</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 transition-all font-semibold"
              >
                <span>Top</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
