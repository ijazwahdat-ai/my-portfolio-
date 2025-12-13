const siteMetadata = {
  title: 'Ijazulhaq Wahdat | AI Engineer',
  author: 'Ijazulhaq Wahdat',
  headerTitle: 'Ijazulhaq Wahdat',
  description: 'Specialized in Telecom LLMs, Intelligent Agents, and Enterprise Automation. Engineering Afghanistan’s Digital Future.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://my-portfolio-two-jet-j.vercel.app', // لینک دقیق خودتان
  siteRepo: 'https://github.com/ijazwahdat-ai',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ijazulhaqwahdat01@gmail.com',
  github: 'https://github.com/ijazwahdat-ai',
  linkedin: 'https://www.linkedin.com/in/ijaz-wahdat',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata