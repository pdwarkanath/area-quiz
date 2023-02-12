import React, { useState, useEffect } from 'react';

const usStates = [
  {name: "Alaska", area: 1723337},
  {name: "Texas", area: 695662},
  {name: "California", area: 423967},
  {name: "Montana", area: 380831},
  {name: "New Mexico", area: 314917},
  {name: "Arizona", area: 295234},
  {name: "Nevada", area: 286380},
  {name: "Colorado", area: 269601},
  {name: "Oregon", area: 254799},
  {name: "Wyoming", area: 253335},
  {name: "Michigan", area: 250487},
  {name: "Minnesota", area: 225163},
  {name: "Utah", area: 219882},
  {name: "Idaho", area: 216443},
  {name: "Kansas", area: 213100},
  {name: "Nebraska", area: 200330},
  {name: "South Dakota", area: 199729},
  {name: "Washington", area: 184661},
  {name: "North Dakota", area: 183108},
  {name: "Oklahoma", area: 181037},
  {name: "Missouri", area: 180540},
  {name: "Florida", area: 170312},
  {name: "Wisconsin", area: 169635},
  {name: "Georgia", area: 153910},
  {name: "Illinois", area: 149995},
  {name: "Iowa", area: 145746},
  {name: "New York", area: 141297},
  {name: "North Carolina", area: 139391},
  {name: "Arkansas", area: 137732},
  {name: "Alabama", area: 135767},
  {name: "Louisiana", area: 135659},
  {name: "Mississippi", area: 125438},
  {name: "Pennsylvania", area: 119280},
  {name: "Ohio", area: 116098},
  {name: "Virginia", area: 110787},
  {name: "Tennessee", area: 109153},
  {name: "Kentucky", area: 104656},
  {name: "Indiana", area: 94326},
  {name: "Maine", area: 91633},
  {name: "South Carolina", area: 82933},
  {name: "West Virginia", area: 62756},
  {name: "Maryland", area: 32131},
  {name: "Hawaii", area: 28313},
  {name: "Massachusetts", area: 27336},
  {name: "Vermont", area: 24906},
  {name: "New Hampshire", area: 24214},
  {name: "New Jersey", area: 22591},
  {name: "Connecticut", area: 14357},
  {name: "Delaware", area: 6446},
  {name: "Rhode Island", area: 4001}  
];

const countries = [{name: "Andorra", area: 468}, {name: "United Arab Emirates", area: 82880}, {name: "Afghanistan", area: 647500}, {name: "Antigua and Barbuda", area: 443}, {name: "Anguilla", area: 102}, {name: "Albania", area: 28748}, {name: "Armenia", area: 29800}, {name: "Angola", area: 1246700}, {name: "Antarctica", area: 14000000}, {name: "Argentina", area: 2766890}, {name: "American Samoa", area: 199}, {name: "Austria", area: 83858}, {name: "Australia", area: 7686850}, {name: "Aruba", area: 193}, {name: "Aland Islands", area: 1580}, {name: "Azerbaijan", area: 86600}, {name: "Bosnia and Herzegovina", area: 51129}, {name: "Barbados", area: 431}, {name: "Bangladesh", area: 144000}, {name: "Belgium", area: 30510}, {name: "Burkina Faso", area: 274200}, {name: "Bulgaria", area: 110910}, {name: "Bahrain", area: 665}, {name: "Burundi", area: 27830}, {name: "Benin", area: 112620}, {name: "Saint Barthelemy", area: 21}, {name: "Bermuda", area: 53}, {name: "Brunei", area: 5770}, {name: "Bolivia", area: 1098580}, {name: "Bonaire, Saint Eustatius and Saba ", area: 328}, {name: "Brazil", area: 8511965}, {name: "Bahamas", area: 13940}, {name: "Bhutan", area: 47000}, {name: "Bouvet Island", area: 49}, {name: "Botswana", area: 600370}, {name: "Belarus", area: 207600}, {name: "Belize", area: 22966}, {name: "Canada", area: 9984670}, {name: "Cocos Islands", area: 14}, {name: "Democratic Republic of the Congo", area: 2345410}, {name: "Central African Republic", area: 622984}, {name: "Republic of the Congo", area: 342000}, {name: "Switzerland", area: 41290}, {name: "Ivory Coast", area: 322460}, {name: "Cook Islands", area: 240}, {name: "Chile", area: 756950}, {name: "Cameroon", area: 475440}, {name: "China", area: 9596960}, {name: "Colombia", area: 1138910}, {name: "Costa Rica", area: 51100}, {name: "Cuba", area: 110860}, {name: "Cape Verde", area: 4033}, {name: "Curacao", area: 444}, {name: "Christmas Island", area: 135}, {name: "Cyprus", area: 9250}, {name: "Czechia", area: 78866}, {name: "Germany", area: 357021}, {name: "Djibouti", area: 23000}, {name: "Denmark", area: 43094}, {name: "Dominica", area: 754}, {name: "Dominican Republic", area: 48730}, {name: "Algeria", area: 2381740}, {name: "Ecuador", area: 283560}, {name: "Estonia", area: 45226}, {name: "Egypt", area: 1001450}, {name: "Western Sahara", area: 266000}, {name: "Eritrea", area: 121320}, {name: "Spain", area: 504782}, {name: "Ethiopia", area: 1127127}, {name: "Finland", area: 337030}, {name: "Fiji", area: 18270}, {name: "Falkland Islands", area: 12173}, {name: "Micronesia", area: 702}, {name: "Faroe Islands", area: 1399}, {name: "France", area: 547030}, {name: "Gabon", area: 267667}, {name: "United Kingdom", area: 244820}, {name: "Grenada", area: 344}, {name: "Georgia", area: 69700}, {name: "French Guiana", area: 91000}, {name: "Guernsey", area: 78}, {name: "Ghana", area: 239460}, {name: "Gibraltar", area: 6}, {name: "Greenland", area: 2166086}, {name: "Gambia", area: 11300}, {name: "Guinea", area: 245857}, {name: "Guadeloupe", area: 1780}, {name: "Equatorial Guinea", area: 28051}, {name: "Greece", area: 131940}, {name: "South Georgia and the South Sandwich Islands", area: 3903}, {name: "Guatemala", area: 108890}, {name: "Guam", area: 549}, {name: "Guinea-Bissau", area: 36120}, {name: "Guyana", area: 214970}, {name: "Hong Kong", area: 1092}, {name: "Heard Island and McDonald Islands", area: 412}, {name: "Honduras", area: 112090}, {name: "Croatia", area: 56542}, {name: "Haiti", area: 27750}, {name: "Hungary", area: 93030}, {name: "Indonesia", area: 1919440}, {name: "Ireland", area: 70280}, {name: "Israel", area: 20770}, {name: "Isle of Man", area: 572}, {name: "India", area: 3287590}, {name: "British Indian Ocean Territory", area: 60}, {name: "Iraq", area: 437072}, {name: "Iran", area: 1648000}, {name: "Iceland", area: 103000}, {name: "Italy", area: 301230}, {name: "Jersey", area: 116}, {name: "Jamaica", area: 10991}, {name: "Jordan", area: 92300}, {name: "Japan", area: 377835}, {name: "Kenya", area: 582650}, {name: "Kyrgyzstan", area: 198500}, {name: "Cambodia", area: 181040}, {name: "Kiribati", area: 811}, {name: "Comoros", area: 2170}, {name: "Saint Kitts and Nevis", area: 261}, {name: "North Korea", area: 120540}, {name: "South Korea", area: 98480}, {name: "Kosovo", area: 10908}, {name: "Kuwait", area: 17820}, {name: "Cayman Islands", area: 262}, {name: "Kazakhstan", area: 2717300}, {name: "Laos", area: 236800}, {name: "Lebanon", area: 10400}, {name: "Saint Lucia", area: 616}, {name: "Liechtenstein", area: 160}, {name: "Sri Lanka", area: 65610}, {name: "Liberia", area: 111370}, {name: "Lesotho", area: 30355}, {name: "Lithuania", area: 65200}, {name: "Luxembourg", area: 2586}, {name: "Latvia", area: 64589}, {name: "Libya", area: 1759540}, {name: "Morocco", area: 446550}, {name: "Monaco", area: 2}, {name: "Moldova", area: 33843}, {name: "Montenegro", area: 14026}, {name: "Saint Martin", area: 53}, {name: "Madagascar", area: 587040}, {name: "Marshall Islands", area: 181}, {name: "Macedonia", area: 25333}, {name: "Mali", area: 1240000}, {name: "Myanmar", area: 678500}, {name: "Mongolia", area: 1565000}, {name: "Macao", area: 254}, {name: "Northern Mariana Islands", area: 477}, {name: "Martinique", area: 1100}, {name: "Mauritania", area: 1030700}, {name: "Montserrat", area: 102}, {name: "Malta", area: 316}, {name: "Mauritius", area: 2040}, {name: "Maldives", area: 300}, {name: "Malawi", area: 118480}, {name: "Mexico", area: 1972550}, {name: "Malaysia", area: 329750}, {name: "Mozambique", area: 801590}, {name: "Namibia", area: 825418}, {name: "New Caledonia", area: 19060}, {name: "Niger", area: 1267000}, {name: "Norfolk Island", area: 35}, {name: "Nigeria", area: 923768}, {name: "Nicaragua", area: 129494}, {name: "Netherlands", area: 41526}, {name: "Norway", area: 324220}, {name: "Nepal", area: 140800}, {name: "Nauru", area: 21}, {name: "Niue", area: 260}, {name: "New Zealand", area: 268680}, {name: "Oman", area: 212460}, {name: "Panama", area: 78200}, {name: "Peru", area: 1285220}, {name: "French Polynesia", area: 4167}, {name: "Papua New Guinea", area: 462840}, {name: "Philippines", area: 300000}, {name: "Pakistan", area: 803940}, {name: "Poland", area: 312685}, {name: "Saint Pierre and Miquelon", area: 242}, {name: "Pitcairn", area: 47}, {name: "Puerto Rico", area: 9104}, {name: "Palestinian Territory", area: 5970}, {name: "Portugal", area: 92391}, {name: "Palau", area: 458}, {name: "Paraguay", area: 406750}, {name: "Qatar", area: 11437}, {name: "Reunion", area: 2517}, {name: "Romania", area: 237500}, {name: "Serbia", area: 88361}, {name: "Russia", area: 17100000}, {name: "Rwanda", area: 26338}, {name: "Saudi Arabia", area: 1960582}, {name: "Solomon Islands", area: 28450}, {name: "Seychelles", area: 455}, {name: "Sudan", area: 1861484}, {name: "South Sudan", area: 644329}, {name: "Sweden", area: 449964}, {name: "Singapore", area: 693}, {name: "Saint Helena", area: 410}, {name: "Slovenia", area: 20273}, {name: "Svalbard and Jan Mayen", area: 62049}, {name: "Slovakia", area: 48845}, {name: "Sierra Leone", area: 71740}, {name: "San Marino", area: 61}, {name: "Senegal", area: 196190}, {name: "Somalia", area: 637657}, {name: "Suriname", area: 163270}, {name: "Sao Tome and Principe", area: 1001}, {name: "El Salvador", area: 21040}, {name: "Sint Maarten", area: 21}, {name: "Syria", area: 185180}, {name: "Swaziland", area: 17363}, {name: "Turks and Caicos Islands", area: 430}, {name: "Chad", area: 1284000}, {name: "French Southern Territories", area: 7829}, {name: "Togo", area: 56785}, {name: "Thailand", area: 514000}, {name: "Tajikistan", area: 143100}, {name: "Tokelau", area: 10}, {name: "East Timor", area: 15007}, {name: "Turkmenistan", area: 488100}, {name: "Tunisia", area: 163610}, {name: "Tonga", area: 748}, {name: "Turkey", area: 780580}, {name: "Trinidad and Tobago", area: 5128}, {name: "Tuvalu", area: 26}, {name: "Taiwan", area: 35980}, {name: "Tanzania", area: 945087}, {name: "Ukraine", area: 603700}, {name: "Uganda", area: 236040}, {name: "United States Minor Outlying Islands", area: 0}, {name: "United States", area: 9629091}, {name: "Uruguay", area: 176220}, {name: "Uzbekistan", area: 447400}, {name: "Vatican", area: 0}, {name: "Saint Vincent and the Grenadines", area: 389}, {name: "Venezuela", area: 912050}, {name: "British Virgin Islands", area: 153}, {name: "U.S. Virgin Islands", area: 352}, {name: "Vietnam", area: 329560}, {name: "Vanuatu", area: 12200}, {name: "Wallis and Futuna", area: 274}, {name: "Samoa", area: 2944}, {name: "Yemen", area: 527970}, {name: "Mayotte", area: 374}, {name: "South Africa", area: 1219912}, {name: "Zambia", area: 752614}, {name: "Zimbabwe", area: 390580}, {name: "Serbia and Montenegro", area: 102350}, {name: "Netherlands Antilles", area: 960}];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function compareAreas(item1, item2) {
  return item1.area > item2.area ? item1 : item2;
}

function Question({ question, handleOptionSelected }) {
  if (!question) {
    return
  }
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <p>Question {question.questionNumber + 1} of 10: Which is bigger?</p>
      <p>
        <button style={{ padding: '10px 20px', margin: 10 }} onClick={() => handleOptionSelected(question.usState)}>{question.usState.name}</button>
        <button style={{ padding: '10px 20px', margin: 10 }} onClick={() => handleOptionSelected(question.country)}>{question.country.name}</button>
      </p>
    </div>
  );
}

function Result({ score, answers }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <p>Your score: {score} out of 10</p>
      <p>Correct answers:</p>
      {answers.map((answer, index) => (
        <p key={index} style={{ color: answer.isCorrect ? 'green' : 'red' }}>Question {index + 1}: {answer.name}</p>
      ))}
    </div>
  );
}

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const newQuestions = [];
    for (let i = 0; i < 10; i++) {
      const usState = getRandomItem(usStates);
      const country = getRandomItem(countries);
      const correctAnswer = compareAreas(usState, country);
      newQuestions.push({ usState, country, correctAnswer, questionNumber: i });
    }
    setQuestions(newQuestions);
  }, []);
  function handleOptionSelected(selectedOption) {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setAnswers(prevAnswers => [...prevAnswers, { name: questions[currentQuestion].correctAnswer.name, isCorrect }]);
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  }

  if (currentQuestion === 10) {
    return <Result score={score} answers={answers} />;
  }

  return <Question question={questions[currentQuestion]} handleOptionSelected={handleOptionSelected} />;
}

export default Quiz;
