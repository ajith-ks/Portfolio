/* =============================================================
   AJITH KS — Portfolio JavaScript
   Navigation, scroll animations, modals, theme toggle, counters
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Theme Toggle ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });


  /* ---------- Sticky Navbar ---------- */
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  /* ---------- Active Nav Link Highlighting ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });


  /* ---------- Smooth Scroll for Nav Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });


  /* ---------- Mobile Menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });


  /* ---------- Scroll Reveal Animations ---------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  /* ---------- Counter Animation ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-counter'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        counter.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const metricsSection = document.getElementById('highlights');
  if (metricsSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterObserver.observe(metricsSection);
  }


  /* ---------- Project Modals ---------- */
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  // Project data (PRD v2.0 — Rich HTML content)
  const projectData = {
    'identity-lifecycle': {
      category: 'Identity Automation',
      title: 'Identity Lifecycle Audit & Compliance Automation',
      tags: ['IGNIO', 'SuccessFactors', 'NetIQ IDM', 'Active Directory', 'ServiceNow', 'Excel'],
      overview: '<p>An automated identity lifecycle monitoring solution built to provide a consolidated view of employee onboarding and offboarding activities across multiple enterprise systems.</p>',
      problem: `<p>Employee onboarding and offboarding information originates in SuccessFactors and flows through NetIQ IDM to downstream systems such as Active Directory and ServiceNow.</p>
<p>Failures could occur at different stages:</p>
<ul>
<li>User account creation could fail.</li>
<li>IDM could create the account but the status might not be updated back to SuccessFactors.</li>
<li>A user could exist in one system but be missing from another.</li>
<li>Offboarding/disablement could fail.</li>
<li>Stakeholders had no consolidated view of onboarding and offboarding status.</li>
</ul>`,
      solution: '<p>Built an IGNIO workflow that performs daily reconciliation across the connected systems.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">SuccessFactors
      ↓
Daily Onboarding / Offboarding Users
      ↓
     IGNIO
      ↓
 ┌────┼────────┐
 ↓    ↓        ↓
IDM   AD    ServiceNow
 └────┼────────┘
      ↓
Status Reconciliation
      ↓
Consolidated Excel Report
      ↓
Stakeholders</pre>
<p class="modal-workflow-desc">The workflow retrieves daily onboarding and offboarding users from SuccessFactors, checks their corresponding status in IDM, Active Directory and ServiceNow, consolidates the results and distributes the report to stakeholders through email.</p>`,
      contribution: `<ul>
<li>Designed the automation workflow.</li>
<li>Integrated data from multiple enterprise applications.</li>
<li>Implemented cross-system status validation.</li>
<li>Built the consolidated reporting process.</li>
<li>Automated stakeholder communication through email.</li>
</ul>`,
      impact: 'Improved visibility of identity lifecycle activities and enabled stakeholders to quickly identify inconsistencies and failed provisioning/offboarding activities.'
    },
    'privileged-offboarding': {
      category: 'Identity Automation',
      title: 'Privileged Account Offboarding & Cleanup Automation',
      tags: ['IGNIO', 'NetIQ IDM', 'Active Directory'],
      overview: '<p>An automation solution designed to address privileged-account exceptions during employee offboarding.</p>',
      problem: `<p>NetIQ IDM handles the standard offboarding process by disabling user accounts and moving them to the appropriate Disabled OU.</p>
<p>However, privileged/admin accounts could create exceptions where the expected action was not completed.</p>
<p>This created a security and compliance concern because privileged accounts could remain active after the associated employee had been offboarded.</p>`,
      solution: '<p>Built an IGNIO workflow that performs a daily check of offboarded users and identifies associated privileged accounts requiring remediation.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">Offboarded Users
      ↓
     IGNIO
      ↓
Check for Privileged Accounts
      ↓
Privileged Account Found?
      ↓
Disable Account
      ↓
Move to Disabled OU
      ↓
Generate Status Report
      ↓
Stakeholders</pre>`,
      contribution: `<ul>
<li>Designed the daily monitoring workflow.</li>
<li>Implemented privileged-account identification.</li>
<li>Automated Active Directory disablement.</li>
<li>Automated movement to the Disabled OU.</li>
<li>Built daily status reporting.</li>
</ul>`,
      impact: 'Automated an additional security control around privileged accounts during employee offboarding and reduced dependency on manual remediation.'
    },
    'birthright-access': {
      category: 'Identity Automation',
      title: 'Birthright Access Provisioning Automation',
      tags: ['IGNIO', 'Active Directory', 'Identity Automation'],
      overview: '<p>An automated access-provisioning workflow designed to provide users with their predefined birthright access based on employee classification.</p>',
      problem: `<p>Different employee types require different baseline access.</p>
<p>Manually identifying the correct Active Directory group and adding users could introduce delays and inconsistencies.</p>`,
      solution: '<p>Built an IGNIO workflow that determines the appropriate birthright access based on the user\'s employee type and provisions the required Active Directory group membership.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">User / Employee Information
          ↓
    Identify Employee Type
          ↓
    Determine Birthright Access
          ↓
    Identify AD Group
          ↓
    Add User to AD Group</pre>`,
      contribution: `<ul>
<li>Designed the provisioning workflow.</li>
<li>Implemented employee-type-based decision logic.</li>
<li>Identified the appropriate AD groups.</li>
<li>Automated group membership provisioning.</li>
</ul>`,
      impact: 'Standardized and automated baseline access provisioning based on employee type.'
    },
    'shared-mailbox': {
      category: 'Workflow Automation',
      title: 'Shared Mailbox Lifecycle Automation',
      tags: ['IGNIO', 'ServiceNow', 'Exchange Online', 'PowerShell', 'Groovy'],
      overview: '<p>An enterprise automation solution for managing shared mailbox requests through ServiceNow and automating the corresponding mailbox operations.</p>',
      problem: `<p>Users raise ServiceNow requests for shared mailbox activities such as:</p>
<ul>
<li>Creating a shared mailbox</li>
<li>Adding users</li>
<li>Removing users</li>
</ul>
<p>Once approved, these requests had to be manually processed by the operations team.</p>`,
      solution: '<p>Built an IGNIO workflow that automatically processes approved ServiceNow requests and performs the required mailbox operation.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">User
 ↓
ServiceNow Request
 ↓
Approval
 ↓
IGNIO Assignment Group
 ↓
Fetch Request Details
 ↓
Identify Request Type
 ↓
Execute Mailbox Operation
 ↓
Update ServiceNow</pre>`,
      contribution: `<ul>
<li>Designed the end-to-end automation workflow.</li>
<li>Integrated ServiceNow with IGNIO.</li>
<li>Implemented request-data extraction.</li>
<li>Developed logic to identify the requested operation.</li>
<li>Automated mailbox operations.</li>
<li>Automated ServiceNow status updates.</li>
</ul>`,
      impact: 'The solution processes <strong>200+ mailbox operations monthly</strong>, reduced processing time by <strong>85%</strong>, and achieved <strong>zero errors within the stated scope</strong>.'
    },
    'distribution-list': {
      category: 'Workflow Automation',
      title: 'Distribution List Lifecycle Automation',
      tags: ['IGNIO', 'ServiceNow', 'Exchange Online', 'PowerShell', 'Groovy'],
      overview: '<p>An automation solution developed to streamline distribution list management through ServiceNow and IGNIO.</p>',
      problem: `<p>Distribution list requests are submitted through ServiceNow and require processing after approval.</p>
<p>Manual processing requires the operations team to review the request, determine the required action and execute it.</p>`,
      solution: '<p>Built an IGNIO workflow that automatically receives approved requests, extracts the request details, determines the required operation and executes the corresponding distribution list action.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">User
 ↓
ServiceNow Request
 ↓
Approval
 ↓
IGNIO Assignment Group
 ↓
Fetch Request Details
 ↓
Identify Operation
 ↓
Execute Distribution List Action
 ↓
Update ServiceNow</pre>`,
      contribution: `<ul>
<li>Designed the automation workflow.</li>
<li>Integrated ServiceNow request processing with IGNIO.</li>
<li>Implemented request classification.</li>
<li>Automated distribution list operations.</li>
<li>Automated ServiceNow updates.</li>
</ul>`,
      impact: 'Reduced manual intervention and standardized the processing of distribution list requests with improved traceability through ServiceNow.'
    },
    'server-access': {
      category: 'Infrastructure Automation',
      title: 'Privileged Server Access Provisioning',
      tags: ['ServiceNow', 'IGNIO', 'Active Directory', 'Privileged Access'],
      overview: '<p>An end-to-end automation workflow for provisioning privileged access to servers based on approved ServiceNow requests.</p>',
      problem: `<p>Users request access to specific servers through ServiceNow.</p>
<p>Provisioning the access requires multiple steps, including privileged-account creation, identification of the correct Active Directory groups and assignment of the user to the appropriate administrator groups.</p>
<p>Performing these activities manually increases processing effort and the possibility of incorrect group assignment.</p>`,
      solution: '<p>Built an IGNIO workflow to automate the complete access-provisioning process.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">ServiceNow Request
       ↓
     Approval
       ↓
   IGNIO Queue
       ↓
Check Privileged Account
       ↓
Create if Required
       ↓
Identify Requested Server
       ↓
Identify Applicable Privileged AD Groups
       ↓
Identify Server Administrator Groups
       ↓
Add User to Required Groups
       ↓
Update ServiceNow</pre>`,
      contribution: `<ul>
<li>Designed the end-to-end provisioning workflow.</li>
<li>Implemented privileged-account existence checks.</li>
<li>Automated privileged-account creation.</li>
<li>Developed logic to identify applicable AD groups.</li>
<li>Identified administrator groups for the requested server.</li>
<li>Automated group membership assignment.</li>
<li>Automated ServiceNow ticket updates.</li>
</ul>`,
      impact: 'Standardized privileged server-access provisioning while reducing manual identity and Active Directory administration.'
    },
    'license-reclamation': {
      category: 'Infrastructure Automation',
      title: 'Microsoft License Reclamation Automation',
      tags: ['IGNIO', 'Microsoft 365', 'License Management', 'Automation'],
      overview: `<p>An automated license-management solution developed to optimize the use of limited Microsoft application licenses.</p>
<p class="modal-sub-heading">Applications</p>
<ul>
<li>Microsoft Copilot</li>
<li>Microsoft Project</li>
<li>Microsoft Visio</li>
</ul>`,
      problem: `<p>The organization had a limited number of licenses.</p>
<p>When the available quota was exhausted, administrators had to manually identify users who were no longer using the applications and reclaim their licenses.</p>`,
      solution: '<p>Built an IGNIO workflow to automatically identify inactive users and revoke their licenses based on the organization\'s <strong>60-day inactivity policy</strong>.</p>',
      workflowHTML: `<pre class="modal-workflow-diagram">Licensed Users
      ↓
Check Application Usage
      ↓
60-Day Inactivity Check
      ↓
Identify Inactive Users
      ↓
Revoke License
      ↓
Generate Status Report
      ↓
Stakeholders</pre>`,
      contribution: `<ul>
<li>Designed the license-reclamation workflow.</li>
<li>Implemented inactivity-based identification.</li>
<li>Automated license revocation.</li>
<li>Built status reporting.</li>
<li>Automated stakeholder notification.</li>
</ul>`,
      impact: 'Reduced manual license-management effort and helped improve utilization of limited application licenses.'
    },
    'execution-dashboard': {
      category: 'Data Engineering & Analytics',
      title: 'Automation Execution Intelligence Dashboard',
      tags: ['IGNIO', 'PostgreSQL', 'SQL', 'Groovy', 'ServiceNow', 'Power BI'],
      overview: '<p>A data-driven reporting solution developed to provide centralized visibility into automation execution, workload, KPIs, incidents and requests.</p>',
      problem: '<p>Automation execution information was distributed across different data sources, making it difficult to obtain a consolidated view of automation performance and operational metrics.</p>',
      solution: `<p>Designed an IGNIO workflow that processes execution data, integrates ServiceNow information and structures the data in PostgreSQL for Power BI reporting.</p>
<p class="modal-sub-heading">Data Model</p>
<p>The solution uses six PostgreSQL tables:</p>
<ul>
<li>Use Case Master</li>
<li>Monthly Volume</li>
<li>KPI</li>
<li>Workitem Cleaned</li>
<li>Incident</li>
<li>Request</li>
</ul>`,
      workflowHTML: `<pre class="modal-workflow-diagram">              IGNIO
                │
        ┌───────┴───────┐
        ↓               ↓
   PostgreSQL       ServiceNow
        │               │
        └───────┬───────┘
                ↓
          SQL / Groovy
                ↓
       Consolidated Dataset
                ↓
             Power BI
                ↓
      Operational Insights</pre>`,
      contribution: `<ul>
<li>Designed the data-processing workflow.</li>
<li>Structured the PostgreSQL reporting tables.</li>
<li>Developed SQL/Groovy processing logic.</li>
<li>Processed JSON-based automation execution data.</li>
<li>Integrated ServiceNow information through REST APIs.</li>
<li>Prepared the consolidated dataset for Power BI reporting.</li>
</ul>`,
      impact: 'Created a centralized view of automation execution and operational metrics, enabling stakeholders to analyze workload, KPIs, incidents and requests through Power BI.'
    }
  };

  // Open modal
  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data) return;

      // Populate modal
      document.getElementById('modal-category').textContent = data.category;
      document.getElementById('modal-title').textContent = data.title;

      document.getElementById('modal-tags').innerHTML = data.tags.map(tag =>
        `<span class="project-tag">${tag}</span>`
      ).join('');

      document.getElementById('modal-overview').innerHTML = data.overview;
      document.getElementById('modal-problem').innerHTML = data.problem;
      document.getElementById('modal-solution').innerHTML = data.solution;
      document.getElementById('modal-workflow').innerHTML = data.workflowHTML;
      document.getElementById('modal-contribution').innerHTML = data.contribution;
      document.getElementById('modal-impact').innerHTML = data.impact;

      // Show modal
      modalOverlay.classList.add('active');
      document.body.classList.add('modal-open');
    });
  });

  // Close modal
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });


  /* ---------- Tech Scroll Duplication ---------- */
  const techScrollInner = document.querySelector('.tech-scroll-inner');
  if (techScrollInner) {
    const items = techScrollInner.innerHTML;
    techScrollInner.innerHTML = items + items;
  }

});
