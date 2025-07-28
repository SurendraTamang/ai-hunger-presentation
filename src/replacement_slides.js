    // Slide 3: What is Web Scraping?
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            What is Web Scraping?
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
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
    // Slide 4: Why Web Scraping?
    {
      id: 4,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Why Web Scraping Matters
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">💰</span>
                  <div>
                    <h3 className="text-xl font-bold text-green-400">Business Intelligence</h3>
                    <p className="text-gray-300">Monitor competitor prices, track market trends</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Data Analysis</h3>
                    <p className="text-gray-300">Gather large datasets for research and ML</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🚀</span>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">Automation</h3>
                    <p className="text-gray-300">Automate manual data collection tasks</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 rounded-xl border border-orange-500/30">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Lead Generation</h3>
                    <p className="text-gray-300">Find potential customers and contacts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5: Python Web Scraping Stack
    {
      id: 5,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Python Web Scraping Tools
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
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
                tool: 'Selenium',
                desc: 'Browser automation',
                use: 'JavaScript-heavy sites',
                icon: '🤖',
                color: 'from-orange-600 to-red-600'
              },
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} p-6 rounded-xl`}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{item.tool}</h3>
                </div>
                <p className="text-white/80 mb-2">{item.desc}</p>
                <p className="text-white/90 font-medium">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 6: Why Choose Scrapy?
    {
      id: 6,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 7: Your First Scrapy Spider
    {
      id: 7,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
                      <span className="text-purple-400">yield</span> {<br />
                      <div className="pl-8">
                        <span className="text-orange-400">'text'</span>: quote.css(<span className="text-orange-400">'span.text::text'</span>).get(),<br />
                        <span className="text-orange-400">'author'</span>: quote.css(<span className="text-orange-400">'span small::text'</span>).get(),<br />
                      </div>
                      }
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
    // Slide 8: Scrapy Architecture
    {
      id: 8,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 9: Advanced Scrapy Features
    {
      id: 9,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Advanced Scrapy Features
          </h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-2"># Handling Pagination</div>
              <div className="text-gray-300">
                next_page = response.css(<span className="text-orange-400">'a.next::attr(href)'</span>).get()<br />
                <span className="text-purple-400">if</span> next_page:<br />
                <div className="pl-4">
                  <span className="text-purple-400">yield</span> response.follow(next_page, self.parse)
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-2"># Custom Settings</div>
              <div className="text-gray-300">
                custom_settings = {<br />
                <div className="pl-4">
                  <span className="text-orange-400">'DOWNLOAD_DELAY'</span>: <span className="text-blue-400">3</span>,<br />
                  <span className="text-orange-400">'CONCURRENT_REQUESTS'</span>: <span className="text-blue-400">1</span>,<br />
                </div>
                }
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-2"># Item Pipelines</div>
              <div className="text-gray-300">
                <span className="text-purple-400">def</span> <span className="text-yellow-400">process_item</span>(<span className="text-blue-400">self</span>, item, spider):<br />
                <div className="pl-4">
                  item[<span className="text-orange-400">'price'</span>] = float(item[<span className="text-orange-400">'price'</span>])<br />
                  <span className="text-purple-400">return</span> item
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-2"># User Agent Rotation</div>
              <div className="text-gray-300">
                <span className="text-gray-500"># settings.py</span><br />
                DOWNLOADER_MIDDLEWARES = {<br />
                <div className="pl-4">
                  <span className="text-orange-400">'scrapy.contrib.downloadermiddleware.useragent.UserAgentMiddleware'</span>: <span className="text-blue-400">None</span>,<br />
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Best Practices & Ethics
    {
      id: 10,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 11: Common Challenges
    {
      id: 11,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 12: Real-World Applications
    {
      id: 12,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 13: Scaling Your Scraping
    {
      id: 13,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 14: Your Learning Path
    {
      id: 14,
      content: (
        <div className="h-full flex flex-col justify-center items-center p-12">
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
    // Slide 15: Q&A
    {
      id: 15,
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
              <p>Email: [your email]</p>
              <p>LinkedIn: [your profile]</p>
              <p>GitHub: [your username]</p>
            </div>
            <div className="mt-12 text-gray-400">
              <p className="text-lg mb-4">Resources:</p>
              <div className="flex justify-center space-x-6 text-sm">
                <span>Scrapy Documentation</span>
                <span>•</span>
                <span>Python.org</span>
                <span>•</span>
                <span>Real Python Tutorials</span>
              </div>
            </div>
            <div className="mt-12 text-2xl text-gray-300 italic">
              "With great scraping power comes great responsibility"
            </div>
          </div>
        </div>
      ),
    },