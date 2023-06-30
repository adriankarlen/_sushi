/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            fontWeight: {
                normal: '400'
            }
        }
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
            // default is `false`, which means no prefix
            prefix: 'ctp',
            // which flavour of colours to use by default, in the `:root`
            defaultFlavour: 'mocha'
        })
    ]
};
