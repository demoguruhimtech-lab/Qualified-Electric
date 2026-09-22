export const SITE = {
  name: 'Qualified Electric',
  phone: '+1 720-840-4198',
  phoneRaw: '7208404198',
  email: 'info@qualifiedelectricdenver.com',
  address: 'Denver, CO',
  mapsUrl: 'https://maps.app.goo.gl/yfQm2CX9wSfrVZSg8',
  hours: [
    { day: 'Monday', hours: '7:00 AM – 7:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM – 7:00 PM' },
    { day: 'Thursday', hours: '7:00 AM – 7:00 PM' },
    { day: 'Friday', hours: '7:00 AM – 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: 'Emergency Service Available' },
  ],
  serviceArea: [
    'Denver', 'Aurora', 'Lakewood', 'Littleton', 'Englewood',
    'Centennial', 'Parker', 'Highlands Ranch', 'Arvada', 'Wheat Ridge',
    'Golden', 'Broomfield', 'Westminster', 'Thornton', 'Commerce City',
  ],
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  whatWeDo: { heading: string; body: string }[];
  whyItMatters: { heading: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
};

export const SERVICES: ServicePage[] = [
  {
    slug: 'residential-electrician-denver-co',
    title: 'Residential Electrician',
    shortTitle: 'Residential Electrician',
    metaTitle: 'Residential Electrician Denver, CO | Qualified Electric',
    metaDescription: 'Trusted residential electricians in Denver, CO. From wiring and panel upgrades to lighting and repairs, Qualified Electric keeps your home safe and powered. Call 720-840-4198.',
    h1: 'Residential Electrician in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Residential electrician installing wiring in a Denver home',
    intro: [
      'Your home deserves an electrician who treats every outlet, breaker, and wire as if it were in their own house. At Qualified Electric, we provide comprehensive residential electrical services throughout Denver and the surrounding communities.',
      'Whether you are building a new home, remodeling a kitchen, or dealing with a flickering light, our team brings the same level of precision and care to every project. We handle everything from small repairs to full home rewiring, always working to code and always cleaning up after ourselves.',
    ],
    whatWeDo: [
      { heading: 'Whole-Home Wiring', body: 'New construction wiring, rewiring of older homes, and dedicated circuits for kitchens, baths, and home offices.' },
      { heading: 'Lighting & Fans', body: 'Recessed lighting, ceiling fans, chandeliers, under-cabinet lighting, and exterior fixture installation.' },
      { heading: 'Panel & Breaker Services', body: 'Panel upgrades, breaker replacement, sub-panel installation, and capacity expansion for modern appliances.' },
      { heading: 'Safety & Inspection', body: 'Whole-home safety inspections, smoke detector installation, GFCI/AFCI upgrades, and code compliance corrections.' },
    ],
    whyItMatters: [
      { heading: 'Safety First', body: 'Faulty wiring is one of the leading causes of house fires. Proper installation by a licensed electrician protects your family and your investment.' },
      { heading: 'Code Compliance', body: 'Denver and national electrical codes change regularly. We ensure every installation meets current NEC and local requirements.' },
      { heading: 'Energy Efficiency', body: 'Modern wiring, LED lighting, and smart controls can reduce your energy bills while improving comfort and convenience.' },
    ],
    process: [
      { step: '01', title: 'Schedule a Visit', body: 'Call us or request service online. We will find a time that works around your schedule.' },
      { step: '02', title: 'On-Site Assessment', body: 'Our electrician inspects the issue, explains what is needed, and provides a clear, upfront estimate.' },
      { step: '03', title: 'Professional Work', body: 'We complete the work efficiently, cleanly, and to code, with minimal disruption to your home.' },
      { step: '04', title: 'Final Walk-Through', body: 'We test everything, clean up, and walk you through the completed work before we leave.' },
    ],
    faqs: [
      { q: 'Do you offer free estimates for residential electrical work?', a: 'Yes. For most residential projects we provide an upfront estimate after assessing the work on site. Small repair calls may carry a standard service-call fee that is applied toward the repair if you proceed.' },
      { q: 'Are your electricians licensed and insured?', a: 'Every electrician on our team is fully licensed and insured to work in Denver and throughout Colorado. We carry general liability and workers compensation coverage.' },
      { q: 'Can you work on older Denver homes with outdated wiring?', a: 'Absolutely. We have extensive experience updating knob-and-tube wiring, aluminum wiring, and other legacy systems common in older Denver neighborhoods.' },
      { q: 'Do you handle electrical work for home renovations and additions?', a: 'Yes. We partner with homeowners and contractors on remodels, additions, basement finishes, and ADU installations, handling all electrical rough-in and finish work.' },
    ],
    relatedServices: ['electrical-repair-denver-co', 'electrical-panel-upgrade-denver-co', 'residential-wiring-denver-co', 'lighting-installation-denver-co'],
  },
  {
    slug: 'electrical-repair-denver-co',
    title: 'Electrical Repair',
    shortTitle: 'Electrical Repair',
    metaTitle: 'Electrical Repair Denver, CO | Fast, Reliable Fixes | Qualified Electric',
    metaDescription: 'Fast, reliable electrical repair in Denver, CO. Flickering lights, dead outlets, tripping breakers — Qualified Electric diagnoses and fixes it right. Call 720-840-4198.',
    h1: 'Electrical Repair in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing a circuit breaker panel in Denver',
    intro: [
      'Electrical problems do not wait for a convenient time. A dead outlet in the kitchen, a breaker that trips every time you run the microwave, a light switch that crackles when you flip it — these are warning signs that should not be ignored.',
      'Qualified Electric provides prompt, thorough electrical repair throughout Denver. We do not just swap a part and leave. We find the root cause, explain what happened, and fix it properly so the problem does not come back.',
    ],
    whatWeDo: [
      { heading: 'Outlet & Switch Repair', body: 'Dead outlets, loose receptacles, GFCI tripping, and switches that spark or feel warm to the touch.' },
      { heading: 'Breaker & Panel Repair', body: 'Breakers that trip repeatedly, hot panels, buzzing breakers, and damaged bus bars.' },
      { heading: 'Lighting Repair', body: 'Flickering lights, recessed can lights that turn off on their own, and ballast replacement for fluorescent fixtures.' },
      { heading: 'Wiring Repair', body: 'Damaged wiring from rodents, water, or age, including aluminum wiring remediation and junction box repairs.' },
    ],
    whyItMatters: [
      { heading: 'Fire Prevention', body: 'Arcing, overheating, and loose connections are among the most common causes of electrical fires. Prompt repair eliminates these hazards.' },
      { heading: 'Protecting Appliances', body: 'Voltage fluctuations and loose neutral connections can damage expensive electronics and appliances. Stable power protects your investment.' },
      { heading: 'Peace of Mind', body: 'A home that works the way it should — lights that come on, breakers that hold, outlets that deliver power reliably.' },
    ],
    process: [
      { step: '01', title: 'Call or Request Service', body: 'Describe the problem and we will schedule a visit at the earliest available time.' },
      { step: '02', title: 'Diagnosis', body: 'Our electrician identifies the root cause using professional testing equipment, not guesswork.' },
      { step: '03', title: 'Upfront Estimate', body: 'You get a clear price before any work begins. No surprises, no hidden fees.' },
      { step: '04', title: 'Repair & Test', body: 'We fix the issue, test the circuit under load, and confirm everything is safe before we leave.' },
    ],
    faqs: [
      { q: 'Do you offer same-day electrical repair in Denver?', a: 'We strive to offer same-day service for most repair calls, especially for safety-related issues. Call early in the day for the best chance of a same-day visit.' },
      { q: 'How much does an electrical repair call cost?', a: 'Our standard service-call fee covers the diagnostic visit. Once we identify the problem, we provide a flat-rate repair estimate. The service-call fee is credited toward the repair if you choose to proceed.' },
      { q: 'Is a breaker that keeps tripping dangerous?', a: 'It can be. A tripping breaker is doing its job by protecting you from an overload or fault, but the underlying cause needs to be found and repaired. Ignoring it risks damage to the panel or a fire.' },
      { q: 'Can I repair electrical problems myself?', a: 'We strongly advise against DIY electrical work. Even small mistakes can cause fires, shocks, or code violations that affect your home insurance. Always hire a licensed electrician.' },
    ],
    relatedServices: ['electrical-troubleshooting-denver-co', 'outlet-repair-denver-co', 'switch-repair-denver-co', 'electrical-panel-upgrade-denver-co'],
  },
  {
    slug: 'electrical-panel-upgrade-denver-co',
    title: 'Electrical Panel Upgrade',
    shortTitle: 'Panel Upgrade',
    metaTitle: 'Electrical Panel Upgrade Denver, CO | 200A & 400A Panels | Qualified Electric',
    metaDescription: 'Electrical panel upgrades in Denver, CO. Replace your outdated 100A panel with a safe, modern 200A panel. Qualified Electric handles permits and inspection. Call 720-840-4198.',
    h1: 'Electrical Panel Upgrade in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'New electrical panel with circuit breakers and wiring',
    intro: [
      'Your electrical panel is the heart of your home\'s electrical system. If your panel is over 25 years old, has fuses instead of breakers, or cannot keep up with your family\'s power needs, it is time for an upgrade.',
      'Qualified Electric specializes in electrical panel upgrades throughout Denver. We replace outdated, unsafe panels with modern code-compliant panels that give your home the capacity and protection it needs for today\'s appliances, EV chargers, and smart-home systems.',
    ],
    whatWeDo: [
      { heading: '100A to 200A Upgrades', body: 'The most common upgrade for Denver homes. A 200-amp panel provides plenty of capacity for modern living, including EV charging and mini-split HVAC.' },
      { heading: 'Panel Replacement', body: 'Remove Federal Pacific, Zinsco, or other recalled panels that are known fire hazards and replace them with trusted brands like Square D, Siemens, or Eaton.' },
      { heading: 'Sub-Panel Installation', body: 'Add a sub-panel in a garage, basement, or ADU to support new circuits without overloading your main panel.' },
      { heading: 'Permit & Inspection', body: 'We handle all permits, coordinate with the utility company, and schedule the city inspection so everything is done to code.' },
    ],
    whyItMatters: [
      { heading: 'Fire Safety', body: 'Older panels, especially Federal Pacific Electric and Zinsco, have high failure rates and are linked to thousands of fires. Replacing them is one of the most important safety upgrades you can make.' },
      { heading: 'Enough Power', body: 'If your lights dim when the AC kicks on or breakers trip when you use multiple appliances, your panel does not have enough capacity. A 200A panel solves that.' },
      { heading: 'Home Value', body: 'A modern panel is a major selling point. Home inspectors flag old panels, and buyers often demand replacement. Upgrading ahead of a sale smooths the transaction.' },
    ],
    process: [
      { step: '01', title: 'Panel Assessment', body: 'We inspect your current panel, calculate your home\'s load, and recommend the right capacity and brand.' },
      { step: '02', title: 'Permit & Scheduling', body: 'We pull the necessary permits and schedule the upgrade. Most panel replacements are completed in a single day.' },
      { step: '03', title: 'Installation', body: 'We install the new panel, transfer all circuits, label everything clearly, and ensure all connections are torqued to spec.' },
      { step: '04', title: 'Inspection', body: 'The city inspector verifies the work. We are present for the inspection and address any questions on the spot.' },
    ],
    faqs: [
      { q: 'How long does a panel upgrade take?', a: 'Most residential panel upgrades are completed in one day, typically 4 to 8 hours depending on the complexity. We coordinate the utility disconnect and reconnect to minimize downtime.' },
      { q: 'How much does a panel upgrade cost in Denver?', a: 'A standard 100A to 200A panel upgrade typically ranges from $2,500 to $4,500 depending on the panel location, whether the meter base needs upgrading, and the amount of circuit rewiring required. We provide a detailed estimate after an on-site assessment.' },
      { q: 'Do I need to upgrade my meter base too?', a: 'Sometimes. If your meter base is outdated or does not meet current utility standards, it must be replaced along with the panel. We will assess this during the initial visit and include it in the estimate.' },
      { q: 'Will my power be off all day?', a: 'Power is typically off for 2 to 4 hours during the actual swap. We plan the work to minimize the outage and let you know exactly when to expect it.' },
    ],
    relatedServices: ['residential-electrician-denver-co', 'surge-protection-denver-co', 'electrical-repair-denver-co', 'generator-installation-denver-co'],
  },
  {
    slug: 'residential-wiring-denver-co',
    title: 'Residential Wiring',
    shortTitle: 'Residential Wiring',
    metaTitle: 'Residential Wiring Denver, CO | New, Rewire & Remodel | Qualified Electric',
    metaDescription: 'Professional residential wiring in Denver, CO. New construction, whole-home rewiring, remodels, and dedicated circuits. Licensed electricians. Call 720-840-4198.',
    h1: 'Residential Wiring in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/7937305/pexels-photo-7937305.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrical wiring boxes and cables in a residential wall',
    intro: [
      'Good wiring is invisible — you never think about it because it just works. Bad wiring is a constant source of frustration, danger, and expense. The difference comes down to who installs it.',
      'Qualified Electric provides complete residential wiring services in Denver, from new construction rough-in to whole-home rewiring of historic properties. We run clean, code-compliant wiring that lasts for decades.',
    ],
    whatWeDo: [
      { heading: 'New Construction Wiring', body: 'Complete electrical rough-in and trim for new homes, additions, and ADUs. We coordinate with your builder and other trades.' },
      { heading: 'Whole-Home Rewiring', body: 'Replace knob-and-tube, aluminum, or degraded wiring with modern copper NM cable, bringing older Denver homes up to current code.' },
      { heading: 'Remodel Wiring', body: 'Kitchen and bath remodels, basement finishes, and garage conversions — we handle all new circuits, outlets, and lighting.' },
      { heading: 'Dedicated Circuits', body: 'Separate circuits for microwaves, refrigerators, EV chargers, mini-splits, and home offices to prevent overloads and interference.' },
    ],
    whyItMatters: [
      { heading: 'Safety', body: 'Aluminum and knob-and-tube wiring are insurance red flags. Modern wiring eliminates arc faults, overheating, and shock hazards.' },
      { heading: 'Capacity', body: 'Older homes were not wired for today\'s loads. Rewiring gives you enough circuits and capacity for modern living.' },
      { heading: 'Clean Power', body: 'Dedicated circuits for sensitive electronics prevent interference, voltage drops, and equipment damage.' },
    ],
    process: [
      { step: '01', title: 'Planning', body: 'We review your plans or goals, calculate loads, and design a circuit layout that meets code and your needs.' },
      { step: '02', title: 'Rough-In', body: 'We run all cables, install boxes, and prepare for inspections. All work is labeled and organized.' },
      { step: '03', title: 'Inspection', body: 'Rough electrical inspection is scheduled and passed before walls are closed.' },
      { step: '04', title: 'Trim-Out', body: 'We install devices, plates, and fixtures, test every circuit, and label the panel.' },
    ],
    faqs: [
      { q: 'How do I know if my home needs rewiring?', a: 'Common signs include two-prong outlets, frequent breaker trips, flickering lights, burning smells, aluminum or knob-and-tube wiring, or a home over 40 years old that has not been updated. We can inspect and advise.' },
      { q: 'How long does a whole-home rewire take?', a: 'A typical 1,500 to 2,500 sq ft home takes 5 to 10 working days, depending on accessibility, the number of circuits, and whether the home is occupied.' },
      { q: 'Do you have to cut into my walls?', a: 'Some wall access is required, but we use minimally invasive techniques and plan cuts to align with future patching. We can coordinate drywall repair or leave cuts ready for your contractor.' },
      { q: 'What type of wire do you use?', a: 'We use copper NM-B (Romex) for most interior wiring and THHN in conduit where required. All materials are UL-listed and code-compliant.' },
    ],
    relatedServices: ['residential-electrician-denver-co', 'outlet-repair-denver-co', 'lighting-installation-denver-co', 'electrical-inspection-denver-co'],
  },
  {
    slug: 'outlet-repair-denver-co',
    title: 'Outlet Repair',
    shortTitle: 'Outlet Repair',
    metaTitle: 'Outlet Repair Denver, CO | Dead, Sparking & GFCI Outlets | Qualified Electric',
    metaDescription: 'Outlet repair in Denver, CO. Dead outlets, sparking receptacles, GFCI trips, and two-prong upgrades. Safe, fast fixes by licensed electricians. Call 720-840-4198.',
    h1: 'Outlet Repair in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician installing a power outlet in a wall',
    intro: [
      'A dead outlet is more than an inconvenience — it is often a symptom of a deeper problem. Outlets that spark, feel warm, or have scorch marks are serious safety hazards that need immediate attention.',
      'Qualified Electric repairs and replaces outlets throughout Denver. Whether you need a single GFCI replaced or every two-prong outlet in your home upgraded to tamper-resistant three-prong receptacles, we do it right and we do it to code.',
    ],
    whatWeDo: [
      { heading: 'GFCI Outlet Installation & Repair', body: 'Install, test, and replace ground-fault circuit interrupters in kitchens, baths, garages, and outdoor locations.' },
      { heading: 'Two-Prong to Three-Prong', body: 'Upgrade outdated two-prong outlets to grounded, tamper-resistant three-prong receptacles that meet current code.' },
      { heading: 'Dead Outlet Diagnosis', body: 'Find out why an outlet stopped working — loose wire, backstab connection, broken breaker, or upstream GFCI trip.' },
      { heading: 'Outdoor & Weatherproof', body: 'Weather-resistant outlets for patios, decks, and exterior walls with in-use covers that protect against rain and snow.' },
    ],
    whyItMatters: [
      { heading: 'Shock Protection', body: 'GFCI outlets reduce the risk of electric shock in wet areas. If your kitchen or bath outlets are not GFCI-protected, you are at risk.' },
      { heading: 'Tamper Resistance', body: 'Current code requires tamper-resistant outlets in all homes. They prevent children from inserting objects into the slots.' },
      { heading: 'Reliable Power', body: 'Loose connections cause intermittent power, flickering, and heat. Properly terminated outlets deliver stable, safe power for years.' },
    ],
    process: [
      { step: '01', title: 'Identify the Problem', body: 'We test the outlet and the circuit to find the root cause — not just the symptom.' },
      { step: '02', title: 'Recommend the Fix', body: 'We explain what is needed and provide a clear estimate before any work starts.' },
      { step: '03', title: 'Repair or Replace', body: 'We replace the outlet, fix the wiring, or upgrade the circuit as needed, using code-compliant materials.' },
      { step: '04', title: 'Test & Verify', body: 'We test the outlet under load, verify proper polarity and grounding, and confirm GFCI function.' },
    ],
    faqs: [
      { q: 'Why did my outlet stop working but the breaker did not trip?', a: 'The most common causes are a loose wire connection (especially backstabbed wires), a tripped GFCI outlet upstream on the same circuit, or a broken wire. We diagnose and fix all of these.' },
      { q: 'How much does it cost to replace an outlet?', a: 'Replacing a single standard outlet typically costs $125 to $200 including the service call. GFCI outlets and outdoor outlets cost a bit more. We provide upfront pricing before starting.' },
      { q: 'Can I replace a two-prong outlet with a three-prong myself?', a: 'Only if a ground wire is present. Installing a three-prong outlet without a ground is a code violation and a safety hazard. We can verify grounding and install properly.' },
      { q: 'Where are GFCI outlets required?', a: 'Current code requires GFCI protection in kitchens, bathrooms, garages, unfinished basements, crawl spaces, laundry areas, and all outdoor outlets. We can bring your home up to code.' },
    ],
    relatedServices: ['switch-repair-denver-co', 'electrical-repair-denver-co', 'electrical-troubleshooting-denver-co', 'residential-electrician-denver-co'],
  },
  {
    slug: 'switch-repair-denver-co',
    title: 'Switch Repair',
    shortTitle: 'Switch Repair',
    metaTitle: 'Switch Repair Denver, CO | Light Switches, Dimmers & 3-Way | Qualified Electric',
    metaDescription: 'Light switch repair in Denver, CO. Crackle, spark, or warm switches fixed fast. Dimmer, 3-way, and smart switch installation. Licensed electricians. Call 720-840-4198.',
    h1: 'Switch Repair in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrical switch and power outlet on a wall',
    intro: [
      'A light switch should operate silently and effortlessly. If your switch crackles, feels warm, or requires you to wiggle it to get the light on, the internal contacts are failing and it is time to replace it.',
      'Qualified Electric repairs and replaces all types of switches in Denver homes, from standard single-pole to 3-way, 4-way, dimmers, and smart switches. We also add switches where none exist — like a switched outlet in a bedroom or a new light over the garage entry.',
    ],
    whatWeDo: [
      { heading: 'Switch Replacement', body: 'Replace failing, warm, or sparking switches with new, code-compliant devices rated for the load they control.' },
      { heading: 'Dimmer Installation', body: 'Install LED-compatible dimmers for recessed lighting, chandeliers, and fan lights. We match the dimmer to your fixture type.' },
      { heading: '3-Way & 4-Way Switches', body: 'Add or repair multi-location switching for hallways, staircases, and large rooms so you can control lights from multiple points.' },
      { heading: 'Smart Switch Installation', body: 'Install Wi-Fi and Z-Wave smart switches that integrate with Alexa, Google Home, and Apple HomeKit.' },
    ],
    whyItMatters: [
      { heading: 'Arcing Hazards', body: 'A crackling switch is arcing. Left unrepaired, arcing can ignite the switch box and surrounding material. Replace it before it becomes a fire.' },
      { heading: 'Convenience', body: 'Walking across a dark room to reach the only switch is annoying. A 3-way or smart switch solves that in an afternoon.' },
      { heading: 'Ambiance & Savings', body: 'Dimmers let you set the mood and save energy. An LED dimmed to 50 percent uses roughly half the power and lasts longer.' },
    ],
    process: [
      { step: '01', title: 'Diagnose', body: 'We test the switch and circuit to identify the problem and verify the wiring is safe.' },
      { step: '02', title: 'Recommend', body: 'We suggest the right replacement device for your fixture and usage, including smart options.' },
      { step: '03', title: 'Install', body: 'We replace the switch using proper torque and termination, never backstabbing.' },
      { step: '04', title: 'Test', body: 'We test the switch under load and verify proper operation from all switch locations.' },
    ],
    faqs: [
      { q: 'Why does my light switch crackle when I flip it?', a: 'Crackling means the internal contacts are arcing. This is a fire hazard and the switch should be replaced promptly. The cause is usually worn contacts or a loose wire connection.' },
      { q: 'Can any LED bulb be used with a dimmer?', a: 'No. The bulb must be dimmable and the dimmer must be LED-compatible. Using a standard incandescent dimmer with LED bulbs causes flickering, buzzing, and poor dimming range. We match the dimmer to your fixtures.' },
      { q: 'Can you add a switch where one does not exist?', a: 'Yes. We can run wiring to add a switch for a light or outlet that is currently unswitched, including 3-way configurations for hallways and stairs.' },
      { q: 'Do you install smart light switches?', a: 'Yes. We install Wi-Fi, Z-Wave, and Zigbee smart switches from brands like Lutron, Leviton, and GE. We ensure the neutral wire is present and the switch is compatible with your home automation system.' },
    ],
    relatedServices: ['outlet-repair-denver-co', 'lighting-installation-denver-co', 'electrical-repair-denver-co', 'electrical-troubleshooting-denver-co'],
  },
  {
    slug: 'lighting-installation-denver-co',
    title: 'Lighting Installation',
    shortTitle: 'Lighting Installation',
    metaTitle: 'Lighting Installation Denver, CO | Recessed, LED & Outdoor | Qualified Electric',
    metaDescription: 'Lighting installation in Denver, CO. Recessed lighting, LED upgrades, outdoor lighting, chandeliers, and under-cabinet lights. Professional installation. Call 720-840-4198.',
    h1: 'Lighting Installation in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/10508622/pexels-photo-10508622.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Modern pendant lighting installation in a home interior',
    intro: [
      'The right lighting transforms a room. It makes a kitchen feel professional, a living room feel warm, and a front entry feel welcoming and safe. The wrong lighting — or poorly installed lighting — does the opposite.',
      'Qualified Electric installs all types of residential lighting in Denver. From a single chandelier to a full-home recessed lighting layout, we handle the wiring, the mounting, and the finishing so your lights look great and work perfectly.',
    ],
    whatWeDo: [
      { heading: 'Recessed Lighting', body: 'Install LED canless or can-style recessed lights in kitchens, living rooms, hallways, and basements with clean, even spacing.' },
      { heading: 'LED Retrofit & Upgrade', body: 'Convert recessed cans, track lights, and exterior fixtures to energy-efficient LED, reducing energy use by 60 to 80 percent.' },
      { heading: 'Outdoor & Landscape', body: 'Entry lights, soffit lighting, pathway lights, and security lighting with motion sensors and photocell controls.' },
      { heading: 'Decorative & Accent', body: 'Chandeliers, pendant lights, under-cabinet lighting, toe-kick lighting, and wall sconces with proper support and wiring.' },
    ],
    whyItMatters: [
      { heading: 'Energy Savings', body: 'LED lighting uses a fraction of the power of incandescent and halogen. A full-home LED upgrade can pay for itself in a few years.' },
      { heading: 'Home Value', body: 'Well-designed lighting is one of the most noticeable upgrades in a home. It improves showings, appraisals, and everyday enjoyment.' },
      { heading: 'Security', body: 'Exterior lighting with motion sensors is one of the most effective deterrents to break-ins. A well-lit home is a safer home.' },
    ],
    process: [
      { step: '01', title: 'Design Consultation', body: 'We discuss your goals, recommend fixture types and placement, and plan the circuit layout.' },
      { step: '02', title: 'Wiring', body: 'We run new circuits or extend existing ones, install switch boxes, and prepare junction points.' },
      { step: '03', title: 'Fixture Installation', body: 'We mount fixtures securely, make connections, and install trim, lenses, and bulbs.' },
      { step: '04', title: 'Test & Aim', body: 'We test every fixture, aim adjustable lights, and program dimmers and sensors.' },
    ],
    faqs: [
      { q: 'Can you install recessed lighting in an existing ceiling?', a: 'Yes. We use remodel-rated recessed housings that install from below without needing attic access. We patch any minor ceiling cuts or leave them ready for your drywall contractor.' },
      { q: 'How many recessed lights do I need in a room?', a: 'It depends on the room size, ceiling height, and fixture output. As a general rule, 4-inch LED recessed lights are spaced 4 to 5 feet apart and 6-inch lights 5 to 7 feet apart. We design the layout for even, shadow-free lighting.' },
      { q: 'Do you install outdoor lighting?', a: 'Yes. We install entry lights, soffit lights, pathway lighting, deck lighting, and security lighting with motion sensors and photocells. All outdoor fixtures and wiring are rated for wet locations.' },
      { q: 'Can you hang a heavy chandelier?', a: 'Yes. We install proper ceiling fan-rated or heavy-fixture support boxes as needed. We verify the box is rated for the fixture weight and that the circuit can handle the load.' },
    ],
    relatedServices: ['ceiling-fan-installation-denver-co', 'switch-repair-denver-co', 'residential-electrician-denver-co', 'surge-protection-denver-co'],
  },
  {
    slug: 'ceiling-fan-installation-denver-co',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fan Installation',
    metaTitle: 'Ceiling Fan Installation Denver, CO | Indoor & Outdoor Fans | Qualified Electric',
    metaDescription: 'Ceiling fan installation in Denver, CO. Indoor, outdoor, and smart ceiling fans. Proper support box, balanced mounting, and wall control. Call 720-840-4198.',
    h1: 'Ceiling Fan Installation in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Ceiling fan in a spacious living room',
    intro: [
      'A ceiling fan makes a room more comfortable year-round and can lower your energy bills by several percent. But only if it is installed correctly — with the right support box, proper wiring, and balanced mounting.',
      'Qualified Electric installs ceiling fans throughout Denver. We replace light fixtures with fans, add new fan circuits, install outdoor-rated fans on patios, and upgrade wobbly fans that were installed without proper support.',
    ],
    whatWeDo: [
      { heading: 'Standard Fan Installation', body: 'Install indoor ceiling fans with proper fan-rated support boxes, secure mounting, and wall or remote control.' },
      { heading: 'Outdoor Fan Installation', body: 'Install wet-rated and damp-rated fans on covered patios, pergolas, and porches with weatherproof wiring.' },
      { heading: 'Fan with Light', body: 'Install combination fan/light units with separate wall controls for fan speed and light, or a single remote.' },
      { heading: 'Support Box Upgrade', body: 'Replace standard light boxes with fan-rated support boxes to safely carry the weight and vibration of a ceiling fan.' },
    ],
    whyItMatters: [
      { heading: 'Safety', body: 'A ceiling fan weighs 15 to 50 pounds and spins. A standard light box is not rated for that load. An improperly supported fan can pull out of the ceiling and cause serious injury.' },
      { heading: 'Energy Savings', body: 'A ceiling fan lets you raise your thermostat 4 degrees without losing comfort, cutting AC costs. In winter, reverse the direction to push warm air down and save on heating.' },
      { heading: 'Comfort', body: 'A properly balanced fan eliminates wobble and noise, providing quiet, even airflow that makes any room more pleasant.' },
    ],
    process: [
      { step: '01', title: 'Assess the Location', body: 'We verify the existing box is fan-rated. If not, we replace it with a proper support box.' },
      { step: '02', title: 'Wire & Mount', body: 'We make secure connections, mount the fan to the support box, and install the downrod or flush mount.' },
      { step: '03', title: 'Balance', body: 'We balance the blades, install the light kit if applicable, and program the remote or wall control.' },
      { step: '04', title: 'Test', body: 'We test all speeds, the light, and the reverse function, and verify there is no wobble.' },
    ],
    faqs: [
      { q: 'Can you replace a light fixture with a ceiling fan?', a: 'Yes, but the existing box must be fan-rated. Most light boxes are not. We inspect the box and replace it with a fan-rated support box if needed before installing the fan.' },
      { q: 'How much does ceiling fan installation cost?', a: 'Standard ceiling fan installation typically costs $150 to $300, not including the fan itself. If a new support box or new wiring is needed, the cost is higher. We provide an upfront estimate.' },
      { q: 'Can you install a ceiling fan on a sloped ceiling?', a: 'Yes. We use a sloped-ceiling adapter and the appropriate downrod length to ensure the fan hangs level and has adequate blade clearance.' },
      { q: 'Do you install outdoor ceiling fans?', a: 'Yes. We install damp-rated fans under covered patios and wet-rated fans in exposed locations. All wiring and boxes are rated for the environment.' },
    ],
    relatedServices: ['lighting-installation-denver-co', 'switch-repair-denver-co', 'residential-electrician-denver-co', 'electrical-repair-denver-co'],
  },
  {
    slug: 'ev-charger-installation-denver-co',
    title: 'EV Charger Installation',
    shortTitle: 'EV Charger Installation',
    metaTitle: 'EV Charger Installation Denver, CO | Tesla, Level 2 Home Charging | Qualified Electric',
    metaDescription: 'EV charger installation in Denver, CO. Level 2 home charging stations for Tesla, Rivian, Ford, and all EVs. Dedicated 240V circuit. Licensed electricians. Call 720-840-4198.',
    h1: 'EV Charger Installation in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electric vehicle charging at a home charging station',
    intro: [
      'Electric vehicles are the future of driving, and a home charging station is the most convenient and cost-effective way to keep yours ready to go. Plugging into a standard outlet is slow and can overload shared circuits.',
      'Qualified Electric installs Level 2 EV charging stations throughout Denver. We run a dedicated 240-volt circuit, install the charger, and configure it for your vehicle — whether you drive a Tesla, Rivian, Ford, Chevy, or any other EV.',
    ],
    whatWeDo: [
      { heading: 'Level 2 Home Chargers', body: 'Install 240V/40A or 240V/48A Level 2 charging stations that add 25 to 40 miles of range per hour of charging.' },
      { heading: 'Tesla Wall Connector', body: 'Install and configure Tesla Wall Connectors with dedicated circuits and proper load management.' },
      { heading: 'NEMA 14-50 Outlets', body: 'Install 240V/50A outlets for mobile EV chargers, ideal for Tesla and other EVs that come with a portable connector.' },
      { heading: 'Load Management', body: 'Install energy management systems that share capacity between your EV charger and other loads, avoiding a panel upgrade.' },
    ],
    whyItMatters: [
      { heading: 'Convenience', body: 'Plug in at night, wake up to a full battery. No trips to public chargers, no waiting in line, no range anxiety.' },
      { heading: 'Cost Savings', body: 'Charging at home on off-peak rates costs a fraction of public DC fast charging. Many Denver utilities offer time-of-use plans that make EV charging very affordable.' },
      { heading: 'Home Value', body: 'A dedicated EV charging station is increasingly seen as a home feature. It adds value and appeal to buyers who drive electric.' },
    ],
    process: [
      { step: '01', title: 'Assessment', body: 'We evaluate your panel capacity, charger location, and cable route to design the installation.' },
      { step: '02', title: 'Dedicated Circuit', body: 'We run a dedicated 240V circuit from the panel to the charger location with properly sized wire and breaker.' },
      { step: '03', title: 'Charger Installation', body: 'We mount the charging station, make the connection, and configure the unit for your vehicle.' },
      { step: '04', title: 'Test & Configure', body: 'We test the charger with your vehicle, verify the charging rate, and set up any smart features or scheduling.' },
    ],
    faqs: [
      { q: 'Do I need a panel upgrade for an EV charger?', a: 'Not always. If your panel has a spare 40A or 50A breaker space and enough total capacity, we can add a dedicated circuit. If your panel is full or near capacity, we can install a load management device or recommend a panel upgrade.' },
      { q: 'How much does EV charger installation cost in Denver?', a: 'A typical installation with a 240V circuit run of 30 feet or less costs $500 to $1,200, not including the charger itself. Longer runs, panel upgrades, or load management add to the cost. We provide a detailed estimate.' },
      { q: 'Can you install a Tesla Wall Connector?', a: 'Yes. We are experienced with Tesla Wall Connector installation, including load sharing for multiple connectors and integration with Tesla solar and Powerwall systems.' },
      { q: 'What is the difference between a Level 1 and Level 2 charger?', a: 'Level 1 uses a standard 120V outlet and adds 3 to 5 miles of range per hour. Level 2 uses a dedicated 240V circuit and adds 25 to 40 miles per hour. For daily driving, Level 2 is strongly recommended.' },
    ],
    relatedServices: ['electrical-panel-upgrade-denver-co', 'residential-electrician-denver-co', 'surge-protection-denver-co', 'electrical-inspection-denver-co'],
  },
  {
    slug: 'electrical-inspection-denver-co',
    title: 'Electrical Inspection',
    shortTitle: 'Electrical Inspection',
    metaTitle: 'Electrical Inspection Denver, CO | Whole-Home Safety Audit | Qualified Electric',
    metaDescription: 'Whole-home electrical inspection in Denver, CO. Safety audit, pre-purchase inspection, and code compliance check. Detailed report and recommendations. Call 720-840-4198.',
    h1: 'Electrical Inspection in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician inspecting a residential fuse box',
    intro: [
      'Whether you are buying a home, selling one, or just want to know your electrical system is safe, a professional inspection gives you the answers you need. Many electrical hazards are invisible until they are not — and by then it is too late.',
      'Qualified Electric provides thorough whole-home electrical inspections throughout Denver. We test every circuit, inspect every panel, and check every accessible outlet and switch. You receive a detailed report with photos, findings, and prioritized recommendations.',
    ],
    whatWeDo: [
      { heading: 'Whole-Home Safety Inspection', body: 'Comprehensive inspection of the panel, wiring, outlets, switches, grounding, and surge protection with a written report.' },
      { heading: 'Pre-Purchase Inspection', body: 'Before you buy, we identify electrical issues that could cost thousands to repair, giving you negotiating leverage.' },
      { heading: 'Insurance Inspections', body: 'Four-point and electrical-specific inspections for insurance underwriting, including aluminum wiring and panel evaluations.' },
      { heading: 'Code Compliance Audit', body: 'Verify your home meets current NEC and Denver code requirements, with a list of any deficiencies and recommended corrections.' },
    ],
    whyItMatters: [
      { heading: 'Hidden Hazards', body: 'Loose connections, double-tapped breakers, outdated wiring, and missing GFCI protection are invisible to most homeowners but dangerous. An inspection finds them.' },
      { heading: 'Informed Decisions', body: 'If you are buying a home, an electrical inspection tells you exactly what needs fixing and what it will cost. No surprises after closing.' },
      { heading: 'Insurance & Code', body: 'Some insurers require electrical inspections for older homes. Staying ahead of code requirements protects your coverage and your safety.' },
    ],
    process: [
      { step: '01', title: 'Schedule', body: 'Book an inspection. We set a time that works for you, including evenings and weekends.' },
      { step: '02', title: 'On-Site Inspection', body: 'We spend 1 to 3 hours testing and inspecting every accessible electrical component in the home.' },
      { step: '03', title: 'Report', body: 'You receive a detailed written report with findings, photos, safety priorities, and recommended actions.' },
      { step: '04', title: 'Recommendations', body: 'We walk you through the report, answer questions, and provide estimates for any recommended repairs.' },
    ],
    faqs: [
      { q: 'How much does an electrical inspection cost?', a: 'A whole-home electrical inspection typically costs $200 to $400 depending on the size and age of the home. Pre-purchase and insurance inspections may cost more due to the detailed reporting required.' },
      { q: 'How long does an inspection take?', a: 'A typical single-family home inspection takes 1 to 3 hours on site, depending on the size of the home and the complexity of the electrical system.' },
      { q: 'Do you inspect the wiring inside the walls?', a: 'We inspect all accessible wiring, including in attics, crawl spaces, basements, and at panel and outlet boxes. We cannot see wiring inside finished walls without opening them, but we can identify signs of hidden problems.' },
      { q: 'Will you fix problems you find during the inspection?', a: 'We provide estimates for any recommended repairs. If you want us to proceed with repairs, we can often address small issues the same day and schedule larger work for a follow-up visit.' },
    ],
    relatedServices: ['residential-electrician-denver-co', 'electrical-panel-upgrade-denver-co', 'surge-protection-denver-co', 'electrical-troubleshooting-denver-co'],
  },
  {
    slug: 'surge-protection-denver-co',
    title: 'Surge Protection',
    shortTitle: 'Surge Protection',
    metaTitle: 'Surge Protection Denver, CO | Whole-Home Surge Protectors | Qualified Electric',
    metaDescription: 'Whole-home surge protection in Denver, CO. Protect electronics and appliances from power surges. Panel-mounted and point-of-use surge protection. Call 720-840-4198.',
    h1: 'Surge Protection in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/978743/pexels-photo-978743.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrical outlets and surge protection',
    intro: [
      'A power surge can destroy a television, a computer, a refrigerator, or an HVAC system in a fraction of a second. Surges come from lightning, utility switching, and even from large appliances cycling on and off inside your own home.',
      'Qualified Electric installs whole-home surge protection throughout Denver. A panel-mounted surge protector stops large surges at the panel before they reach your devices. Combined with point-of-use protectors, it gives you layered defense for everything you plug in.',
    ],
    whatWeDo: [
      { heading: 'Whole-Home Surge Protectors', body: 'Install panel-mounted surge protective devices that guard every circuit in the home against external and internal surges.' },
      { heading: 'Point-of-Use Protection', body: 'Install surge-protected outlets and recommend quality surge strips for sensitive electronics like TVs and computers.' },
      { heading: 'Lightning Protection', body: 'Assess lightning risk and recommend additional protection for homes in high-exposure areas of Denver.' },
      { heading: 'Surge Diagnostic', body: 'Investigate recurring surge events, voltage fluctuations, and equipment damage to find the source.' },
    ],
    whyItMatters: [
      { heading: 'Protecting Electronics', body: 'Modern homes have thousands of dollars in electronics. A single surge can destroy them all. Surge protection is cheap insurance.' },
      { heading: 'Appliance Lifespan', body: 'Even small surges degrade appliance electronics over time. Surge protection extends the life of refrigerators, washers, and HVAC equipment.' },
      { heading: 'Peace of Mind', body: 'Denver sees its share of lightning and grid events. A whole-home surge protector means you do not have to unplug everything during a storm.' },
    ],
    process: [
      { step: '01', title: 'Assessment', body: 'We evaluate your panel, your surge exposure, and the value of the electronics you want to protect.' },
      { step: '02', title: 'Installation', body: 'We install the surge protective device in or next to your panel and connect it to a dedicated breaker.' },
      { step: '03', title: 'Point-of-Use', body: 'We install surge outlets at key locations and recommend surge strips for remaining sensitive equipment.' },
      { step: '04', title: 'Test & Verify', body: 'We verify the installation, test the indicator lights, and explain how to monitor the device.' },
    ],
    faqs: [
      { q: 'What is a whole-home surge protector?', a: 'It is a device installed at or inside your electrical panel that diverts surge voltage to ground before it enters your home\'s circuits. It protects everything plugged in, not just one device.' },
      { q: 'Do I still need surge strips if I have a whole-home protector?', a: 'Yes, for best protection. A whole-home protector stops large surges. Smaller surges can still reach sensitive electronics. We recommend surge strips for computers, TVs, and home theater equipment.' },
      { q: 'How much does whole-home surge protection cost?', a: 'A panel-mounted whole-home surge protector typically costs $400 to $700 installed, depending on the panel and the device rating. It is one of the most cost-effective electrical upgrades you can make.' },
      { q: 'Does surge protection protect against lightning?', a: 'A whole-home surge protector provides significant protection against indirect lightning surges that enter through the power lines. A direct lightning strike is catastrophic and no device can fully protect against it, but surge protection greatly reduces the risk of damage from nearby strikes.' },
    ],
    relatedServices: ['electrical-panel-upgrade-denver-co', 'electrical-inspection-denver-co', 'residential-electrician-denver-co', 'generator-installation-denver-co'],
  },
  {
    slug: 'generator-installation-denver-co',
    title: 'Generator Installation',
    shortTitle: 'Generator Installation',
    metaTitle: 'Generator Installation Denver, CO | Standby & Portable Generators | Qualified Electric',
    metaDescription: 'Generator installation in Denver, CO. Standby home generators with automatic transfer switches and portable generator inlet boxes. Licensed electricians. Call 720-840-4198.',
    h1: 'Generator Installation in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/5693845/pexels-photo-5693845.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Outdoor backup generator installation',
    intro: [
      'Denver winters and mountain weather can knock out power for hours or days. A backup generator keeps your heat, your refrigerator, your lights, and your medical devices running when the grid goes down.',
      'Qualified Electric installs standby and portable generator systems throughout Denver. We handle the electrical side — transfer switches, inlet boxes, sub-panels, and interlocks — and coordinate with generator suppliers for the equipment.',
    ],
    whatWeDo: [
      { heading: 'Standby Generator Hookup', body: 'Wire automatic standby generators with automatic transfer switches (ATS) for seamless, hands-off backup power.' },
      { heading: 'Portable Generator Inlet', body: 'Install a manual transfer switch or interlock kit with an exterior inlet box for portable generator connection.' },
      { heading: 'Critical Loads Sub-Panel', body: 'Install a sub-panel that isolates critical circuits — furnace, refrigerator, well pump, lights — for efficient generator use.' },
      { heading: 'Generator Interlock Kit', body: 'Install an interlock on your main panel as a cost-effective way to safely backfeed from a portable generator.' },
    ],
    whyItMatters: [
      { heading: 'Winter Reliability', body: 'A winter power outage in Denver can mean frozen pipes and a cold home within hours. A generator keeps your heat running.' },
      { heading: 'Food & Medicine', body: 'Refrigerators and freezers keep running. Medical equipment stays powered. No spoiled food, no health risks.' },
      { heading: 'Automatic Operation', body: 'A standby generator with an ATS starts automatically within seconds of an outage. You do not have to be home or go outside in a storm.' },
    ],
    process: [
      { step: '01', title: 'Load Assessment', body: 'We calculate what you want to power during an outage and size the generator and transfer switch accordingly.' },
      { step: '02', title: 'Electrical Installation', body: 'We install the transfer switch, inlet box, or sub-panel and wire it to your critical circuits.' },
      { step: '03', title: 'Generator Setup', body: 'We coordinate with the generator supplier for placement and fuel connection, and make the final electrical connections.' },
      { step: '04', title: 'Test & Commission', body: 'We test the system under load, verify automatic transfer operation, and walk you through maintenance.' },
    ],
    faqs: [
      { q: 'What size generator do I need for my home?', a: 'It depends on what you want to power. A portable generator of 7,000 to 10,000 watts can run a furnace, refrigerator, lights, and a few outlets. A standby generator of 16,000 to 24,000 watts can run most of a medium-sized home. We do a load assessment to size it correctly.' },
      { q: 'What is the difference between a standby and portable generator?', a: 'A standby generator is permanently installed, runs on natural gas or propane, and starts automatically with a transfer switch. A portable generator runs on gasoline, must be wheeled out and connected manually, and powers only what is plugged into the transfer switch or inlet.' },
      { q: 'Can I use a portable generator without a transfer switch?', a: 'No. Backfeeding a panel without a transfer switch or interlock is extremely dangerous and illegal. It can energize utility lines and injure or kill line workers. We install proper transfer switches or interlock kits for safe portable generator use.' },
      { q: 'How much does generator installation cost?', a: 'The electrical installation for a portable generator with an inlet box and interlock typically costs $500 to $1,200. A standby generator with an automatic transfer switch is $2,000 to $5,000 for the electrical work, plus the generator and fuel connection. We provide a detailed estimate.' },
    ],
    relatedServices: ['electrical-panel-upgrade-denver-co', 'surge-protection-denver-co', 'residential-electrician-denver-co', 'electrical-inspection-denver-co'],
  },
  {
    slug: 'electrical-troubleshooting-denver-co',
    title: 'Electrical Troubleshooting',
    shortTitle: 'Electrical Troubleshooting',
    metaTitle: 'Electrical Troubleshooting Denver, CO | Diagnose Any Issue | Qualified Electric',
    metaDescription: 'Expert electrical troubleshooting in Denver, CO. Flickering lights, tripping breakers, mystery outages — we find the cause and fix it. Licensed electricians. Call 720-840-4198.',
    h1: 'Electrical Troubleshooting in Denver, CO',
    heroImage: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician using a multimeter to troubleshoot electrical wiring',
    intro: [
      'Some electrical problems are obvious — a dead outlet, a tripped breaker. Others are mysteries: lights that flicker only when the wind blows, a GFCI that trips at random times, a breaker that holds all day but trips at 2 AM.',
      'Qualified Electric specializes in electrical troubleshooting throughout Denver. We use professional diagnostic equipment — multimeters, clamp meters, circuit tracers, and thermal cameras — to find problems that other electricians miss. Then we fix them right.',
    ],
    whatWeDo: [
      { heading: 'Circuit Tracing', body: 'Identify which breaker controls which circuit, trace wiring routes, and map your panel for future reference.' },
      { heading: 'Intermittent Fault Diagnosis', body: 'Find the cause of flickering lights, random breaker trips, and GFCI nuisance tripping using thermal imaging and load testing.' },
      { heading: 'Voltage Drop Testing', body: 'Measure voltage drop under load to find undersized wiring, loose connections, and failing breakers.' },
      { heading: 'Neutral & Ground Issues', body: 'Diagnose open neutrals, shared neutrals, and grounding problems that cause equipment damage and shock hazards.' },
    ],
    whyItMatters: [
      { heading: 'Root Cause vs. Symptom', body: 'Replacing a tripped breaker without finding why it tripped does not fix the problem. We find the root cause.' },
      { heading: 'Thermal Imaging', body: 'Heat is the first sign of an electrical problem. Our thermal camera finds hot spots inside panels and behind walls before they cause a fire.' },
      { heading: 'Documentation', body: 'We document our findings with photos and measurements so you understand exactly what is wrong and what it takes to fix it.' },
    ],
    process: [
      { step: '01', title: 'Listen', body: 'We listen to your description of the problem. The details you provide are crucial to diagnosis.' },
      { step: '02', title: 'Test', body: 'We use professional instruments to measure voltage, current, resistance, and temperature at key points in the circuit.' },
      { step: '03', title: 'Diagnose', body: 'We identify the root cause and explain it in plain language with supporting measurements.' },
      { step: '04', title: 'Fix', body: 'We provide an estimate for the repair and, with your approval, fix the problem on the spot when possible.' },
    ],
    faqs: [
      { q: 'How much does electrical troubleshooting cost?', a: 'Our standard diagnostic service call includes up to one hour of troubleshooting. Most issues are diagnosed within that time. If the repair is simple, we can often fix it during the same visit with your approval.' },
      { q: 'Why do my lights flicker when it is windy?', a: 'This is often caused by a loose connection at the service entrance, weatherhead, or meter base. Wind moves the service drop and the loose connection arcs. This is a serious fire and shock hazard and should be repaired immediately.' },
      { q: 'Why does my GFCI keep tripping?', a: 'GFCIs trip when they detect a ground fault — current leaking from the hot to ground. Causes include moisture, degraded insulation, a faulty appliance, or a shared neutral. We test each possibility to find the specific cause.' },
      { q: 'Can you find a problem behind a finished wall?', a: 'Yes. We use thermal imaging to detect hot spots, circuit tracers to follow wiring paths, and voltage measurements to pinpoint faults. In most cases we can identify the problem without opening the wall.' },
    ],
    relatedServices: ['electrical-repair-denver-co', 'electrical-inspection-denver-co', 'outlet-repair-denver-co', 'electrical-panel-upgrade-denver-co'],
  },
];

export type LocationPage = {
  slug: string;
  city: string;
  state: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
};

export const LOCATIONS: LocationPage[] = [
  {
    slug: 'electrician-aurora-co',
    city: 'Aurora',
    state: 'CO',
    shortDesc: 'Electrician serving Aurora, CO',
    metaTitle: 'Electrician Aurora, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Aurora, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Serving the Denver metro area. Call 720-840-4198.',
    h1: 'Electrician in Aurora, CO',
    intro: [
      'Aurora is one of the largest and fastest-growing cities in the Denver metro area, and Qualified Electric is proud to serve Aurora homeowners with the same quality and professionalism we bring to every Denver neighborhood.',
      'From the established homes of Aurora\'s original neighborhoods to the new construction in southeast Aurora, our electricians handle everything from routine repairs to major electrical upgrades. We are based in Denver and Aurora is a core part of our service area.',
    ],
  },
  {
    slug: 'electrician-lakewood-co',
    city: 'Lakewood',
    state: 'CO',
    shortDesc: 'Electrician serving Lakewood, CO',
    metaTitle: 'Electrician Lakewood, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Lakewood, CO. Electrical repair, panel upgrades, lighting installation, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Lakewood, CO',
    intro: [
      'Lakewood sits just west of Denver and is home to a wide range of housing, from mid-century ranches to modern builds near the foothills. Qualified Electric serves Lakewood homeowners with complete residential electrical services.',
      'Whether you live near Belmar, in the Green Mountain area, or up against the foothills, our electricians are familiar with the electrical systems common to Lakewood homes and the issues that come with aging wiring and panels.',
    ],
  },
  {
    slug: 'electrician-littleton-co',
    city: 'Littleton',
    state: 'CO',
    shortDesc: 'Electrician serving Littleton, CO',
    metaTitle: 'Electrician Littleton, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Littleton, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Littleton, CO',
    intro: [
      'Littleton combines historic charm with modern growth, and its homes reflect that range. Qualified Electric provides residential electrical services throughout Littleton, from downtown historic homes to the developments around Ken Caryl.',
      'Our electricians understand the older wiring systems found in historic Littleton homes and the modern electrical demands of new construction. We bring every home up to current code with safe, reliable electrical work.',
    ],
  },
  {
    slug: 'electrician-englewood-co',
    city: 'Englewood',
    state: 'CO',
    shortDesc: 'Electrician serving Englewood, CO',
    metaTitle: 'Electrician Englewood, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Englewood, CO. Electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Englewood, CO',
    intro: [
      'Englewood is a close-in Denver suburb with a mix of older homes and newer developments. Qualified Electric serves Englewood with the full range of residential electrical services, from small repairs to whole-home rewiring.',
      'We are minutes from Englewood and respond quickly to service calls. Our electricians are familiar with the housing stock in the area and the common electrical issues that come with it.',
    ],
  },
  {
    slug: 'electrician-centennial-co',
    city: 'Centennial',
    state: 'CO',
    shortDesc: 'Electrician serving Centennial, CO',
    metaTitle: 'Electrician Centennial, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Centennial, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Centennial, CO',
    intro: [
      'Centennial is one of Denver\'s southern suburbs, with a wide range of home styles from the 1980s through today. Qualified Electric serves Centennial homeowners with comprehensive residential electrical services.',
      'Many Centennial homes are reaching the age where electrical panels and wiring need attention. We help homeowners upgrade panels, add circuits, and bring their electrical systems up to modern standards.',
    ],
  },
  {
    slug: 'electrician-parker-co',
    city: 'Parker',
    state: 'CO',
    shortDesc: 'Electrician serving Parker, CO',
    metaTitle: 'Electrician Parker, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Parker, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Parker, CO',
    intro: [
      'Parker is a growing community southeast of Denver with a mix of established and new construction homes. Qualified Electric serves Parker with full residential electrical services, from panel upgrades to EV charger installation.',
      'As more Parker homeowners add EVs, mini-splits, and smart-home systems, we help them upgrade their electrical infrastructure to keep up with modern demands safely and reliably.',
    ],
  },
  {
    slug: 'electrician-highlands-ranch-co',
    city: 'Highlands Ranch',
    state: 'CO',
    shortDesc: 'Electrician serving Highlands Ranch, CO',
    metaTitle: 'Electrician Highlands Ranch, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Highlands Ranch, CO. Electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Highlands Ranch, CO',
    intro: [
      'Highlands Ranch is one of Denver\'s largest planned communities, with homes built primarily from the 1980s through the 2010s. Qualified Electric serves Highlands Ranch with complete residential electrical services.',
      'Many Highlands Ranch homes have original panels that are approaching end of life or lack the capacity for modern additions like EV chargers and second HVAC zones. We help homeowners upgrade and expand their electrical systems.',
    ],
  },
  {
    slug: 'electrician-arvada-co',
    city: 'Arvada',
    state: 'CO',
    shortDesc: 'Electrician serving Arvada, CO',
    metaTitle: 'Electrician Arvada, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Arvada, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Arvada, CO',
    intro: [
      'Arvada spans from historic Old Town to large modern developments in the northwest Denver metro. Qualified Electric serves Arvada homeowners with the full spectrum of residential electrical services.',
      'We are experienced with the older homes in central Arvada that need wiring updates and panel replacements, as well as newer homes that need additional circuits for EVs, hot tubs, and home additions.',
    ],
  },
  {
    slug: 'electrician-westminster-co',
    city: 'Westminster',
    state: 'CO',
    shortDesc: 'Electrician serving Westminster, CO',
    metaTitle: 'Electrician Westminster, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Westminster, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Westminster, CO',
    intro: [
      'Westminster is a northern Denver suburb with a range of housing from the 1960s through today. Qualified Electric provides residential electrical services throughout Westminster.',
      'Whether you need a panel upgrade in an older Westminster home or EV charger wiring in a new one, our electricians deliver safe, code-compliant work with upfront pricing.',
    ],
  },
  {
    slug: 'electrician-thornton-co',
    city: 'Thornton',
    state: 'CO',
    shortDesc: 'Electrician serving Thornton, CO',
    metaTitle: 'Electrician Thornton, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Thornton, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Thornton, CO',
    intro: [
      'Thornton is a growing community north of Denver with a mix of older and newer residential developments. Qualified Electric serves Thornton homeowners with complete residential electrical services.',
      'From routine outlet and switch repairs to panel upgrades and whole-home rewiring, our electricians are ready to help Thornton residents with any electrical need.',
    ],
  },
  {
    slug: 'electrician-golden-co',
    city: 'Golden',
    state: 'CO',
    shortDesc: 'Electrician serving Golden, CO',
    metaTitle: 'Electrician Golden, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Golden, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Golden, CO',
    intro: [
      'Golden is a historic city at the foot of the foothills, with a mix of older homes and new construction. Qualified Electric serves Golden with full residential electrical services.',
      'Golden\'s older homes often need wiring and panel updates, while newer homes benefit from EV chargers and smart-home wiring. We handle the full range of electrical work for Golden homeowners.',
    ],
  },
  {
    slug: 'electrician-broomfield-co',
    city: 'Broomfield',
    state: 'CO',
    shortDesc: 'Electrician serving Broomfield, CO',
    metaTitle: 'Electrician Broomfield, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Broomfield, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Broomfield, CO',
    intro: [
      'Broomfield sits between Denver and Boulder and has a wide range of residential developments. Qualified Electric serves Broomfield homeowners with comprehensive residential electrical services.',
      'From panel upgrades and lighting installation to EV chargers and troubleshooting, our electricians provide the quality and professionalism Broomfield residents expect.',
    ],
  },
  {
    slug: 'electrician-commerce-city-co',
    city: 'Commerce City',
    state: 'CO',
    shortDesc: 'Electrician serving Commerce City, CO',
    metaTitle: 'Electrician Commerce City, CO | Qualified Electric — Denver Metro',
    metaDescription: 'Licensed electrician serving Commerce City, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Denver metro electrician. Call 720-840-4198.',
    h1: 'Electrician in Commerce City, CO',
    intro: [
      'Commerce City is a growing community northeast of Denver with a mix of established neighborhoods and new developments. Qualified Electric serves Commerce City with full residential electrical services.',
      'Our electricians handle everything from small repairs to major electrical upgrades for Commerce City homeowners, with upfront pricing and professional workmanship.',
    ],
  },
];

export const ELECTRICAL_PROBLEMS = [
  { icon: 'Zap', title: 'Flickering Lights', desc: 'Lights dim or flicker when appliances turn on, or for no apparent reason. This can indicate a loose connection or overloaded circuit.' },
  { icon: 'AlertTriangle', title: 'Breakers That Trip', desc: 'A breaker that trips repeatedly is telling you something is wrong. We find the cause and fix it, not just reset the breaker.' },
  { icon: 'Plug', title: 'Dead Outlets', desc: 'Outlets that stopped working, feel warm, or have scorch marks. These are safety hazards that need immediate attention.' },
  { icon: 'Flame', title: 'Burning Smell', desc: 'A burning or ozone smell near an outlet, switch, or panel is an emergency. Turn off the breaker and call us immediately.' },
  { icon: 'Lightbulb', title: 'Switches That Spark', desc: 'A switch that crackles, sparks, or feels warm has failing contacts. It is a fire hazard and should be replaced.' },
  { icon: 'ShieldAlert', title: 'No GFCI Protection', desc: 'Kitchen, bath, and outdoor outlets without GFCI protection are a shock hazard and a code violation. We fix that.' },
];

export const WHY_CHOOSE_US = [
  { icon: 'ShieldCheck', title: 'Licensed & Insured', desc: 'Every electrician on our team is fully licensed and insured. Your home and your family are protected on every job.' },
  { icon: 'Clock', title: 'On-Time Service', desc: 'We respect your time. We show up when we say we will and complete the work efficiently so you can get back to your day.' },
  { icon: 'DollarSign', title: 'Upfront Pricing', desc: 'You get a clear, flat-rate price before any work begins. No hourly charges, no surprises, no hidden fees.' },
  { icon: 'Award', title: 'Quality Workmanship', desc: 'We take pride in clean, careful, code-compliant work. We treat your home as if it were our own.' },
  { icon: 'Phone', title: 'Fast Response', desc: 'Electrical problems cannot wait. We offer same-day service for most calls and emergency service when you need it.' },
  { icon: 'ThumbsUp', title: 'Satisfaction Guaranteed', desc: 'We stand behind our work. If something is not right, we come back and make it right. That is our promise.' },
];

export const TESTIMONIALS = [
  { name: 'Jennifer M.', location: 'Denver, CO', text: 'Our panel was from the 1970s and kept tripping. Qualified Electric replaced it with a new 200-amp panel in one day. The electrician was professional, clean, and explained everything. No more tripped breakers.', rating: 5 },
  { name: 'Robert K.', location: 'Aurora, CO', text: 'I needed a 240V outlet for my Tesla. They ran a dedicated circuit through the garage, installed the charger, and had me charging that night. Fair price and excellent work.', rating: 5 },
  { name: 'Sarah T.', location: 'Lakewood, CO', text: 'We had flickering lights in the kitchen for months. Two other electricians could not figure it out. Qualified Electric found a loose neutral in the panel within 20 minutes and fixed it. No more flickering.', rating: 5 },
  { name: 'Michael D.', location: 'Littleton, CO', text: 'They installed recessed lighting throughout our living room and kitchen. The layout is perfect, the lighting is even, and they patched the ceiling cuts so well you cannot tell they were there.', rating: 5 },
  { name: 'Amanda R.', location: 'Highlands Ranch, CO', text: 'Our GFCI kept tripping in the bathroom. They diagnosed a ground fault caused by moisture in an outdoor box, replaced it, and rerouted the circuit. Problem solved. Very knowledgeable and friendly.', rating: 5 },
  { name: 'David L.', location: 'Centennial, CO', text: 'I called in the morning about a dead outlet and they had someone out by noon. Turns out it was a backstabbed wire that had come loose. Fixed it and checked the rest of the outlets on the circuit too.', rating: 5 },
];

export const HOMEPAGE_FAQS = [
  { q: 'What areas do you serve?', a: 'Qualified Electric is based in Denver, CO and serves the entire Denver metro area, including Aurora, Lakewood, Littleton, Englewood, Centennial, Parker, Highlands Ranch, Arvada, Westminster, Thornton, Golden, Broomfield, and Commerce City.' },
  { q: 'Do you offer same-day service?', a: 'We strive to offer same-day service for most repair calls, especially safety-related issues. Call us early in the day for the best chance of a same-day appointment.' },
  { q: 'Are your electricians licensed?', a: 'Yes. Every electrician on our team is fully licensed and insured to perform electrical work in Colorado. We carry general liability and workers compensation insurance.' },
  { q: 'Do you provide free estimates?', a: 'For most projects we provide an upfront estimate after assessing the work on site. Standard repair calls carry a service-call fee that is applied toward the repair if you proceed.' },
  { q: 'What are your hours?', a: 'We are available Monday through Friday 7:00 AM to 7:00 PM, Saturday 8:00 AM to 5:00 PM, and offer emergency service on Sundays for urgent safety issues.' },
  { q: 'Do you work on older homes?', a: 'Absolutely. Denver has many older homes with knob-and-tube, aluminum, and other legacy wiring. We have extensive experience updating these systems safely and to code.' },
];

export const IMAGES = {
  heroElectrician: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Professional electrician working on an electrical panel',
  about: 'https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&w=1600',
  aboutAlt: 'Electrician in safety gear inspecting an outdoor electrical panel',
  residential: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1600',
  residentialAlt: 'Electrician installing residential wiring',
  project1: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project1Alt: 'New electrical panel with circuit breakers and color-coded wiring',
  project2: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project2Alt: 'Electrician installing a new light fixture during renovation',
  project3: 'https://images.pexels.com/photos/27355835/pexels-photo-27355835.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project3Alt: 'Electric vehicle charging at a home charging station',
  project4: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project4Alt: 'Ceiling fan installation in a modern living room',
  project5: 'https://images.pexels.com/photos/10508622/pexels-photo-10508622.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project5Alt: 'Modern pendant lighting installation',
  project6: 'https://images.pexels.com/photos/5693845/pexels-photo-5693845.jpeg?auto=compress&cs=tinysrgb&w=1200',
  project6Alt: 'Outdoor backup generator installation',
  denverSkyline: 'https://images.pexels.com/photos/16108565/pexels-photo-16108565.jpeg?auto=compress&cs=tinysrgb&w=1920',
  denverSkylineAlt: 'Denver Colorado city skyline at sunset',
  homeExterior: 'https://images.pexels.com/photos/5524237/pexels-photo-5524237.jpeg?auto=compress&cs=tinysrgb&w=1600',
  homeExteriorAlt: 'Modern Denver home with exterior lighting at twilight',
  ctaBackground: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ctaAlt: 'Electrician working on an outdoor electrical panel',
};
