var page = require('page');
var yo = require('yo-yo');

var main = document.getElementById('main-container')

page('/', function(ctx, next){
    main.innerHTML = '<a href="/signup">Signup</a>'
})

page('/signup', function(ctx, next){
     
    var el = yo ` <section id="main-container">
    <div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="images/iphone.png" />
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">
                    <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                      <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electrónico"/>
                      <input type="text" name="name" placeholder="Nombre completo"/>
                      <input type="text" name="username" placeholder="Nombre de usuario"/>
                      <input type="password" name="password" placeholder="Contraseña"/>
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col s12 l3 center-align">
          <a class='dropdown-button btn btn-flat' href='#' data-activates='dropdown1'>Idioma</a>

          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">Español</a></li>
            <li><a href="#!">Inglés</a></li>
          </ul>
        </div>
        <div class="col s12 l3 push-l6 center-align">
          © 2016 Platzigram
        </div>
      </div>
    </div>`;

    main.appendChild(el);
page();