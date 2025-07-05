export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number; // Now in ₹ INR
  image: string;
  genres: string[];
  available: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "An epic fantasy adventure about the quest to destroy the One Ring.",
    price: 599, // ~$7.20
    image:
      "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Fantasy", "Adventure"],
    available: true,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A powerful story of racial injustice and moral growth in the American South.",
    price: 299, // ~$3.60
    image:
      "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Classic", "Drama"],
    available: true,
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thrilling mystery involving secret societies and religious history.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    genres: ["Mystery", "Crime"],
    available: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel about the spirited Elizabeth Bennet and proud Mr. Darcy.",
    price: 249, // ~$3.00
    image:
      "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Classic", "Romance"],
    available: true,
  },
  {
    id: 5,
    title: "The Shining",
    author: "Stephen King",
    description: "A terrifying story of a family wintering at a haunted hotel.",
    price: 449, // ~$5.40
    image:
      "https://m.media-amazon.com/images/I/81zq7OaXKFL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Horror", "Thriller"],
    available: true,
  },
  {
    id: 6,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "A comedic science fiction adventure through space.",
    price: 349, // ~$4.20
    image:
      "https://m.media-amazon.com/images/I/81XSN3hA5gL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Science Fiction", "Comedy"],
    available: true,
  },
  {
    id: 7,
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "A psychological thriller about a woman's disappearance.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/81z5X5xWO1L._AC_UF1000,1000_QL80_.jpg",
    genres: ["Mystery", "Thriller", "Crime"],
    available: true,
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical novel about following one's dreams.",
    price: 299, // ~$3.60
    image:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Fantasy", "Philosophical Fiction"],
    available: true,
  },
  {
    id: 9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A story of wealth, love, and the American Dream in the 1920s.",
    price: 279, // ~$3.35
    image:
      "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Classic", "Drama", "Romance"],
    available: true,
  },
  {
    id: 10,
    title: "Dune",
    author: "Frank Herbert",
    description:
      "A science fiction masterpiece about politics, religion, and ecology on a desert planet.",
    price: 499, // ~$6.00
    image:
      "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Science Fiction", "Adventure"],
    available: true,
  },
  {
    id: 11,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description:
      "A journalist and hacker investigate a decades-old disappearance.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/71xwG1+SNOL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Mystery", "Crime", "Thriller"],
    available: true,
  },
  {
    id: 12,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance.",
    price: 299, // ~$3.60
    image:
      "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Dystopian", "Political Fiction"],
    available: true,
  },
  {
    id: 13,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy adventure about Bilbo Baggins' journey to reclaim treasure.",
    price: 449, // ~$5.40
    image:
      "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    genres: ["Fantasy", "Adventure"],
    available: true,
  },
  {
    id: 14,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description:
      "A psychological thriller about a woman who shoots her husband and then stops speaking.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/71X3O0U5JGL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Psychological Thriller", "Mystery"],
    available: true,
  },
  {
    id: 15,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description:
      "A murder mystery and coming-of-age story set in the marshes of North Carolina.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Mystery", "Literary Fiction", "Coming-of-Age"],
    available: true,
  },
  // Indian Authors (prices kept slightly lower than international books)
  {
    id: 16,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    description:
      "A family saga set in Kerala exploring love and social boundaries.",
    price: 349, // ~$4.20
    image:
      "https://m.media-amazon.com/images/I/71XW7NlWJVL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Literary Fiction", "Drama"],
    available: true,
  },
  {
    id: 17,
    title: "A Suitable Boy",
    author: "Vikram Seth",
    description:
      "A sprawling novel about post-independence India and arranged marriage.",
    price: 499, // ~$6.00 (longer book)
    image:
      "https://m.media-amazon.com/images/I/81Z+53FACBL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Historical Fiction", "Romance"],
    available: true,
  },
  {
    id: 18,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    description: "The Mahabharata retold from Draupadi's perspective.",
    price: 379, // ~$4.55
    image:
      "https://m.media-amazon.com/images/I/81l2rV+5kIL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Mythology", "Historical Fiction"],
    available: true,
  },
  {
    id: 19,
    title: "The White Tiger",
    author: "Aravind Adiga",
    description:
      "A darkly comic tale of ambition and social mobility in India.",
    price: 329, // ~$3.95
    image:
      "https://m.media-amazon.com/images/I/71X8afjLZGL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Satire", "Contemporary Fiction"],
    available: true,
  },
  {
    id: 20,
    title: "Midnight's Children",
    author: "Salman Rushdie",
    description: "Magical realism intertwining personal and national history.",
    price: 449, // ~$5.40
    image:
      "https://m.media-amazon.com/images/I/81X1VOZY5VL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Magical Realism", "Historical Fiction"],
    available: true,
  },
  // Mixed Genre Books
  {
    id: 21,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    description: "A magical competition between two young illusionists.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/81B2K0kQo1L._AC_UF1000,1000_QL80_.jpg",
    genres: ["Fantasy", "Romance", "Historical Fiction"],
    available: true,
  },
  {
    id: 22,
    title: "Cloud Atlas",
    author: "David Mitchell",
    description: "Interconnected stories spanning centuries and genres.",
    price: 449, // ~$5.40
    image:
      "https://m.media-amazon.com/images/I/81s6DUyqcZL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Science Fiction", "Historical Fiction", "Literary Fiction"],
    available: true,
  },
  {
    id: 23,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    description: "A love story complicated by involuntary time travel.",
    price: 349, // ~$4.20
    image:
      "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Science Fiction", "Romance", "Drama"],
    available: true,
  },
  // More Famous Books
  {
    id: 24,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description: "A story of friendship and redemption in Afghanistan.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/81o3A6Do3tL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Historical Fiction", "Drama"],
    available: true,
  },
  {
    id: 25,
    title: "Life of Pi",
    author: "Yann Martel",
    description: "A boy survives a shipwreck with a Bengal tiger.",
    price: 349, // ~$4.20
    image:
      "https://m.media-amazon.com/images/I/91QY+31TBBL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Adventure", "Philosophical Fiction"],
    available: true,
  },
  {
    id: 26,
    title: "The Book Thief",
    author: "Markus Zusak",
    description: "A girl steals books in Nazi Germany, narrated by Death.",
    price: 379, // ~$4.55
    image:
      "https://m.media-amazon.com/images/I/81bsw6PUAQL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Historical Fiction", "Young Adult"],
    available: true,
  },
  {
    id: 27,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    description: "Dystopian novel about women's subjugation in a theocracy.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/81QZ0W2MxJL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Dystopian", "Feminist Fiction"],
    available: true,
  },
  {
    id: 28,
    title: "Educated",
    author: "Tara Westover",
    description:
      "Memoir of a woman who left her survivalist family for education.",
    price: 449, // ~$5.40
    image:
      "https://m.media-amazon.com/images/I/71rkg4+ZhuL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Memoir", "Biography"],
    available: true,
  },
  {
    id: 29,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "Brief history of humankind from evolution to modern society.",
    price: 499, // ~$6.00
    image:
      "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Non-fiction", "History", "Anthropology"],
    available: true,
  },
  {
    id: 30,
    title: "Atomic Habits",
    author: "James Clear",
    description: "Guide to building good habits and breaking bad ones.",
    price: 399, // ~$4.80
    image:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    genres: ["Self-help", "Psychology"],
    available: true,
  },
];
