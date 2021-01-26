const info = () => ({
  fullName: 'Jhony Alberto Grillet Medina',
  roleName: 'Full-stack Javascript Developer',
  contactItems: [
    {
      icon: 1,
      isBrand: true,
      contactText: 'in/jhonygrillet'
    }, {
      icon: 2,
      isBrand: true,
      contactText: 'ChinuxParibus'
    }, {
      icon: 3,
      isBrand: false,
      contactText: 'grilletjhony@gmail.com'
    }, {
      icon: 4,
      isBrand: true,
      contactText: '+58 (412) 911-0169'
    }
  ],
  workItems: [
    {
      id: 14,
      period: {
        from: 'Jul 2020',
        to: 'Actual'
      },
      company: '4 Geeks Academy',
      role: 'Mentor/Assistant Teacher',
      skillSet: [0, 1, 2, 7, 13, 17]
    },
    {
      id: 13,
      period: {
        from: 'Feb 2020',
        to: 'Jul 2020'
      },
      company: 'Ministerio del Poder Popular para la Planificación',
      role: 'Lead Developer/Architect',
      skillSet: [3, 5, 6, 7, 10, 15]
    },
    // {
    //   id: 12,
    //   period: {
    //     from: 'Nov 2019',
    //     to: 'Dec 2019'
    //   },
    //   company: 'Computan',
    //   role: 'Junior Frontend Developer',
    //   skillSet: [0, 1, 2, 8]
    // },
    {
      id: 11,
      period: {
        from: 'Apr 2019',
        to: 'Sep 2019'
      },
      company: 'Fundación Corazón Llanero',
      role: 'Full-Stack Developer',
      skillSet: [0, 6, 7, 8, 11, 12]
    },
    {
      id: 10,
      period: {
        from: 'Feb 2019',
        to: 'Apr 2019'
      },
      company: 'Platform Purple, Inc.',
      role: 'Junior Javascript/Vue Developer',
      skillSet: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    // {
    //   id: 9,
    //   period: {
    //     from: 'Mar 2017',
    //     to: 'Sep 2017'
    //   },
    //   company: 'Universidad Experimental de la Fuerza Armada',
    //   role: 'Partial-Time Teacher',
    //   skillSet: [0, 1, 2]
    // },
    // {
    //   id: 8,
    //   period: {
    //     from: 'Oct 2016',
    //     to: 'May 2017'
    //   },
    //   company: 'Universidad Bolivariana de Venezuela',
    //   role: 'Systems Specialist',
    //   skillSet: [0, 11, 13, 14, 15]
    // },
    // {
    //   id: 7,
    //   period: {
    //     from: 'Aug 2016',
    //     to: 'Oct 2016'
    //   },
    //   company: 'TAC Empresarial',
    //   role: 'Freelance Web Developer',
    //   skillSet: [0, 8, 9, 11, 12, 16]
    // },
    // {
    //   id: 6,
    //   period: {
    //     from: 'Apr 2016',
    //     to: 'Jul 2016'
    //   },
    //   company: 'CAVEINTEC',
    //   role: 'Software Engineer',
    //   skillSet: [0, 1, 2, 3, 8, 13, 15]
    // },
    {
      id: 5,
      period: {
        from: 'Oct 2014',
        to: 'Jan 2016'
      },
      company: 'PDVSA Guardián del ALBA',
      role: 'Developer',
      skillSet: [0, 7, 10, 11, 15, 16]
    },
    // {
    //   id: 4,
    //   period: {
    //     from: 'Oct 2013',
    //     to: 'May 2014'
    //   },
    //   company: 'Fundación Infocentro',
    //   role: 'Systems Specialist',
    //   skillSet: [0, 1, 2, 8, 11, 13, 15, 16]
    // },
  //   {
  //     id: 3,
  //     period: {
  //       from: 'Nov 2012',
  //       to: 'Apr 2013'
  //     },
  //     company: 'Ministerio del Poder Popular para la Energía Eléctrica',
  //     role: 'Intern',
  //     skillSet: [7, 10, 13, 14, 15]
  //   },
  //   {
  //     id: 2,
  //     period: {
  //       from: 'Jun 2012',
  //       to: 'Sep 2012'
  //     },
  //     company: 'Aeropostal, Alas de Venezuela',
  //     role: 'Systems Analyst',
  //     skillSet: [0, 1, 2, 6, 11, 15, 16]
  //   },
  //   {
  //     id: 1,
  //     period: {
  //       from: 'Mar 2011',
  //       to: 'Jun 2012',
  //     },
  //     company: 'Fundación Infocentro',
  //     role: 'Volunteer / Education Analyst',
  //     skillSet: [0, 1, 2, 13, 14, 15]
  //   }
  ],
  educationItems: [
    {
      id: 1,
      degree: 'Systems Engineer',
      on: 'UNEXPO - LCM',
      period: {
        from: 'Oct 2003',
        to: 'Aug 2013'
      }
    }
  ],
  courseItems: [
    {
      id: 1,
      name: 'IBM IT & Networking Fundamentals (2009)',
      on: 'IBM Advanced Career Education',
      period: {
        from: 'Oct 2009',
        to: 'Jan 2010'
      },
      skillSet: [15, 18, 19, 20]
    },
    {
      id: 2,
      name: 'IBM Programming Fundamentals (2010)',
      on: 'IBM Advanced Career Education',
      period: {
        from: 'Jan 2010',
        to: 'Aug 2010'
      },
      skillSet: [0, 1, 2, 13, 14, 16, 21]
    },
    {
      id: 3,
      name: 'IBM Application Development (2011)',
      on: 'IBM Advanced Career Education',
      period: {
        from: 'Aug 2010',
        to: 'Mar 2011'
      },
      skillSet: [13, 14, 15, 19, 21]
    },
    {
      id: 4,
      name: 'MongoDb for Node.js Developers (2015)',
      on: 'MongoDB University',
      period: {
        from: 'Apr 2015',
        to: 'Aug 2015'
      },
      skillSet: [0, 6, 7, 10, 19]
    },
    {
      id: 5,
      name: 'Learning Algorithms in Javascript (2018)',
      on: 'Udemy',
      period: {
        from: 'Apr 2018',
        to: 'May 2018'
      },
      skillSet: [0, 1, 2, 6, 7, 15]
    }
  ],
  skills: [
    'Javascript', 'HTML 5', 'CSS 3', 'Sass', 'Vue.js', 'Quasar Framework', 'nginx', 'Node.js (Express)', 'jQuery', 'WordPress', 'MongoDB', 'PostgreSQL', 'Python (Django)', 'MySQL', 'Java', 'Linux', 'PHP', 'Python (Flask)', 'Microsoft Windows', 'Software Engineering', 'Networking', 'C++'
  ],
  searchSkill (skillset) {
    return skillset.map(skillIndex => this.skills[skillIndex])
  },
  shuffle (arr) {
    return arr.sort(() => Math.random() - 0.5)
  }
})