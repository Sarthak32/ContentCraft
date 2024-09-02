# ContentCraft
Link : https://content-craft-theta.vercel.app/  

**ContentCraft** is a cutting-edge social media content creation tool designed to help you generate ideas, descriptions, and hashtags for various social media platforms. Whether you're crafting a Twitter post, a LinkedIn update, a YouTube video description, or finding the perfect hashtags for Instagram and TikTok, ContentCraft has got you covered!



## Features

- **Advanced Search Filters**: Use advanced filters to narrow down your content search and find exactly what you need.
- **History**: Review and manage your past generated content with an easy-to-use history feature.
- **User Authentication**: Secure user authentication and management using ClerkAuth.
- **Payment Integration**: Seamlessly integrated with Stripe for payment processing.
- **Twitter Post Ideas**: Generate engaging and creative ideas for your next tweet.
- **LinkedIn Post Descriptions**: Create professional and impactful LinkedIn post descriptions.
- **YouTube Video Descriptions**: Get assistance in drafting compelling YouTube video descriptions.
- **Instagram & TikTok Hashtags**: Find the most relevant and trending hashtags for your Instagram and TikTok posts.

## Video Preview : 


https://github.com/user-attachments/assets/eb8c5978-8906-4365-9844-d9fb6eb6d237



## Tech Stack

- **Next.js**: The powerful React framework for building server-side rendered and statically generated applications.
- **Nodejs**: A cross-platform, open-source JavaScript runtime environment For Backend
- **ClerkAuth**: User authentication and management made simple and secure.
- **NeonDB**: A modern, developer-friendly database for storing user data and content ideas.
- **GeminiAI**: The AI engine that powers the content generation features of the platform.
- **Prisma**: A next-generation ORM that simplifies database access and ensures type safety.
- **Stripe**: Payment processing integration for premium content and features.


### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sarthak32/ContentCraft.git
   cd ContentCraft
   --setup .env environment
   ```
2. **Create .env file and get the following API keys**:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   DATABASE_URL=
   GEMINI_API_KEY=
   STRIPE_PUB_KEY=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET= 
   ```
3. **RUN the Webapp**:
   ```bash
      npm run dev
   ```


