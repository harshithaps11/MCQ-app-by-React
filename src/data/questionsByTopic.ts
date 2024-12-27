import { Question } from '../types';

export const questionsByTopic: Record<string, Question[]> = {
  tech: [
    {
      id: 1,
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Central Processor Utility"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which programming language is known as the 'mother of all languages'?",
      options: ["Python", "Java", "C", "Assembly"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "High Text Machine Language"],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Oracle", "Apple"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of CSS?",
      options: ["Server Scripting", "Database Management", "Styling Web Pages", "Network Security"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is the latest version of HTML?",
      options: ["HTML4", "HTML5", "HTML6", "HTML7"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Which of these is not a JavaScript framework?",
      options: ["Angular", "React", "Django", "Vue"],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "What is the primary function of an operating system?",
      options: ["Play Games", "Browse Internet", "Manage Hardware Resources", "Create Documents"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which protocol is used for secure internet browsing?",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      correctAnswer: 2
    }
  ],
  science: [
    {
      id: 1,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What is the speed of light?",
      options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "What is the smallest unit of matter?",
      options: ["Cell", "Atom", "Molecule", "Electron"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which blood type is known as the universal donor?",
      options: ["A+", "B+", "AB+", "O-"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "What is the process by which plants make their food?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Absorption"],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "What is the study of fossils called?",
      options: ["Biology", "Archaeology", "Paleontology", "Geology"],
      correctAnswer: 2
    }
  ],
  sports: [
    {
      id: 1,
      question: "Which country won the FIFA World Cup 2022?",
      options: ["Brazil", "France", "Argentina", "Germany"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "In which sport would you perform a slam dunk?",
      options: ["Football", "Basketball", "Tennis", "Golf"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "How many players are there in a cricket team?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Which country hosted the 2020 Summer Olympics?",
      options: ["China", "USA", "Japan", "France"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Who holds the record for most Olympic gold medals?",
      options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What is the duration of a regular soccer match?",
      options: ["80 minutes", "85 minutes", "90 minutes", "95 minutes"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "In which sport is the Davis Cup awarded?",
      options: ["Basketball", "Tennis", "Cricket", "Hockey"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "How many points is a touchdown worth in American football?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "Which sport uses the term 'love' in scoring?",
      options: ["Badminton", "Tennis", "Table Tennis", "Squash"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is the national sport of Japan?",
      options: ["Karate", "Judo", "Sumo", "Kendo"],
      correctAnswer: 2
    }
  ],
  geography: [
    {
      id: 1,
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Which is the largest continent by land area?",
      options: ["North America", "Africa", "Europe", "Asia"],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "Which desert is the largest in the world?",
      options: ["Sahara", "Arabian", "Antarctic", "Gobi"],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which country has the most islands in the world?",
      options: ["Indonesia", "Japan", "Philippines", "Sweden"],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which mountain is the tallest in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Which country is known as the Land of Fire and Ice?",
      options: ["Norway", "Finland", "Iceland", "Greenland"],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "On which continent is the Sahara Desert located?",
      options: ["Asia", "Africa", "South America", "North America"],
      correctAnswer: 1
    }
  ]
};