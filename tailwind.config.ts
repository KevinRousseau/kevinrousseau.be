import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: '#ff0000'
            },
            backgroundImage: {
                'hero-gradient': "url('/img/hero-gradient.svg')",
              }
        }
    }
}
