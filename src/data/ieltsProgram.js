/**
 * IELTS Studio Batch — program content.
 *
 * Copy is intentionally in Bangla: this batch is priced in BDT, collected via
 * bKash, and sold to students in Bangladesh. The rest of the site stays English.
 *
 * Enrollment runs through a Google Form; students who hit a problem with the
 * form or the payment are pointed at the coordinator's WhatsApp. Set
 * VITE_IELTS_ENROLL_FORM_URL in .env to point at a different form without a
 * code change.
 */

const DEFAULT_ENROLL_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe9tzKPJ0InRuL7Uv70hWQBHr24d494L9ZiKzgzg6YK4EKQZA/viewform'

export const enrollFormUrl = import.meta.env.VITE_IELTS_ENROLL_FORM_URL || DEFAULT_ENROLL_FORM_URL

export const ieltsProgram = {
  badge: 'IELTS স্টুডিও ব্যাচ',
  title: 'Band 8 স্কোরারের সরাসরি তত্ত্বাবধানে, আপনার IELTS প্রস্তুতি',
  lede:
    'Zoom-এ সরাসরি প্রাইভেট লাইভ ক্লাস, প্রতিটি রেকর্ড সহ — Listening, Reading, Writing, Speaking আর পূর্ণাঙ্গ মক টেস্ট, একসাথে। মেন্টর তাসনিম ওয়াসিথ, যিনি নিজে IELTS-এ Band 8 অর্জন করেছেন।',
  totalClasses: 25,
}

export const pricing = {
  original: '৳7,000',
  current: '৳3,500',
  currentShort: '৳3,500',
  saveLabel: '৳3,500 সাশ্রয় · 50% ছাড়',
  tag: 'লঞ্চ ব্যাচ মূল্য',
  note: 'সীমিত আসন — প্রথম স্টুডিও ব্যাচ',
  rationale:
    'Global Talent-এর নতুন স্টুডিও থেকে এটাই প্রথম ব্যাচ। আমরা চাই তাসনিম ওয়াসিথের মতো একজন Band 8 স্কোরারের সরাসরি গাইডেন্স শুরুতেই বেশি স্টুডেন্টের কাছে পৌঁছাক — তাই লঞ্চ মূল্য হিসেবে অর্ধেক দামে দেওয়া হচ্ছে। আসন ইচ্ছাকৃতভাবে সীমিত রাখা হচ্ছে, যাতে প্রতিটি ক্লাসে ব্যক্তিগত মনোযোগ বজায় থাকে — সংখ্যা বাড়িয়ে মান কমানো হবে না।',
}

export const payment = {
  method: 'বিকাশ',
  number: '01339-315435',
  numberPlain: '01339315435',
  type: 'মার্চেন্ট · Payment',
  instruction:
    'বিকাশ অ্যাপ খুলে "Payment" অপশনে গিয়ে (Send Money নয়) নিচের মার্চেন্ট নম্বরে পুরো কোর্স ফি পাঠান, ট্রানজেকশন আইডিটি সংরক্ষণ করুন।',
}

export const heroStats = [
  { value: '25', label: 'লাইভ ও রেকর্ডেড ক্লাস' },
  { value: '8', label: 'মেন্টরের IELTS Band স্কোর' },
  { value: '4', label: 'মডিউল সম্পূর্ণ কভারেজ' },
]

export const mentor = {
  initials: 'তা',
  name: 'তাসনিম ওয়াসিথ',
  badge: 'IELTS Band 8',
  role: 'মেন্টর, Global Talent Education Consultancy IELTS ব্যাচ',
  bio:
    'IELTS & Higher Study Network প্রোগ্রামে নিয়মিত লাইভ ক্লাস ও স্পিকিং-রাইটিং ফিডব্যাক দিয়ে আসছেন তাসনিম ওয়াসিথ। এই স্টুডিও ব্যাচে তিনি প্রতিটি মডিউল সরাসরি পড়াবেন এবং প্রতিটি স্টুডেন্টের অগ্রগতি নিজে পর্যবেক্ষণ করবেন — যাতে ফিডব্যাক সবসময় ব্যক্তিগত ও নির্দিষ্ট থাকে, সাধারণ (generic) না হয়।',
}

export const syllabus = [
  {
    idx: '01',
    name: 'Foundation & Diagnostic',
    desc: 'শুরুতে একটি ডায়াগনস্টিক টেস্ট দিয়ে প্রতিটি স্টুডেন্টের বর্তমান লেভেল বোঝা হবে',
    classes: 2,
  },
  {
    idx: '02',
    name: 'Listening',
    desc: 'সবকটি সেকশন-টাইপ ও কমন ট্র্যাপ প্রশ্ন নিয়ে অনুশীলন',
    classes: 4,
  },
  {
    idx: '03',
    name: 'Reading',
    desc: 'টাইম ম্যানেজমেন্ট ও স্কিমিং-স্ক্যানিং কৌশল',
    classes: 4,
  },
  {
    idx: '04',
    name: 'Writing — Task 1 & 2',
    desc: 'নির্দিষ্ট স্ট্রাকচার, মডেল উত্তর ও লাইন-বাই-লাইন ফিডব্যাক',
    classes: 6,
  },
  {
    idx: '05',
    name: 'Speaking — Part 1, 2 ও 3',
    desc: 'লাইভ স্পিকিং প্র্যাকটিস, সরাসরি মেন্টর ফিডব্যাক সহ',
    classes: 6,
  },
  {
    idx: '06',
    name: 'Full Mock Test ও ফিডব্যাক',
    desc: 'সম্পূর্ণ টাইমড মক টেস্ট, ব্যক্তিগত স্কোর ব্রেকডাউন',
    classes: 3,
  },
]

export const bonuses = [
  'ভোকাবুলারি ও ফটোকার্ড লাইব্রেরিতে প্রায়োরিটি এক্সেস',
  'IELTS & Higher Study Network গ্রুপে প্রাইভেট চ্যানেল এক্সেস',
  'সুরক্ষিত Google Drive-এ সম্পূর্ণ IELTS Materials',
  'প্রতিটি মক টেস্টের স্কোর ও লিখিত ফিডব্যাক',
]

export const delivery = [
  {
    icon: 'lock',
    title: 'প্রাইভেট লাইভ ক্লাস (Zoom)',
    desc:
      'ক্লাসগুলো সরাসরি Zoom-এ প্রাইভেটভাবে অনুষ্ঠিত হয় — কোনো YouTube বা Facebook Live নয়। প্রতিটি ক্লাস রেকর্ডও করা হয়; শেষে সেই রেকর্ডিং একটি সুরক্ষিত লিংকের মাধ্যমে সরাসরি আপনার সাথে শেয়ার করা হবে।',
  },
  {
    icon: 'drive',
    title: 'সুরক্ষিত Google Drive',
    desc:
      'সম্পূর্ণ IELTS Materials একটি সুরক্ষিত Google Drive ফোল্ডারের মাধ্যমে শেয়ার করা হবে, যা আপনি যেকোনো সময় অ্যাক্সেস করতে পারবেন।',
  },
  {
    icon: 'doc',
    title: 'WhatsApp-এ ডকুমেন্টস',
    desc: 'প্রতিটি ক্লাস শেষে প্রয়োজনীয় ডকুমেন্টস PDF ও ছবি আকারে হোয়াটসঅ্যাপে পাঠানো হবে।',
  },
  {
    icon: 'clock',
    title: 'যেকোনো জায়গা থেকে প্র্যাকটিস',
    desc: 'ঘরে বসে বা যেকোনো জায়গা থেকে, নিজের সুবিধামতো সময়ে প্র্যাকটিস চালিয়ে যেতে পারবেন।',
  },
]

export const problems = [
  {
    q: 'Speaking-এ গিয়ে যা প্র্যাকটিস করি সব ভুলে যাই',
    a: 'প্রতি সপ্তাহে লাইভ Speaking প্র্যাকটিস, সরাসরি মেন্টর ফিডব্যাক সহ',
  },
  {
    q: 'Writing Task 2-তে কী লিখব বুঝি না',
    a: 'নির্দিষ্ট স্ট্রাকচার ও মডেল উত্তর নিয়ে ৬টি পূর্ণ ক্লাস',
  },
  {
    q: 'স্কোর বারবার একই জায়গায় আটকে থাকে',
    a: 'প্রতিটি মক টেস্টের পর ব্যক্তিগত ফিডব্যাক, দুর্বলতা সঠিকভাবে চিহ্নিত করে',
  },
]

export const ieltsFaq = [
  {
    question: 'ক্লাসগুলো কি লাইভ নাকি রেকর্ডেড?',
    answer:
      'ক্লাসগুলো Zoom-এ সরাসরি লাইভ নেওয়া হবে এবং একইসাথে রেকর্ড করা হবে। ক্লাস শেষে রেকর্ডিং একটি সুরক্ষিত লিংকের মাধ্যমে শেয়ার করা হবে, তাই নির্দিষ্ট সময়ে উপস্থিত থাকতে না পারলেও সমস্যা নেই।',
  },
  {
    question: 'ক্লাসগুলো কোন প্ল্যাটফর্মে হবে?',
    answer:
      'ক্লাসগুলো Zoom-এ প্রাইভেটভাবে অনুষ্ঠিত হয় — কোনো YouTube বা Facebook Live নয়। এনরোলমেন্টের পর Zoom মিটিং লিংক সরাসরি আপনাকে পাঠানো হবে; রেকর্ডিং ও ম্যাটেরিয়াল সুরক্ষিত Google Drive ও সরাসরি লিংকের মাধ্যমে শেয়ার করা হয়।',
  },
  {
    question: 'পেমেন্ট কীভাবে করব?',
    answer:
      'বিকাশ অ্যাপের "Payment" অপশন ব্যবহার করে মার্চেন্ট নম্বর 01339-315435-এ ৳3,500 পাঠান, তারপর এনরোলমেন্ট ফর্মে ট্রানজেকশন আইডি ও পেমেন্ট স্ক্রিনশট দিয়ে জমা দিন।',
  },
  {
    question: 'ব্যাচ কবে শুরু হবে ও কতদিন চলবে?',
    answer: 'এনরোলমেন্টের পর নির্দিষ্ট শুরুর তারিখ হোয়াটসঅ্যাপ/গ্রুপের মাধ্যমে জানানো হবে।',
  },
  {
    question: 'ফর্ম বা পেমেন্টে সমস্যা হলে কী করব?',
    answer:
      'ফর্ম পূরণ করতে না পারলে, পেমেন্ট আটকে গেলে বা ট্রানজেকশন আইডি নিয়ে সংশয় থাকলে সরাসরি আমাদের হোয়াটসঅ্যাপে (01348-095204) মেসেজ দিন — স্ক্রিনশট পাঠালে আমরা ম্যানুয়ালি এনরোলমেন্ট সম্পন্ন করে দেব।',
  },
  {
    question: 'রিফান্ড পলিসি কী?',
    answer: 'নির্দিষ্ট রিফান্ড নীতির জন্য এনরোলের আগে কোঅর্ডিনেটরের সাথে সরাসরি যোগাযোগ করুন।',
  },
]

export const enrollSteps = [
  {
    num: 1,
    title: '৳3,500 পাঠান',
    desc: payment.instruction,
  },
  {
    num: 2,
    title: 'এনরোলমেন্ট ফর্ম পূরণ করুন',
    desc: 'নাম, ফোন নম্বর, ট্রানজেকশন আইডি ও পেমেন্ট স্ক্রিনশট দিয়ে ফর্মটি জমা দিন।',
  },
  {
    num: 3,
    title: 'নিশ্চিতকরণ পান',
    desc:
      'ফর্ম সাবমিটের ২৪ ঘণ্টার মধ্যে হোয়াটসঅ্যাপে ব্যাচের বিস্তারিত, সময়সূচি ও Zoom লিংক পাঠানো হবে। প্রতিটি ক্লাস শেষে রেকর্ডিং ও প্রয়োজনীয় ডকুমেন্টস একইভাবে হোয়াটসঅ্যাপ ও সুরক্ষিত লিংকে পাবেন।',
  },
]

export const coordinator = {
  phone: '01348-095204',
  phonePlain: '8801348095204',
  whatsapp: 'https://wa.me/8801348095204',
}
