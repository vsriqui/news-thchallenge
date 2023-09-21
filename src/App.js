// import './App.css';
import { Routes, Route} from 'react-router-dom'
// import styled from 'styled-components'
import {getNews} from './Api'
import { useEffect, useState } from 'react';
import Home from './Home'
import NewsInfoComp from './NewsInfoComp'

//

function App() {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [articleInfo, setArticleInfo] = useState('');
  const [source, setSource] = useState('');

  const handleSearch = (newState) => {
    setSearch(newState);
    console.log(search, 'SEEEEARCH')
  };

  useEffect(() => {
    const fetchNews = () => {
      // getNews()
      //   .then((data) => setNews(data.articles))
      //   .catch((error) => error);  
      setNews(mock.articles)
      // console.log(mock.articles[0])
    
    };
    fetchNews(); 
  }, []);

  const newsInfoFunc = (titlz) => {  
    let oneArticle = news.find(ne => ne.title === titlz)
    setSource(oneArticle.source)
    setArticleInfo(oneArticle)
    console.log(articleInfo, 'dhfjljafshdsfldh')
  }

  return (
    <Routes>
      <Route exact path='/' element={<Home news={news} handleSearch={handleSearch} search={search} newsInfoFunc={newsInfoFunc} />} />
      <Route path='title/:title' element={<NewsInfoComp title={articleInfo.title}  image={articleInfo.urlToImage} date={articleInfo.publishedAt} author={articleInfo.author} content={articleInfo.content} source={source.name}/>} />
      <Route path='*'/>
    </Routes>
  );
}


const mock = {"status":"ok","totalResults":36,"articles":[{"source":{"id":null,"name":"CBS Sports"},"author":"","title":"Browns' Nick Chubb expected to miss rest of season after suffering 'significant knee injury' against Steelers - CBS Sports","description":"Chubb was injured during the second quarter","url":"https://www.cbssports.com/nfl/news/browns-nick-chubb-expected-to-miss-rest-of-season-after-suffering-significant-knee-injury-against-steelers/","urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/09/19/b884035a-8126-432a-a9e4-3df8fa3ae417/thumbnail/1200x675/4f76d8e8645a15b4de1dc038644183f8/screenshot-2023-09-18-at-6-34-11-pm.png","publishedAt":"2023-09-19T04:15:00Z","content":"Not only did the Cleveland Browns suffer their first defeat of the season Monday night, but they also lost the heart and soul of their offense. During the second quarter of a 26-22 loss to the Pittsb… [+1336 chars]"},{"source":{"id":"financial-times","name":"Financial Times"},"author":"Jaren Kerr, John Reed","title":"Justin Trudeau says 'credible allegations' link India to Sikh leader's murder in Canada - Financial Times","description":"New Delhi dismisses allegations as ‘absurd’ after top diplomat expelled amid investigation into fatal shooting","url":"https://www.ft.com/content/eca1a914-33a0-498e-955f-09f1b2fe887c","urlToImage":"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F3b8fda62-3316-47a6-9a31-d3d0760f3433.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900","publishedAt":"2023-09-19T04:07:30Z","content":"Canadas prime minister has said there are credible allegations that Indias government was involved in the fatal shooting of a prominent Sikh leader in British Columbia, citing intelligence from natio… [+3732 chars]"},{"source":{"id":"cbs-news","name":"CBS News"},"author":"DeJanay Booth-Singleton, Terell Bailey","title":"Michigan State informs coach Mel Tucker it intends to fire him amid sexual harassment investigation - CBS News","description":"In the statement, athletic director Alan Haller says Tucker has seven calendar days to respond \"and present reasons to me and the interim president as to why he should not be terminated.\"","url":"https://www.cbsnews.com/detroit/news/michigan-state-informs-football-coach-mel-tucker-it-intends-to-fire-him/","urlToImage":"https://assets3.cbsnewsstatic.com/hub/i/r/2023/09/18/13f5e096-9ff4-4ca9-9e11-58a9612e8d2d/thumbnail/1200x630/77136e5c7a7e95d285417fc97d2b85d5/gettyimages-1675177110.jpg?v=7baa303cd567eeea672118c3d6d2bab4","publishedAt":"2023-09-19T03:31:00Z","content":"EAST LANSING, Mich. (CBS DETROIT) - Michigan State University released a statement on Monday, Sept. 18, saying it intends to terminate the contract of football coach Mel Tucker for cause following a … [+3340 chars]"},{"source":{"id":null,"name":"WGN TV Chicago"},"author":"Addy Bink","title":"Powerball: Numbers drawn for $638 million jackpot - WGN TV Chicago","description":"A winner could take home the 10th-largest Powerball jackpot on record.","url":"https://wgntv.com/news/illinois-lottery/powerball-numbers-drawn-for-638-million-jackpot/","urlToImage":"https://wgntv.com/wp-content/uploads/sites/5/2023/03/AP22306670909819-2.jpg?w=1280","publishedAt":"2023-09-19T03:00:53Z","content":"(NEXSTAR) Check your tickets: the numbers are in for the third-largest Powerball jackpot of the year. \r\nThe winning numbers drawn on Monday, September 18, were: 2, 21, 26, 40, 42, and red Powerball 9… [+1983 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"New Orleans Saints vs. Carolina Panthers | 2023 Week 2 Game Highlights - NFL","description":"Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...","url":"https://www.youtube.com/watch?v=haL3wiTxTOQ","urlToImage":"https://i.ytimg.com/vi/haL3wiTxTOQ/maxresdefault.jpg","publishedAt":"2023-09-19T02:36:09Z","content":null},{"source":{"id":null,"name":"SciTechDaily"},"author":null,"title":"3-Billion-Year-Old Secrets: NASA's Curiosity Rover Reaches Mars Ridge Where Water Left Debris Pileup - SciTechDaily","description":"Believed to be a remnant of powerful ancient debris flows, Gediz Vallis Ridge is a destination long sought by the rover’s science team. Three billion years ago, amid one of the last wet periods on Mars, powerful debris flows carried mud and boulders down the …","url":"https://scitechdaily.com/3-billion-year-old-secrets-nasas-curiosity-rover-reaches-mars-ridge-where-water-left-debris-pileup/","urlToImage":"https://scitechdaily.com/images/Gediz-Vallis-Ridge-Curiosity-Mars-Rover-Panorama-scaled.jpg","publishedAt":"2023-09-19T02:35:41Z","content":"ByJet Propulsion LaboratorySeptember 18, 2023\r\nNASAs Curiosity captured this 360-degree panorama while parked below Gediz Vallis Ridge (seen at right), a formation that preserves a record of one of t… [+6862 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Katelyn Polantz","title":"Rudy Giuliani’s former attorneys sue him for more than $1.3 million in unpaid legal fees - CNN","description":"A law firm that represented Rudy Giuliani during recent years of investigations and lawsuits is now suing him for more than $1.3 million in unpaid legal fees, as the former New York City mayor is facing growing bills related to fallout for his actions around …","url":"https://www.cnn.com/2023/09/18/politics/rudy-giuliani-legal-fees-lawsuit/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230918222002-rudy-giuliani-082023.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-09-19T02:32:00Z","content":"A law firm that represented Rudy Giuliani during recent years of investigations and lawsuits is now suing him for more than $1.3 million in unpaid legal fees, as the former New York City mayor is fac… [+1537 chars]"},{"source":{"id":null,"name":"Entertainment Tonight"},"author":"Leah Sarnoff","title":"Soap Opera Star Billy Miller's Mother Addresses His Cause of Death and Battle With Bipolar Depression - Entertainment Tonight","description":"'The Young and the Restless' and 'General Hospital' star died at the age of 43 on Friday.","url":"https://www.etonline.com/soap-opera-star-billy-millers-mother-addresses-his-cause-of-death-and-battle-with-bipolar","urlToImage":"https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-09/GettyImages-451077294%20%281%29.jpg?h=c673cd1c","publishedAt":"2023-09-19T02:29:00Z","content":"Soap opera star Billy Miller's mother is speaking out in the wake of her son's death at 43 years old. \r\nIn a statement to Soap Opera Digest on Monday, Patricia Miller said the Daytime Emmy-winning st… [+2215 chars]"},{"source":{"id":null,"name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Elon Musk: Social media platform X could go behind paywall - bbc.com","description":"The billionaire suggested the social media platform, now called X, could charge for use of \"the system\".","url":"https://www.bbc.com/news/technology-66850821","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/B182/production/_131124454_gettyimages-1663931480.jpg","publishedAt":"2023-09-19T02:17:52Z","content":"Elon Musk has suggested that all users of X, formerly called Twitter, may have to pay for access to the platform.\r\nIn a conversation with Israeli Prime Minister Benjamin Netanyahu, the billionaire sa… [+2738 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Michael Wayland","title":"UAW will strike at additional U.S. auto plants if 'serious progress' isn't made by noon Friday - CNBC","description":"The timing of the additional plants would come just over a week after the union announced targeted strikes at assembly plants of about 12,700 autoworkers.","url":"https://www.cnbc.com/2023/09/19/uaw-will-strike-more-us-auto-plants-if-serious-progress-isnt-made.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107301950-1694908758698-gettyimages-1668661526-AFP_33VD3PN.jpeg?v=1695089794&w=1920&h=1080","publishedAt":"2023-09-19T02:16:00Z","content":"DETROIT The United Auto Workers union will announce additional strikes at General Motors, Ford Motor and Stellantis plants if the sides don't make \"serious progress\" in negotiations by noon ET Friday… [+3022 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Melanie Zanona, Haley Talbot, Manu Raju","title":"Tensions flare inside House GOP as moderates explore new plan to avoid shutdown - CNN","description":"Tensions are flaring inside the House Republican conference as it barrels toward a government shutdown, with the infighting spilling out into public view and growing increasingly nasty.","url":"https://www.cnn.com/2023/09/18/politics/house-republican-infighting-government-funding/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230918180348-byron-donalds-matt-gaetz-kevin-mccarthy-victoria-spartz-split.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-09-19T02:00:00Z","content":"Tensions are flaring inside the House Republican conference as it barrels toward a government shutdown, with the infighting spilling out into public view and growing increasingly nasty.\r\nThis is stup… [+7583 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Tyler Dragon, Victoria Hernandez","title":"Saints vs. Panthers, Browns vs. Steelers Monday Night Football updates - USA TODAY","description":"Get ready for a double dose of \"Monday Night Football\" as the Panthers host the Saints and the Browns clash with the Steelers.","url":"https://www.usatoday.com/story/sports/nfl/2023/09/18/monday-night-football-saints-panthers-browns-steelers-score-predictions/70895208007/","urlToImage":"https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/19/USAT/70897778007-usatsi-21453018.jpg?crop=2441,1373,x171,y71&width=2441&height=1373&format=pjpg&auto=webp","publishedAt":"2023-09-19T00:56:15Z","content":"The first of three twin bills on the \"Monday Night Football\" schedule saw the New Orleans Saints march to 2-0 with a win over the Carolina Panthers, the Pittsburgh Steelershold off the Cleveland Brow… [+27019 chars]"},{"source":{"id":null,"name":"[Removed]"},"author":null,"title":"[Removed]","description":"[Removed]","url":"https://removed.com","urlToImage":null,"publishedAt":"1970-01-01T00:00:00Z","content":"[Removed]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Sean Penn gives firsthand account of war in Ukraine - CBS Evening News","description":"Actor Sean Penn, the co-director of the new documentary \"Superpower,\" has personally witnessed the ongoing Russian invasion of Ukraine. He sat down with \"CBS...","url":"https://www.youtube.com/watch?v=bJyWTcqOU3Y","urlToImage":"https://i.ytimg.com/vi/bJyWTcqOU3Y/maxresdefault.jpg","publishedAt":"2023-09-18T23:42:09Z","content":null},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Questions remain after 2 models found dead in separate DTLA incidents - KTLA 5","description":"The mother of one of two models found dead in separate incidents in downtown Los Angeles is demanding answers. Jennifer McGraw reports for the KTLA 5 News at...","url":"https://www.youtube.com/watch?v=zSA3J6PM5Zo","urlToImage":"https://i.ytimg.com/vi/zSA3J6PM5Zo/maxresdefault.jpg","publishedAt":"2023-09-18T23:40:44Z","content":null},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Italy Toughens Asylum Laws Amid Surge in Migrant Arrivals - Voice of America","description":null,"url":"https://www.youtube.com/watch?v=hjcRnp3d8a4","urlToImage":null,"publishedAt":"2023-09-18T23:14:27Z","content":"Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"},{"source":{"id":"reuters","name":"Reuters"},"author":"Andrew Mills, Humeyra Pamuk, Parisa Hafezi","title":"US-bound plane leaves Doha with five Americans freed by Iran - Reuters","description":"A U.S.-bound plane carrying five Americans freed by Iran left Doha on Monday as part of a prisoner swap for five Iranians held in the United States and the transfer of $6 billion in Iranian funds, marking a rare deal between the long-time antagonists.","url":"https://www.reuters.com/world/south-korea-working-unfreeze-tehrans-funds-us-iran-detainee-deal-2023-09-18/","urlToImage":"https://www.reuters.com/resizer/3VLr_8yeVivgcHCinmUlyiol_Rg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZLJW5JPCP5OH3KD54SKN3AUG7U.jpg","publishedAt":"2023-09-18T23:12:48Z","content":"DOHA/NEW YORK, Sept 18 (Reuters) - A U.S.-bound plane carrying five Americans freed by Iran left Doha on Monday as part of a prisoner swap for five Iranians held in the United States and the transfer… [+6230 chars]"},{"source":{"id":"fox-news","name":"Fox News"},"author":"Andrea Vacchiano","title":"Debris reportedly found in South Carolina after F-35 stealth fighter jet disappearance; USMC pauses air ops - Fox News","description":"Debris has been found in Williamsburg County, South Carolina a day after a F-35 jet disappeared in the state on Sunday. The pilot ejected from the aircraft safely.","url":"https://www.foxnews.com/us/debris-reportedly-found-south-carolina-f-35-stealth-fighter-jet-disappearance","urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2023/09/GettyImages-1472918496.jpg","publishedAt":"2023-09-18T22:42:00Z","content":"A debris field has been located by military officials amid their investigation of the F-35 jet that disappeared in South Carolina on Sunday.\r\nJoint Base Charleston told Fox News Digital that the debr… [+2409 chars]"},{"source":{"id":null,"name":"VOA News"},"author":"VOA Learning English","title":"Who Should Get the Updated COVID Shot? - VOA Learning English","description":"The U.S. Centers for Disease Control and Prevention says most Americans should get the new COVID-19 shots from Pfizer or Moderna.","url":"https://learningenglish.voanews.com/a/who-should-get-the-updated-covid-shot-/7268958.html","urlToImage":"https://gdb.voanews.com/01000000-0aff-0242-1e81-08dbb56e57e8_w1200_r1.jpg","publishedAt":"2023-09-18T22:05:53Z","content":"American health officials say most people should get the updated COVID-19 vaccine this year.\r\nLast week, the U.S. Centers for Disease Control and Prevention (CDC) approved the updated COVID-19 shots … [+3349 chars]"},{"source":{"id":"cbs-news","name":"CBS News"},"author":"Kristina Rex","title":"Patients charged hundreds amid bumpy rollout for new COVID-19 shots - CBS Boston","description":"COVID-19 vaccines should be covered by most private and public health insurances.","url":"https://www.cbsnews.com/boston/news/patients-charged-hundreds-new-covid-19-shots/","urlToImage":"https://assets3.cbsnewsstatic.com/hub/i/r/2023/09/18/8f087bef-a268-4be9-9813-15937e2e969c/thumbnail/1200x630/4651c5df6e4beeab5d2fe936e23b8fab/free.jpg?v=7baa303cd567eeea672118c3d6d2bab4","publishedAt":"2023-09-18T21:40:57Z","content":"ACTON – When Glen Cote of Acton drove to his appointment at CVS for the new COVID-19 vaccine, he was shocked to receive a text on his phone minutes before his appointment, letting him know that the v… [+2049 chars]"}]}


export default App;
