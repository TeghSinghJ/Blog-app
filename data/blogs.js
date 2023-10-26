const blogs = [
  {
    title: "How to learn Python",
    content: {
      Introduction: "This blog provides a step-by-step guide to learning Python programming.",
      steps: [
        "Start with the basics of Python syntax and data types.",
        "Explore control structures like loops and conditionals.",
        "Learn about functions and object-oriented programming concepts.",
        "Dive into advanced topics such as decorators and generators.",
      ],
      conclusion: "By following these steps, you'll master Python and be ready to tackle various programming challenges."
    },
    slug: 'python-learn',
    author: 'Juni Tegh Singh',
    img_url: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    date: 'January 10, 2023'
  },
  {
  title: "How to learn C++",
    content: {
      Introduction: "This blog provides a step-by-step guide to learning C++ programming.",
      steps: [
        "Start with the basics of C++ syntax and data types.",
        "Explore control structures like loops and conditionals.",
        "Learn about functions and object-oriented programming concepts.",
        "Dive into advanced topics such as decorators and generators.",
      ],
      conclusion: "By following these steps, you'll master C++ and be ready to tackle various programming challenges."
    },
    slug: 'cpp-learn',
    author: 'Juni Tegh Singh',
    img_url: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    date: 'January 10, 2023'
  },
  {
    title: "How to learn Java",
    content: {
      Introduction: "This blog provides a step-by-step guide to learning Java programming.",
      steps: [
        "Start with the basics of Java syntax and data types.",
        "Explore control structures like loops and conditionals.",
        "Learn about functions and object-oriented programming concepts.",
        "Dive into advanced topics such as Collections and Core Java.",
      ],
      conclusion: "By following these steps, you'll master Java and be ready to tackle various programming challenges."
    },
    slug: 'java-learn',
    author: 'Juni Tegh Singh',
    img_url: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    date: 'January 10, 2023'
  },
  {
    title: "The Fascinating World of Machine Learning: A Deep Dive into the Future of Technology",
    content: {
      "Introduction" : "In the realm of technology, few concepts have garnered as much attention and excitement as machine learning. Machine learning, a subset of artificial intelligence, is revolutionizing the way we interact with the world and the tools we use to make sense of data. In this blog post, we will embark on a journey to explore the depths of machine learning, understanding its core concepts, applications, and the impact it has on various sectors.",
      "Understanding Machine Learning" : "At its essence, machine learning involves algorithms that allow computers to learn from data and improve their performance on specific tasks over time. Unlike traditional programming, where explicit instructions are given to perform a task, machine learning algorithms learn patterns from data and make predictions or decisions based on that learned knowledge.",
      "The Future of Machine Learning" : "As technology continues to advance, the future of machine learning holds promising prospects. Advancements in deep learning, natural language processing, and reinforcement learning are anticipated to drive innovation in various domains. Additionally, the ethical implications of machine learning, including bias mitigation and data privacy, will be critical areas of focus.",
      "Conclusion" :"In conclusion, machine learning stands at the forefront of technological innovation, reshaping industries and revolutionizing our approach to problem-solving. Its ability to learn from data, recognize patterns, and make predictions has far-reaching implications, impacting sectors from healthcare to finance and beyond. Embracing the potential of machine learning is not merely a choice but a necessity in our rapidly evolving digital landscape. In this blog post, we have only scratched the surface of the vast and intricate world of machine learning. As researchers and developers continue to push boundaries, the applications and impact of machine learning are bound to expand, ushering in a new era of possibilities for humanity."
    },
    slug: 'the-fascinating-world-of-machine-learning',
    author: 'Juni Tegh Singh',
    img_url: "https://cdn.sanity.io/images/tlr8oxjg/production/ada93729daf922ad0318c8c0295e5cb477921808-1456x816.png",
    date: 'October 27, 2023'
  },
  // ... (other generated blogs with sub-objects in content)
];

module.exports = blogs;
