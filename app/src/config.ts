import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [

        // welcome
        {
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          //pagination: 'count',
          title: "Invest and Earn",
          description:
            "Welcome to an <b>open, community-oriented fund</b> that offers <b>fractionalized</b> ownership of <b>Node Operations</b>, <b>AI Trading Strategies</b>, <b>Non-Fungible Tokens (NFTs)</b>, <b>Real-World Assets (RWAs)</b> and <b>Precious Metals</b> thanks to blockchain technology.",
          button: {
            content: "Invest and Earn",
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
      title: "Invest in $PEACE",
      list: [
	'<b>Airdrops</b> and <b>Rewards</b> are equivalent to your share of peace offered',
        '<b>Subscriptions</b> or <b>One-Time Payments</b>',
	'<b>Credit Cards</b> or <b>Crypto</b> kindly accepted',
      ],
      products: [
        {
          id: '1_month_shrimp_subscription',
          title: 'Shrimp Subscription',
          description: '$50/mo',
          discount: '',
          price: 50,
        },
        {
          id: '1_month_salmon_subscription',
          title: 'Salmon Subscription',
          description: '$100/mo',
          discount: '',
          price: 100,
        },
	{
          id: '1_month_tuna_subscription',
          title: 'Tuna Subscription',
          description: '$250/mo',
          discount: '',
          price: 250,
        },
	{
          id: '1_time_fee_1k',
          title: 'Shark Contribution',
          description: '$1,000',
          discount: '+0.1% Bonus',
          price: 1000,
        },
	{
          id: '1_time_fee_2_5k',
          title: 'Whale Shark Contribution',
          description: '$2,500',
          discount: '+0.25% Bonus',
          price: 2500,
        },
        {
          id: '1_time_fee_5k',
          title: 'Whale Contribution',
          description: '$5,000',
          discount: '+1.25% Bonus',
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