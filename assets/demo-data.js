/* ============================================================
   Live Demo — sandbox lead data (fully fabricated, no real clients)
   Loaded before script.js. Exposes window.CRM_DEMO_DATA.
   ============================================================ */

window.CRM_DEMO_DATA = {
  stages: [
    { id: 'new',       label: 'New' },
    { id: 'contacted', label: 'Contacted' },
    { id: 'proposal',  label: 'Proposal Sent' },
    { id: 'won',       label: 'Won' }
  ],

  leads: [
    {
      id: 'l1',
      name: 'Marisol Reyes',
      company: 'Reyes Home Repairs',
      value: 1200,
      stage: 'new',
      phone: '(555) 012-3344',
      email: 'marisol@example.com',
      history: [
        { type: 'note', when: '2 days ago', text: 'Inquired via Facebook ad, wants a quote for a kitchen remodel.' }
      ]
    },
    {
      id: 'l2',
      name: 'Daniel Cruz',
      company: 'Cruz & Sons Electrical',
      value: 3400,
      stage: 'new',
      phone: '(555) 044-9981',
      email: 'daniel@example.com',
      history: [
        { type: 'note', when: '5 hours ago', text: 'Submitted the contact form — needs a panel upgrade quote.' }
      ]
    },
    {
      id: 'l3',
      name: 'Priya Fernandez',
      company: 'Fernandez Consulting',
      value: 2100,
      stage: 'contacted',
      phone: '(555) 220-7765',
      email: 'priya@example.com',
      history: [
        { type: 'note', when: '4 days ago', text: 'First call completed — interested in the quarterly retainer.' },
        { type: 'call', when: '3 days ago', text: 'Follow-up call: sent over the service breakdown.' }
      ]
    },
    {
      id: 'l4',
      name: 'Bea Santos',
      company: 'Santos Realty Group',
      value: 5600,
      stage: 'proposal',
      phone: '(555) 337-2210',
      email: 'bea@example.com',
      history: [
        { type: 'note', when: '1 week ago', text: 'Discovery call — wants a CRM for her 6-agent team.' },
        { type: 'call', when: '6 days ago', text: 'Walkthrough call done. Positive reaction.' },
        { type: 'note', when: '2 days ago', text: 'Proposal sent — awaiting sign-off from her partner.' }
      ]
    },
    {
      id: 'l5',
      name: 'Miguel Torres',
      company: 'Torres Auto Detailing',
      value: 900,
      stage: 'proposal',
      phone: '(555) 664-1123',
      email: 'miguel@example.com',
      history: [
        { type: 'note', when: '3 days ago', text: 'Referral from an existing client — fast mover.' },
        { type: 'note', when: '1 day ago', text: 'Sent the proposal — he asked about the booking page feature.' }
      ]
    },
    {
      id: 'l6',
      name: 'Angela Lim',
      company: 'Lim & Co. Bookkeeping',
      value: 4800,
      stage: 'won',
      phone: '(555) 881-4432',
      email: 'angela@example.com',
      history: [
        { type: 'note', when: '3 weeks ago', text: 'Signed up after the discovery call — onboarding scheduled.' },
        { type: 'call', when: '2 weeks ago', text: 'Onboarding call — team trained on the pipeline board.' },
        { type: 'note', when: '1 week ago', text: 'Live and using it daily. Asked about the client portal add-on.' }
      ]
    }
  ]
};
