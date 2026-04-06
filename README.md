# Marley Alford personal website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learnings

- How to create props which requires [at least 1 out of the optional arguments](https://dermothughes.com/blog/how-to-check-you-pass-at-least-one-optional-prop-with-typescript/) to be present. Didn't end up using, but good to know.
- In order for `hover:bg-background` to affect the entire background of the tile, you have to pass in the whole string. If you create `hover:${hoverBg}` using string interpolation, Tailwind cannot detect the full class name at build time. Finally asked Sonnet AI for help with this one.

## Future directions

- animating text with [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)

## Acknowledgements

- Marquee created using [react-fast-marquee](https://www.react-fast-marquee.com/) by Justin Chu.
- [How to add a non-google Open Source font](https://stackoverflow.com/a/75086906/9222529) to your project. Note the [new syntax](https://stackoverflow.com/questions/74607996/.how-to-add-custom-local-fonts-to-a-nextjs-13-tailwind-project/75086906#comment134110743_75086906) for importing!
  - Speaking of fonts, I used [Mplus1](https://github.com/coz-m/MPLUS_FONTS) for the body and [Meyrin](https://github.com/optional-is/Meyrin) for the marquee :)
- [How to render a string containing html elements](https://stackoverflow.com/a/39758631/9222529)
- Fractal tile layout created thanks to [CSS Grid Generator](https://cssgridgenerator.io/) by Kristjan Retter
- [Github pages deploy template](https://github.com/nextjs/deploy-github-pages/tree/main)
- Open source, non-personal data tracking website analytics with [GoatCounter](https://www.goatcounter.com/)
