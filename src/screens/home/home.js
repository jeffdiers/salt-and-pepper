import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import { Link } from 'react-router-dom'


const RECIPES = [
  {
    title: "Asparagus",
    slug: "asparagus",
    date: "Saturday, June 28",
    img_url: "/img/asparagus.png",
    description: "Asparagus w/ Roasted Garbanzos, Toasted Pine Nuts, Red Pepper, and a Ground Mustard Lemon Vinaigrette."
  },
  {
    title: "Eggs Scrambled",
    slug: "eggs-scrambled",
    date: "Thursday, June 26",
    img_url: "/img/eggs_scrambled.png",
    description: "Eggs scrambled in Fried Tortillas, and tossed in Salsa"
  },
  {
    title: "Fried Potato Salad",
    slug: "fried-potato-salad",
    date: "Friday, June 20",
    img_url: "/img/potato_salad.png",
    description: "‘Fried Potato Salad’ It’s a thing."
  },
  {
    title: "Tapenade and Sourdough",
    slug: "tapenade-and-sourdough",
    date: "Tuesday, June 17",
    img_url: "/img/tapenade_sourdough.png",
    description: "#LazySunday ‘s are for Roasted Red Pepper Tapenade and Sourdough from the farmers market"
  },
  {
    title: "Ricotta and Sausage Stuffed Shells",
    slug: "richotta-and-sausage-stuffed-shells",
    date: "Sunday, June 15",
    img_url: "/img/stuffed_shells.png",
    description: "Ricotta and Sausage Stuffed Shells topped with Citrus Asparagus on top of a Vodka Sauce"
  },
]

class Home extends Component {

  constructor(props) {
    super(props)
    this.state ={
      is_loading: false
    }
  }

  componentWillMount(){
    this.props.fetchEntries()
    // let access_token = '32481856.ee0a6e4.571b412cdddd4b07996ef048ab78f5dc'
    // let url = 'https://api.instagram.com/v1/users/self/media/recent/?__a=1&access_token='
    // return fetch(url+access_token)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({
    //       is_loading: false,
    //       instagram_data: responseJson,
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  render_hero() {
    return (
      <div className="hero">
        <div className="recipe">
          <div className="row">
            <div className="recipe-img-container hero-img col-md-8 col-xs-12">
              <a href={`/article/${RECIPES[0].slug}`}><img src={RECIPES[0].img_url} className="recipe-img" alt={RECIPES[0].slug} /></a>
            </div>
          <div className="recipe-sub-hero col-md-4 col-xs-12">
            <div>
              <a href={`/article/${RECIPES[0].slug}`}><h1>{RECIPES[0].title}</h1></a>
              <p className="date">{RECIPES[0].date}</p>
              <p className="description">{RECIPES[0].description}</p>
            </div>
            <div className="recipe-links">
              <div className="share">
                <a href="/"><i className="fas fa-heart"></i></a>
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }

  render_recipes() {
    return RECIPES.map((recipe, i) =>
      <div className="recipe col-md-4 col-xs-12" key={i} style={i < 1 ? {display: "none"} : {display: "block"} }>
        <div className="recipe-img-container">
          <a href={`/article/${recipe.slug}`}><img src={recipe.img_url} className="recipe-img" alt={recipe.slug} /></a>
        </div>
        <div className="recipe-sub">
          <div>
            {/* <a href={`/article/${recipe.slug}`}><h2>{recipe.title}</h2></a> */}
            <Link to={`/article/${recipe.slug}`} params={{ testvalue: "hello" }}><h2>{recipe.title}</h2></Link>
            <p className="date">{recipe.date}</p>
            <p className="description">{recipe.description}</p>
          </div>
          <div className="recipe-links">
            <div className="share">
              <a href="/"><i className="fas fa-heart"></i></a>
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="home container">
        {this.state.is_loading ? null : this.render_hero()}
        <div className="main">
          <div className="row">
          {this.state.is_loading ? null : this.render_recipes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
