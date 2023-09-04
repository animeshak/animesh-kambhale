import React from 'react'
import './portfolio.css'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
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