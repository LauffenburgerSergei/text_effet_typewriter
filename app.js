const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim, {
  //loop: true,
  deleteSpeed: 20,
})
  .changeDelay(20)
  .typeString("Moi c'est John Doe")
  .pauseFor(300)
  .typeString("<strong>, Dev Full-stack</strong> !")
  .pause(1000)
  .deleteChars(13)
  .typeString('<span style="color: #27ae60"> CSS</span> !')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: midnightblue"> react</span> !')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: #ea39ff"> PHP</span> !')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #ff6910"> Javascript</span> !')
  .pauseFor(1000)
  .deleteChars(39)
  .typeString("Bienvenue sur mon site !")

  .start();
