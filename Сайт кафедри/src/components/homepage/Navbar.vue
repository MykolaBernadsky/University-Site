/*eslint linebreak-style: ["error", "windows"]*/
<template>
  <header>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#"></a>

        <!-- Collapse button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">
          <!-- Links -->
          <ul class="navbar-nav mr-auto smooth-scroll">
            <li class="nav-item">
              <a class="nav-link" href="#intro">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#best-features">Про кафедру</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#examples">Новини</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery">Члени кафедри</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Контакти</a>
            </li>
          </ul>
          <!-- Links -->

          <!-- Social Icon  -->
          <div class="log-block">
             <router-link to="/login" class="log-in-btn">Log in</router-link>
          </div>
        </div>
        <!-- Collapsible content -->
      </div>
    </nav>
    <!--/.Navbar-->

    <!--Mask-->
    <div id="intro" class="view">
      <div class="mask rgba-black-strong">
        <div class="container-fluid d-flex align-items-center justify-content-center h-100">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-md-10">
              <!-- Heading -->
              <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">
                Львівський національний
                університет ім. І.Франка
              </h2>

              <!-- Divider -->
              <hr class="hr-light" />

              <!-- Description -->
              <h4 class="white-text my-4">Кафедра теорії оптимальних процесів</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/.Mask-->
  </header>
</template>

<style>

#intro {
  background: url("https://inlviv.in.ua/wp-content/uploads/2018/08/12885935_1260525773961640_3369394665637042035_o.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}

.log-in-btn{
  color: #ffffff;
}

.log-in-btn:hover{
  background-color: red;
  padding: 15px;
  color: #ffffff;
}

.top-nav-collapse {
  background-color: #24355c;
}
@media (max-width: 768px) {
  .navbar:not(.top-nav-collapse) {
    background-color: #24355c;
  }
}
@media (min-width: 800px) and (max-width: 850px) {
  .navbar:not(.top-nav-collapse) {
    background-color: #24355c;
  }
}
</style>