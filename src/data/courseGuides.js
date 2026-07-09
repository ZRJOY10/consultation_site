export function toCourseSlug(value = '') {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const courseGuides = {
  australia: {
    nursing: {
      courseName: 'Nursing',
      countryName: 'Australia',
      sourceUrl: 'https://www.idp.com/india/study-in-australia/bachelors-of-nursing/',
      whyStudy: [
        'Australia is one of the most popular destinations for international students who want to build a successful career in healthcare.',
        'Australian universities provide globally recognized nursing education with internationally respected qualifications.',
        'Nursing programs include extensive clinical placements in hospitals and healthcare facilities.',
        'Nursing is one of the most in-demand professions in Australia, with strong job opportunities after graduation.',
        'Registered nurses can earn competitive salaries, from around AUD $65,000 to $100,000+ depending on specialization and experience.',
        'International students can work part-time while studying to gain experience and support living expenses.',
        'Nursing can align with skilled migration pathways after gaining relevant work experience.',
        'Australian nursing qualifications are respected globally, supporting international career mobility.',
      ],
      cheapestUniversities: [
        { name: 'Federation University Australia', tuition: '~27,600', location: 'Victoria', link: 'https://www.federation.edu.au/' },
        { name: 'University of Southern Queensland', tuition: '~28,800', location: 'Queensland', link: 'https://www.unisq.edu.au/' },
        { name: 'Charles Sturt University', tuition: '~29,200', location: 'NSW', link: 'https://www.csu.edu.au/' },
        { name: 'CQUniversity Australia', tuition: '~29,600', location: 'Queensland', link: 'https://www.cqu.edu.au/' },
        { name: 'Southern Cross University', tuition: '~28,000', location: 'NSW / QLD', link: 'https://www.scu.edu.au/' },
        { name: 'Charles Darwin University', tuition: '~26,000', location: 'Northern Territory', link: 'https://www.cdu.edu.au/' },
        { name: 'University of the Sunshine Coast', tuition: '~31,000', location: 'Queensland', link: 'https://www.usc.edu.au/' },
        { name: 'University of New England', tuition: '~30,400', location: 'NSW', link: 'https://www.une.edu.au/' },
        { name: 'Western Sydney University', tuition: '~34,000 (often scholarship available)', location: 'NSW', link: 'https://www.westernsydney.edu.au/' },
        { name: 'Central Queensland University', tuition: '~33,450', location: 'Queensland', link: 'https://www.cqu.edu.au/' },
        { name: 'James Cook University', tuition: '~34,960', location: 'Queensland', link: 'https://www.jcu.edu.au/' },
        { name: 'Flinders University', tuition: '~38,300', location: 'South Australia', link: 'https://www.flinders.edu.au/' },
        { name: 'Edith Cowan University', tuition: '~40,800', location: 'Western Australia', link: 'https://www.ecu.edu.au/' },
        { name: 'University of Tasmania', tuition: '~35,950', location: 'Tasmania', link: 'https://www.utas.edu.au/' },
        { name: 'Victoria University', tuition: '~30,000 - 32,000', location: 'Melbourne', link: 'https://www.vu.edu.au/' },
      ],
      budgetOptions: [
        'Federation University Australia',
        'Charles Darwin University',
        'University of Southern Queensland',
        'CQUniversity Australia',
        'Southern Cross University',
      ],
      programs: [
        {
          title: 'Bachelor of Nursing',
          duration: '3 years full-time',
          details: [
            'Prepares students to become Registered Nurses (RN) in Australia.',
            'Includes theory, clinical simulation, and hospital placements.',
          ],
        },
        {
          title: 'Master of Nursing / Master of Nursing Practice',
          duration: '1.5-2 years',
          details: [
            'Designed for students with a non-nursing bachelor degree (pre-registration) and for registered nurses seeking specialization.',
            'Graduates of accredited programs can apply for registration with AHPRA.',
          ],
        },
      ],
      tuition: [
        'Bachelor of Nursing: AUD 28,000 - 42,000 / year',
        'Master of Nursing: AUD 36,000 - 50,000 / year',
        'Example: Bachelor of Nursing at Adelaide University can be around AUD $46,700 per year.',
        'Scholarships of 20-30% are often available at many universities.',
      ],
      admission: {
        bachelor: [
          'Completion of Year 12 or equivalent',
          'Science subjects (Biology preferred)',
          'Minimum 60-70% academic score',
        ],
        master: [
          'Bachelor degree (science/health preferred)',
          'Minimum 60-70% GPA equivalent',
        ],
      },
      englishAndClinical: [
        'IELTS: Overall 7.0',
        'PTE Academic: 65-66 overall',
        'TOEFL iBT: around 94',
        'Many programs require strong band-level English scores for professional registration.',
        'Mandatory clinical placements: typically 800-1000 hours during the degree.',
        'Simulation labs and real hospital training are core parts of the program.',
      ],
      topUniversities: [
        'University of Sydney',
        'Monash University',
        'University of Queensland',
        'Deakin University',
        'Griffith University',
      ],
      careerPaths: [
        'Registered Nurse (RN)',
        'Clinical Nurse',
        'Community Health Nurse',
        'Mental Health Nurse',
        'Aged Care Nurse',
        'Emergency / ICU Nurse',
      ],
      employers: [
        'Hospitals',
        'Aged care facilities',
        'Community health centres',
        'Private clinics',
      ],
    },
    'social-work': {
      courseName: 'Social Work',
      countryName: 'Australia',
      sourceUrl: 'https://www.idp.com/india/study-in-australia/',
      whyStudy: [
        'Australia offers globally respected social work qualifications with strong professional standards.',
        'Programs combine academic learning with supervised field education in real community settings.',
        'Social workers are in demand across healthcare, child protection, schools, and mental health services.',
        'The profession provides meaningful career pathways focused on community impact and social justice.',
        'International students can gain practical skills through placements and applied case-based learning.',
        'Graduates can pursue registration and long-term career opportunities across Australian states and territories.',
      ],
      cheapestUniversities: [
        { name: 'Charles Sturt University', tuition: '~29,000', location: 'NSW', link: 'https://www.csu.edu.au/' },
        { name: 'Southern Cross University', tuition: '~29,000', location: 'NSW / QLD', link: 'https://www.scu.edu.au/' },
        { name: 'Federation University Australia', tuition: '~28,000', location: 'Victoria', link: 'https://www.federation.edu.au/' },
        { name: 'University of the Sunshine Coast', tuition: '~30,000', location: 'Queensland', link: 'https://www.usc.edu.au/' },
        { name: 'Western Sydney University', tuition: '~33,000', location: 'NSW', link: 'https://www.westernsydney.edu.au/' },
        { name: 'University of Tasmania', tuition: '~34,000', location: 'Tasmania', link: 'https://www.utas.edu.au/' },
        { name: 'Australian Catholic University', tuition: '~31,000', location: 'Multi-city', link: 'https://www.acu.edu.au/' },
      ],
      budgetOptions: [
        'Federation University Australia',
        'Charles Sturt University',
        'Southern Cross University',
        'University of the Sunshine Coast',
      ],
      programs: [
        {
          title: 'Bachelor of Social Work',
          duration: '4 years full-time',
          details: [
            'Focuses on counseling, case management, community practice, and policy knowledge.',
            'Includes mandatory supervised field placements in human services settings.',
          ],
        },
        {
          title: 'Master of Social Work (Qualifying)',
          duration: '2 years full-time',
          details: [
            'Designed for students with a non-social-work bachelor degree.',
            'Leads to professional qualification pathway for social work practice in Australia.',
          ],
        },
      ],
      tuition: [
        'Bachelor of Social Work: AUD 28,000 - 40,000 / year',
        'Master of Social Work (Qualifying): AUD 32,000 - 46,000 / year',
        'Scholarships of 15-30% may be available depending on university and intake.',
      ],
      admission: {
        bachelor: [
          'Completion of Year 12 or equivalent qualification',
          'Minimum 60-70% academic score (varies by university)',
          'Some universities may require statement of purpose or interview',
        ],
        master: [
          'Completed bachelor degree in any discipline',
          'Minimum GPA equivalent to university entry requirements',
          'Relevant experience can strengthen the application profile',
        ],
      },
      englishAndClinical: [
        'IELTS: Overall 7.0 (some universities require no band less than 7.0)',
        'PTE Academic: around 65+ overall',
        'TOEFL iBT: accepted by many universities with equivalent scores',
        'Mandatory field education placements are required for course completion.',
        'Placements are usually completed across different service contexts under supervision.',
      ],
      topUniversities: [
        'University of Melbourne',
        'Monash University',
        'University of Sydney',
        'University of Queensland',
        'Australian Catholic University',
      ],
      careerPaths: [
        'Clinical Social Worker',
        'Child Protection Officer',
        'Community Development Worker',
        'Mental Health Social Worker',
        'Hospital Social Worker',
        'School Social Worker',
      ],
      employers: [
        'Public hospitals and health networks',
        'Government family and child services',
        'Community and nonprofit organizations',
        'Schools and youth services',
      ],
    },
  },
  "new-zealand": {
     nursing: {
    courseName: 'Nursing',
    countryName: 'New Zealand',
    qualification: 'Bachelor of Nursing (Level 7)',
    whyStudy: [
      'Leads to registration as a Registered Nurse with the Nursing Council of New Zealand.',
      'Ongoing demand for nurses across hospitals, aged care, community health, and primary healthcare settings.',
      'Extensive clinical placements build hands-on, job-ready experience.',
    ],
    programs: [
      {
        title: 'Bachelor of Nursing',
        duration: '3 years full-time',
        details: [
          'Level 7 qualification with extensive clinical placements in hospitals and healthcare settings.',
          'Graduates are eligible to sit the Nursing Council registration examination and become a Registered Nurse in New Zealand.',
        ],
      },
    ],
    admission: [
      'Completion of Year 12 / HSC / A-Levels or equivalent',
      'Strong academic performance, particularly in science subjects',
      'English proficiency: IELTS Academic overall 6.5–7.0 (varies by institution); equivalent PTE or TOEFL scores may be accepted',
      'Health declaration and police clearance',
      'Some institutions may require an interview',
    ],
    tuition: [
      'Budget-friendly institutes: NZD 28,000 – 35,000/year',
      'Mid-range universities: NZD 35,000 – 45,000/year',
      'Premium universities: NZD 42,000 – 50,000+/year',
    ],
    tuitionExample: 'Bachelor of Nursing at the University of Auckland: approximately NZD 42,818/year for 2026.',
    livingCosts: [
      'Accommodation: NZD 10,000 – 18,000',
      'Food and transport: NZD 5,000 – 8,000',
      'Insurance and miscellaneous: NZD 2,000 – 4,000',
      'Realistic annual living budget: approximately NZD 20,000 – 25,000',
    ],
    topUniversities: [
      'University of Auckland',
      'University of Waikato',
      'Massey University',
      'Unitec',
      'Otago Polytechnic',
      'Southern Institute of Technology',
      'Wintec',
    ],
    careerPaths: [
      'Registered Nurse',
      'Aged Care Nurse',
      'Community Health Nurse',
      'Mental Health Nurse',
      'Primary Healthcare Nurse',
    ],
  },
 
  'early-childhood-education': {
    courseName: 'Early Childhood Education',
    countryName: 'New Zealand',
    qualification: 'Bachelor of Teaching (Early Childhood Education)',
    whyStudy: [
      'Strong demand for qualified teachers across childcare centres, kindergartens, and early learning services.',
      'Practical teaching placements throughout the degree in licensed ECE centres.',
      'Clear pathway to teacher registration in New Zealand.',
      'Recognized qualification with international value.',
    ],
    programs: [
      {
        title: 'Bachelor of Teaching (Early Childhood Education)',
        duration: '3 years full-time',
        details: [
          'NZQF Level 7 qualification.',
          'Includes a teaching practicum in licensed ECE centres and leads toward teacher registration in New Zealand.',
        ],
      },
    ],
    admission: [
      'Completion of Year 12 / HSC / A-Levels or equivalent',
      'English proficiency: often IELTS Academic 7.0 overall, with minimum band requirements set by teacher education providers',
      'Interview and suitability assessment',
      'Police clearance and character checks may be required',
    ],
    affordableInstitutions: [
      { name: 'Unitec Institute of Technology', tuition: '~NZD 25,377/year' },
      { name: 'UCOL (Universal College of Learning)', tuition: '~NZD 27,300/year' },
      { name: 'Wintec', tuition: 'Typically among the lower-cost university-level options' },
      { name: 'Education Centre New Zealand (ECNZ)', tuition: 'International fees apply; contact provider for current rates' },
    ],
    tuition: [
      'Tuition: NZD 25,000 – 35,000',
      'Living expenses: NZD 20,000 – 25,000',
      'Insurance & miscellaneous: NZD 2,000 – 4,000',
      'Estimated total: NZD 47,000 – 64,000/year',
    ],
    careerPaths: [
      'Early Childhood Teacher',
      'Kindergarten Teacher',
      'Preschool Teacher',
      'Learning Support Educator',
      'Centre Supervisor (with experience)',
    ],
  },
 
  engineering: {
    courseName: 'Engineering',
    countryName: 'New Zealand',
    whyStudy: [
      'New Zealand is known for civil, earthquake, environmental, mechanical, software engineering, and renewable energy research.',
      'Engineering degrees from New Zealand universities are internationally recognised and highly regarded by employers.',
    ],
    specialisations: [
      'Civil Engineering',
      'Mechanical Engineering',
      'Electrical & Electronic Engineering',
      'Software Engineering',
      'Mechatronics Engineering',
      'Environmental Engineering',
      'Chemical & Materials Engineering',
      'Structural Engineering',
      'Construction Engineering',
    ],
    topUniversities: [
      { name: 'University of Auckland', detail: 'Highest-ranked engineering school in NZ; strong industry links and research facilities. Bachelor of Engineering (Honours): approximately NZD 58,009/year for international students in 2026.' },
      { name: 'University of Canterbury', detail: 'Particularly strong in Civil, Structural, and Earthquake Engineering; often considered one of NZ\'s best value engineering schools.' },
      { name: 'Auckland University of Technology', detail: 'Practical, industry-focused programs with modern laboratories. Tuition commonly around NZD 48,000–49,000/year.' },
      { name: 'University of Waikato', detail: 'Good option for lower tuition costs; strong programs in software, mechanical, and electronic engineering.' },
      { name: 'Massey University', detail: 'Competitive tuition fees; strong practical and applied engineering focus.' },
    ],
    admission: [
      'Completion of HSC / A-Levels / Year 12 equivalent',
      'Strong Mathematics background',
      'Physics highly recommended or required for most engineering programs',
      'English proficiency: IELTS Academic 6.0–6.5 overall (varies by institution); equivalent PTE or TOEFL scores may be accepted',
    ],
    tuition: [
      'Budget-Friendly: NZD 30,000 – 40,000/year',
      'Mid-Range: NZD 40,000 – 50,000/year',
      'Premium: NZD 50,000 – 60,000+/year',
    ],
    tuitionNote: 'Engineering is generally one of the more expensive study areas because of laboratories, equipment, design projects, and accreditation requirements.',
    estimatedAnnualBudget: [
      'Tuition: NZD 30,000 – 60,000',
      'Living costs: NZD 20,000 – 25,000',
      'Insurance & miscellaneous: NZD 1,000 – 3,000',
      'Total estimated cost: NZD 51,000 – 88,000/year',
    ],
    careerPaths: [
      'Civil Engineer',
      'Mechanical Engineer',
      'Electrical Engineer',
      'Structural Engineer',
      'Software Engineer',
      'Project Engineer',
      'Construction Engineer',
      'Environmental Engineer',
    ],
  },
 
  'information-technology': {
    courseName: 'Information Technology',
    countryName: 'New Zealand',
    whyStudy: [
      'Diverse career opportunities in software development, cybersecurity, cloud computing, networking, data analytics, and AI.',
      'New Zealand institutions emphasize practical, industry-focused learning.',
    ],
    specialisations: [
      'Software Development',
      'Cybersecurity',
      'Data Science & Analytics',
      'Cloud Computing',
      'Network Engineering',
      'Artificial Intelligence & Machine Learning',
      'Database Administration',
      'IT Support & Infrastructure',
    ],
    topUniversities: [
      { name: 'University of Auckland', detail: 'Highest-ranked university in NZ; strong Computer Science and IT programs. Master\'s IT tuition approximately NZD 55,214/year for 2026.' },
      { name: 'Auckland University of Technology', detail: 'Highly practical, industry-oriented. Bachelor of Computer and Information Sciences tuition approximately NZD 42,622/year.' },
      { name: 'Massey University', detail: 'Well-regarded IT and Information Sciences programs with flexible study options. International tuition approximately NZD 45,580/year.' },
      { name: 'Otago Polytechnic', detail: 'Strong practical IT training with industry-based projects. International tuition approximately NZD 26,900/year.' },
      { name: 'Southern Institute of Technology', detail: 'Popular for lower tuition costs; offers Bachelor of Information Technology.' },
    ],
    tuition: [
      'Budget-Friendly: NZD 22,000 – 30,000/year',
      'Mid-Range: NZD 30,000 – 45,000/year',
      'Premium: NZD 45,000 – 55,000+/year',
    ],
    admission: [
      'Completion of HSC / A-Levels / Year 12 or equivalent',
      'Mathematics background preferred',
      'English proficiency: IELTS Academic 6.0–6.5 overall (varies by institution); equivalent PTE or TOEFL scores may be accepted',
    ],
    duration: [
      "Bachelor's Degree: 3 years full-time",
      "Master's Degree: 1 to 2 years depending on program and academic background",
    ],
    careerPaths: [
      'Software Developer',
      'Cybersecurity Analyst',
      'Data Analyst',
      'Systems Administrator',
      'Network Engineer',
      'Cloud Engineer',
      'Business Analyst',
      'IT Consultant',
    ],
  },
 
  'construction-management': {
    courseName: 'Construction Management',
    countryName: 'New Zealand',
    whyStudy: [
      'Prepares students to manage building projects, budgets, contracts, resources, health and safety, and construction teams.',
      "New Zealand's construction sector regularly requires professionals who can oversee residential, commercial, and infrastructure projects.",
    ],
    subjects: [
      'Construction Project Management',
      'Building Technology',
      'Quantity Surveying',
      'Contract Administration',
      'Construction Law',
      'Cost Estimation & Tendering',
      'Health & Safety Management',
      'Building Information Modelling (BIM)',
      'Resource Planning and Scheduling',
    ],
    topUniversities: [
      { name: 'Unitec Institute of Technology', detail: 'Bachelor of Construction (Construction Management), 3 years. International tuition approximately NZD 25,000–26,500/year. Accredited by the New Zealand Institute of Builders (NZIOB).' },
      { name: 'Auckland University of Technology', detail: 'Bachelor of Construction with Construction Management pathway, 3 years. International tuition approximately NZD 42,800–44,000/year.' },
      { name: 'Massey University', detail: 'Bachelor of Construction (Construction Management). International tuition approximately NZD 43,000/year.' },
      { name: 'Christchurch College of Construction', detail: 'Diploma pathway, 2 years. International tuition approximately NZD 21,900/year — a lower-cost entry option.' },
    ],
    tuition: [
      'Budget-Friendly: NZD 21,900 – 28,000/year',
      'Mid-Range: NZD 30,000 – 40,000/year',
      'Premium: NZD 42,000 – 52,000+/year',
    ],
    tuitionNote: "AUT's Master of Construction Management costs approximately NZD 52,300 for the one-year program.",
    admission: [
      'HSC / A-Levels / Year 12 or equivalent',
      'Mathematics is beneficial',
      'English proficiency: IELTS Academic 6.0 overall (usually no band below 5.5); equivalent PTE or TOEFL scores accepted by many institutions',
    ],
    careerPaths: [
      'Construction Manager',
      'Site Manager',
      'Project Coordinator',
      'Project Manager',
      'Contract Administrator',
      'Construction Planner',
      'Property Development Officer',
      'Quantity Surveyor (with appropriate specialization)',
    ],
  },
 
  'agriculture-and-agribusiness': {
    courseName: 'Agriculture & Agribusiness',
    countryName: 'New Zealand',
    whyStudy: [
      'New Zealand is one of the world\'s leading agricultural economies.',
      'The sector is a major contributor to exports and the economy, creating strong demand for skilled graduates.',
    ],
    fieldComparison: {
      agriculture: ['Crop Production', 'Animal Science', 'Dairy Farming', 'Soil Science', 'Agronomy', 'Agricultural Technology', 'Environmental Management'],
      agribusiness: ['Farm Management', 'Food Supply Chains', 'Agricultural Marketing', 'International Trade', 'Export Management', 'Agricultural Finance', 'Food Industry Management'],
      note: 'Students interested in science and farming systems usually choose Agriculture; those interested in management and business often choose Agribusiness.',
    },
    topUniversities: [
      { name: 'Massey University', detail: "New Zealand's most recognized university for agriculture and agribusiness. Offers Bachelor of Agribusiness, Bachelor of Agricultural Science, Master of Agribusiness. Bachelor of Agribusiness (2026): approximately NZD 38,080–42,300/year. Master of Agribusiness: approximately NZD 51,180 total annual tuition." },
      { name: 'University of Waikato', detail: 'Offers Agribusiness through its business programs with strong links to the food and fibre sector. Bachelor of Business (Agribusiness): approximately NZD 38,252/year.' },
      { name: 'Lincoln University', detail: "Specializes in agriculture, land management, horticulture, viticulture, and environmental sciences — often considered NZ's most agriculture-focused university." },
    ],
    admission: [
      "Bachelor's: HSC / A-Levels / Year 12 equivalent; IELTS Academic 6.0–6.5 overall (varies by institution); science background preferred for Agriculture programs",
      "Master's: relevant bachelor's degree; IELTS 6.5 overall (requirements vary); academic transcripts and supporting documents",
    ],
    tuition: [
      'Budget-Friendly: NZD 30,000 – 38,000/year',
      'Mid-Range: NZD 38,000 – 45,000/year',
      'Premium: NZD 45,000 – 52,000+/year',
    ],
    tuitionNote: "Typical bachelor's degrees in New Zealand cost approximately NZD 30,000–55,000/year depending on institution and subject.",
    careerPaths: [
      'Agribusiness Manager',
      'Farm Manager',
      'Agricultural Consultant',
      'Supply Chain Manager',
      'Food Export Specialist',
      'Agricultural Analyst',
      'Dairy Industry Manager',
      'Horticulture Manager',
      'Rural Banking Officer',
      'Agricultural Technology Specialist',
    ],
  },
 
  'business-analytics': {
    courseName: 'Business Analytics',
    countryName: 'New Zealand',
    whyStudy: [
      'Combines business knowledge with data analysis, statistics, visualization, and technology.',
      'Organizations increasingly rely on data to make decisions about marketing, finance, operations, customer behavior, and strategy.',
    ],
    skillsLearned: [
      'Analyze large datasets',
      'Create business intelligence reports',
      'Use data visualization tools',
      'Support strategic decision-making',
      'Apply predictive analytics and forecasting',
      'Work with tools such as Power BI, Tableau, Excel, Python, and R',
    ],
    topUniversities: [
      { name: 'University of Auckland', detail: 'Master of Business Analytics (MBusAn), 15 months, practice-focused curriculum with an industry-based capstone project.' },
      { name: 'University of Waikato', detail: 'Triple Crown accredited business school; training in Power BI, Tableau, Google BigQuery, and analytics tools.' },
      { name: 'Massey University', detail: 'Business Analytics at both undergraduate and postgraduate levels; strong focus on evidence-based decision-making.' },
      { name: 'University of Otago', detail: 'Hands-on postgraduate analytics training covering data wrangling, statistical analysis, machine learning fundamentals, R and Python.' },
    ],
    tuition: [
      'Budget-Friendly: NZD 30,000 – 38,000/year',
      'Mid-Range: NZD 38,000 – 48,000/year',
      'Premium: NZD 48,000 – 60,000+/year',
    ],
    tuitionExamples: [
      'University of Auckland Master of Business Analytics: approximately NZD 50,000+ for the programme.',
      'Yoobee Master of Business Informatics (Business Analytics): approximately NZD 37,000 tuition plus fees.',
    ],
    admission: [
      "Bachelor's: HSC / A-Levels / Year 12 equivalent; IELTS 6.0–6.5 overall (varies by institution); Mathematics background advantageous",
      "Master's: bachelor's degree in any discipline (many programs accept non-IT and non-business graduates); IELTS 6.5 overall, typically no band below 6.0",
    ],
    careerPaths: [
      'Business Analyst',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Customer Insights Analyst',
      'Financial Analyst',
      'Marketing Analyst',
      'Data Strategy Consultant',
      'Supply Chain Analyst',
    ],
  },
 
  'data-science': {
    courseName: 'Data Science',
    countryName: 'New Zealand',
    whyStudy: [
      'Combines statistics, programming, machine learning, artificial intelligence, and business analytics to extract insights from data.',
      'Industry-focused programs prepare graduates for careers across technology, finance, healthcare, government, and research sectors.',
    ],
    skillsLearned: [
      'Python and R programming',
      'Machine Learning',
      'Artificial Intelligence',
      'Data Visualization',
      'Big Data Analytics',
      'Statistical Modelling',
      'Database Management',
      'Business Intelligence Tools',
    ],
    topUniversities: [
      { name: 'University of Auckland', detail: "New Zealand's highest-ranked university; strong focus on Computer Science and Statistics. Offers Master of Data Science (MDataSci)." },
      { name: 'University of Waikato', detail: 'Strong value-for-money option with endorsements in AI, Business Analytics, Health Analytics, Statistics, and GIS.' },
      { name: 'Massey University', detail: 'Strong undergraduate Data Science pathway combining computer science, AI, analytics, and statistics; flexible study options including online.' },
      { name: 'University of Canterbury', detail: 'Popular conversion master\'s program accepting students from various academic backgrounds.' },
      { name: 'University of Otago', detail: 'Combines computer science, information science, and statistics with a strong emphasis on data visualization and communication skills.' },
    ],
    tuition: [
      'Budget-Friendly: NZD 30,000 – 38,000/year',
      'Mid-Range: NZD 38,000 – 48,000/year',
      'Premium: NZD 48,000 – 60,000+/year',
    ],
    tuitionNote: "Master's programs at leading universities commonly fall within the NZD 45,000–55,000 range.",
    admission: [
      "Bachelor's: HSC / A-Levels / Year 12 equivalent; strong Mathematics background recommended; IELTS 6.0–6.5 overall (varies by institution)",
      "Master's: bachelor's degree in a relevant field; some conversion programs accept non-IT backgrounds; IELTS 6.5 overall typically required",
    ],
    careerPaths: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'AI Specialist',
      'Business Intelligence Analyst',
      'Data Engineer',
      'Quantitative Analyst',
      'Analytics Consultant',
      'Research Analyst',
    ],
  },
  }
}

export function getCourseGuide(country, course) {
  const countryData = courseGuides[country]
  if (!countryData) return null

  const foundKey = Object.keys(countryData).find((key) => toCourseSlug(key) === toCourseSlug(course))
  return foundKey ? countryData[foundKey] : null
}
