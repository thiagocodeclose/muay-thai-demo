// lib/site-data.ts
export const studioInfo = {
  name: 'Muay Thai Miami',
  tagline: 'The Art of Eight Limbs',
  subheadline: 'Miami\'s authentic Muay Thai experience. Train the way they train in Thailand — discipline, technique, and fire from day one.',
  address: '850 NW 1st Ave, Miami, FL 33136',
  phone: '(305) 555-0380',
  email: 'info@muaythaimiami.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  hours: {
    'Mon–Fri': '6:00 AM – 9:00 PM',
    'Saturday': '8:00 AM – 3:00 PM',
    'Sunday': 'Closed',
  },
};

export const stats = [
  { value: '8+', label: 'Years in Miami' },
  { value: '250+', label: 'Active Members' },
  { value: '40+', label: 'Amateur Fighters' },
  { value: '15+', label: 'Thailand Trips' },
];

export const eightLimbs = [
  { name: 'Punches', thai: 'Chok', description: 'Jabs, crosses, hooks, and uppercuts refined through thousands of reps on Thai pads and heavy bags.' },
  { name: 'Kicks', thai: 'Te', description: 'The devastating roundhouse, push kick (teep), and body kick — the foundation of Muay Thai offense.' },
  { name: 'Elbows', thai: 'Sok', description: 'Short, slashing elbows in close range. One of the most feared and effective weapons in combat sports.' },
  { name: 'Knees', thai: 'Khao', description: 'Straight, diagonal, and flying knees from the clinch — a signature of authentic Muay Thai.' },
  { name: 'Clinch', thai: 'Chap Kho', description: 'Control your opponent with the Thai plum, sweep, and attack. The chess match within the fight.' },
  { name: 'Footwork', thai: 'Gaan Yiab Yeun', description: 'Angles, rhythm, and positioning. Proper footwork separates fighters from champions.' },
  { name: 'Defense', thai: 'Pongkan', description: 'Parries, checks, blocks, and slips that let you shut down attacks without taking damage.' },
  { name: 'Conditioning', thai: 'Karn Fek', description: 'Thai-style conditioning: shadow boxing, pad work, sparring, and rope skipping every session.' },
];

export const instructors = [
  {
    name: 'Kru Nattapong Srisuk',
    rank: 'Former Lumpinee Stadium Champion · 15 years teaching',
    bio: 'Born and trained in Chiang Mai, Kru Nattapong brings authentic stadium-style Muay Thai to Miami. 120+ fights, 80+ wins.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    name: 'Kru Ana Rodriguez',
    rank: '3x US Muay Thai Champion · WBC Amateur Gold',
    bio: 'Miami-born with a decade of fighting experience. Leads our women\'s program and beginner fundamentals curriculum.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  {
    name: 'Ajarn Marcus Webb',
    rank: 'Ajarn (Grand Master) · 30+ years Muay Thai',
    bio: 'American legend who trained in Thailand for 7 years before opening studios across the US. Leads our advanced and competition team.',
    image: 'https://images.unsplash.com/photo-1547474374-e5a22de8a60c?w=600&q=80',
  },
];

export const testimonials = [
  { name: 'Carlos M.', rating: 5, text: 'Kru Nattapong is the real deal. I\'ve never trained with anyone who understands the art of Muay Thai this deeply. Six months in and my technique has transformed.' },
  { name: 'Sofia A.', rating: 5, text: 'The women\'s program here is incredible. Ana Rodriguez is an amazing coach and role model. I went from zero to competing in 8 months.' },
  { name: 'Derek T.', rating: 5, text: 'Took me to Thailand for a training camp. That trip alone was worth 6 months of anywhere else. This gym is the real thing.' },
  { name: 'Priya K.', rating: 5, text: 'Best decision I\'ve made for my fitness. The conditioning alone put me in the best shape of my life. The community here is family.' },
];

export const pricing = [
  {
    name: 'Warrior',
    price: '$129',
    period: '/mo',
    features: ['All Muay Thai classes', 'Beginner to advanced', 'Bag & pad training', 'Tournament observer access'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Nak Muay',
    price: '$169',
    period: '/mo',
    features: ['Everything in Warrior', 'Unlimited sessions', 'Open sparring Fridays', 'Competition prep', 'Thailand camp priority'],
    cta: 'Join Now',
    highlight: true,
  },
  {
    name: 'Champion',
    price: '$229',
    period: '/mo',
    features: ['Everything in Nak Muay', 'Competition team access', 'Corner at events', '1-on-1 monthly session', 'Thailand camp discount'],
    cta: 'Apply',
    highlight: false,
  },
];
