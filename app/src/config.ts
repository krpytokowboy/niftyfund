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
            size: 100,
          },
          shape: 'square',
          //pagination: 'count',
          title: 'Welcome to NiftyFund',
          description:
            "NiftyFund is an <b>open, community-oriented investment fund</b> that offers <b>fractionalized</b> ownership and exposure to <b>Node Operations</b>, <b>AI-Driven Cryptocurrency Trading Strategies</b>, <b>Non-Fungible Tokens (NFTs)</b>, <b>Real-World Assets (RWAs)</b> and <b>Precious Metals</b> thanks to blockchain technology advancements and the easy-to-access, revolutionary fusion of Proof-of-Sharing and Proof-of-Engagement consensus mechanisms!",
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          //pagination: 'count',
          title: 'Invest with Peace of Mind and Autonomy',
          description:
            "<b>Say NO to FOMO</b>!!! This is just the beginning... You are here early... Congratulations! 🥳 🫶 🎉",
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 100,
          },
          shape: 'square',
          //pagination: 'count',
          title: 'Survey',
          description: "How many nodes are you interested in gaining exposure to?",
          form: [
            {
              id: 'number_nodes_form',
              placeholder: 'Number of Nodes',
              type: 'number',
            },
	    {
              id: 'checkbox_crypto_form',
              placeholder: 'I am interested in Crypto',
              type: 'checkbox',
            },
	    {
              id: 'checkbox_nft_form',
              placeholder: 'I am interested in NFTs',
              type: 'checkbox',
            },
            {
              id: 'checkbox_rwa_form',
              placeholder: 'I am interested in RWAs',
              type: 'checkbox',
            },
	    {
              id: 'checkbox_metals_form',
              placeholder: 'I am also interested in Precious Metals',
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
            size: 100,
          },
          shape: 'square',
          //pagination: 'count',
          title: 'Fund Assets',
          description:
            "NiftyFund diversifies into a variety of assets including, but not limited to:",
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Node Ops',
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
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'NFTs',
            },
	    {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'RWAs',
            },
	    {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
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
            size: 100,
          },
          shape: 'square',
          //pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are boring...',
          description: "Let's Invest and Earn Now! :)",
          button: {
            content: 'Invest and Earn',
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
        size: 100,
      },
      shape: 'square',
      title: 'Invest and Earn',
      list: [
	'<b>Airdrops</b> and <b>Rewards</b> for all contributions equivalent to your share of the community fund',
        '<b>Subscriptions</b> or <b>One-Time Payments</b>',
	'<b>Credit Cards</b> or <b>Crypto</b> kindly accepted',
      ],
      products: [
        {
          id: '1_month_pleb_subscription',
          title: 'Pleb Subscription',
          description: '$5/month',
          discount: '',
          price: 5,
        },
        {
          id: '1_month_salmon_subscription',
          title: 'Salmon Subscription',
          description: '$100/month',
          discount: '',
          price: 100,
        },
	{
          id: '1_month_tuna_subscription',
          title: 'Salmon Subscription',
          description: '$250/month',
          discount: '',
          price: 100,
        },
        {
          id: '1_time_fee_5k',
          title: 'Whale Contribution',
          description: '$5,000 one-time',
          discount: '+1% Share Bonus',
          price: 5000,
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
