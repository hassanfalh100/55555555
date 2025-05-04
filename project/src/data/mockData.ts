import { Article, Handout, Category, SiteSettings } from '../models/types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'All about mathematics and problem solving',
    type: 'both'
  },
  {
    id: '2',
    name: 'Physics',
    slug: 'physics',
    description: 'Understanding the physical world around us',
    type: 'both'
  },
  {
    id: '3',
    name: 'Computer Science',
    slug: 'computer-science',
    description: 'Programming, algorithms, and computer systems',
    type: 'both'
  },
  {
    id: '4',
    name: 'Language Arts',
    slug: 'language-arts',
    description: 'Grammar, composition, and literature',
    type: 'article'
  }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    content: `
      <h2>What is Calculus?</h2>
      <p>Calculus is a branch of mathematics that deals with rates of change and accumulation. It was developed independently by Isaac Newton and Gottfried Wilhelm Leibniz in the 17th century.</p>
      
      <h3>The Two Main Branches</h3>
      <p>Calculus is divided into two main branches:</p>
      <ul>
        <li><strong>Differential Calculus:</strong> Deals with rates of change and slopes of curves.</li>
        <li><strong>Integral Calculus:</strong> Deals with accumulation of quantities and areas under curves.</li>
      </ul>
      
      <h3>Core Concepts</h3>
      <p>The foundation of calculus rests on the following concepts:</p>
      <ol>
        <li>Limits</li>
        <li>Derivatives</li>
        <li>Integrals</li>
      </ol>
      
      <h2>Applications of Calculus</h2>
      <p>Calculus has numerous applications in various fields:</p>
      <ul>
        <li>Physics: Motion, electricity, heat</li>
        <li>Engineering: Structural analysis, control systems</li>
        <li>Economics: Optimization, marginal analysis</li>
        <li>Biology: Population dynamics, growth rates</li>
      </ul>
    `,
    excerpt: 'An introduction to the fundamental concepts of calculus, including limits, derivatives, and integrals.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg',
    categoryId: '1',
    tags: ['calculus', 'mathematics', 'beginner'],
    createdAt: '2023-08-15T10:30:00Z',
    updatedAt: '2023-08-16T14:20:00Z',
    published: true,
    slug: 'introduction-to-calculus',
    seoTitle: 'Introduction to Calculus: Understanding the Basics',
    seoDescription: 'Learn about the fundamental concepts of calculus including limits, derivatives, and integrals in this introductory article.'
  },
  {
    id: '2',
    title: 'Understanding Newton\'s Laws of Motion',
    content: `
      <h2>Newton's Laws of Motion</h2>
      <p>Sir Isaac Newton formulated three laws that explain the relationship between a body and the forces acting upon it.</p>
      
      <h3>First Law: Law of Inertia</h3>
      <p>An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an unbalanced force.</p>
      
      <h3>Second Law: F = ma</h3>
      <p>The acceleration of an object depends on the mass of the object and the amount of force applied.</p>
      <p>Mathematically, it is expressed as: F = ma, where:</p>
      <ul>
        <li>F = Force</li>
        <li>m = Mass</li>
        <li>a = Acceleration</li>
      </ul>
      
      <h3>Third Law: Action and Reaction</h3>
      <p>For every action, there is an equal and opposite reaction.</p>
      
      <h2>Examples in Everyday Life</h2>
      <p>Newton's laws explain many phenomena in our daily lives:</p>
      <ul>
        <li>Wearing seatbelts in vehicles (First Law)</li>
        <li>Pushing a shopping cart (Second Law)</li>
        <li>Rocket propulsion (Third Law)</li>
      </ul>
    `,
    excerpt: 'A clear explanation of Newton\'s three laws of motion and their applications in everyday life.',
    image: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-60582.jpeg',
    categoryId: '2',
    tags: ['physics', 'newton', 'motion'],
    createdAt: '2023-09-05T08:45:00Z',
    published: true,
    slug: 'newtons-laws-of-motion'
  },
  {
    id: '3',
    title: 'Introduction to Algorithms',
    content: `
      <h2>What is an Algorithm?</h2>
      <p>An algorithm is a step-by-step procedure for solving a problem or accomplishing a task.</p>
      
      <h3>Characteristics of Algorithms</h3>
      <ul>
        <li>Input: Zero or more inputs</li>
        <li>Output: At least one output</li>
        <li>Definiteness: Each step must be clear and unambiguous</li>
        <li>Finiteness: Must terminate after a finite number of steps</li>
        <li>Effectiveness: Each step must be basic enough to be carried out</li>
      </ul>
      
      <h3>Common Algorithms</h3>
      <p>Some of the most common algorithms include:</p>
      <ol>
        <li>Sorting algorithms (Bubble Sort, Quick Sort, Merge Sort)</li>
        <li>Search algorithms (Linear Search, Binary Search)</li>
        <li>Graph algorithms (BFS, DFS, Dijkstra's)</li>
        <li>Dynamic Programming algorithms</li>
      </ol>
      
      <h2>Analysis of Algorithms</h2>
      <p>We analyze algorithms based on their:</p>
      <ul>
        <li>Time Complexity: How the running time increases with input size</li>
        <li>Space Complexity: How the memory usage increases with input size</li>
      </ul>
      
      <p>The efficiency of an algorithm is typically expressed using Big O notation.</p>
    `,
    excerpt: 'Learn about algorithms, their characteristics, common examples, and how to analyze their efficiency.',
    image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg',
    categoryId: '3',
    tags: ['algorithms', 'computer science', 'programming'],
    createdAt: '2023-10-12T15:20:00Z',
    updatedAt: '2023-10-15T09:10:00Z',
    published: true,
    slug: 'introduction-to-algorithms'
  },
  {
    id: '4',
    title: 'The Art of Essay Writing',
    content: `
      <h2>What Makes a Good Essay?</h2>
      <p>A good essay is clear, concise, and presents a well-structured argument or narrative.</p>
      
      <h3>The Basic Structure</h3>
      <p>Most essays follow a simple structure:</p>
      <ol>
        <li><strong>Introduction:</strong> Presents the topic and thesis statement</li>
        <li><strong>Body:</strong> Develops arguments with evidence and examples</li>
        <li><strong>Conclusion:</strong> Summarizes main points and reinforces the thesis</li>
      </ol>
      
      <h3>Types of Essays</h3>
      <p>Common types of essays include:</p>
      <ul>
        <li>Narrative Essays: Tell a story</li>
        <li>Descriptive Essays: Describe a person, place, or thing</li>
        <li>Expository Essays: Explain a topic</li>
        <li>Persuasive Essays: Convince the reader of a viewpoint</li>
      </ul>
      
      <h2>Tips for Effective Writing</h2>
      <p>To improve your essay writing:</p>
      <ul>
        <li>Plan before writing</li>
        <li>Use clear and concise language</li>
        <li>Support claims with evidence</li>
        <li>Revise and edit thoroughly</li>
        <li>Get feedback from others</li>
      </ul>
    `,
    excerpt: 'Master the art of essay writing with tips on structure, types of essays, and effective writing techniques.',
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg',
    categoryId: '4',
    tags: ['writing', 'essays', 'language arts'],
    createdAt: '2023-11-08T11:30:00Z',
    published: true,
    slug: 'art-of-essay-writing'
  }
];

export const mockHandouts: Handout[] = [
  {
    id: '1',
    title: 'Calculus Practice Problems',
    description: 'A collection of practice problems covering differentiation, integration, and applications of calculus.',
    fileUrl: '/files/calculus-practice.pdf',
    categoryId: '1',
    tags: ['calculus', 'practice', 'problems'],
    createdAt: '2023-08-20T09:15:00Z',
    published: true,
    downloadCount: 248
  },
  {
    id: '2',
    title: 'Physics Formulas Cheat Sheet',
    description: 'A comprehensive reference sheet containing all important physics formulas for mechanics, thermodynamics, and electromagnetism.',
    fileUrl: '/files/physics-formulas.pdf',
    categoryId: '2',
    tags: ['physics', 'formulas', 'reference'],
    createdAt: '2023-09-10T14:30:00Z',
    updatedAt: '2023-09-12T10:45:00Z',
    published: true,
    downloadCount: 356
  },
  {
    id: '3',
    title: 'Data Structures Quick Reference',
    description: 'A quick reference guide to common data structures including arrays, linked lists, trees, and graphs with time complexity information.',
    fileUrl: '/files/data-structures.pdf',
    categoryId: '3',
    tags: ['data structures', 'algorithms', 'computer science'],
    createdAt: '2023-10-18T16:45:00Z',
    published: true,
    downloadCount: 189
  },
  {
    id: '4',
    title: 'Grammar Rules and Examples',
    description: 'A comprehensive guide to English grammar rules with examples and common mistakes to avoid.',
    fileUrl: '/files/grammar-rules.pdf',
    categoryId: '4',
    tags: ['grammar', 'language', 'writing'],
    createdAt: '2023-11-15T13:20:00Z',
    published: true,
    downloadCount: 127
  }
];

export const mockSettings: SiteSettings = {
  siteName: 'EduLibrary',
  siteDescription: 'A comprehensive educational resource for students and educators',
  logo: '/logo.svg',
  footerText: '© 2025 EduLibrary. All rights reserved.',
  socialLinks: {
    facebook: 'https://facebook.com/edulibraryofficial',
    twitter: 'https://twitter.com/edulibraryofficial',
    telegram: 'https://t.me/edulibraryofficial',
    youtube: 'https://youtube.com/c/edulibraryofficial'
  },
  contactEmail: 'contact@edulibrary.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Education Street, Knowledge City, KN 10001'
};