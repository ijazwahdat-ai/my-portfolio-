const projectsData = [
  {
    title: 'Telecom Customer Support Agent (Llama-2)',
    description: `The first domain-adapted LLM for the Afghan telecom sector, engineered during my tenure at MCIT.
    I fine-tuned Llama-2-7B using QLoRA on a custom dataset of 1,750 QA pairs covering services from AWCC, Salaam, and Roshan.
    Achieved 89% factual accuracy in expert evaluations for handling USSD codes and bundle inquiries.`,
    imgSrc: '/static/images/telecom.png',
    href: 'https://github.com/ijazwahdat-ai/Afghan-Telecom-LLaMA-MCIT',
  },
  {
    title: 'Enterprise Task Automation Suite',
    description: `A collection of Python-based automation agents designed to optimize operational workflows.
    Includes an "Excel-to-PowerPoint" reporting bot and an automated Academy Registration System linking Google Forms to Telegram.
    Demonstrates ability to streamline complex data processing tasks as required in enterprise environments.`,
    imgSrc: '/static/images/automation.png',
    href: 'https://github.com/ijazwahdat-ai',
  },
  {
    title: 'Multisense Conversational Assistant',
    description: `An intelligent chatbot built with the Rasa Framework and Python.
    Integrated with real-time APIs to fetch dynamic data (Weather/Services).
    Showcases proficiency in Intent Classification, Entity Extraction, and backend integration using Flask.`,
    imgSrc: '/static/images/weather.png',
    href: 'https://github.com/ijazwahdat-ai',
  },
  {
    title: 'Portfolio & Research Hub',
    description: `A modern, responsive web platform built with Next.js and React.
    Serves as a central hub for my technical research, publications, and open-source contributions.
    Deployed via Vercel with CI/CD pipelines.`,
    imgSrc: '/static/images/portfolio.png',
    href: 'https://my-portfolio-two-jet-j.vercel.app',
  },
]

export default projectsData