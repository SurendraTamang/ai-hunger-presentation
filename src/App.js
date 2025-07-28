import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Globe, Users } from 'lucide-react';

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
  }, [currentSlide, nextSlide, prevSlide]);

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
                    <img 
                      src={`${process.env.PUBLIC_URL}/profile-photo.jpg`}
                      alt="Surendra Tamang" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-center p-4" style={{ display: 'none' }}>
                      <Users className="w-20 h-20 mx-auto mb-2" />
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
                  Surendra Tamang 
                </h1>
                <p className="text-2xl text-blue-400 font-light">
                  Software Engineer from Nepal <span className="text-xl">🇳🇵</span>
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
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`${process.env.PUBLIC_URL}/thorong-la.jpg`}
                      alt="Thorang La Pass - 5,416m altitude" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Thorong photo failed to load:', e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-center" style={{ display: 'none' }}>
                      <div>
                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                        </svg>
                        <p className="text-sm">Thorang La Pass</p>
                        <p className="text-xs mt-1 text-blue-300">5,416m altitude</p>
                      </div>
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
                <Code className="w-32 h-32 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Web Scraping 101
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light">
              An Introduction to Data Extraction from the Web
            </p>
            <div className="mt-12 text-gray-400 animate-pulse">
              <p className="text-xl italic">"Turning the web into your database, one scrape at a time"</p>
            </div>
          </div>
          <div className="absolute bottom-10 animate-bounce">
            <ChevronRight className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      ),
    },
    // Slide 3: What is Web Scraping?
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            What is Web Scraping?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl px-4">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-500/30">
              <Globe className="w-16 h-16 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Automated Data Extraction</h3>
              <p className="text-lg text-gray-300">
                Web scraping is the process of automatically extracting data from websites using code.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30">
              <Code className="w-16 h-16 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Programmatic Access</h3>
              <p className="text-lg text-gray-300">
                Instead of manually copying data, we write programs to do it automatically at scale.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { icon: '⚡', text: 'Fast' },
              { icon: '📊', text: 'Scalable' },
              { icon: '🔄', text: 'Repeatable' },
              { icon: '🎯', text: 'Accurate' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 4: The Web Scraping Process
    {
      id: 4,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            The Web Scraping Process
          </h2>
          
          {/* Main Process Flow */}
          <div className="w-full max-w-6xl mb-8 px-4">
            <div className="bg-gray-900/50 rounded-2xl p-4 md:p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🕷️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">CRAWLING</h3>
                    <p className="text-gray-300">Navigate & Discover</p>
                  </div>
                </div>
                
                <div className="text-2xl md:text-4xl text-gray-600 animate-pulse rotate-90 md:rotate-0">→</div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">PARSING</h3>
                    <p className="text-gray-300">Extract & Structure</p>
                  </div>
                </div>
                
                <div className="text-2xl md:text-4xl text-gray-600 animate-pulse rotate-90 md:rotate-0">→</div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💾</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">STORING</h3>
                    <p className="text-gray-300">Save & Process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl px-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-500/50">
              <div className="text-center mb-4">
                <span className="text-5xl">🕷️</span>
                <h3 className="text-2xl font-bold text-blue-400 mt-2">Crawling</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• Send HTTP requests</li>
                <li>• Follow links systematically</li>
                <li>• Handle pagination</li>
                <li>• Manage request queues</li>
                <li>• Respect rate limits</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-xl border border-green-500/50">
              <div className="text-center mb-4">
                <span className="text-5xl">🔍</span>
                <h3 className="text-2xl font-bold text-green-400 mt-2">Parsing</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• CSS Selectors</li>
                <li>• XPath expressions</li>
                <li>• Regular expressions</li>
                <li>• Data cleaning</li>
                <li>• Structure validation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-xl border border-purple-500/50">
              <div className="text-center mb-4">
                <span className="text-5xl">💾</span>
                <h3 className="text-2xl font-bold text-purple-400 mt-2">Storing</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• JSON/CSV export</li>
                <li>• Database insertion</li>
                <li>• Data transformation</li>
                <li>• Quality checks</li>
                <li>• Pipeline processing</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5: Python Web Scraping Stack
    {
      id: 5,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Python Web Scraping Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl px-4">
            {[
              {
                tool: 'Requests',
                desc: 'HTTP library for Python',
                use: 'Making HTTP requests to websites',
                icon: '🌐',
                color: 'from-green-600 to-emerald-600'
              },
              {
                tool: 'BeautifulSoup',
                desc: 'HTML/XML parser',
                use: 'Parsing and navigating HTML',
                icon: '🍲',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                tool: 'Scrapy',
                desc: 'Full-featured scraping framework',
                use: 'Production-grade web scraping',
                icon: '🕷️',
                color: 'from-purple-600 to-pink-600'
              },
              {
                tool: 'XPath & CSS Selectors',
                desc: 'Parsing techniques',
                use: 'Precise element targeting & extraction',
                icon: '🎯',
                color: 'from-cyan-600 to-blue-600'
              },
              {
                tool: 'Playwright',
                desc: 'Modern browser automation',
                use: 'JavaScript sites & cross-browser testing',
                icon: '🎭',
                color: 'from-indigo-600 to-purple-600'
              },
              {
                tool: 'Puppeteer',
                desc: 'Chrome automation library',
                use: 'Headless Chrome control & JS rendering',
                icon: '🤖',
                color: 'from-orange-600 to-red-600'
              },
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} p-6 rounded-xl`}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-white">{item.tool}</h3>
                </div>
                <p className="text-white/80 mb-2 text-sm">{item.desc}</p>
                <p className="text-white/90 font-medium text-sm">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 6: AI Tools & Other Languages
    {
      id: 6,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            AI Tools & Other Languages
          </h2>
          
          {/* AI-Powered Tools Section */}
          <div className="w-full max-w-6xl mb-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">🤖 AI-Powered Scraping</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-4">
              {[
                {
                  tool: 'Firecrawl',
                  desc: 'AI web-to-markdown',
                  icon: '🔥',
                  color: 'from-orange-600 to-red-600'
                },
                {
                  tool: 'Crawl4AI',
                  desc: 'LLM-friendly crawler',
                  icon: '🚀',
                  color: 'from-blue-600 to-indigo-600'
                },
                {
                  tool: 'ScrapeGraphAI',
                  desc: 'Graph-based AI scraper',
                  icon: '🧠',
                  color: 'from-purple-600 to-pink-600'
                },
                {
                  tool: 'Jina AI Reader',
                  desc: 'URL-to-markdown API',
                  icon: '📖',
                  color: 'from-cyan-600 to-blue-600'
                },
                {
                  tool: 'ScrapeOwl',
                  desc: 'Smart JS rendering',  
                  icon: '🦉',
                  color: 'from-teal-600 to-green-600'
                },
                {
                  tool: 'Browserless',
                  desc: 'AI browser automation',
                  icon: '🤖',
                  color: 'from-emerald-600 to-cyan-600'
                },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} p-4 rounded-xl`}>
                  <div className="text-center">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-lg font-bold text-white mt-2">{item.tool}</h4>
                    <p className="text-white/80 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Languages Section */}
          <div className="w-full max-w-6xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">🌐 Beyond Python</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {[
                {
                  language: 'JavaScript/TypeScript',
                  tools: ['Puppeteer', 'Playwright', 'Cheerio', 'Selenium WebDriver'],
                  icon: '🟨',
                  color: 'from-yellow-600 to-orange-600'
                },
                {
                  language: 'Go (Golang)',
                  tools: ['Colly', 'chromedp', 'GoQuery', 'Surf'],
                  icon: '🐹',
                  color: 'from-cyan-600 to-blue-600'
                },
                {
                  language: 'Rust',
                  tools: ['reqwest', 'scraper', 'headless_chrome', 'fantoccini'],
                  icon: '🦀',
                  color: 'from-orange-600 to-red-600'
                },
              ].map((lang, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${lang.color} p-6 rounded-xl`}>
                  <div className="text-center mb-4">
                    <span className="text-4xl">{lang.icon}</span>
                    <h4 className="text-xl font-bold text-white mt-2">{lang.language}</h4>
                  </div>
                  <ul className="space-y-1">
                    {lang.tools.map((tool, i) => (
                      <li key={i} className="text-white/90 text-sm">• {tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-400 italic">Choose the right tool for your use case and team expertise</p>
          </div>
        </div>
      ),
    },
    // Slide 7: Why Choose Scrapy?
    {
      id: 7,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Why Choose Scrapy?
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              {
                title: 'Built for Scale',
                features: ['Concurrent requests', 'Built-in throttling', 'Memory efficient'],
                icon: '⚡',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                title: 'Production Ready',
                features: ['Error handling', 'Retry mechanisms', 'Monitoring tools'],
                icon: '🏭',
                color: 'from-green-600 to-emerald-600'
              },
              {
                title: 'Extensible',
                features: ['Custom middlewares', 'Data pipelines', 'Rich ecosystem'],
                icon: '🔧',
                color: 'from-purple-600 to-pink-600'
              },
            ].map((section, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${section.color} p-6 rounded-xl`}>
                <div className="text-5xl text-center mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{section.title}</h3>
                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i} className="text-white/90 flex items-center">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 8: Your First Scrapy Spider
    {
      id: 8,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Your First Scrapy Spider
          </h2>
          <div className="bg-gray-900 rounded-xl p-8 w-full max-w-5xl font-mono text-sm">
            <div className="space-y-4">
              <div className="text-green-400"># Install Scrapy</div>
              <div className="text-gray-300 pl-4">pip install scrapy</div>
              
              <div className="text-green-400 mt-6"># Create your spider</div>
              <div className="text-gray-300 pl-4">
                <span className="text-purple-400">import</span> scrapy
                <br /><br />
                <span className="text-purple-400">class</span> <span className="text-yellow-400">QuotesSpider</span>(scrapy.Spider):
                <div className="pl-8">
                  name = <span className="text-orange-400">'quotes'</span><br />
                  start_urls = [<span className="text-orange-400">'http://quotes.toscrape.com'</span>]<br /><br />
                  <span className="text-purple-400">def</span> <span className="text-yellow-400">parse</span>(<span className="text-blue-400">self</span>, response):
                  <div className="pl-8">
                    <span className="text-purple-400">for</span> quote <span className="text-purple-400">in</span> response.css(<span className="text-orange-400">'div.quote'</span>):<br />
                    <div className="pl-8">
                      <span className="text-purple-400">yield</span> {'{'}
                      <div className="pl-8">
                        <span className="text-orange-400">'text'</span>: quote.css(<span className="text-orange-400">'span.text::text'</span>).get(),<br />
                        <span className="text-orange-400">'author'</span>: quote.css(<span className="text-orange-400">'span small::text'</span>).get(),<br />
                      </div>
                      {'}'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-green-400 mt-6"># Run the spider</div>
              <div className="text-gray-300 pl-4">scrapy crawl quotes -o quotes.json</div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 9: Scrapy Architecture
    {
      id: 9,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            How Scrapy Works
          </h2>
          <div className="w-full max-w-6xl">
            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">Request/Response Flow</h3>
              <div className="flex items-center justify-center space-x-4 text-lg">
                <div className="bg-green-600/20 px-4 py-2 rounded border border-green-500">Spider</div>
                <ChevronRight className="text-gray-400" />
                <div className="bg-blue-600/20 px-4 py-2 rounded border border-blue-500">Scheduler</div>
                <ChevronRight className="text-gray-400" />
                <div className="bg-purple-600/20 px-4 py-2 rounded border border-purple-500">Downloader</div>
                <ChevronRight className="text-gray-400" />
                <div className="bg-yellow-600/20 px-4 py-2 rounded border border-yellow-500">Middlewares</div>
                <ChevronRight className="text-gray-400" />
                <div className="bg-orange-600/20 px-4 py-2 rounded border border-orange-500">Pipelines</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: '🕷️', text: 'Spider generates requests', color: 'from-green-600 to-emerald-600' },
                { icon: '📅', text: 'Scheduler queues requests', color: 'from-blue-600 to-indigo-600' },
                { icon: '⬇️', text: 'Downloader fetches pages', color: 'from-purple-600 to-pink-600' },
                { icon: '🔧', text: 'Pipelines process data', color: 'from-orange-600 to-red-600' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} p-6 rounded-lg text-center`}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-sm text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Scrapy ETL Pipeline for Data Engineers 
    {
      id: 10,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Scrapy ETL Pipeline for Data Engineers
          </h2>
          
          {/* ETL Flow Diagram */}
          <div className="w-full max-w-6xl mb-8 px-4">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-4 md:p-6 border border-gray-600">
              <div className="flex flex-col md:flex-row items-center justify-between text-center space-y-6 md:space-y-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-white">E</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">EXTRACT</h3>
                  <p className="text-sm text-gray-300 mt-1">Scrapy Spiders</p>
                </div>
                
                <div className="text-3xl md:text-5xl text-blue-400 animate-pulse mx-6 rotate-90 md:rotate-0">→</div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-white">T</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">TRANSFORM</h3>
                  <p className="text-sm text-gray-300 mt-1">Item Pipelines</p>
                </div>
                
                <div className="text-3xl md:text-5xl text-purple-400 animate-pulse mx-6 rotate-90 md:rotate-0">→</div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-white">L</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">LOAD</h3>
                  <p className="text-sm text-gray-300 mt-1">Data Sinks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Components */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/50">
              <div className="text-center mb-4">
                <span className="text-4xl">🕷️</span>
                <h3 className="text-xl font-bold text-green-400 mt-2">Extract Layer</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Multi-domain spiders</li>
                <li>• Concurrent crawling</li>
                <li>• Auto-throttling</li>
                <li>• Request/Response middleware</li>
                <li>• Error handling & retries</li>
                <li>• Distributed crawling</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/50">
              <div className="text-center mb-4">
                <span className="text-4xl">⚙️</span>
                <h3 className="text-xl font-bold text-blue-400 mt-2">Transform Layer</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Data validation pipelines</li>
                <li>• Type conversion & casting</li>
                <li>• Duplicate filtering</li>
                <li>• Data enrichment</li>
                <li>• Custom processing logic</li>
                <li>• Schema normalization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/50">
              <div className="text-center mb-4">
                <span className="text-4xl">🗄️</span>
                <h3 className="text-xl font-bold text-purple-400 mt-2">Load Layer</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• PostgreSQL/MySQL</li>
                <li>• MongoDB/Redis</li>
                <li>• Cloud storage (S3/GCS)</li>
                <li>• Data warehouses</li>
                <li>• Message queues</li>
                <li>• Real-time streaming</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-400 italic">Perfect for building production data pipelines at scale</p>
          </div>
        </div>
      ),
    },
    // Slide 11: Before You Start Scraping
    {
      id: 11,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Before You Start Scraping
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl px-4">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">📋 Pre-Scraping Checklist</h3>
              {[
                { icon: '🔍', title: 'Check for APIs First', desc: 'Official APIs are always better than scraping' },
                { icon: '🤖', title: 'Read robots.txt', desc: 'Respect the website\'s scraping rules' },
                { icon: '📋', title: 'Review Terms of Service', desc: 'Ensure you\'re legally compliant' },
                { icon: '🧪', title: 'Start Small', desc: 'Test with a few pages before scaling' },
              ].map((item, idx) => (
                <div key={idx} className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/50">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-yellow-400">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">🚀 Planning Essentials</h3>
              {[
                { icon: '💾', title: 'Plan Data Storage', desc: 'Database, CSV, JSON - decide early' },
                { icon: '📊', title: 'Set Up Monitoring', desc: 'Track success rates and errors' },
                { icon: '⏱️', title: 'Design Rate Limiting', desc: 'Be respectful to target servers' },
                { icon: '🔄', title: 'Plan for Changes', desc: 'Websites change - build flexible scrapers' },
              ].map((item, idx) => (
                <div key={idx} className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/50">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-orange-400">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-400 italic">Preparation prevents poor performance!</p>
          </div>
        </div>
      ),
    },
    // Slide 12: Best Practices & Ethics
    {
      id: 12,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Scraping Ethics & Best Practices
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
            <div>
              <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">✅ DO</h3>
              <div className="space-y-4">
                {[
                  { icon: '🤖', text: 'Respect robots.txt' },
                  { icon: '⏱️', text: 'Add delays between requests' },
                  { icon: '📋', text: 'Check Terms of Service' },
                  { icon: '🔍', text: 'Use APIs when available' },
                  { icon: '📧', text: 'Contact website owners if needed' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-900/20 p-4 rounded-lg border border-green-500/50 flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">❌ DON'T</h3>
              <div className="space-y-4">
                {[
                  { icon: '💥', text: 'Overwhelm servers' },
                  { icon: '🚫', text: 'Scrape personal data' },
                  { icon: '⚠️', text: 'Ignore copyright laws' },
                  { icon: '🌪️', text: 'Make parallel requests without limits' },
                  { icon: '👤', text: 'Scrape behind login pages' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-red-900/20 p-4 rounded-lg border border-red-500/50 flex items-center space-x-3">
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
    // Slide 13: Common Challenges
    {
      id: 13,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
            Common Scraping Challenges
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">Challenges</h3>
              {[
                { icon: '🔥', title: 'Rate Limiting', desc: 'Websites block too many requests' },
                { icon: '🧩', title: 'CAPTCHAs', desc: 'Human verification systems' },
                { icon: '⚡', title: 'Dynamic Content', desc: 'JavaScript-rendered pages' },
                { icon: '🎭', title: 'Bot Detection', desc: 'Anti-scraping measures' },
              ].map((item, idx) => (
                <div key={idx} className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="text-xl font-bold text-yellow-400">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-400 mb-6">Solutions</h3>
              {[
                { icon: '⏰', title: 'Smart Delays', desc: 'Use random delays and AutoThrottle' },
                { icon: '🔄', title: 'Proxy Rotation', desc: 'Rotate IP addresses' },
                { icon: '🌐', title: 'Scrapy-Splash', desc: 'Render JavaScript content' },
                { icon: '🕵️', title: 'Headers & User Agents', desc: 'Mimic real browsers' },
              ].map((item, idx) => (
                <div key={idx} className="bg-green-900/20 p-4 rounded-lg border border-green-500/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="text-xl font-bold text-green-400">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // Slide 14: Real-World Applications
    {
      id: 14,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
            {[
              {
                title: 'E-commerce Monitoring',
                examples: ['Price tracking', 'Inventory monitoring', 'Review analysis'],
                icon: '🛒',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                title: 'Lead Generation',
                examples: ['Contact information', 'Business directories', 'Social media profiles'],
                icon: '📧',
                color: 'from-green-600 to-emerald-600'
              },
              {
                title: 'Market Research',
                examples: ['News monitoring', 'Trend analysis', 'Competitor tracking'],
                icon: '📊',
                color: 'from-purple-600 to-pink-600'
              },
              {
                title: 'Real Estate',
                examples: ['Property listings', 'Price trends', 'Market analysis'],
                icon: '🏠',
                color: 'from-orange-600 to-red-600'
              },
            ].map((app, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${app.color} p-6 rounded-xl`}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{app.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                </div>
                <ul className="space-y-2">
                  {app.examples.map((example, i) => (
                    <li key={i} className="text-white/90">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 15: Scaling to Production
    {
      id: 15,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Scaling to Production
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              {
                title: 'Deployment',
                items: ['Scrapyd server', 'Docker containers', 'Cloud platforms'],
                icon: '🚀',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                title: 'Data Storage',
                items: ['PostgreSQL', 'MongoDB', 'Cloud storage'],
                icon: '💾',
                color: 'from-green-600 to-emerald-600'
              },
              {
                title: 'Monitoring',
                items: ['Scrapy stats', 'Error tracking', 'Performance metrics'],
                icon: '📈',
                color: 'from-purple-600 to-pink-600'
              },
            ].map((section, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${section.color} p-6 rounded-xl`}>
                <div className="text-5xl text-center mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-white/90">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 16: Your Learning Journey
    {
      id: 16,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Your Learning Journey
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              {
                phase: 'Week 1-2',
                title: 'Foundations',
                tasks: ['Install Python & Scrapy', 'Build first spider', 'Learn CSS selectors'],
                icon: '🌱',
                color: 'from-green-600 to-emerald-600'
              },
              {
                phase: 'Week 3-4',
                title: 'Intermediate',
                tasks: ['Handle forms & pagination', 'Create data pipelines', 'Deploy to cloud'],
                icon: '🚀',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                phase: 'Month 2+',
                title: 'Advanced',
                tasks: ['JavaScript sites', 'Distributed scraping', 'Build production system'],
                icon: '⚡',
                color: 'from-purple-600 to-pink-600'
              },
            ].map((stage, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stage.color} p-6 rounded-xl`}>
                <div className="text-5xl text-center mb-4">{stage.icon}</div>
                <div className="text-center mb-4">
                  <div className="text-sm text-white/80">{stage.phase}</div>
                  <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                </div>
                <ul className="space-y-2">
                  {stage.tasks.map((task, i) => (
                    <li key={i} className="text-white/90 text-sm">• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-2xl text-gray-300 italic">
            Start small, think big, scrape responsibly!
          </div>
        </div>
      ),
    },
    // Slide 17: Questions & Resources
    {
      id: 17,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              Questions & Discussion
            </h2>
            <div className="text-8xl mb-8">❓</div>
            <div className="space-y-4 text-xl text-gray-300">
              <p>Contact:</p>
              <p>📧 Email: tamangsurendra44@gmail.com</p>
              <p>💼 LinkedIn: linkedin.com/in/surentmg</p>
              <p>🐙 GitHub: github.com/surendratamang</p>
              <p>📰 Newsletter: learnwebscraping.substack.com</p>
            </div>
            <div className="mt-12 text-gray-400">
              <p className="text-lg mb-4">Learning Resources:</p>
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto text-sm">
                <div className="bg-gray-800/50 p-3 rounded-lg">📚 Scrapy Documentation</div>
                <div className="bg-gray-800/50 p-3 rounded-lg">🐍 Real Python Tutorials</div>
                <div className="bg-gray-800/50 p-3 rounded-lg">💻 Web Scraping with Python Book</div>
                <div className="bg-gray-800/50 p-3 rounded-lg">🎓 Scrapy Cloud Free Tier</div>
              </div>
            </div>
            <div className="mt-12 text-2xl text-gray-300 italic">
              "With great scraping power comes great responsibility"
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