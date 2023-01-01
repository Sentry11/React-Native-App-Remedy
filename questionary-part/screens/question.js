// const Questions=[
//         {
//             No:1,
//             Question:"1. Which one of the following river flows between Vindhyan and Satpura ranges?",
//             options:{
//                 a:"(a) Narmada",
//                 b:"(b) Mahanadi",
//                 c:"(c) Son",
//                 d:"(d) Netravati"
//             }
//         },
//         {
//             No:2,
//             Question:"2. The Central Rice Research Station is situated in?",
//             options:{
//                 a:" (a) Chennai",
//                 b:" (b) Cuttack",
//                 c:" (c) Bangalore",
//                 d:" (d) Quilon"
//             }
//         },
//         {
//             No:3,
//             Question:"3. Who among the following wrote Sanskrit grammar?",
//             options:{
//                 a:"(a) Kalidasa",
//                 b:"(b) Charak",
//                 c:"(c) Panini",
//                 d:"(c) Paninii"
//             }
//         },
//         {
//             No:4,
//             Question:"4. Which among the following headstreams meets the Ganges in last?",
//             options:{
//                 a:"(a) Alaknanda",
//                 b:"(b) Pindar",
//                 c:"(c) Mandakini",
//                 d:"(d) Bhagirathi"
//             }
//         },
//         {
//             No:5,
//             Question:"5. The metal whose salts are sensitive to light is?",
//             options:{
//                 a:"(a) Zinc",
//                 b:"(b) Silver",
//                 c:"(c) Copper",
//                 d:"(d) Aluminum"
//             }
//         }
//     ]
//     export default Questions


const questions = [
    {
      id: 1,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    // answers: [
    //         { id: "1", text: "1", percent: "50" },
    //         { id: "2", text: "2", percent: "65" },
    //         { id: "3", text: "3", percent: "75" },
    //         { id: "4", text: "4", percent: "85" },
    //         { id: "5", text: "5", percent: "85" },
    //       ]
    },
     {
      id: 2,
      question: "Я втратив(-ла) інтерес до речей, які зазвичай мене цікавлять.",
      img: require('../../assets/questionery_emoji/uninterst.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 3,
      question: "У мене немає сенсу жити.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 4,
      question: "Я почуваюся млявим(-ою).",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 5,
      question: "Я нетерпимий(-а) та імпульсивний(-а).",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 6,
      question: "Я надто роздратований(-а) і можу вийти з себе в будь-яку хвилину.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 7,
      question: "Моє життя нічого не варте.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 8,
      question: "У мене немає бажання щось робити.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 9,
      question: "У мене буває надмірно прискорене і/або неглибоке дихання.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 10,
      question: "Я не можу взятися до роботи, яку потрібно виконати.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 11,
      question: "У мене буває тремтіння тіла.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 12,
      question: "Мені важко заснути чи спати без пробуджень.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 13,
      question: "Я з острахом думаю про справи, які мені потрібно виконати, і до яких я ще не приступав(-ла).",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 14,
      question: "У мене багато нервової енергії.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 15,
      question: "У мене спостерігається утруднення ковтання.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
      {
      id: 16,
      question: "Я ні на що не сподіваюся у майбутньому.",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
            1: 'Категорично не згоден',
            2: 'Не погоджуюсь',
            3: 'Не помічаю',
            4: 'Погоджуюсь',
            5: 'Дуже погоджуюсь'
          }
    },
    {
      id: 17,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 18,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 19,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 20,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 21,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 22,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 23,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 24,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 25,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 26,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 27,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 28,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 29,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    {
      id: 30,
      question: "Я надто гостро реагую на дрібниці",
      img: require('../../assets/questionery_emoji/angry.png'),
      answers: {
       1: 'Категорично не згоден',
       2: 'Не погоджуюсь',
       3: 'Не помічаю',
       4: 'Погоджуюсь',
       5: 'Дуже погоджуюсь'
     }
    },
    
    

   
  ];
  
  export default questions;