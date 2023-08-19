import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Www.nu.nl"
  //     },
  //     "author": "onze techredactie",
  //     "title": "X (Twitter) vertraagde de toegang tot Facebook, Instagram en nieuwssites",
  //     "description": "Het socialemediaplatform X (voorheen Twitter) heeft de toegang tot concurrerende sociale netwerken en nieuwswebsites vertraagd. Gebruikers die op een link naar Facebook, Instagram of bijvoorbeeld The New York Times klikten, moesten vijf seconden wachten voord…",
  //     "url": "https://www.nu.nl/tech/6276741/x-twitter-vertraagde-de-toegang-tot-facebook-instagram-en-nieuwssites.html",
  //     "urlToImage": "https://media.nu.nl/m/h73xynoa10su_wd1280/x-twitter-vertraagde-de-toegang-tot-facebook-instagram-en-nieuwssites.jpg",
  //     "publishedAt": "2023-08-16T10:56:30Z",
  //     "content": "Het socialemediaplatform X (voorheen Twitter) heeft de toegang tot concurrerende sociale netwerken en nieuwswebsites vertraagd. Gebruikers die op een link naar Facebook, Instagram of bijvoorbeeld The… [+1786 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "MarketWatch"
  //     },
  //     "author": "Barbara Kollmeyer",
  //     "title": "Need to Know: Here are the stocks to buy and the ones to sell if interest rates stay high, says Jefferies",
  //     "description": "Jefferies offers up a stock playbook for a scenario in which the U.S. economy keeps surprising and the recession gets delayed.",
  //     "url": "https://www.marketwatch.com/story/here-are-the-stocks-to-buy-and-the-ones-to-sell-if-interest-rates-stay-high-says-jefferies-55f32fa9",
  //     "urlToImage": "https://images.mktw.net/im-836471/social",
  //     "publishedAt": "2023-08-16T10:54:09Z",
  //     "content": "Investors have been grappling with growing expectations for an economic soft landing, or no landing at all, that could open the door to more Fed hikes. Even as that pushes back on recession fears, th… [+5931 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Presse-citron"
  //     },
  //     "author": "Presse-citron",
  //     "title": "Que signifie ce symbole situé sur le tableau de bord à côté de la jauge d’essence ?",
  //     "description": "Vous arrivez dans une station essence mais vous ne savez pas de quel côté se situe le réservoir à carburant ? Ce petit symbole placé sur le tableau de bord vous donne la réponse, l'aviez-vous remarqué ?",
  //     "url": "https://www.presse-citron.net/que-signifie-ce-symbole-situe-sur-le-tableau-de-bord-a-cote-de-la-jauge-dessence/",
  //     "urlToImage": "https://www.presse-citron.net/app/uploads/2023/08/tableau-bord-carburant.jpg",
  //     "publishedAt": "2023-08-16T10:50:27Z",
  //     "content": "Vous êtes-vous déjà demandé pourquoi le réservoir de carburant de votre voiture nest pas toujours du même côté que celui de votre voisin ? Ou pourquoi vous vous trompez parfois de côté lorsque vous l… [+2658 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Ferra.ru"
  //     },
  //     "author": "Максим Многословный",
  //     "title": "Tesla построит «первые в своем роде» дата-центры",
  //     "description": "Компания Tesla входит в бизнес центров обработки данных, стремясь построить уникальные объекты, о чем свидетельствует недавнее объявление о вакансии «старший менеджер инженерных программ, центры обработки данных». Автопроизводитель нанимает персонал и приобре…",
  //     "url": "https://www.ferra.ru/news/techlife/tesla-postroit-pervye-v-svoem-rode-data-centry-16-08-2023.htm",
  //     "urlToImage": "https://www.ferra.ru/imgs/2023/08/16/10/6105140/6c78f0506b52f3e021478d181fbcf9d0b6a3949e.png",
  //     "publishedAt": "2023-08-16T10:50:23Z",
  //     "content": "Tesla , , « , ». . Tesla , « »."
  //   },
  //   {
  //     "source": {
  //       "id": "fortune",
  //       "name": "Fortune"
  //     },
  //     "author": "Chloe Taylor",
  //     "title": "The world’s biggest single investor in the stock market returned $143B in the first half of the year",
  //     "description": "It comes after the fund suffered one of its worst years in history in 2022.",
  //     "url": "https://fortune.com/2023/08/16/norway-sovereign-wealth-fund-1-trillion-h1-return-ai-tech-stocks-apple-microsoft-amazon-alphabet-nvidia/",
  //     "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/08/GettyImages-1246688154-e1692180880593.jpg?resize=1200,600",
  //     "publishedAt": "2023-08-16T10:46:22Z",
  //     "content": "Norways $1.4 trillion sovereign wealth fund saw a huge boost from the A.I.-driven tech surge in the first six months of this year, putting the investment titan back on track after one of its worst ye… [+2922 chars]"
  //   }
  // ]

  
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=cb65313753934c5c88c83bbc44845c90';
     let pdata = await fetch(url);
    let data = await pdata.json();
    this.setState({articles: data.articles})
  }
  render() {

    const {articles}= this.state;
    return (
      <>
        <div className="container">
          <h1>News section</h1>


          <div className="row">
            {articles.map((element) => {

               return <div className="col-4">
                <Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}  />
              </div>

            })}

            {/* <div className="col-4">
              <Newsitem title='@ntv' description='Hello world welcome to news section' />
            </div>
            <div className="col-4">
              <Newsitem title='@galaxy' description='Hello world welcome to news section' />
            </div> */}
          </div>
        </div>


      </>
    )
  }
}

export default News
