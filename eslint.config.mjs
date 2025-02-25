// eslint.config.mjs
export default [
  {
    files: ['**/*.vue'],
    processor: 'vue/.vue',
    rules: {
      'vue/order-in-components': [
        'error',
        {
          order: [
            'asyncData',
            'el', // element
            'name', // component name
            'parent', // parent component
            'functional', // functional flag
            'delimiters', // delimiters
            'comments', // comments
            'components', // child components
            'directives', // directives
            'filters', // filters
            'setup', // setup function
            'data', // data
            'computed', // computed properties
            'methods', // methods
            'watch', // watchers
            'render', // render function
            'renderError', // renderError function
          ],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          // Prettier 옵션을 여기 추가할 수 있습니다
          singleQuote: true,
          trailingComma: 'es5',
          semi: false,
        },
      ],
    },
  },
  // Prettier 관련 ESLint 설정
  {
    extends: ['plugin:prettier/recommended'],
  },
]
