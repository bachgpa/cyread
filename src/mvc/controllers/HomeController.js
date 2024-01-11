class HomeController {
  //GET /news
  home(req, res) {
    res.send("Hello my World!");
  }
}

module.exports = new HomeController();
