import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to NiftyFund Onboarding',
          description:
            "NiftyFund offers exposure to <b>Node Running</b>, <b>AI-Based Cryptocurrency Trading</b>, <b>Non-Fungible Tokens (NFTs)</b>, <b>Precious Metals</b> AND <b>Real-World Assets (RWAs)</b> thanks to the easy to access, revolutionary Proof of Sharing consensus mechanism!",
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Invest with Peace of Mind and Autonomy',
          description:
            "This is just the beginning - You are here early - Congratulations!",
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Survey',
          description: 'How many nodes do you own',
          form: [
            {
              id: 'number_from_form',
              placeholder: 'Number of Nodes',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'I am also interested in RWAs',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Fund Assets',
          description:
            "NiftyFund diversifies into a variety of assets including, but not limited to:",
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Nodes',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Cryptocurrency',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'NFTs',
            },
	    {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'RWAs',
            },
	    {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Precious Metals',
            },
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are boring...',
          description: "Let's go to Invest Now :)",
          button: {
            content: 'Invest',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Invest',
      list: [
	'<b>Exclusive Airdrops</b> and <b>Rewards</b> for all contributions equivalent to your share of the fund',
        '<b>Wallet Pay</b> and <b>Telegram Payments</b> ready',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
