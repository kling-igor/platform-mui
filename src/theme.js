const colors = {
  primary: '#2196F3',
  darkPrimary: '#1976D2',
  lightPrimary: '#BBDEFB',
  accent: '#FF5722',
  textPrimary: '#212121',
  textSecondary: '#757575',
  disabled: '#BDBDBD',
  background: '#FFFFFF'
}

const errorStyle = [
  {
    color: colors.accent,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14
  }
]

const input = {
  self: [{ width: 200 }],
  error: errorStyle,
  hint: [
    {
      color: colors.lightPrimary,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16
    }
  ],
  text: [
    {
      color: colors.textPrimary,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      underline: true
    }
  ]
}

export default {
  accordion: {
    self: [],
    title: [],
    header: [],
    content: []
  },
  appbar: {
    self: [],
    title: [],
    menu: [],
    menuItem: []
  },
  button: {
    self: [
      {
        backgroundColor: colors.primary,
        borderRadius: 5,
        borderWidth: 1
      }
    ],
    label: [
      {
        color: '#f3f3f3',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12
      }
    ]
  },
  bottomnavigation: {
    self: [
      {
        backgroundColor: colors.darkPrimary,
        width: '100%',
        height: 64,
        position: 'fixed',
        bottom: 0
      }
    ],
    tab: {
      self: [{ backgroundColor: colors.darkPrimary, height: 64 }],
      icon: [{ color: colors.lightPrimary, size: 24 }],
      label: [{ color: colors.lightPrimary }],
      image: [{ self: [{ width: 32, height: 32 }] }]
    },
    selectedTab: {
      self: [{ backgroundColor: colors.darkPrimary, height: 64 }],
      icon: [{ color: colors.accent, size: 24 }],
      label: [{ color: colors.accent }],
      image: [{ self: [{ width: 32, height: 32 }] }]
    }
  },
  checkbox: {
    self: [],
    title: [],
    icon: []
  },
  datetime: {
    self: [],
    inputStyle: [],
    okLabel: [],
    cancelLabel: [],
    dateText: []
  },
  dialog: {
    self: [],
    content: [],
    title: [],
    body: [],
    actions: []
  },
  drawer: {
    self: []
  },
  icon: {
    self: []
  },
  image: {
    self: []
  },
  input,
  label: {
    self: [
      {
        color: colors.textPrimary,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14
      }
    ]
  },
  list: {
    self: [],
    listItem: {
      self: [],
      title: []
    },
    autocompleteInput: input,
    checkboxItem: {
      icon: []
    },
    dropdownHeader: {
      self: [],
      error: errorStyle,
      title: []
    },
    radiogroupItem: {
      icon: []
    },
    sectionedListHeader: {
      self: [],
      title: []
    }
  },
  progressDialog: {
    self: [{ padding: 20 }],
    progress: [{ color: colors.darkPrimary }],
    label: [{ color: '#cab', marginLeft: 20 }]
  },
  root: {
    self: [colors]
  },
  tabs: {
    self: [],
    tabBar: [],
    tab: [],
    title: [],
    inkBar: [],
    badge: [],
    badgeText: []
  },
  textarea: input,
  toggle: {
    self: [],
    thumb: [{}],
    thumbSwitched: [{}],
    track: [{}],
    trackSwitched: [{}]
  },
  view: {
    self: []
  },
  popup: {
    self: []
  },
  map: {
    self: [
      {
        width: 200,
        height: 150
      }
    ]
  },
  fab: {
    self: [{ backgroundColor: colors.accent, bottom: 30, right: 30 }],
    icon: [{ color: colors.background }],
    disabled: [{ backgroundColor: colors.disabled }]
  }
}
