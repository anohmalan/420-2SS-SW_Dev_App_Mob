export const EMPTY_RECIPE = () => { 
  return {
    category: null,
    name: null,
    durationHours: null,
    durationMinutes: null,
    description: null
  }
}

export const CATEGORIES = [
  {
    value: "1",
    label:'Breakfast', 
    icon: 'free-breakfast'
  },
  {
    value: "2",
    label:'Lunch', 
    icon: 'lunch-dining'
  },
  {
    value: "3",
    label:'Dinner', 
    icon: 'dinner-dining'
  }
];

export const PICKER_OPTIONS = [
  {
    label: 'h',
    value: 13
  },
  {
    label: 'm',
    value: 60
  }
];