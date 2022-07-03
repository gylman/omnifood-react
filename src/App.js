import React from "react";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/#">
          <img className="logo" alt="Omnifood" src="img/omnifood-logo.png" />
        </a>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#how">
                How it works
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#meals">
                Meals
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>

      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm">
                Start eating well
              </a>
              <a href="#how" className="btn btn--outline">
                Learn more &darr;
              </a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src="img/customers/customer-1.jpg" alt="Customer" />
                  <img src="img/customers/customer-2.jpg" alt="Customer" />
                  <img src="img/customers/customer-3.jpg" alt="Customer" />
                  <img src="img/customers/customer-4.jpg" alt="Customer" />
                  <img src="img/customers/customer-5.jpg" alt="Customer" />
                  <img src="img/customers/customer-6.jpg" alt="Customer" />
                </div>
                <p className="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <picture>
                <source srcSet="img/hero.webp" type="image/webp" />
                <source srcSet="img/hero-min.png" type="image/png" />
              </picture>
              <img
                src="img/hero-min.png"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </div>
          </div>
        </section>

        <section className="section-featured">
          <div className="container">
            <h2 className="heading-featured-in">As featured in</h2>
            <div className="logos">
              <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
              <img
                src="img/logos/business-insider.png"
                alt="Business Insider"
              />
              <img
                src="img/logos/the-new-york-times.png"
                alt="The New York Times"
              />
              <img src="img/logos/forbes.png" alt="Forbes" />
              <img src="img/logos/usa-today.png" alt="USA Today" />
            </div>
          </div>
        </section>

        <section className="section-how" id="how">
          <div className="container">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>

          <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- STEP 01 --> */}
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">
                Tell us what you like (and what not)
              </h3>
              <p className="step-description">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>

            <div className="step-img-box">
              <img
                src="img/app/app-screen-1.png"
                className="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>

            {/* <!-- STEP 02 --> */}
            <div className="step-img-box">
              <img
                src="img/app/app-screen-2.png"
                className="step-img"
                alt="iPhone app
            meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">
                Approve your weekly meal plan
              </h3>
              <p className="step-description">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>

            {/* <!-- STEP 03 --> */}
            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">
                Receive meals at convenient time
              </h3>
              <p className="step-description">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div className="step-img-box">
              <img
                src="img/app/app-screen-3.png"
                className="step-img"
                alt="iPhone app
            delivery screen"
              />
            </div>
          </div>
        </section>

        <section className="section-meals" id="meals">
          <div className="container center-text">
            <span className="subheading">Meals</span>
            <h2 className="heading-secondary">
              Omnifood AI chooses from 5,000+ recipes
            </h2>
          </div>

          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img
                src="img/meals/meal-1.jpg"
                className="meal-img"
                alt="Japanese Gyozas"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegetarian">Vegetarian</span>
                </div>
                <p className="meal-title">Japanese Gyozas</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="flame-outline"
                    ></ion-icon>
                    <span>
                      <strong>650</strong> calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>74</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.9</strong> rating (537)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="meal">
              <img
                src="img/meals/meal-2.jpg"
                className="meal-img"
                alt="Avocado Salad"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">Vegan</span>
                  <span className="tag tag--paleo">Paleo</span>
                </div>
                <p className="meal-title">Avocado Salad</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="flame-outline"
                    ></ion-icon>
                    <span>
                      <strong>400</strong> calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>92</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.8</strong> rating (441)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="diets">
              <h3 className="heading-tertiary">Works with any diet:</h3>
              <ul className="list">
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Vegetarian</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Vegan</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Pescatarian</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Gluten-free</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Lactose-free</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Keto</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Paleo</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Low FODMAP</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Kid-friendly</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="container all-recipes">
            <a href="/#" className="link">
              See all recipes &rarr;
            </a>
          </div>
        </section>

        <section className="section-testimonials" id="testimonials">
          <div className="testimonials-container">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Once you try it, you can't go back
            </h2>

            <div className="testimonials">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Customer Dave Bryson"
                  src="img/customers/dave.jpg"
                />
                <blockquote className="testimonial-text">
                  Inexpensive, healthy and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Customer Ben Hadley"
                  src="img/customers/ben.jpg"
                />
                <blockquote className="testimonial-text">
                  The AI algorithm is crazy good, it chooses the right meals for
                  me every time. It's amazing not to worry about food anymore!
                </blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Customer Steve Miller"
                  src="img/customers/steve.jpg"
                />
                <blockquote className="testimonial-text">
                  Omnifood is a life saver! I just started a company, so there's
                  no time for cooking. I couldn't live without my daily meals
                  now!
                </blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>

              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Customer Hannah Smith"
                  src="img/customers/hannah.jpg"
                />
                <blockquote className="testimonial-text">
                  I got Omnifood for the whole family, and it frees up so much
                  time! Plus, everything is organic and vegan and without
                  plastic.
                </blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          <div className="gallery">
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-1.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-2.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-3.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-4.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-5.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-6.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-7.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-8.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-9.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-10.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-11.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="img/gallery/gallery-12.jpg"
                alt="Beautifully
            arranged food"
              />
            </figure>
          </div>
        </section>

        <section className="section-pricing" id="pricing">
          <div className="container">
            <span className="subheading">Pricing</span>
            <h2 className="heading-secondary">
              Eating well without breaking the bank
            </h2>
          </div>

          <div className="container grid grid--2-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
              <header className="plan-header">
                <p className="plan-name">Starter</p>
                <p className="plan-price">
                  <span>$</span>399
                </p>
                <p className="plan-text">
                  per month. That's just $13 per meal!
                </p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>1 meal per day</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Order from 11am to 9pm</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="close-outline"
                  ></ion-icon>
                </li>
              </ul>
              <div className="plan-sign-up">
                <a href="/#" className="btn btn--full">
                  Start eating well
                </a>
              </div>
            </div>

            <div className="pricing-plan pricing-plan--complete">
              <header className="plan-header">
                <p className="plan-name">Complete</p>
                <p className="plan-price">
                  <span>$</span>649
                </p>
                <p className="plan-text">
                  per month. That's just $11 per meal!
                </p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    <strong>2 meals</strong> per day
                  </span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Order <strong>24/7</strong>
                  </span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Get access to latest recipes</span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <a href="/#" className="btn btn--full">
                  Start eating well
                </a>
              </div>
            </div>
          </div>

          <div className="container grid">
            <aside className="plan-details">
              Prices include all applicable taxes. You can cancel at any time.
              Both plans include the following:
            </aside>
          </div>

          <div className="container grid grid--4-cols">
            <div className="feature">
              <ion-icon
                className="feature-icon"
                name="infinite-outline"
              ></ion-icon>
              <p className="feature-title">Never cook again!</p>
              <p className="feature-text">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div className="feature">
              <ion-icon
                className="feature-icon"
                name="nutrition-outline"
              ></ion-icon>
              <p className="feature-title">Local and organic</p>
              <p className="feature-text">
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
              <p className="feature-title">No waste</p>
              <p className="feature-text">
                All our partners only use reusable containers to package all
                your meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon
                className="feature-icon"
                name="pause-outline"
              ></ion-icon>
              <p className="feature-title">Pause anytime</p>
              <p className="feature-text">
                Going on vacation? Just pause your subscription, and we refund
                unused days.
              </p>
            </div>
          </div>
        </section>

        <section className="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">
                  Get your first meal for free!
                </h2>
                <p className="cta-text">
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>

                <form className="cta-form" action="sign-up" netlify="true">
                  <div>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                      name="full-name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="select-where">
                      Where did you hear from us?
                    </label>
                    <select id="select-where" name="select-where" required>
                      <option value="">Please choose one option:</option>
                      <option value="friends">Friends and family</option>
                      <option value="youtube">YouTube video</option>
                      <option value="podcast">Podcast</option>
                      <option value="ad">Facebook ad</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <button className="btn btn--form">Sign up now</button>
                </form>
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Woman enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="/#" className="footer-logo">
              <img
                className="logo"
                alt="Omnifood"
                src="img/omnifood-logo.png"
              />
            </a>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="/#">
                  <ion-icon
                    className="social-icon"
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  <ion-icon
                    className="social-icon"
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  <ion-icon
                    className="social-icon"
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2027</span> by Omnifood,
              Inc. All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>

          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="/#">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="/#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="/#">
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
