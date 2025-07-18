import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Database, AlertTriangle, TrendingUp, Shield, Clock, Users, Zap, Code, DollarSign, Lock, Globe, Cpu, BarChart, FileText, Search, Wifi, Eye } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setAnimateIn(false);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setAnimateIn(true);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setAnimateIn(false);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setAnimateIn(true);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Personal Introduction
    {
      id: 1,
      content: (
        <div className="h-full flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Background with mountain silhouette effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-blue-900 to-indigo-950"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-6 px-8 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Profile Photo Placeholder */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Replace this div with your actual image */}
                    <div className="text-gray-400 text-center p-4">
                      <Users className="w-20 h-20 mx-auto mb-2" />
                      <p className="text-sm">[Your Photo Here]</p>
                      <p className="text-xs mt-2">Replace with your image</p>
                    </div>
                  </div>
                </div>
                {/* Mountain badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-green-600 to-teal-600 rounded-full p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                  </svg>
                </div>
              </div>
              
              {/* Info Section */}
              <div className="text-left space-y-4">
                <h1 className="text-5xl font-black text-white mb-2">
                  [Your Name]
                </h1>
                <p className="text-2xl text-blue-400 font-light">
                  [Your Profession]
                </p>
                
                <div className="flex items-center space-x-3 mt-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 inline-flex">
                  <span className="text-xl">🏔️</span>
                  <span className="text-lg text-gray-300">Trekking Enthusiast</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-lg text-blue-300">Thorang La Pass</span>
                </div>
              </div>
            </div>
            
            {/* Trekking Photo Section */}
            <div className="mt-8 relative group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-2 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    {/* Replace with your Thorang La Pass photo */}
                    <div className="text-gray-400 text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                      </svg>
                      <p className="text-sm">[Your Thorang La Pass Photo]</p>
                      <p className="text-xs mt-1 text-blue-300">5,416m altitude</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p className="text-lg italic">"From conquering mountains to exploring digital peaks"</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce">
            <ChevronRight className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      ),
    },
    // Slide 2: Title
    {
      id: 2,
      content: (
        <div className="h-full flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-50"></div>
          <div className="relative z-10 text-center space-y-8 px-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="w-32 h-32 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Database className="w-16 h-16 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Feeding the Beast
            </h1>
            <p className="text-3xl text-gray-300 font-light">
              How Web Scraping Fuels AI's Insatiable Hunger
            </p>
            <div className="mt-12 text-gray-400 animate-pulse">
              <p className="text-xl italic">"Every word you've ever posted online might be teaching an AI right now"</p>
            </div>
          </div>
          <div className="absolute bottom-10 animate-bounce">
            <ChevronRight className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      ),
    },
    // Slide 2: The Hungry Beast
    {
      id: 2,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            One AI Model's Appetite
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/30 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">GPT-4 ate:</h3>
              <p className="text-4xl font-black text-white">13 trillion tokens</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 p-8 rounded-2xl border border-orange-500/30 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">That's like:</h3>
              <p className="text-xl text-white">Reading every book in <span className="font-bold text-yellow-400">Tribhuvan University Library</span> <span className="font-black text-3xl text-yellow-400">50 million times</span></p>
              <p className="text-sm text-gray-400 mt-2">Or all of Mahabharat 100 million times!</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/20 to-green-900/20 p-8 rounded-2xl border border-yellow-500/30 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🥟</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Daily momo diet:</h3>
              <p className="text-xl text-white">570GB = <span className="text-2xl font-bold text-orange-400">11.4 billion momos</span></p>
              <p className="text-xl text-white mt-2">→ <span className="text-3xl font-black text-green-400">900 billion momos!</span></p>
              <p className="text-sm text-gray-400">(45TB+ daily)</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/30 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Growing</h3>
              <p className="text-4xl font-black text-white">10x hungrier</p>
              <p className="text-xl text-blue-400">with each generation</p>
            </div>
          </div>
          <div className="mt-12 text-3xl font-bold text-red-400 animate-pulse">
            The Beast is STARVING for more...
          </div>
        </div>
      ),
    },
    // Slide 3: The Buffet
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            What's on the Menu?
          </h2>
          <div className="relative w-full max-w-5xl">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🌐', name: 'Common Crawl', data: '9.5 petabytes of web pages', color: 'from-blue-500 to-blue-600' },
                { icon: '💬', name: 'Reddit', data: '18 years of conversations', color: 'from-orange-500 to-red-600' },
                { icon: '📹', name: 'YouTube', data: '1 million+ hours transcribed', color: 'from-red-500 to-pink-600' },
                { icon: '💻', name: 'GitHub', data: 'Billions of lines of code', color: 'from-gray-600 to-gray-700' },
                { icon: '📰', name: 'News Sites', data: 'Every article, every day', color: 'from-indigo-500 to-purple-600' },
                { icon: '🎨', name: 'DeviantArt', data: 'Millions of artworks', color: 'from-pink-500 to-purple-600' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-xl transform hover:scale-110 transition-all duration-300 hover:z-10 relative overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-white/80">{item.data}</p>
                  <div className="absolute -right-8 -bottom-8 opacity-10">
                    <Database className="w-24 h-24" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-3xl text-gray-300 italic font-light">
                "If it's online, it's probably been scraped"
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 4: The Money
    {
      id: 4,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Your Posts Are Worth Millions
          </h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { from: 'Reddit', to: 'Google', amount: '$60M/year', icon: '🤝' },
              { from: 'Reddit', to: 'OpenAI', amount: '$70M/year', icon: '💰' },
              { from: 'Stack Overflow', to: 'OpenAI', amount: 'Undisclosed millions', icon: '🤫' },
            ].map((deal, idx) => (
              <div key={idx} className="flex items-center justify-between bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-green-500/30 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{deal.icon}</span>
                  <span className="text-2xl font-bold text-white">{deal.from}</span>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-green-400">{deal.to}</span>
                </div>
                <span className="text-3xl font-black text-green-400">{deal.amount}</span>
              </div>
            ))}
            <div className="mt-8 bg-gradient-to-r from-red-900/50 to-red-800/50 p-8 rounded-xl border border-red-500/50">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">Your share:</span>
                <span className="text-5xl font-black text-red-400 animate-pulse">$0.00</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-2xl text-gray-400 italic">
            Plot twist: You're the unpaid intern training your AI replacement
          </div>
        </div>
      ),
    },
    // Slide 5: The Rebellion
    {
      id: 5,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            When Creators Fight Back
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
            {[
              { icon: '🗞️', title: 'NY Times vs OpenAI', desc: 'Seeking billions in damages', color: 'from-blue-600 to-indigo-600' },
              { icon: '🎨', title: '20,000+ artists', desc: '"Stop stealing our work!"', color: 'from-purple-600 to-pink-600' },
              { icon: '🖼️', title: 'Getty Images', desc: 'Suing for $1.8 TRILLION', color: 'from-green-600 to-teal-600' },
              { icon: '🚫', title: 'Reddit Blackout', desc: '8,500 subreddits went dark', color: 'from-orange-600 to-red-600' },
              { icon: '💻', title: 'Stack Overflow Civil War', desc: 'Users banned for deleting own answers', color: 'from-gray-600 to-gray-700' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-lg text-white/90">{item.desc}</p>
                  </div>
                </div>
                <AlertTriangle className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 6: Technical Heist
    {
      id: 6,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            How to Steal the Internet (In 3 Steps)
          </h2>
          <div className="bg-gray-900 rounded-xl p-8 w-full max-w-4xl font-mono">
            <div className="space-y-4">
              <div className="text-green-400"># Step 1: Deploy the Army</div>
              <div className="text-gray-300 pl-4">scrapers = deploy_to_cloud(servers=<span className="text-orange-400">10000</span>)</div>
              
              <div className="text-green-400 mt-6"># Step 2: Disguise as Humans</div>
              <div className="text-gray-300 pl-4">use_residential_proxies(IPs=<span className="text-orange-400">150_million</span>)</div>
              <div className="text-gray-300 pl-4">mimic_human_behavior(mouse_moves=<span className="text-blue-400">True</span>)</div>
              
              <div className="text-green-400 mt-6"># Step 3: Feast!</div>
              <div className="text-gray-300 pl-4">
                <span className="text-purple-400">while</span> internet_exists:
                <div className="pl-8">scrape_everything()</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8 w-full max-w-4xl">
            {[
              { icon: '🤖', label: 'Headless browsers' },
              { icon: '🔄', label: '150M+ rotating IPs' },
              { icon: '🎭', label: 'Human behavior mimics' },
              { icon: '⚡', label: '100,000 pages/hour' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 7: Arms Race
    {
      id: 7,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
            The Epic Battle
          </h2>
          <div className="flex justify-between items-start w-full max-w-6xl">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-blue-400 mb-6 text-center">Team Defense</h3>
              {[
                { icon: '🛡️', text: 'Cloudflare: "Not so fast!"' },
                { icon: '🧩', text: 'CAPTCHAs: "Prove you\'re human"' },
                { icon: '🚦', text: 'Rate limiting: "Slow down there"' },
                { icon: '🍯', text: 'Honeypot traps: "Gotcha!"' },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/50 transform hover:scale-105 transition-transform">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-lg text-white">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mx-8">
              <div className="text-6xl animate-pulse">⚔️</div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">Team Scrape</h3>
              {[
                { icon: '🥷', text: 'Stealth browsers: "I\'m totally human"' },
                { icon: '🏠', text: 'Residential proxies: "Just browsing"' },
                { icon: '🤖', text: 'AI solving CAPTCHAs: "Beat you!"' },
                { icon: '🔄', text: 'Adaptive systems: "Nice try"' },
              ].map((item, idx) => (
                <div key={idx} className="bg-red-900/30 p-4 rounded-lg border border-red-500/50 transform hover:scale-105 transition-transform">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-lg text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-2xl text-gray-400 italic">
            Winner: It's complicated...
          </div>
        </div>
      ),
    },
    // Slide 8: Countdown
    {
      id: 8,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Data Doomsday: 2028
          </h2>
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="relative grid grid-cols-4 gap-8">
              {[
                { year: '2024', status: 'Still feasting', emoji: '🍕', color: 'text-green-400' },
                { year: '2026', status: 'Quality data scarce', emoji: '😰', color: 'text-yellow-400' },
                { year: '2028', status: 'THE WELL RUNS DRY', emoji: '💀', color: 'text-red-400' },
                { year: '2030', status: 'AI eating AI?', emoji: '🌀', color: 'text-purple-400' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-gray-700">
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <h3 className={`text-2xl font-bold ${item.color}`}>{item.year}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-3xl font-bold text-red-400 animate-pulse">
            The Hunger Games begin when real data ends
          </div>
        </div>
      ),
    },
    // Slide 9: Hidden Victims
    {
      id: 9,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Real People, Real Impact
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
            {[
              {
                role: 'Artists',
                impacts: ['"My style was cloned overnight"', 'Commission requests: 📉 -70%'],
                icon: '🎨',
                color: 'from-purple-600 to-pink-600'
              },
              {
                role: 'Writers',
                impacts: ['"AI writes \'my\' articles now"', 'Traffic to actual work: 📉 -40%'],
                icon: '✍️',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                role: 'Developers',
                impacts: ['"My Stack Overflow answers train my replacement"', 'Job security: 🤷‍♂️'],
                icon: '👨‍💻',
                color: 'from-green-600 to-teal-600'
              },
              {
                role: 'Publishers',
                impacts: ['Search traffic: 📉 -35%', 'Ad revenue: 💸 Evaporating'],
                icon: '📰',
                color: 'from-orange-600 to-red-600'
              },
            ].map((victim, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${victim.color} p-6 rounded-xl relative overflow-hidden`}>
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{victim.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{victim.role}</h3>
                    {victim.impacts.map((impact, i) => (
                      <p key={i} className="text-white/90 mb-2">{impact}</p>
                    ))}
                  </div>
                </div>
                <Users className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 10: Synthetic Solution
    {
      id: 10,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            When AI Eats Its Own Tail
          </h2>
          <div className="bg-gray-900 rounded-xl p-8 w-full max-w-5xl">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">The Ouroboros Problem:</h3>
            <div className="flex items-center justify-center space-x-4 text-xl">
              <div className="bg-green-600/20 px-4 py-2 rounded border border-green-500">Human Content</div>
              <ChevronRight className="text-gray-400" />
              <div className="bg-blue-600/20 px-4 py-2 rounded border border-blue-500">AI Training</div>
              <ChevronRight className="text-gray-400" />
              <div className="bg-purple-600/20 px-4 py-2 rounded border border-purple-500">AI Content</div>
              <ChevronRight className="text-gray-400" />
              <div className="bg-red-600/20 px-4 py-2 rounded border border-red-500">AI Training</div>
              <ChevronRight className="text-gray-400" />
              <div className="bg-gray-600/20 px-4 py-2 rounded border border-gray-500">Degraded AI</div>
              <ChevronRight className="text-gray-400" />
              <div className="bg-red-900/20 px-4 py-2 rounded border border-red-700 animate-pulse">Gibberish</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8 w-full max-w-4xl">
            {[
              { icon: '🤖', text: 'AI training on AI = "Habsburg AI"' },
              { icon: '📉', text: 'Quality degrades each generation' },
              { icon: '🌀', text: '"Model Collapse" is real' },
              { icon: '❓', text: 'Can synthetic data save us?' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg text-center border border-gray-700">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-3xl text-red-400 font-bold italic">
            Spoiler: Probably not
          </div>
        </div>
      ),
    },
    // Slide 11: Fight Back
    {
      id: 11,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            How to Fight Back (If You Dare)
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
            <div>
              <h3 className="text-3xl font-bold text-orange-400 mb-6">For Creators:</h3>
              <div className="space-y-4">
                {[
                  { icon: '🚫', text: 'Robots.txt: "Stay out!"' },
                  { icon: '🎨', text: 'Nightshade/Glaze: Poison the well' },
                  { icon: '⚖️', text: 'Legal action: Join the lawsuits' },
                  { icon: '🔒', text: 'Paywalls: Lock it down' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/50 flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-6">For Platforms:</h3>
              <div className="space-y-4">
                {[
                  { icon: '💰', text: 'Sell out: Get that licensing deal' },
                  { icon: '🛡️', text: 'Cloudflare: Block the bots' },
                  { icon: '📜', text: 'New ToS: "No AI training allowed"' },
                  { icon: '🤝', text: 'Or... partner up and profit' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/50 flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 12: Future
    {
      id: 12,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              {
                title: 'The Licensing Economy',
                icon: '💰',
                points: ['Every byte has a price tag', 'Creators get micropayments', 'AI companies go broke?'],
                color: 'from-green-600 to-emerald-600'
              },
              {
                title: 'The Closed Internet',
                icon: '🔒',
                points: ['Everything behind paywalls', 'AI trains on synthetic data', 'Quality collapses'],
                color: 'from-red-600 to-pink-600'
              },
              {
                title: 'The Grand Bargain',
                icon: '🤝',
                points: ['New laws balance both sides', 'Fair compensation systems', 'Sustainable AI development'],
                color: 'from-blue-600 to-indigo-600'
              },
            ].map((future, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${future.color} p-6 rounded-xl transform hover:scale-105 transition-transform`}>
                <div className="text-5xl text-center mb-4">{future.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{future.title}</h3>
                <ul className="space-y-2">
                  {future.points.map((point, i) => (
                    <li key={i} className="text-white/90 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 13: Uncomfortable Truth
    {
      id: 13,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            We're All Complicit
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
            <div>
              <h3 className="text-3xl font-bold text-pink-400 mb-6">The Paradox:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖❤️</span>
                  <span className="text-xl text-white">We love AI tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">😡</span>
                  <span className="text-xl text-white">We hate our data being used</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🆓</span>
                  <span className="text-xl text-white">We want free services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-xl text-white">We want to get paid</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-400 mb-6">The Reality:</h3>
              <div className="space-y-4 text-xl text-white">
                <p>• You've already trained the AI</p>
                <p>• The genie won't go back in the bottle</p>
                <p>• The future requires compromise</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 14: Key Takeaways
    {
      id: 14,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            What You Need to Know
          </h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { number: '1', text: 'Your data = Their billions', icon: '💰' },
              { number: '2', text: 'The feast ends by 2028', icon: '⏰' },
              { number: '3', text: 'Legal battles are just beginning', icon: '⚖️' },
              { number: '4', text: 'Technical protection exists (use it!)', icon: '🛡️' },
              { number: '5', text: 'The internet will never be the same', icon: '🌐' },
            ].map((point, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 flex items-center space-x-4 transform hover:scale-105 transition-transform">
                <div className="bg-cyan-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  {point.number}
                </div>
                <span className="text-3xl">{point.icon}</span>
                <span className="text-2xl text-white flex-1">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 15: Call to Action
    {
      id: 15,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            What Can YOU Do?
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              {
                title: 'For Developers',
                actions: ['Build ethical scrapers', 'Respect robots.txt', 'Consider the creators'],
                icon: '👨‍💻',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                title: 'For Creators',
                actions: ['Know your rights', 'Use available protections', 'Join the conversation'],
                icon: '🎨',
                color: 'from-purple-600 to-pink-600'
              },
              {
                title: 'For Everyone',
                actions: ['Demand transparency', 'Support fair compensation', 'Shape the future we want'],
                icon: '🌍',
                color: 'from-green-600 to-teal-600'
              },
            ].map((group, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${group.color} p-6 rounded-xl`}>
                <div className="text-5xl text-center mb-4">{group.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{group.title}</h3>
                <ul className="space-y-2">
                  {group.actions.map((action, i) => (
                    <li key={i} className="text-white/90">• {action}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-3xl font-bold text-white">
            The choice is ours. The time is now.
          </div>
        </div>
      ),
    },
    // Slide 16: Questions
    {
      id: 16,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              Let's Discuss the Future
            </h2>
            <div className="text-8xl mb-8">❓</div>
            <div className="space-y-4 text-xl text-gray-300">
              <p>Contact:</p>
              <p>Email: [your email]</p>
              <p>LinkedIn: [your profile]</p>
              <p>Twitter: [your handle]</p>
            </div>
            <div className="mt-12 text-gray-400">
              <p className="text-lg mb-4">Resources:</p>
              <div className="flex justify-center space-x-6 text-sm">
                <span>Epoch AI Research</span>
                <span>•</span>
                <span>EFF Digital Rights</span>
                <span>•</span>
                <span>Creative Commons</span>
              </div>
            </div>
            <div className="mt-12 text-2xl text-gray-300 italic">
              "The best way to predict the future is to invent it"
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen bg-black text-white overflow-hidden relative">
      <div className={`h-full transition-all duration-500 ${animateIn ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'}`}>
        {slides[currentSlide].content}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-8 right-8 text-gray-400">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;