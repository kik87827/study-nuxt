const vuePlugin = require('eslint-plugin-vue') // vue 플러그인 가져오기
const nuxtPlugin = require('eslint-plugin-nuxt') // nuxt 플러그인 가져오기

module.exports = [
  {
    plugins: {
      vue: vuePlugin, // 플러그인을 객체 형식으로 설정
      nuxt: nuxtPlugin, // 플러그인을 객체 형식으로 설정
    },
    rules: {
      'vue/order-in-components': [
        'error',
        {
          order: [
            'asyncData',
            'data',
            'props',
            'computed',
            'watch',
            'methods',
            'LIFECYCLE_HOOKS',
          ],
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        browser: 'readonly',
        node: 'readonly',
      },
    },
    rules: {
      'vue/order-in-components': [
        'error',
        {
          order: [
            'asyncData',
            'data',
            'props',
            'computed',
            'watch',
            'methods',
            'LIFECYCLE_HOOKS',
          ],
        },
      ],
    },
  },
]
