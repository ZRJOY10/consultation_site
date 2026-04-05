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
}

export function getCourseGuide(country, course) {
  const countryData = courseGuides[country]
  if (!countryData) return null

  const foundKey = Object.keys(countryData).find((key) => toCourseSlug(key) === toCourseSlug(course))
  return foundKey ? countryData[foundKey] : null
}
