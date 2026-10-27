(() => {
  const WHATSAPP_NUMBER = '525585406653';

  // Data for "One Live Thing": Course & Transmission Configurator
  const COURSE_DATA = {
    estandar: {
      nerviosos: {
        summary: 'Autos estándar con doble pedalera · Salida desde Av. Villa de Ayala #35',
        plans: [
          {
            price: '$1,450',
            hours: '5 horas prácticas (1 sem)',
            route: 'Calles tranquilas de Col. San Felipe de Jesús',
            focus: 'Control de clutch, frenado suave y arranque sin apagones',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico en Estándar (Especial principiantes/nerviosos).'
          },
          {
            price: '$2,350',
            hours: '10 horas prácticas + Teoría vial',
            route: 'Av. Villa de Ayala, León de los Aldama y Gran Canal',
            focus: 'Paciencia total para nerviosos, subidas con clutch y tránsito real',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Especial Nerviosos (10 hrs) en Estándar.'
          },
          {
            price: '$3,200',
            hours: '15 horas prácticas + Guía de licencia',
            route: 'Vías primarias GAM, Circuito Interior y estacionamiento',
            focus: 'Dominio total de estándar, reversa, cajón y vías rápidas CDMX',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro (15 hrs) en Estándar.'
          }
        ]
      },
      vialidades: {
        summary: 'Perfeccionamiento en Estándar · Tránsito denso y vías primarias GAM',
        plans: [
          {
            price: '$1,450',
            hours: '5 horas intensivas de tráfico',
            route: 'Av. Villa de Ayala y cruces de San Felipe de Jesús',
            focus: 'Cambios rápidos de velocidad, espejeo y cruces conflictivos',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico de Vialidades en Estándar.'
          },
          {
            price: '$2,350',
            hours: '10 horas en avenidas primarias',
            route: 'Av. Central, Eduardo Molina y Ejes Viales GAM',
            focus: 'Incorporaciones, cambios de carril y manejo defensivo urbano',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Intermedio de Vialidades (10 hrs) en Estándar.'
          },
          {
            price: '$3,200',
            hours: '15 horas + Estacionamiento avanzado',
            route: 'Vías rápidas CDMX, glorietas y estacionamiento en cordón',
            focus: 'Manejo en hora pico, pendientes pronunciadas y reglamento CDMX',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro Vialidades (15 hrs) en Estándar.'
          }
        ]
      }
    },
    automatico: {
      nerviosos: {
        summary: 'Autos automáticos con doble freno · Ideal para perder el miedo rápido',
        plans: [
          {
            price: '$1,550',
            hours: '5 horas prácticas (1 sem)',
            route: 'Circuito local en Col. San Felipe de Jesús',
            focus: 'Coordinación de acelerador/freno, volanteo y dimensiones del auto',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico en Automático (Principiantes/nerviosos).'
          },
          {
            price: '$2,500',
            hours: '10 horas prácticas + Teoría vial',
            route: 'Av. Villa de Ayala, Talpa y avenidas de Gustavo A. Madero',
            focus: 'Terapia práctica contra nervios, espejos y semáforos reales',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Especial Nerviosos (10 hrs) en Automático.'
          },
          {
            price: '$3,400',
            hours: '15 horas prácticas + Guía de licencia',
            route: 'Avenidas primarias CDMX, centros comerciales y estacionamiento',
            focus: 'Confianza absoluta en tráfico pesado, lluvia y estacionamiento',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro (15 hrs) en Automático.'
          }
        ]
      },
      vialidades: {
        summary: 'Perfeccionamiento en Automático · Avenidas primarias y estacionamiento',
        plans: [
          {
            price: '$1,550',
            hours: '5 horas de actualización vial',
            route: 'Av. Villa de Ayala y ejes viales cercanos',
            focus: 'Retomar confianza, distancias de frenado y puntos ciegos',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico de Vialidades en Automático.'
          },
          {
            price: '$2,500',
            hours: '10 horas en tránsito urbano real',
            route: 'Eduardo Molina, Río de los Remedios y Circuito Interior',
            focus: 'Incorporación a vías rápidas, glorietas y lectura de señalamientos',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Intermedio de Vialidades (10 hrs) en Automático.'
          },
          {
            price: '$3,400',
            hours: '15 horas + Estacionamiento total',
            route: 'Recorridos completos CDMX y maniobras en espacios reducidos',
            focus: 'Estacionamiento en batería/cordón y manejo defensivo nocturno/diurno',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro Vialidades (15 hrs) en Automático.'
          }
        ]
      }
    },
    ambos: {
      nerviosos: {
        summary: 'Curso Dual (Mitad Automático + Mitad Estándar) · Doble pedalera',
        plans: [
          {
            price: '$1,650',
            hours: '6 horas prácticas combinadas',
            route: 'Col. San Felipe de Jesús y Av. Villa de Ayala',
            focus: 'Inicias en automático para soltar nervios y pasas a estándar',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico Combinado (Automático y Estándar).'
          },
          {
            price: '$2,650',
            hours: '10 horas (5 Automático + 5 Estándar)',
            route: 'Av. Villa de Ayala y vialidades de Gustavo A. Madero',
            focus: 'Transición gradual sin estrés con instructor paciente y doble mando',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Especial Nerviosos Combinado (10 hrs).'
          },
          {
            price: '$3,600',
            hours: '16 horas (8 Automático + 8 Estándar)',
            route: 'Cobertura completa GAM, vías rápidas y estacionamiento',
            focus: 'Domina cualquier vehículo familiar o de trabajo con seguridad total',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro Combinado (16 hrs).'
          }
        ]
      },
      vialidades: {
        summary: 'Curso Dual Vialidades · Domina ambas transmisiones en tráfico real',
        plans: [
          {
            price: '$1,650',
            hours: '6 horas prácticas combinadas',
            route: 'Av. Villa de Ayala y cruces principales GAM',
            focus: 'Adaptación rápida entre caja manual y transmisión automática',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Básico Vialidades Combinado.'
          },
          {
            price: '$2,650',
            hours: '10 horas en avenidas primarias',
            route: 'Eduardo Molina, Av. Central y ejes viales CDMX',
            focus: 'Control en pendientes con estándar y fluidez en tráfico con automático',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Intermedio Vialidades Combinado (10 hrs).'
          },
          {
            price: '$3,600',
            hours: '16 horas + Estacionamiento y vías rápidas',
            route: 'Circuitos urbanos completos CDMX y maniobras de precisión',
            focus: 'Preparación integral para manejar cualquier auto en la ciudad',
            msg: 'Hola Escuela de Manejo Ayala, me interesa el Curso Maestro Vialidades Combinado (16 hrs).'
          }
        ]
      }
    }
  };

  let state = {
    transmision: 'estandar',
    enfoque: 'nerviosos'
  };

  function updatePlansUI() {
    const config = COURSE_DATA[state.transmision][state.enfoque];
    const summaryEl = document.getElementById('live-summary-text');
    if (summaryEl) {
      summaryEl.textContent = config.summary;
    }

    config.plans.forEach((plan, index) => {
      const i = index + 1;
      const priceEl = document.getElementById(`plan-price-${i}`);
      const hoursEl = document.getElementById(`plan-hours-${i}`);
      const routeEl = document.getElementById(`plan-route-${i}`);
      const focusEl = document.getElementById(`plan-focus-${i}`);
      const linkEl = document.getElementById(`plan-link-${i}`);

      if (priceEl) priceEl.textContent = plan.price;
      if (hoursEl) hoursEl.textContent = plan.hours;
      if (routeEl) routeEl.textContent = plan.route;
      if (focusEl) focusEl.textContent = plan.focus;
      if (linkEl) {
        linkEl.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.msg)}`;
      }
    });
  }

  // Bind configurator buttons
  document.querySelectorAll('[data-config-group]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-config-group');
      const value = btn.getAttribute('data-config-value');
      state[group] = value;

      document.querySelectorAll(`[data-config-group="${group}"]`).forEach((peer) => {
        peer.setAttribute('aria-pressed', peer === btn ? 'true' : 'false');
      });

      updatePlansUI();
    });
  });

  // Accordion interaction (Section 2: how-it-works)
  const panels = document.querySelectorAll('.acc-panel');
  function activatePanel(targetPanel) {
    panels.forEach((panel) => {
      const isTarget = panel === targetPanel;
      panel.classList.toggle('is-open', isTarget);
      panel.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });
  }

  panels.forEach((panel) => {
    panel.addEventListener('click', () => activatePanel(panel));
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activatePanel(panel);
      }
    });
  });

  // Clip-out coupon form -> WhatsApp booking
  const couponForm = document.getElementById('coupon-form');
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('input-nombre')?.value.trim() || 'Alumno';
      const telefono = document.getElementById('input-telefono')?.value.trim() || '';
      const curso = document.getElementById('input-curso')?.value || 'Curso Especial Nerviosos';
      const horario = document.getElementById('input-horario')?.value || 'Matutino';

      const text = `Hola Escuela de Manejo Ayala (Suc. Av. Villa de Ayala #35). Soy ${nombre} (${telefono}). Quiero agendar el ${curso} en horario ${horario}.`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  // Motion Layer: Shutter opening + Staggered Section Entrances + Scroll drift
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shutterFrame = document.querySelector('.shutter-frame');

  if (!prefersReduced) {
    document.documentElement.classList.add('js-motion');

    // Trigger hero shutter image opening
    if (shutterFrame) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          shutterFrame.classList.remove('is-closed');
        }, 90);
      });
    }

    // Stagger reveal items per section
    const sections = document.querySelectorAll('section, footer');
    sections.forEach((sec) => {
      const items = sec.querySelectorAll('.reveal-item');
      items.forEach((item, idx) => {
        item.classList.add('is-waiting');
        item.style.transitionDelay = `${idx * 75}ms`;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-waiting');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));

    // Subtle scroll-linked drift on hero & feature photos (Moving picture requirement)
    const driftImages = document.querySelectorAll('[data-scroll-drift]');
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const vh = window.innerHeight || 800;
            driftImages.forEach((img) => {
              const rect = img.getBoundingClientRect();
              if (rect.bottom > 0 && rect.top < vh) {
                const progress = (vh - rect.top) / (vh + rect.height);
                const shift = (progress - 0.5) * 22;
                img.style.transform = `scale(1.06) translateY(${shift.toFixed(1)}px)`;
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  } else {
    if (shutterFrame) {
      shutterFrame.classList.remove('is-closed');
    }
    document.querySelectorAll('video').forEach((v) => v.pause());
  }
})();

