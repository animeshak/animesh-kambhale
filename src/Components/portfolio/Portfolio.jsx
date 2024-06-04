import React from 'react'
import './portfolio.css'
import Weather from '../../assets/weather-app.png' 

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Weather} alt="img1" />
          </div>
            <h3>Weather App Using React</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/animeshak/weather-app" className='btn' target='_blank'>Github</a>
            <a href="https://weather-app-sigma-eight-94.vercel.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/9631208/file/original-3660996893c469420f37a2022ad57d5e.jpg?resize=1504x1128" alt="img1" />
          </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/animesh-ak" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/animesh-ak" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/9631208/file/original-3660996893c469420f37a2022ad57d5e.jpg?resize=1504x1128" alt="img1" />
          </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/animesh-ak" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/animesh-ak" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://cdn.dribbble.com/userupload/9631208/file/original-3660996893c469420f37a2022ad57d5e.jpg?resize=1504x1128" alt="img1" />
          </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/animesh-ak" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/animesh-ak" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}