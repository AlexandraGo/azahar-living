/* ============================================================
   AZAHAR LIVING — script.js
   - Sistema bilingüe ES / EN
   - Navbar scroll + menú móvil
   - Animaciones fade-in con IntersectionObserver
   - Formulario de contacto con validación
   ============================================================ */

/* ── Traducciones ── */
const translations = {
  es: {
    /* Navbar */
    'nav.why':      'Por qué',
    'nav.rooms':    'Habitaciones',
    'nav.forwhom':  '¿Para quién?',
    'nav.services': 'Servicios',
    'nav.location': 'Castellón',
    'nav.faq':      'FAQ',
    'nav.contact':  'Reserva',
    'nav.cta':      'Reservar',

    /* Hero */
    'hero.eyebrow': 'Azahar Living · Habitaciones en Castellón',
    'hero.title':   'Habitaciones en Castellón<br>para estudiantes y jóvenes profesionales',
    'hero.subtitle':'Tu habitación privada en Castellón, con todo lo que necesitas para vivir, estudiar y trabajar.',
    'hero.pill1':   'Habitación privada',
    'hero.pill2':   'Comunidad',
    'hero.pill3':   'Espacio de trabajo',
    'hero.pill4':   'Servicios incluidos',
    'hero.pill5':   'Castellón centro',
    'hero.cta1':    'Ver habitaciones',
    'hero.cta2':    'Reservar plaza',
    'hero.stat1':   'desde / mes',
    'hero.stat2':   'habitaciones privadas',
    'hero.stat3':   'ático exclusivo',

    /* Why */
    'why.label':    'Por qué elegirnos',
    'why.title':    '¿Por qué Azahar Living?',
    'why.subtitle': 'Un ático de 180 m² en el centro de Castellón, sin vecinos laterales, con vistas al mar y a la montaña, y todo incluido en el precio.',
    'why.p1.title': 'Ático exclusivo de 180 m²',
    'why.p1.desc':  'Sin vecinos laterales — tu espacio, tu silencio. Sol todo el día.',
    'why.p2.title': 'Vistas inmejorables',
    'why.p2.desc':  'Mar Mediterráneo y montaña desde las ventanas del ático.',
    'why.p3.title': 'Todo incluido, sin sorpresas',
    'why.p3.desc':  'WiFi, agua, luz, gas, limpieza semanal. Un solo pago al mes.',
    'why.p4.title': 'Comunidad real',
    'why.p4.desc':  'Comparte espacio con estudiantes y profesionales que comparten tu energía.',
    'why.p5.title': 'Centro de Castellón',
    'why.p5.desc':  'Av. Rei en Jaume 92 — a pie de todo lo que necesitas.',

    /* SEO content */
    'seo.label': 'Habitaciones en alquiler',
    'seo.title': 'Habitaciones en alquiler en Castellón',
    'seo.p1':    'Azahar Living ofrece habitaciones privadas en alquiler en Castellón de la Plana para estudiantes y jóvenes profesionales. El alojamiento combina habitaciones privadas con zonas comunes, cocina compartida, lavandería, WiFi de alta velocidad y limpieza semanal.',
    'seo.p2':    'Si buscas alquilar una habitación en Castellón, Azahar Living ofrece una alternativa cómoda para estudiantes de la UJI, Erasmus, estudiantes de máster y profesionales que llegan a la ciudad por trabajo. Las habitaciones están amuebladas y los principales gastos están incluidos en una sola cuota mensual.',
    'seo.p3':    'El alojamiento está situado en la Avenida Rei en Jaume, en el centro de Castellón de la Plana, con acceso a comercios, servicios, transporte y conexión con la Universidad Jaume I.',

    /* For whom */
    'fw.label':   '¿Para quién?',
    'fw.title':   '¿Para quién es Azahar Living?',
    'fw.subtitle':'Dos perfiles, un mismo espacio de calidad.',
    'fw.s.title': 'Estudiantes',
    'fw.s.desc':  'Ideal para estudiantes de la UJI, Erasmus, máster y jóvenes que vienen a Castellón a estudiar. Habitación privada, zonas comunes y todo incluido para que solo te preocupes de tus estudios.',
    'fw.s.f1':    '🎓 Estudiantes UJI',
    'fw.s.f2':    '✈️ Erasmus y movilidad internacional',
    'fw.s.f3':    '📚 Máster y posgrado',
    'fw.s.f4':    '🆕 Primera vez viviendo fuera de casa',
    'fw.p.title': 'Jóvenes profesionales',
    'fw.p.desc':  'Para personas que empiezan a trabajar en Castellón, profesionales desplazados, trabajadores remotos y jóvenes emprendedores que buscan una base de calidad.',
    'fw.p.f1':    '💻 Trabajadores remotos y nómadas digitales',
    'fw.p.f2':    '📍 Profesionales desplazados a Castellón',
    'fw.p.f3':    '🚀 Emprendedores y freelances',
    'fw.p.f4':    '🏢 Primeros años de carrera profesional',

    /* About */
    'about.label':         'Sobre nosotros',
    'about.title':         'Más que un alojamiento, una comunidad',
    'about.p1':            'Azahar Living es un ático de 180 m² con orientación única: sol de mañana a noche, sin vecinos laterales y con vistas inmejorables al mar y a la montaña. Un lujo que en Castellón existe de verdad.',
    'about.p2':            'Una comunidad de profesionales activos, curiosos y con ganas de crecer. Habitaciones de 15 a 25 m² con cama de 135, armarios empotrados y 3 baños compartidos — todo en un ático que te da el espacio y la libertad que mereces.',
    'about.badge':         'Castellón',
    'about.pillar1.title': 'Ático exclusivo',
    'about.pillar1.desc':  '180 m² sin vecinos laterales — tu espacio, tu silencio',
    'about.pillar2.title': 'Tu tribu',
    'about.pillar2.desc':  'Profesionales activos, nómadas y emprendedores con ganas de crecer',
    'about.pillar3.title': 'Vistas inmejorables',
    'about.pillar3.desc':  'Mar Mediterráneo y montaña — desde el ático, todo se ve mejor',

    /* Rooms */
    'rooms.label':       'Habitaciones',
    'rooms.title':       'Espacios diseñados para ti',
    'rooms.subtitle':    '7 habitaciones privadas en Castellón. Cuatro categorías para adaptarse a tu espacio y presupuesto.',
    'rooms.available':   'Disponible',
    'rooms.popular':     'Más popular',
    'rooms.exclusive':   'Exclusiva',
    'rooms.few':         '1 disponible',
    'rooms.month':       '/ mes',
    'rooms.extra':       'gastos incluidos',
    'rooms.cta':         'Solicitar info',
    /* Estándar x3 */
    'rooms.r1.count':    '× 3 unidades',
    'rooms.r1.name':     'Standard',
    'rooms.r1.f1':       '15 m²',
    'rooms.r1.f2':       'Vistas a la montaña',
    'rooms.r1.f3':       'Cama doble',
    'rooms.r1.f4':       'Armario empotrado',
    'rooms.r1.f5':       'WiFi alta velocidad',
    /* Premium x2 */
    'rooms.r2.count':    '× 2 unidades',
    'rooms.r2.name':     'Premium ⭐',
    'rooms.r2.f1':       '20 m²',
    'rooms.r2.f2':       'Vistas al mar',
    'rooms.r2.f3':       'Cama doble grande',
    'rooms.r2.f4':       'Armario empotrado grande',
    'rooms.r2.f5':       'WiFi alta velocidad',
    /* Premium Balcony x1 */
    'rooms.r3.count':    '× 1 unidad',
    'rooms.r3.name':     'Premium con Terraza 🌿',
    'rooms.r3.f1':       '20 m²',
    'rooms.r3.f2':       'Vistas al mar',
    'rooms.r3.f3':       'Terraza privada',
    'rooms.r3.f4':       'Cama doble grande',
    'rooms.r3.f5':       'Armario empotrado',
    /* Suite x1 */
    'rooms.r4.count':    '× 1 unidad',
    'rooms.r4.name':     'Suite 🏆',
    'rooms.r4.f1':       '25 m² — la más grande',
    'rooms.r4.f2':       'Vistas al mar',
    'rooms.r4.f3':       'Cama king size',
    'rooms.r4.f4':       'Armario empotrado doble',
    'rooms.r4.f5':       'Zona de trabajo independiente',
    /* Disponibilidad */
    'rooms.avail.std':   '3 × Estándar disponibles',
    'rooms.avail.prem':  '2 × Premium disponibles',
    'rooms.avail.balc':  '1 × Premium Balcony disponible',
    'rooms.avail.suite': '1 × Suite disponible',

    /* Services */
    'services.label':    'Servicios',
    'services.title':    'Todo lo que necesitas incluido',
    'services.subtitle': 'Nos ocupamos de los detalles para que tú te centres en lo que importa.',
    'sv.kitchen.title':  'Cocina de 30 m²',
    'sv.kitchen.desc':   'Cocina amplia totalmente equipada — más que cocinar, un espacio para vivir.',
    'sv.views.title':    'Vistas al mar y montaña',
    'sv.views.desc':     'Despierta con el Mediterráneo de frente y la sierra de fondo.',
    'sv.sun.title':      'Sol todo el día',
    'sv.sun.desc':       'Orientación privilegiada — luz natural de la mañana a la tarde-noche.',
    'sv.quiet.title':    'Sin vecinos laterales',
    'sv.quiet.desc':     'Privacidad y silencio total — ideal para el trabajo concentrado.',
    'sv.wardrobe.title': 'Armarios empotrados',
    'sv.wardrobe.desc':  'Todas las habitaciones cuentan con armario empotrado de gran capacidad.',
    'sv.wifi.title':     'WiFi de alta velocidad',
    'sv.wifi.desc':      'Fibra óptica simétrica, perfecta para videoconferencias y trabajo remoto.',
    'sv.bills.title':    'Suministros incluidos',
    'sv.bills.desc':     'Agua, luz y gas incluidos. Sin facturas, sin preocupaciones.',
    'sv.clean.title':    'Limpieza semanal',
    'sv.clean.desc':     'Limpieza de zonas comunes una vez a la semana incluida.',
    'sv.kitchen.title':  'Cocina compartida',
    'sv.kitchen.desc':   'Cocina de 30 m² totalmente equipada para todos los residentes.',
    'sv.laundry.title':  'Lavandería',
    'sv.laundry.desc':   'Lavadora disponible para todos los residentes.',
    'sv.work.title':     'Espacio de trabajo',
    'sv.work.desc':      'Zonas comunes amplias pensadas para trabajar y estudiar con comodidad.',
    'sv.views.title':    'Vistas al mar y montaña',
    'sv.views.desc':     'Ático con vistas inmejorables al Mediterráneo y a la montaña.',
    'sv.parking.title':  'Parking',
    'sv.parking.desc':   'Plaza de parking disponible. Consultar precio y disponibilidad.',
    'hl.total':          'ático completo',
    'hl.rooms':          'habitaciones privadas',
    'hl.kitchen':        'cocina',
    'hl.baths':          'baños',
    'sv.laundry.desc':   'Lavadora y secadora disponibles para todos los residentes.',
    'sv.bills.title':    'Suministros incluidos',
    'sv.bills.desc':     'Agua, luz y gas cubiertos en el suplemento mensual de 30€.',
    'hl.total':          'piso completo',
    'hl.rooms':          'por habitación',
    'hl.kitchen':        'cocina',
    'hl.views':          'vistas únicas',

    /* Pricing */
    'pricing.label':     'Precios',
    'pricing.title':     'Transparente y sin sorpresas',
    'pricing.subtitle':  'Precio fijo mensual. Sin letra pequeña.',
    'pricing.month':     '/ mes',
    'pricing.best':      'Más popular',
    'pricing.exclusive': 'Exclusiva',
    'pricing.cta':       'Solicitar plaza',
    'pricing.extra':     'gastos incluidos',
    'pricing.note':      '💬 Precios mensuales. +60€/mes cubre agua, luz y gas. Estancia mínima 1 mes. 7 habitaciones en total — plazas limitadas.',
    /* Estándar */
    'pricing.p1.name':   'Standard',
    'pricing.p1.sub':    '15 m² · Vistas montaña',
    'pricing.p1.units':  '3 habitaciones',
    'pricing.f1': 'Habitación 15 m²',
    'pricing.f2': 'Vistas a la montaña',
    'pricing.f3': 'Armario empotrado',
    'pricing.f4': 'WiFi alta velocidad',
    'pricing.f5': 'Cocina 30 m² compartida',
    'pricing.f6': 'Lavandería',
    /* Premium */
    'pricing.p2.name':   'Premium ⭐',
    'pricing.p2.sub':    '20 m² · Vistas al mar',
    'pricing.p2.units':  '2 habitaciones',
    'pricing.g1': 'Habitación 20 m²',
    'pricing.g2': 'Vistas al mar Mediterráneo',
    'pricing.g3': 'Armario empotrado grande',
    'pricing.g4': 'WiFi alta velocidad',
    'pricing.g5': 'Cocina 30 m² compartida',
    'pricing.g6': 'Lavandería',
    /* Premium Balcony */
    'pricing.p3.name':   'Premium con Terraza 🌿',
    'pricing.p3.sub':    '20 m² · Vistas al mar · Terraza',
    'pricing.p3.units':  '1 habitación',
    'pricing.h1': 'Habitación 20 m²',
    'pricing.h2': 'Vistas al mar Mediterráneo',
    'pricing.h3': 'Terraza privada exclusiva',
    'pricing.h4': 'Armario empotrado',
    'pricing.h5': 'WiFi alta velocidad',
    'pricing.h6': 'Cocina y lavandería',
    /* Suite */
    'pricing.p4.name':   'Suite 🏆',
    'pricing.p4.sub':    '25 m² · Vistas al mar',
    'pricing.p4.units':  '1 habitación',
    'pricing.i1': 'Room 25 m² — the largest',
    'pricing.i2': 'Vistas al mar Mediterráneo',
    'pricing.i3': 'Cama king size',
    'pricing.i4': 'Armario empotrado doble',
    'pricing.i5': 'Zona de trabajo independiente',
    'pricing.i6': 'Todos los servicios',

    'sv.clean.title':    'Limpieza semanal',
    'sv.clean.desc':     'Limpieza de zonas comunes una vez a la semana incluida.',
    'sv.parking.title':  'Parking',
    'sv.parking.desc':   'Plaza de parking disponible. Consultar precio y disponibilidad.',

    /* Location */
    'loc.label':     'Ubicación',
    'loc.title':     'En el corazón de Castellón',
    'loc.desc':      'Castellón de la Plana te ofrece una calidad de vida difícil de igualar: playas a 5 km, una ciudad vibrante con todo tipo de servicios, y un coste de vida muy por debajo de Madrid o Barcelona.',
    'loc.f1.title':  'Playa del Grao',
    'loc.f1.desc':   'A 10 minutos en bici',
    'loc.f2.title':  'AVE a Valencia',
    'loc.f2.desc':   '30 minutos en tren',
    'loc.f3.title':  'Aeropuerto',
    'loc.f3.desc':   'Castellón y Valencia (60 min)',
    'loc.f4.title':  'Clima mediterráneo',
    'loc.f4.desc':   '+300 días de sol al año',

    /* Contact */
    'contact.label': 'Contacto',
    'contact.title': '¿Listo para mudarte?',
    'contact.desc':  '¿Eres profesional, nómada digital o emprendedor y buscas algo diferente en Castellón? Escríbenos — te respondemos en menos de 24 horas.',
    'form.name':     'Nombre completo',
    'form.email':    'Correo electrónico',
    'form.room':     'Habitación de interés',
    'form.roomSelect':'Selecciona una opción',
    'form.roomStd':  'Standard · 330€/mes',
    'form.roomPrem': 'Premium ⭐ · 350€/mes',
    'form.roomSuite':'Suite 🏆 · 400€/mes',
    'form.date':     'Fecha de entrada deseada',
    'form.message':  'Mensaje (opcional)',
    'form.submit':   'Enviar solicitud',
    'form.success':  '¡Mensaje enviado! Te contactamos pronto. 🌸',
    'form.errName':  'Por favor, introduce tu nombre.',
    'form.errEmail': 'Por favor, introduce un email válido.',

    /* FAQ ES */
    'faq.label':   'Preguntas frecuentes',
    'faq.title':   'Preguntas frecuentes',
    'faq.subtitle':'Todo lo que necesitas saber antes de reservar.',
    'faq.q1': '¿Qué incluye el precio mensual?',
    'faq.a1': 'El precio incluye todo: habitación privada, WiFi de alta velocidad, agua, luz, gas, limpieza semanal de zonas comunes, uso de cocina equipada y lavandería. Un solo pago al mes, sin sorpresas.',
    'faq.q2': '¿Cuál es la estancia mínima?',
    'faq.a2': 'La estancia mínima es de 6 meses. Es un alojamiento pensado para estudiantes de curso completo y profesionales que se instalan en Castellón, no para estancias cortas.',
    'faq.q3': '¿Está cerca de la UJI?',
    'faq.a3': 'Sí. Azahar Living está en la Av. Rei en Jaume 92, en el centro de Castellón, a aproximadamente 15 minutos del campus de la Universidad Jaume I (UJI).',
    'faq.q4': '¿Cuántas personas viven en el piso?',
    'faq.a4': 'El ático tiene 7 habitaciones privadas. Conviven entre 5 y 7 personas con perfil de estudiante o joven profesional.',
    'faq.q5': '¿Hay parking disponible?',
    'faq.a5': 'Sí, hay plaza de parking disponible con coste adicional. Consúltanos disponibilidad y precio al contactar.',
    'faq.q6': '¿Cómo reservo una habitación?',
    'faq.a6': 'Rellena el formulario o escríbenos a azaharliving@gmail.com. Te respondemos en menos de 24 horas.',
    'faq.q7': '¿Qué pasa si no hay habitaciones disponibles?',
    'faq.a7': 'Puedes apuntarte a la lista de espera. Te avisamos en cuanto se libere una plaza.',

    /* Footer ES */
  },

  en: {
    /* Navbar */
    'nav.why':      'Why us',
    'nav.rooms':    'Rooms',
    'nav.forwhom':  'Who is it for?',
    'nav.services': 'Services',
    'nav.location': 'Castellón',
    'nav.faq':      'FAQ',
    'nav.contact':  'Book',
    'nav.cta':      'Book now',

    /* Hero */
    'hero.eyebrow': 'Azahar Living · Rooms in Castellón',
    'hero.title':   'Rooms in Castellón<br>for students and young professionals',
    'hero.subtitle':'Your private room in Castellón, with everything you need to live, study and work.',
    'hero.pill1':   'Private room',
    'hero.pill2':   'Community',
    'hero.pill3':   'Work space',
    'hero.pill4':   'Services included',
    'hero.pill5':   'Castellón centre',
    'hero.cta1':    'See rooms',
    'hero.cta2':    'Book a spot',
    'hero.stat1':   'from / month',
    'hero.stat2':   'private rooms',
    'hero.stat3':   'exclusive penthouse',

    /* Why */
    'why.label':    'Why choose us',
    'why.title':    'Why Azahar Living?',
    'why.subtitle': 'A 180 m² penthouse in the centre of Castellón, no lateral neighbours, sea and mountain views, everything included.',
    'why.p1.title': 'Exclusive 180 m² penthouse',
    'why.p1.desc':  'No lateral neighbours — your space, your silence. Sunshine all day.',
    'why.p2.title': 'Unbeatable views',
    'why.p2.desc':  'Mediterranean Sea and mountains from the penthouse windows.',
    'why.p3.title': 'All inclusive, no surprises',
    'why.p3.desc':  'WiFi, water, electricity, gas, weekly cleaning. One payment a month.',
    'why.p4.title': 'Real community',
    'why.p4.desc':  'Share space with students and professionals who share your energy.',
    'why.p5.title': 'Castellón centre',
    'why.p5.desc':  'Av. Rei en Jaume 92 — walking distance from everything.',

    /* SEO content */
    'seo.label': 'Habitaciones en alquiler',
    'seo.title': 'Habitaciones en alquiler en Castellón',
    'seo.p1':    'Azahar Living ofrece habitaciones privadas en alquiler en Castellón de la Plana para estudiantes y jóvenes profesionales. El alojamiento combina habitaciones privadas con zonas comunes, cocina compartida, lavandería, WiFi de alta velocidad y limpieza semanal.',
    'seo.p2':    'Si buscas alquilar una habitación en Castellón, Azahar Living ofrece una alternativa cómoda para estudiantes de la UJI, Erasmus, estudiantes de máster y profesionales que llegan a la ciudad por trabajo. Las habitaciones están amuebladas y los principales gastos están incluidos en una sola cuota mensual.',
    'seo.p3':    'El alojamiento está situado en la Avenida Rei en Jaume, en el centro de Castellón de la Plana, con acceso a comercios, servicios, transporte y conexión con la Universidad Jaume I.',

    /* SEO content */
    'seo.label': 'Rooms for rent',
    'seo.title': 'Rooms for rent in Castellón',
    'seo.p1':    'Azahar Living offers private rooms for rent in Castellón de la Plana for students and young professionals. The accommodation combines private rooms with common areas, shared kitchen, laundry, high-speed WiFi and weekly cleaning.',
    'seo.p2':    'If you are looking to rent a room in Castellón, Azahar Living is a comfortable option for UJI students, Erasmus, master students and professionals arriving in the city for work. Rooms are furnished and main bills are included in a single monthly payment.',
    'seo.p3':    'The accommodation is located on Avenida Rei en Jaume, in the centre of Castellón de la Plana, with easy access to shops, services, transport and the Universidad Jaume I.',

    /* For whom */
    'fw.label':   'Who is it for?',
    'fw.title':   'Who is Azahar Living for?',
    'fw.subtitle':'Two profiles, one quality space.',
    'fw.s.title': 'Students',
    'fw.s.desc':  'Ideal for UJI students, Erasmus, master students and young people coming to Castellón to study. Private room, common areas and everything included so you only worry about your studies.',
    'fw.s.f1':    '🎓 UJI students',
    'fw.s.f2':    '✈️ Erasmus and international mobility',
    'fw.s.f3':    '📚 Master and postgraduate',
    'fw.s.f4':    '🆕 First time living away from home',
    'fw.p.title': 'Young professionals',
    'fw.p.desc':  'For people starting to work in Castellón, displaced professionals, remote workers and young entrepreneurs looking for a quality base.',
    'fw.p.f1':    '💻 Remote workers and digital nomads',
    'fw.p.f2':    '📍 Professionals relocated to Castellón',
    'fw.p.f3':    '🚀 Entrepreneurs and freelancers',
    'fw.p.f4':    '🏢 Early career professionals',
    'nav.pricing':  'Pricing',
    'nav.contact':  'Contact',
    'nav.cta':      'Book now',

    /* Hero */
    'hero.eyebrow': 'Azahar Living · Rooms in Castellón',
    'hero.title':   'Rooms in Castellón<br>for students and young professionals',
    'hero.subtitle':'Your private room in Castellón, with everything you need to live, study and work.',
    'hero.cta1':    'See rooms',
    'hero.cta2':    'Book a spot',
    'hero.stat1':   'all inclusive / month',
    'hero.stat2':   '180 m² exclusive',
    'hero.stat3':   'sea & mountain',

    /* About */
    'about.label':         'About us',
    'about.title':         'More than accommodation, a community',
    'about.p1':            'Azahar Living is a 180 m² penthouse with a unique orientation: sunlight from morning to night, no lateral neighbours, and unbeatable views of both the sea and the mountains. A luxury that genuinely exists in Castellón.',
    'about.p2':            'A community of active professionals, curious minds and ambitious people. Rooms from 15 to 25 m² with 135 cm beds, built-in wardrobes and 3 shared bathrooms — all in a penthouse that gives you the space and freedom you deserve.',
    'about.badge':         'Castellón',
    'about.pillar1.title': 'Exclusive penthouse',
    'about.pillar1.desc':  '180 m² with no lateral neighbours — your space, your silence',
    'about.pillar2.title': 'Your tribe',
    'about.pillar2.desc':  'Active professionals, nomads and entrepreneurs ready to grow',
    'about.pillar3.title': 'Unbeatable views',
    'about.pillar3.desc':  'Mediterranean Sea and mountains — from the penthouse, everything looks better',

    /* Rooms */
    'rooms.label':       'Rooms',
    'rooms.title':       'Spaces designed for you',
    'rooms.subtitle':    '7 private rooms in Castellón. Four categories to match your space and budget.',
    'rooms.available':   'Available',
    'rooms.popular':     'Most popular',
    'rooms.exclusive':   'Exclusive',
    'rooms.few':         '1 available',
    'rooms.month':       '/ month',
    'rooms.extra':       'all inclusive',
    'rooms.cta':         'Request info',
    /* Standard x3 */
    'rooms.r1.count':    '× 3 units',
    'rooms.r1.name':     'Standard',
    'rooms.r1.f1':       '15 m²',
    'rooms.r1.f2':       'Mountain views',
    'rooms.r1.f3':       'Double bed',
    'rooms.r1.f4':       'Built-in wardrobe',
    'rooms.r1.f5':       'High-speed WiFi',
    /* Premium x2 */
    'rooms.r2.count':    '× 2 units',
    'rooms.r2.name':     'Premium ⭐',
    'rooms.r2.f1':       '20 m²',
    'rooms.r2.f2':       'Sea views',
    'rooms.r2.f3':       'Large double bed',
    'rooms.r2.f4':       'Large built-in wardrobe',
    'rooms.r2.f5':       'High-speed WiFi',
    /* Premium Balcony x1 */
    'rooms.r3.count':    '× 1 unit',
    'rooms.r3.name':     'Premium con Terraza 🌿',
    'rooms.r3.f1':       '20 m²',
    'rooms.r3.f2':       'Sea views',
    'rooms.r3.f3':       'Private terrace',
    'rooms.r3.f4':       'Large double bed',
    'rooms.r3.f5':       'Built-in wardrobe',
    /* Suite x1 */
    'rooms.r4.count':    '× 1 unit',
    'rooms.r4.name':     'Suite 🏆',
    'rooms.r4.f1':       '25 m² — the largest',
    'rooms.r4.f2':       'Sea views',
    'rooms.r4.f3':       'King size bed',
    'rooms.r4.f4':       'Double built-in wardrobe',
    'rooms.r4.f5':       'Independent work area',
    /* Availability */
    'rooms.avail.std':   '3 × Standard available',
    'rooms.avail.prem':  '2 × Premium available',
    'rooms.avail.balc':  '1 × Premium Balcony available',
    'rooms.avail.suite': '1 × Suite available',

    /* Services */
    'services.label':    'Services',
    'services.title':    'Everything you need included',
    'services.subtitle': 'We take care of the details so you can focus on what matters.',
    'sv.kitchen.title':  '30 m² kitchen',
    'sv.kitchen.desc':   'Fully equipped large kitchen — more than cooking, a living space.',
    'sv.views.title':    'Sea & mountain views',
    'sv.views.desc':     'Wake up to the Mediterranean in front and the mountains behind.',
    'sv.sun.title':      'All-day sunshine',
    'sv.sun.desc':       'Privileged orientation — natural light from morning through evening.',
    'sv.quiet.title':    'No lateral neighbours',
    'sv.quiet.desc':     'Total privacy and silence — ideal for focused remote work.',
    'sv.wardrobe.title': 'Built-in wardrobes',
    'sv.wardrobe.desc':  'Every room has a large built-in wardrobe for all your belongings.',
    'sv.wifi.title':     'High-speed WiFi',
    'sv.wifi.desc':      'Symmetric fibre optic, perfect for video calls and remote work.',
    'sv.bills.title':    'Bills included',
    'sv.bills.desc':     'Water, electricity and gas included. No invoices, no worries.',
    'sv.clean.title':    'Weekly cleaning',
    'sv.clean.desc':     'Common areas cleaned once a week, included.',
    'sv.kitchen.title':  'Shared kitchen',
    'sv.kitchen.desc':   'Fully equipped 30 m² kitchen for all residents.',
    'sv.laundry.title':  'Laundry',
    'sv.laundry.desc':   'Washing machine available for all residents.',
    'sv.work.title':     'Work space',
    'sv.work.desc':      'Spacious common areas designed for working and studying comfortably.',
    'sv.views.title':    'Sea & mountain views',
    'sv.views.desc':     'Penthouse with unbeatable views of the Mediterranean and the mountains.',
    'sv.parking.title':  'Parking',
    'sv.parking.desc':   'Parking space available. Ask for price and availability.',
    'hl.total':          'full penthouse',
    'hl.rooms':          'private rooms',
    'hl.kitchen':        'kitchen',
    'hl.baths':          'bathrooms',
    'sv.laundry.desc':   'Washing machine and dryer available for all residents.',
    'sv.bills.title':    'Bills included',
    'sv.bills.desc':     'Water, electricity and gas covered in the €30 monthly supplement.',
    'hl.total':          'full apartment',
    'hl.rooms':          'per room',
    'hl.kitchen':        'kitchen',
    'hl.views':          'unique views',

    /* Pricing */
    'pricing.label':   'Pricing',
    'pricing.title':   'Transparent & no surprises',
    'pricing.subtitle':'Fixed monthly price. No hidden fees.',
    'pricing.month':   '/ month',
    'pricing.best':    'Best value',
    'pricing.cta':     'Request a spot',
    'pricing.extra':   '+ €60 utilities (water, electricity, gas)',
    'pricing.note':    '💬 Total monthly price with all bills included (water, electricity, gas and WiFi). Minimum stay: 6 months. 7 rooms — limited availability.',
    'pricing.p1.name': 'Standard',
    'pricing.p2.name': 'Premium',
    'pricing.p3.name': 'Suite',
    'pricing.f1': 'Room 15 m²',
    'pricing.f2': 'Built-in wardrobe',
    'pricing.f3': 'WiFi included',
    'pricing.f4': 'Shared kitchen (30 m²)',
    'pricing.f5': 'Laundry room',
    'pricing.g1': 'Room 20 m²',
    'pricing.g2': 'Large built-in wardrobe',
    'pricing.g3': 'Sea or mountain views',
    'pricing.g4': 'Desk area',
    'pricing.g5': 'High-speed WiFi',
    'pricing.g6': 'Kitchen & laundry',
    'pricing.h1': 'King size suite (15 m²)',
    'pricing.h2': 'Double built-in wardrobe',
    'pricing.h3': 'Sea AND mountain views',
    'pricing.h4': 'Independent work area',
    'pricing.h5': 'Maximum privacy & silence',
    'pricing.h6': 'All services included',

    'sv.clean.title':    'Limpieza semanal',
    'sv.clean.desc':     'Limpieza de zonas comunes una vez a la semana incluida.',
    'sv.parking.title':  'Parking',
    'sv.parking.desc':   'Plaza de parking disponible. Consultar precio y disponibilidad.',

    'sv.clean.title':    'Weekly cleaning',
    'sv.clean.desc':     'Common areas cleaned once a week, included.',
    'sv.parking.title':  'Parking',
    'sv.parking.desc':   'Parking space available. Ask for price and availability.',

    /* Location */
    'loc.label':    'Location',
    'loc.title':    'In the heart of Castellón',
    'loc.desc':     'Castellón de la Plana offers a quality of life hard to match: beaches 5 km away, a vibrant city with every amenity, and a cost of living well below Madrid or Barcelona.',
    'loc.f1.title': 'Grao Beach',
    'loc.f1.desc':  '10 minutes by bike',
    'loc.f2.title': 'High-speed train',
    'loc.f2.desc':  '30 minutes to Valencia',
    'loc.f3.title': 'Airport',
    'loc.f3.desc':  'Castellón & Valencia (60 min)',
    'loc.f4.title': 'Mediterranean climate',
    'loc.f4.desc':  '+300 sunny days per year',

    /* Contact */
    'contact.label': 'Contact',
    'contact.title': 'Ready to move in?',
    'contact.desc':  'Are you a professional, digital nomad or entrepreneur looking for something different in Castellón? Write to us — we reply within 24 hours.',
    'form.name':     'Full name',
    'form.email':    'Email address',
    'form.room':     'Room of interest',
    'form.roomSelect':'Select an option',
    'form.roomStd':  'Standard · €330/month',
    'form.roomPrem': 'Premium ⭐ · €350/month',
    'form.roomSuite':'Suite (€370/month)',
    'form.date':     'Desired move-in date',
    'form.message':  'Message (optional)',
    'form.submit':   'Send request',
    'form.success':  'Message sent! We will contact you soon. 🌸',
    'form.errName':  'Please enter your name.',
    'form.errEmail': 'Please enter a valid email address.',

    /* FAQ EN */
    'faq.label':   'FAQ',
    'faq.title':   'Frequently asked questions',
    'faq.subtitle':'Everything you need to know before booking.',
    'faq.q1': 'What does the monthly price include?',
    'faq.a1': 'The price includes everything: private room, high-speed WiFi, water, electricity, gas, weekly cleaning of common areas, equipped kitchen and laundry. One monthly payment, no surprises.',
    'faq.q2': 'What is the minimum stay?',
    'faq.a2': 'The minimum stay is 6 months. It is accommodation designed for full-year students and professionals settling in Castellón, not for short stays.',
    'faq.q3': 'Is it close to UJI?',
    'faq.a3': 'Yes. Azahar Living is at Av. Rei en Jaume 92, in the centre of Castellón, approximately 15 minutes from the Universidad Jaume I (UJI) campus.',
    'faq.q4': 'How many people live in the flat?',
    'faq.a4': 'The penthouse has 7 private rooms. Between 5 and 7 people live together, all students or young professionals.',
    'faq.q5': 'Is parking available?',
    'faq.a5': 'Yes, a parking space is available at an additional cost. Ask us about availability and price.',
    'faq.q6': 'How do I book a room?',
    'faq.a6': 'Fill in the contact form or email us at azaharliving@gmail.com. We reply within 24 hours.',
    'faq.q7': 'What if there are no rooms available?',
    'faq.a7': 'You can join the waiting list. We will let you know as soon as a spot opens up.',

    /* Footer EN */
  }
};

/* ── Estado ── */
let currentLang = localStorage.getItem('azahar-lang') || 'es';

/* ============================================================
   FUNCIÓN PRINCIPAL: aplicar idioma
   ============================================================ */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('azahar-lang', lang);

  const dict = translations[lang];

  /* Actualiza atributo lang del <html> */
  document.documentElement.lang = lang;

  /* Traduce todos los elementos con data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (!val) return;
    /* Algunos títulos usan <br> */
    if (val.includes('<br>')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  /* Actualiza botones del switcher */
  document.getElementById('btnEs').classList.toggle('active', lang === 'es');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  document.getElementById('btnEs').setAttribute('aria-pressed', lang === 'es');
  document.getElementById('btnEn').setAttribute('aria-pressed', lang === 'en');

  /* Actualiza placeholder del formulario */
  const msgArea = document.getElementById('message');
  if (msgArea) {
    msgArea.placeholder = lang === 'es'
      ? 'Cuéntanos algo sobre ti...'
      : 'Tell us something about you...';
  }
  const nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.placeholder = lang === 'es' ? 'Ana García' : 'John Smith';
  }
}

/* ============================================================
   NAVBAR — scroll + menú móvil
   ============================================================ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

/* Clase scrolled al hacer scroll */
function handleScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); /* ejecutar en carga */

/* Menú hamburger */
hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen
    ? (currentLang === 'es' ? 'Cerrar menú' : 'Close menu')
    : (currentLang === 'es' ? 'Abrir menú'  : 'Open menu')
  );
});

/* Cerrar menú al hacer clic en un enlace */
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* Cerrar menú al hacer clic fuera */
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* ============================================================
   ANIMACIONES FADE-IN con IntersectionObserver
   ============================================================ */
function initFadeIn() {
  const targets = document.querySelectorAll(
    '.room-card, .service-item, .pricing-card, .pillar, ' +
    '.loc-fact, .highlight-item, .about__image-wrap, ' +
    '.section__header, .contact__info, .contact__form, ' +
    '.location__text, .location__map'
  );

  targets.forEach((el, i) => {
    el.classList.add('fade-in');
    /* Delay escalonado por grupo */
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   FORMULARIO DE CONTACTO
   ============================================================ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  function showError(input, show) {
    input.classList.toggle('error', show);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nameInput  = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const dict       = translations[currentLang];

    let valid = true;

    /* Validar nombre */
    if (!nameInput.value.trim()) {
      showError(nameInput, true);
      nameInput.focus();
      valid = false;
    } else {
      showError(nameInput, false);
    }

    /* Validar email */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, true);
      if (valid) emailInput.focus();
      valid = false;
    } else {
      showError(emailInput, false);
    }

    if (!valid) return;

    /* Simular envío — en producción conectar con backend / Formspree / EmailJS */
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = dict['form.submit'];
      successMsg.textContent = dict['form.success'];
      successMsg.classList.add('visible');

      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }, 900);
  });

  /* Limpiar error al escribir */
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => showError(input, false));
  });
}

/* ============================================================
   SMOOTH SCROLL para navegadores que no lo soporten nativamente
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY
                   - parseInt(getComputedStyle(document.documentElement)
                       .getPropertyValue('--navbar-h'), 10);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   ACTIVE NAV LINK al hacer scroll (sección activa)
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__menu a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const matches = link.getAttribute('href') === `#${id}`;
            link.style.color = matches
              ? 'var(--clr-gold)'
              : '';
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(s => sectionObserver.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);   /* aplica idioma guardado o por defecto */
  initFadeIn();
  initContactForm();
  initSmoothScroll();
  initActiveNav();
});
