export const TooltipStyle = {
  root: {
    class: ['absolute', 'p-fadein', 'bg-secondary-text', 'rounded-md'],
  },
  text: {
    class: ['px-2 py-1', 'text-primary-text', 'text-xs'],
  },
}

export const AutoCompleteStyle = {
  root: {
    class: ['inline-flex text-surface-900 leading-10 flex-auto'],
  },
  input: {
    class: [
      'h-[40px] outline-none flex-auto rounded-[4px]',
      'appearance-none text-surface-700 mr-x',
      'px-3 text-tritary-text',
    ],
  },
  dropdownbutton: {
    root: {
      class: [
        'leading-none text-nowrap  h-[40px]',
        'focus:outline-none focus:outline-offset-0',
        'flex items-center justify-center',
      ],
    },
  },
}

export const MenuBarStyle = {
  root: {
    class: ['flex h-[40px] items-center'],
  },
  menu: {
    class: ['flex gap-8'],
  },
  button: {
    class: ['flex sm:hidden'],
  },
}
