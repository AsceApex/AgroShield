import './index2.css'
import './global.css'
export default function Landing() {
  return (
    <>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="./global.css" />
    <link rel="stylesheet" href="./index.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Playfair Display:wght@400;600&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@400&display=swap"
    />
  </head>
  <body>
    <div class="loginpage">
      <div class="background"></div>
      <img class="desktop-1" alt="" src="./public/desktop--1@2x.png" />

      <img class="image-icon" alt="" src="./public/image@2x.png" />

      <div class="save-the-planetbuy-organic-parent">
        <div class="save-the-planetbuy-container">
          <p class="save-the-planetbuy">“Save the Planet...Buy Organic”</p>
          <p class="nancy-philips">― Nancy Philips</p>
        </div>
        <div class="image-container-wrapper">
          <div class="image-container">
            <div class="images"></div>
            <div class="images1"></div>
            <div class="images2"></div>
          </div>
        </div>
      </div>
      <div class="loginpage-inner">
        <div class="rectangle-parent">
          <div class="frame-child"></div>
          <div class="frame-parent">
            <div class="frame-group">
              <div class="frame-wrapper">
                <div class="rectangle-group">
                  <div class="frame-item"></div>
                  <img
                    class="frame-inner"
                    loading="lazy"
                    alt=""
                    src="./public/group-43.svg"
                  />
                </div>
              </div>
              <h2 class="short-headline">
                <span>Welcome back to </span>
                <span class="agroshield">AgroShield</span>
              </h2>
            </div>
            <div class="join-hype-container">
              <h1 class="join-the-hype">Login</h1>
            </div>
            <div class="frame-container">
              <form class="placeholder-container-parent">
                <div class="placeholder-container">
                  <div class="placeholder-wrapper">
                    <div class="input-fields">
                      <div class="input-elements">
                        <div class="placeholder">+91</div>
                      </div>
                      <div class="input-fields-inner">
                        <div class="line-div"></div>
                      </div>
                      <input
                        class="input-elements1"
                        placeholder="Phone Number"
                        type="text"
                      />

                      <div class="input-fields-child"></div>
                    </div>
                  </div>
                  <div class="frame-div">
                    <input
                      class="frame-input"
                      placeholder="Password"
                      type="text"
                    />

                    <img
                      class="iconreveal"
                      alt=""
                      src="./public/iconreveal@2x.png"
                    />

                    <div class="input-fields-child"></div>
                  </div>
                  <div class="frame-parent1">
                    <div class="terms-wrapper-parent">
                      <div class="terms-wrapper">
                        <img
                          class="terms-content-icon"
                          loading="lazy"
                          alt=""
                          src="./public/frame.svg"
                        />
                      </div>
                      <div class="placeholder1">Remember me</div>
                    </div>
                    <div class="placeholder2">Forget Password?</div>
                  </div>
                </div>
                <button class="rectangle-container">
                  <div class="frame-child1"></div>
                  <div class="placeholder3">Login</div>
                </button>
              </form>
            </div>
            <div class="footer">
              <div class="placeholder4">Don’t have an account?</div>
              <div class="placeholder5">Get Started</div>
            </div>
          </div>
          <div class="terms-conditions-container">
            <a class="terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  </body>
    </>
  )
}

