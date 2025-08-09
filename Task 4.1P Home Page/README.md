# DEV@Deakin Web Application

## SIT313 - Task 4.1P: Full-Stack Development - Secure Frontend Applications

### Project Overview
This is a React-based web application for DEV@Deakin, a developer community platform. The application demonstrates React JSX, React Components, and follows the single responsibility principle.

### Features Implemented

#### 🎯 **Core Components**
- **Header** - Navigation with logo, search functionality, and action buttons
- **Hero Section** - Large banner image with overlay text
- **Featured Articles** - Dynamic article cards using array and map functions
- **Featured Tutorials** - Dynamic tutorial cards using array and map functions
- **Newsletter Signup** - Email subscription with validation and error handling
- **Footer** - Three-column layout with social media integration

#### 🛠 **Technical Features**
- React JSX and Components
- Array and Map functions for dynamic content
- Semantic UI React for professional styling
- Faker.js for random content generation
- Picsum for random images
- Responsive design with mobile optimization
- Error handling for user interactions

### Wireframe Compliance
The application strictly follows the provided wireframe design:
- Header with DEV@Deakin logo, search bar, Post/Login buttons
- Hero section with banner image
- Featured Articles section with 3 cards
- Featured Tutorials section with 3 cards
- Newsletter signup with email input
- Footer with Explore/Support/Stay connected columns

### Installation & Setup

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

#### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dev-deakin-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Project Structure
```
src/
├── components/
│   ├── Header.js              # Navigation component
│   ├── Header.css
│   ├── HeroSection.js         # Banner section
│   ├── HeroSection.css
│   ├── ArticleCard.js         # Individual article display
│   ├── ArticleCard.css
│   ├── FeaturedArticles.js    # Articles section with array/map
│   ├── FeaturedArticles.css
│   ├── TutorialCard.js        # Individual tutorial display
│   ├── TutorialCard.css
│   ├── FeaturedTutorials.js   # Tutorials section with array/map
│   ├── FeaturedTutorials.css
│   ├── NewsletterSignup.js    # Email subscription
│   ├── NewsletterSignup.css
│   ├── Footer.js              # Footer with social links
│   └── Footer.css
├── App.js                     # Main application component
├── App.css                    # Global styles
└── index.js                   # Application entry point
```

### Dependencies
- `react` - Core React library
- `react-dom` - React DOM rendering
- `semantic-ui-react` - UI component library
- `semantic-ui-css` - Semantic UI styles
- `@faker-js/faker` - Random data generation

### Key Implementation Details

#### Array and Map Functions
Both FeaturedArticles and FeaturedTutorials components use arrays and map functions as required:

```javascript
const articles = [
  {
    id: 1,
    name: faker.lorem.words(3),
    description: "e.g., React OR Vue",
    image: "https://picsum.photos/300/200?random=2",
    rating: 5,
    author: faker.person.fullName()
  },
  // ... more articles
];

{articles.map((article) => (
  <Grid.Column key={article.id}>
    <ArticleCard article={article} />
  </Grid.Column>
))}
```

#### Error Handling
The NewsletterSignup component includes comprehensive error handling:
- Empty email validation
- Email format validation
- User feedback through alerts

#### Responsive Design
All components include mobile-responsive CSS with media queries for optimal viewing across devices.

### Submission Requirements Met
✅ **GitHub Repository** - All project files stored in "Task 4.1P" repository  
✅ **Demo Video** - Application ready for video recording  
✅ **Screenshot Ready** - Webpage ready for screenshot capture  
✅ **PDF Submission** - All links can be consolidated into PDF  
✅ **Private Repository** - Access granted to marking tutor  
✅ **React Components** - Each component has single responsibility  
✅ **Array and Map Functions** - Used in FeaturedArticles and FeaturedTutorials  
✅ **Semantic UI React** - Professional UI framework implemented  
✅ **Faker/Picsum Integration** - Random content and images  

### Author
SIT313 Student - Full-Stack Development Course

### License
This project is created for educational purposes as part of SIT313 coursework.
