/**
 * SAFEX Website JavaScript - Fixed Version
 * Handles all interactive functionality for the Safety and Assurance Federation for Excellence website
 */

// Application Data
const SAFEX_DATA = {
  standards: [
    {
      code: "SFS-100",
      title: "Contractor Safety Management",
      scope: "Comprehensive framework for managing contractor safety across all industrial sectors",
      edition: "2025",
      domain: "contractor",
      status: "active",
      summary: "This standard provides a systematic approach to contractor safety management, including prequalification processes, safety performance monitoring, and continuous improvement methodologies. It covers risk assessment protocols, competency requirements, and integration with existing safety management systems.",
      keyPoints: [
        "Contractor prequalification and selection criteria",
        "Performance monitoring and KPI frameworks",
        "Integration with host organization safety systems",
        "Incident investigation and learning protocols"
      ]
    },
    {
      code: "SFS-200",
      title: "Process Safety & Hazard Controls",
      scope: "Advanced process safety management including HAZOP, LOPA, and bow-tie analysis",
      edition: "2025",
      domain: "process",
      status: "active",
      summary: "Comprehensive guidance on process safety management systems, covering hazard identification, risk analysis methodologies, and the implementation of safety barriers. This standard integrates best practices from major hazard industries and provides practical tools for process safety professionals.",
      keyPoints: [
        "HAZOP and LOPA methodologies",
        "Safety barrier management",
        "Process safety metrics and indicators",
        "Management of change procedures"
      ]
    },
    {
      code: "SFS-300",
      title: "Electrical Safety & LOTO",
      scope: "Electrical safety protocols and lockout/tagout procedures for high-risk environments",
      edition: "2024",
      domain: "electrical",
      status: "active",
      summary: "Essential requirements for electrical safety in industrial environments, including lockout/tagout procedures, arc flash protection, and electrical work permit systems. The standard addresses both routine maintenance and complex electrical installations.",
      keyPoints: [
        "Lockout/Tagout procedures and verification",
        "Arc flash risk assessment and PPE selection",
        "Electrical work permit systems",
        "Competency requirements for electrical workers"
      ]
    },
    {
      code: "SFS-400",
      title: "Construction Health & Safety",
      scope: "Integrated safety management for construction projects from planning to completion",
      edition: "2025",
      domain: "construction",
      status: "active",
      summary: "Holistic approach to construction safety management, covering project lifecycle safety integration, subcontractor management, and site-specific hazard controls. Includes guidance on safety leadership and behavioral safety programs.",
      keyPoints: [
        "Construction safety planning and design integration",
        "Fall protection and height work safety",
        "Mobile plant and equipment safety",
        "Subcontractor safety management"
      ]
    },
    {
      code: "SFS-500",
      title: "Ergonomics & Human Factors",
      scope: "Human-centered design principles for workplace safety and efficiency",
      edition: "2024",
      domain: "ergonomics",
      status: "active",
      summary: "Evidence-based approach to workplace ergonomics and human factors engineering. Covers physical ergonomics, cognitive load management, and the design of human-machine interfaces for optimal safety and performance.",
      keyPoints: [
        "Workplace ergonomic assessment methodologies",
        "Manual handling risk controls",
        "Human-machine interface design",
        "Cognitive workload and fatigue management"
      ]
    },
    {
      code: "SFS-600",
      title: "Risk Assessment & JSA",
      scope: "Systematic approach to job safety analysis and risk assessment methodologies",
      edition: "2025",
      domain: "risk",
      status: "active",
      summary: "Comprehensive framework for workplace risk assessment and job safety analysis. Provides practical tools and methodologies for identifying, evaluating, and controlling workplace hazards across all industry sectors.",
      keyPoints: [
        "Hazard identification techniques and tools",
        "Risk evaluation and matrix methodologies",
        "Job Safety Analysis (JSA) procedures",
        "Risk control hierarchy and implementation"
      ]
    },
    {
      code: "SFS-700",
      title: "Emergency Preparedness & Response",
      scope: "Comprehensive emergency management and crisis response frameworks",
      edition: "2024",
      domain: "emergency",
      status: "active",
      summary: "Strategic approach to emergency preparedness, response, and recovery. Covers emergency planning, crisis communication, business continuity, and coordination with external emergency services.",
      keyPoints: [
        "Emergency response planning and procedures",
        "Crisis communication and stakeholder engagement",
        "Business continuity and recovery planning",
        "Emergency drill and exercise programs"
      ]
    },
    {
      code: "SFS-800",
      title: "Incident Reporting & Learning",
      scope: "Advanced incident investigation and organizational learning systems",
      edition: "2025",
      domain: "incident",
      status: "active",
      summary: "Modern approach to incident management focusing on learning and continuous improvement. Covers investigation methodologies, root cause analysis, and the development of organizational learning cultures.",
      keyPoints: [
        "Incident classification and reporting systems",
        "Root cause analysis methodologies",
        "Learning culture development",
        "Performance indicators and trending analysis"
      ]
    },
    {
      code: "SFS-900",
      title: "Occupational Hygiene & Exposure Control",
      scope: "Industrial hygiene practices and exposure monitoring protocols",
      edition: "2024",
      domain: "hygiene",
      status: "active",
      summary: "Scientific approach to occupational hygiene and health protection. Covers exposure assessment, control strategies, and health surveillance programs for chemical, physical, and biological hazards.",
      keyPoints: [
        "Exposure assessment and monitoring strategies",
        "Chemical, physical, and biological hazard controls",
        "Personal protective equipment selection and use",
        "Health surveillance and medical monitoring"
      ]
    }
  ],
  
  research: [
    {
      title: "Machine-Learning-Assisted Near-Miss Analysis in Manufacturing",
      year: "2025",
      authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
      abstract: "This study explores the application of machine learning algorithms to identify patterns in near-miss reporting data across manufacturing facilities. Using a dataset of 50,000 near-miss reports from 15 manufacturing sites, we developed predictive models to identify high-risk scenarios before they result in incidents. The research demonstrates a 34% improvement in proactive risk identification compared to traditional analysis methods. Our findings suggest that natural language processing of incident narratives, combined with operational data, can significantly enhance predictive safety capabilities. The study provides a framework for implementing ML-driven safety analytics in industrial settings.",
      topic: "AI & Technology",
      sector: "Manufacturing",
      method: "Quantitative Analysis",
      doi: "10.5555/safex.2025.001"
    },
    {
      title: "Heat Stress Risk Controls in High-Humidity Workplaces: A Field Study",
      year: "2025",
      authors: "Dr. James Park, Dr. Lisa Thompson",
      abstract: "This comprehensive field study examines heat stress management strategies across 25 high-humidity industrial workplaces. Over 18 months, we monitored 400 workers using wearable sensors to measure core body temperature, heart rate variability, and hydration levels. The research identifies critical control measures including engineered cooling solutions, work-rest cycles, and physiological monitoring protocols. Results show that combined engineering and administrative controls reduce heat-related incidents by 67%. The study provides evidence-based recommendations for WBGT thresholds, personal protective equipment selection, and worker acclimatization programs in tropical and subtropical industrial environments.",
      topic: "Occupational Health",
      sector: "Industrial",
      method: "Field Study",
      doi: "10.5555/safex.2025.002"
    },
    {
      title: "Leading Indicators for Construction Safety: A Meta-Review",
      year: "2024",
      authors: "Prof. David Kumar, Dr. Emma Watson",
      abstract: "This meta-analysis examines 127 peer-reviewed studies on leading safety indicators in construction, covering data from over 2.3 million construction worker-hours. The research identifies the most predictive leading indicators including safety climate surveys, near-miss reporting rates, behavioral observations, and training completion metrics. Statistical analysis reveals that combined leading indicator programs reduce serious injuries by an average of 45% compared to lagging indicator approaches alone. The study provides validated measurement frameworks and implementation guidance for construction organizations seeking to enhance proactive safety management. Recommendations include specific indicator weightings and threshold values for different construction sectors.",
      topic: "Safety Management",
      sector: "Construction",
      method: "Meta-Analysis",
      doi: "10.5555/safex.2024.008"
    }
  ],
  
  insights: [
    {
      title: "2025 OHS Outlook: AI for Incident Prevention",
      category: "Technology",
      readTime: "8 min",
      summary: "Exploring how artificial intelligence is transforming workplace safety through predictive analytics, automated hazard detection, and real-time risk assessment.",
      content: "Artificial intelligence is revolutionizing occupational health and safety, offering unprecedented capabilities for incident prevention and risk management...",
      publishDate: "2025-01-15",
      author: "SAFEX Research Team"
    },
    {
      title: "Interpreting the Draft Revision of ISO 45001",
      category: "Standards",
      readTime: "12 min",
      summary: "A comprehensive analysis of proposed changes to ISO 45001:2026, focusing on digital integration and enhanced worker participation requirements.",
      content: "The proposed ISO 45001:2026 revision introduces significant enhancements to occupational health and safety management systems...",
      publishDate: "2024-12-10",
      author: "SAFEX Standards Committee"
    },
    {
      title: "Designing Safer Contractor Onboarding",
      category: "Management",
      readTime: "10 min",
      summary: "Best practices for developing comprehensive contractor safety orientation programs that reduce incidents in the first 90 days of engagement.",
      content: "Effective contractor onboarding is critical for workplace safety, with research showing that 40% of contractor incidents occur within the first 90 days...",
      publishDate: "2024-11-22",
      author: "Dr. Safety Expert"
    }
  ],
  
  stats: {
    standards: 47,
    audits: 1284,
    sectors: 23,
    citations: 3456
  }
};

// Main Application Class
class SAFEXApp {
  constructor() {
    this.currentPage = 'home';
    this.currentTheme = localStorage.getItem('safex-theme') || 'light';
    this.assessmentData = {
      currentQuestion: 0,
      answers: {},
      totalQuestions: 8
    };
    this.filteredStandards = SAFEX_DATA.standards;
    this.filteredResearch = SAFEX_DATA.research;
    
    this.init();
  }
  
  init() {
    this.initTheme();
    this.initNavigation();
    this.initMobileMenu();
    this.initScrollEffects();
    this.initAnimatedCounters();
    this.initAssessmentTool();
    this.initSearch();
    this.initForms();
    this.initCookieBanner();
    this.initModals();
    this.populateContent();
    this.bindEvents();
    
    console.log('SAFEX Application initialized successfully');
  }
  
  // Theme Management - Fixed
  initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Set initial theme
    html.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
    
    if (themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.cycleTheme();
      });
    }
  }
  
  cycleTheme() {
     // const themes = ['dark', 'light', 'contrast'];
    const themes = ['dark', 'light'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    
    this.currentTheme = themes[nextIndex];
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('safex-theme', this.currentTheme);
    
    this.updateThemeIcon();
    
    // Announce theme change for screen readers
    this.announceToScreenReader(`Theme changed to ${this.currentTheme} mode`);
  }
  
  updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (!themeIcon) return;
    
    const icons = {
      dark: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
      light: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
      contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20V2z"/>'
    };
    
    themeIcon.innerHTML = icons[this.currentTheme] || icons.dark;
  }
  
  //Navigation Management - Fixed
  initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const pageId = href.substring(1);
          this.navigateToPage(pageId);
        }
      });
    });
    
    // Handle CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn, .btn[href="#audits"]');
    ctaButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateToPage('audits');
      });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'home';
      this.navigateToPage(page, false);
    });
    
    // Set initial page based on hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      this.navigateToPage(hash, false);
    }
  }
  
  navigateToPage(pageId, pushState = true) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      this.currentPage = pageId;
      
      // Update URL
      if (pushState) {
        history.pushState({ page: pageId }, '', `#${pageId}`);
      }
      
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
          link.classList.add('active');
        }
      });
      
      // Update page title
      this.updatePageTitle(pageId);
      
      // Close mobile menu if open
      this.closeMobileMenu();
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Focus management for accessibility
      if (targetPage.querySelector('h1')) {
        targetPage.querySelector('h1').focus();
      }
      
      // Trigger page-specific initialization
      this.onPageChange(pageId);
    }
  }
  
  updatePageTitle(pageId) {
    const pageTitles = {
      home: 'SAFEX - Setting the Standard for Safer Work',
      standards: 'Standards - SAFEX',
      audits: 'Audits & Inspections - SAFEX',
      research: 'Research - SAFEX',
      insights: 'Safety Insights - SAFEX',
      about: 'About SAFEX',
      careers: 'Careers - SAFEX',
      contact: 'Contact SAFEX',
      privacy: 'Privacy Policy - SAFEX',
      terms: 'Terms of Service - SAFEX'
    };
    
    document.title = pageTitles[pageId] || 'SAFEX';
  }
  
  onPageChange(pageId) {
    switch (pageId) {
      case 'standards':
        this.initStandardsPage();
        break;
      case 'research':
        this.initResearchPage();
        break;
      case 'home':
        this.restartAnimations();
        break;
    }
  }
  
  // Mobile Menu - Fixed
  initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = toggle.classList.contains('active');
        
        if (isActive) {
          this.closeMobileMenu();
        } else {
          this.openMobileMenu();
        }
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        this.closeMobileMenu();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }
  
  openMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (toggle) toggle.classList.add('active');
    if (menu) menu.classList.add('active');
    
    // Focus first menu item
    const firstLink = menu?.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
    
    this.announceToScreenReader('Mobile menu opened');
  }
  
  closeMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (toggle) toggle.classList.remove('active');
    if (menu) menu.classList.remove('active');
  }
  
  // Scroll Effects
  initScrollEffects() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header?.classList.add('hidden');
      } else {
        header?.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }
  
  // Animated Counters
  initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  }
  
  restartAnimations() {
    // Reset and restart counter animations when returning to home
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      counter.textContent = '0';
    });
    
    // Reinitialize counters
    setTimeout(() => {
      this.initAnimatedCounters();
    }, 100);
  }
  
  // Assessment Tool - Fixed
  initAssessmentTool() {
    const questions = document.querySelectorAll('.question');
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const submitBtn = document.getElementById('submit-assessment');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.prevQuestion();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextQuestion();
      });
    }
    
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.calculateAssessmentResults();
      });
    }
    
    // Add change listeners to radio buttons
    questions.forEach((question, index) => {
      const radios = question.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          this.assessmentData.answers[index] = radio.value;
        });
      });
    });
    
    this.updateAssessmentUI();
  }
  
  prevQuestion() {
    if (this.assessmentData.currentQuestion > 0) {
      this.assessmentData.currentQuestion--;
      this.updateAssessmentUI();
    }
  }
  
  nextQuestion() {
    const currentAnswer = this.getCurrentAnswer();
    if (!currentAnswer) {
      this.showError('Please select an answer before continuing.');
      return;
    }
    
    this.assessmentData.answers[this.assessmentData.currentQuestion] = currentAnswer;
    
    if (this.assessmentData.currentQuestion < this.assessmentData.totalQuestions - 1) {
      this.assessmentData.currentQuestion++;
      this.updateAssessmentUI();
    }
  }
  
  getCurrentAnswer() {
    const currentQuestion = document.querySelector('.question.active');
    if (!currentQuestion) return null;
    
    const selectedRadio = currentQuestion.querySelector('input[type="radio"]:checked');
    return selectedRadio ? selectedRadio.value : null;
  }
  
  updateAssessmentUI() {
    const questions = document.querySelectorAll('.question');
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const submitBtn = document.getElementById('submit-assessment');
    
    // Show current question
    questions.forEach((question, index) => {
      question.classList.toggle('active', index === this.assessmentData.currentQuestion);
    });
    
    // Update button states
    if (prevBtn) prevBtn.disabled = this.assessmentData.currentQuestion === 0;
    
    const isLastQuestion = this.assessmentData.currentQuestion === this.assessmentData.totalQuestions - 1;
    
    if (nextBtn) nextBtn.classList.toggle('hidden', isLastQuestion);
    if (submitBtn) submitBtn.classList.toggle('hidden', !isLastQuestion);
    
    // Restore previous answer if exists
    const currentAnswer = this.assessmentData.answers[this.assessmentData.currentQuestion];
    if (currentAnswer) {
      const currentQuestion = document.querySelector('.question.active');
      if (currentQuestion) {
        const radio = currentQuestion.querySelector(`input[value="${currentAnswer}"]`);
        if (radio) radio.checked = true;
      }
    }
  }
  
  calculateAssessmentResults() {
    const currentAnswer = this.getCurrentAnswer();
    if (!currentAnswer) {
      this.showError('Please select an answer before submitting.');
      return;
    }
    
    this.assessmentData.answers[this.assessmentData.currentQuestion] = currentAnswer;
    
    // Calculate score
    const yesCount = Object.values(this.assessmentData.answers).filter(answer => answer === 'yes').length;
    const percentage = (yesCount / this.assessmentData.totalQuestions) * 100;
    
    let level, description;
    
    if (percentage >= 90) {
      level = "Level 5 - Advanced";
      description = "Excellent! Your organization demonstrates advanced OHS maturity with comprehensive systems and continuous improvement practices.";
    } else if (percentage >= 70) {
      level = "Level 4 - Proficient";
      description = "Good progress! Your organization has solid OHS foundations with opportunities for enhancement in specific areas.";
    } else if (percentage >= 50) {
      level = "Level 3 - Developing";
      description = "Your organization is developing its OHS capabilities. Focus on systematic improvements and stakeholder engagement.";
    } else if (percentage >= 30) {
      level = "Level 2 - Basic";
      description = "Basic OHS elements are in place. Consider implementing more comprehensive management systems and training programs.";
    } else {
      level = "Level 1 - Initial";
      description = "Significant opportunities exist to enhance your OHS management system. Professional guidance is recommended.";
    }
    
    this.showAssessmentResults(level, description);
  }
  
  showAssessmentResults(level, description) {
    const questionsDiv = document.getElementById('assessment-questions');
    const controlsDiv = document.querySelector('.assessment-controls');
    const resultsDiv = document.getElementById('assessment-result');
    
    if (questionsDiv) questionsDiv.classList.add('hidden');
    if (controlsDiv) controlsDiv.classList.add('hidden');
    if (resultsDiv) resultsDiv.classList.remove('hidden');
    
    const levelDiv = resultsDiv?.querySelector('.result-level');
    const descriptionDiv = resultsDiv?.querySelector('.result-description');
    
    if (levelDiv) levelDiv.textContent = level;
    if (descriptionDiv) descriptionDiv.textContent = description;
    
    this.announceToScreenReader(`Assessment complete. Your result: ${level}`);
  }
  
  // Search Functionality - Fixed
  initSearch() {
    const standardsSearch = document.getElementById('standards-search');
    const researchSearch = document.getElementById('research-search');
    
    if (standardsSearch) {
      standardsSearch.addEventListener('input', (e) => {
        this.searchStandards(e.target.value);
      });
    }
    
    if (researchSearch) {
      researchSearch.addEventListener('input', (e) => {
        this.searchResearch(e.target.value);
      });
    }
    
    // Filter controls - Fixed
    const domainFilter = document.getElementById('domain-filter');
    const yearFilter = document.getElementById('year-filter');
    
    if (domainFilter) {
      domainFilter.addEventListener('change', () => this.filterStandards());
    }
    
    if (yearFilter) {
      yearFilter.addEventListener('change', () => this.filterStandards());
    }
  }
  
  searchStandards(query) {
    let filtered = SAFEX_DATA.standards;
    
    if (query.trim()) {
      filtered = filtered.filter(standard => 
        standard.title.toLowerCase().includes(query.toLowerCase()) ||
        standard.code.toLowerCase().includes(query.toLowerCase()) ||
        standard.scope.toLowerCase().includes(query.toLowerCase()) ||
        standard.summary.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    this.filteredStandards = filtered;
    this.renderStandards(filtered);
    
    if (query && filtered.length === 0) {
      this.showNoResults('standards-grid', 'No standards found matching your search.');
    }
  }
  
  searchResearch(query) {
    let filtered = SAFEX_DATA.research;
    
    if (query.trim()) {
      filtered = filtered.filter(paper => 
        paper.title.toLowerCase().includes(query.toLowerCase()) ||
        paper.authors.toLowerCase().includes(query.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(query.toLowerCase()) ||
        paper.topic.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    this.filteredResearch = filtered;
    this.renderResearch(filtered);
    
    if (query && filtered.length === 0) {
      this.showNoResults('research-grid', 'No research papers found matching your search.');
    }
  }
  
  filterStandards() {
    const domainFilter = document.getElementById('domain-filter');
    const yearFilter = document.getElementById('year-filter');
    const searchInput = document.getElementById('standards-search');
    
    const domainValue = domainFilter ? domainFilter.value : '';
    const yearValue = yearFilter ? yearFilter.value : '';
    const searchQuery = searchInput ? searchInput.value : '';
    
    let filtered = SAFEX_DATA.standards;
    
    if (domainValue) {
      filtered = filtered.filter(standard => standard.domain === domainValue);
    }
    
    if (yearValue) {
      filtered = filtered.filter(standard => standard.edition === yearValue);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(standard => 
        standard.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        standard.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        standard.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        standard.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    this.filteredStandards = filtered;
    this.renderStandards(filtered);
    
    if (filtered.length === 0) {
      this.showNoResults('standards-grid', 'No standards found matching your filters.');
    }
  }
  
  showNoResults(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: var(--space-8);">
          <p style="color: var(--color-muted); font-size: var(--text-lg); margin-bottom: var(--space-4);">${message}</p>
          <button class="btn btn-secondary" onclick="safexApp.clearFilters()">Clear Filters</button>
        </div>
      `;
    }
  }
  
  clearFilters() {
    // Clear search inputs
    const searchInputs = document.querySelectorAll('#standards-search, #research-search');
    searchInputs.forEach(input => {
      if (input) input.value = '';
    });
    
    // Clear filter dropdowns
    const filterSelects = document.querySelectorAll('#domain-filter, #year-filter');
    filterSelects.forEach(select => {
      if (select) select.value = '';
    });
    
    // Reset data and re-render
    this.filteredStandards = SAFEX_DATA.standards;
    this.filteredResearch = SAFEX_DATA.research;
    this.renderStandards(this.filteredStandards);
    this.renderResearch(this.filteredResearch);
  }
  
  // Content Population
  populateContent() {
    this.renderStandards(SAFEX_DATA.standards);
    this.renderResearch(SAFEX_DATA.research);
    this.renderInsights(SAFEX_DATA.insights);
  }
  
  renderStandards(standards) {
    const grid = document.getElementById('standards-grid');
    if (!grid) return;
    
    if (standards.length === 0) {
      this.showNoResults('standards-grid', 'No standards available.');
      return;
    }
    
    grid.innerHTML = standards.map(standard => `
      <div class="standard-card" data-domain="${standard.domain}" data-year="${standard.edition}">
        <div class="standard-header">
          <div class="standard-code">${standard.code}</div>
          <div class="standard-edition">${standard.edition} Edition</div>
        </div>
        <h4>${standard.title}</h4>
        <p>${standard.scope}</p>
        <div class="standard-details">
          <h5>Key Elements:</h5>
          <ul>
            ${standard.keyPoints?.map(point => `<li>${point}</li>`).join('') || '<li>Comprehensive guidance framework</li>'}
          </ul>
        </div>
        <div class="standard-actions">
          <button class="btn btn-primary btn-sm" onclick="safexApp.downloadStandard('${standard.code}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
          <button class="btn btn-outline btn-sm" onclick="safexApp.viewStandardDetails('${standard.code}')">View Details</button>
        </div>
      </div>
    `).join('');
  }
  
  renderResearch(research) {
    const grid = document.getElementById('research-grid');
    if (!grid) return;
    
    if (research.length === 0) {
      this.showNoResults('research-grid', 'No research papers available.');
      return;
    }
    
    grid.innerHTML = research.map(paper => `
      <article class="research-paper">
        <div class="paper-meta">
          <div class="paper-year">${paper.year}</div>
          <div class="paper-topic">${paper.topic}</div>
          <div class="paper-method">${paper.method}</div>
        </div>
        <h3 class="paper-title">${paper.title}</h3>
        <div class="paper-authors">${paper.authors}</div>
        <div class="paper-abstract">${paper.abstract}</div>
        <div class="paper-actions">
          <button class="btn btn-primary btn-sm" onclick="safexApp.downloadPaper('${paper.doi}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            Download PDF
          </button>
          <div class="doi-link">DOI: ${paper.doi}</div>
        </div>
      </article>
    `).join('');
  }
  
  renderInsights(insights) {
    const insightsSection = document.querySelector('#insights .container');
    if (!insightsSection) return;
    
    // This would be implemented for the insights page
    // For now, just placeholder implementation
  }
  
  // Page-specific initialization
  initStandardsPage() {
    // Initialize any standards-specific functionality
    this.filterStandards();
  }
  
  initResearchPage() {
    // Initialize any research-specific functionality
    this.renderResearch(this.filteredResearch);
  }
  
  // Form Handling
  initForms() {
    const auditForm = document.getElementById('audit-form');
    const contactForm = document.getElementById('contact-form');
    
    if (auditForm) {
      auditForm.addEventListener('submit', (e) => this.handleAuditForm(e));
    }
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
    }
    
    // Real-time validation
    const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredInputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }
  
  handleAuditForm(e) {
    e.preventDefault();
    
    if (!this.validateForm(e.target)) return;
    
    // Check honeypot
    const honeypot = e.target.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) {
      console.log('Spam detected');
      return;
    }
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission
    this.showFormSuccess('Thank you for your audit request. Our team will contact you within 2 business days.');
    e.target.reset();
  }
  
  handleContactForm(e) {
    e.preventDefault();
    
    if (!this.validateForm(e.target)) return;
    
    // Check honeypot
    const honeypot = e.target.querySelector('input[name="phone"]');
    if (honeypot && honeypot.value) {
      console.log('Spam detected');
      return;
    }
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission
    this.showFormSuccess('Thank you for your message. We will respond within 1 business day.');
    e.target.reset();
  }
  
  validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
      errorMessage = 'This field is required.';
      isValid = false;
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Please enter a valid email address.';
        isValid = false;
      }
    }
    
    this.showFieldError(field, isValid ? '' : errorMessage);
    return isValid;
  }
  
  showFieldError(field, message) {
    const errorId = field.getAttribute('aria-describedby');
    const errorElement = errorId ? document.getElementById(errorId) : null;
    
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.toggle('show', !!message);
    }
    
    field.classList.toggle('error', !!message);
    
    if (message) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  }
  
  clearFieldError(field) {
    this.showFieldError(field, '');
  }
  
  showFormSuccess(message) {
    // Create and show success message
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.textContent = message;
    alert.setAttribute('role', 'alert');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-success);
      color: white;
      padding: var(--space-4);
      border-radius: var(--radius);
      z-index: var(--z-tooltip);
      max-width: 400px;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
      alert.remove();
    }, 5000);
    
    this.announceToScreenReader(message);
  }
  
  showError(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-error';
    alert.textContent = message;
    alert.setAttribute('role', 'alert');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-error);
      color: white;
      padding: var(--space-4);
      border-radius: var(--radius);
      z-index: var(--z-tooltip);
      max-width: 400px;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
      alert.remove();
    }, 5000);
    
    this.announceToScreenReader(message);
  }
  
  // Cookie Management
  initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const preferencesBtn = document.getElementById('cookie-preferences');
    
    // Show banner if no consent stored
    if (!localStorage.getItem('safex-cookie-consent')) {
      setTimeout(() => {
        if (banner) banner.classList.remove('hidden');
      }, 2000);
    }
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.acceptAllCookies());
    }
    
    if (preferencesBtn) {
      preferencesBtn.addEventListener('click', () => this.openCookiePreferences());
    }
  }
  
  acceptAllCookies() {
    localStorage.setItem('safex-cookie-consent', JSON.stringify({
      functional: true,
      analytics: true,
      timestamp: Date.now()
    }));
    
    this.hideCookieBanner();
    this.announceToScreenReader('Cookie preferences saved');
  }
  
  openCookiePreferences() {
    const modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.add('active');
      
      // Focus modal
      const firstInput = modal.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }
  
  hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
  }
  
  // Modal Management
  initModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal(modal));
      }
      
      // Close on overlay click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
      
      // Close on escape key
      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal(modal);
        }
      });
    });
    
    // Save cookie preferences
    const savePrefsBtn = document.getElementById('save-preferences');
    if (savePrefsBtn) {
      savePrefsBtn.addEventListener('click', () => this.saveCookiePreferences());
    }
  }
  
  closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }
  
  saveCookiePreferences() {
    const functionalCheckbox = document.getElementById('functional-cookies');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    
    const functional = functionalCheckbox ? functionalCheckbox.checked : true;
    const analytics = analyticsCheckbox ? analyticsCheckbox.checked : false;
    
    localStorage.setItem('safex-cookie-consent', JSON.stringify({
      functional,
      analytics,
      timestamp: Date.now()
    }));
    
    this.hideCookieBanner();
    this.closeModal(document.getElementById('cookie-modal'));
    this.announceToScreenReader('Cookie preferences saved');
  }
  
  // Action Methods
  downloadStandard(code) {
    this.announceToScreenReader(`Downloading standard ${code}`);
    // Simulate download - in real app, this would trigger actual download
    this.showFormSuccess(`Standard ${code} download initiated. (Demo mode - no actual file downloads)`);
  }
  
  downloadPaper(doi) {
    this.announceToScreenReader(`Downloading research paper ${doi}`);
    // Simulate download
    this.showFormSuccess(`Research paper download initiated. (Demo mode - no actual file downloads)`);
  }
  
  viewStandardDetails(code) {
    const standard = SAFEX_DATA.standards.find(s => s.code === code);
    if (standard) {
      // Create a modal or detailed view
      this.showFormSuccess(`Viewing details for ${standard.code}: ${standard.title}`);
    }
  }
  
  // Accessibility Helpers
  announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      announcement.remove();
    }, 1000);
  }
  
  // Event Binding
  bindEvents() {
    // Handle external links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="http"]');
      if (link && !link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
      // Handle tab trapping in modals
      if (e.key === 'Tab') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          this.trapFocus(e, activeModal);
        }
      }
    });
  }
  
  trapFocus(e, container) {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.safexApp = new SAFEXApp();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Resume animations or refresh data if needed
  } else {
    // Pause unnecessary animations
  }
});

// Export for external access if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SAFEXApp;
}


function initTypingEffect() {
    const brandTexts = document.querySelectorAll('.brand-text');
    
    brandTexts.forEach(text => {
        const originalText = text.textContent;
        let isAnimating = false;
        
        text.addEventListener('mouseenter', function() {
            if (isAnimating) return;
            isAnimating = true;
            
            let i = 0;
            this.textContent = '';
            
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    this.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    isAnimating = false;
                }
            }, 100);
        });
        
        text.addEventListener('mouseleave', function() {
            if (!isAnimating) {
                this.textContent = originalText;
            }
        });
    });
}

initTypingEffect()
