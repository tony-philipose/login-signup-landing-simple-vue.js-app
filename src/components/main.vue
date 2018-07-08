<template>
  <div class="row">

     <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <div class="cover">
              <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                <img src="../assets/cp.png" class="icon">
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
              <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
          <div class="cardl cardhight ">

              <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                  <img src="../assets/mark.jpg" class="avtr">
                </div>
                <div class="col-md-8 col-sm-8 col-xs-8 col-lg-8">
                  <h3 class="h">Mark Zuckerberg</h3>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <div class="para">Mark Elliot Zuckerberg is an American computer programmer
                    and Internet entrepreneur. He is best known as one of five co-founders of the social networking website
                    Facebook.Zuckerberg was made the chairman and chief executive of Facebook, Inc. in April 2013.
                  </div>
                </div>
              </div>

          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
          <div class="cardr cardhight ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <img src="../assets/bill.jpg" class="avtr">
              </div>
              <div class="col-md-8 col-sm-8 col-xs-8 col-lg-8">
                <h3 class="h">William Henry</h3>
              </div>
            </div>

              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <div class="para">Mark Elliot Zuckerberg is an American computer programmer
                    and Internet entrepreneur. He is best known as one of five co-founders of the social networking website
                    Facebook.Zuckerberg was made the chairman and chief executive of Facebook, Inc. in April 2013.
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
          <div class="cardl1 cardhight ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <img src="../assets/steve.jpg" class="avtr">
              </div>
              <div class="col-md-8 col-sm-8 col-xs-8 col-lg-8">
                <h3 class="h">Stephen Gary</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                <div class="para">Mark Elliot Zuckerberg is an American computer programmer
                  and Internet entrepreneur. He is best known as one of five co-founders of the social networking website
                  Facebook.Zuckerberg was made the chairman and chief executive of Facebook, Inc. in April 2013.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
          <div class="cardr1 cardhight ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <img src="../assets/ser.jpg" class="avtr">
              </div>
              <div class="col-md-8 col-sm-8 col-xs-8 col-lg-8">
                <h3 class="h">Sergey Brin</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                <div class="para">Mark Elliot Zuckerberg is an American computer programmer
                  and Internet entrepreneur. He is best known as one of five co-founders of the social networking website
                  Facebook.Zuckerberg was made the chairman and chief executive of Facebook, Inc. in April 2013.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  name: 'dash',
  methods: {
    logout: function () {
      this.$router.push('l')
    }
  }
}
</script>
<style>
  body {
  /* background-image: url(rf.jpg); */
  background-color: #fff;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

.icon {
  width: 28em;
  height: 10em;
  margin-bottom: px;
}

.btn_sm {
  margin-top:20px;
  color:#fff;
  background-color: #ffab48;
  width: 130px;
  height: 46px;
  font-size: 23px;
  text-align: center;
  padding-top: 6px;
  border-radius: 2px;
  font-family: 'Slack-Lato','Roboto',Arial, Helvetica, sans-serif;
  box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  transition: 0.3s;
}
.letter {
  padding-left: 20px;
  height: 3.3em;
  width: 20em;
  margin-top: .2em;
  border-radius: 1px;
  border: 2px solid #eeeeee
}

.letter2 {
  padding-left: 20px;
  height: 3.3em;
  width: 20em;
  margin-top: .2em;
  border-radius: 1px;
  border: 2px solid #eeeeee
}

.box {
  margin-top: 20%;
}

.cover {
  padding-left: 1%;
  padding-top: 0%;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  height: 14%;
}

.para {
  margin:  5px 20px 0px;
}

.avtr {
  margin-left: 13px;
  margin-top: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.cardl{
  width: 90%;
  border: 1px solid #eeeeee;
  box-shadow:  0 6px 8px 0 rgba(0,0,0,0.2);
  border-left: 12px solid #ffab48;
  margin-left: 10%;
}

.cardr{
  width: 90%;
  border: 1px solid #eeeeee;
  box-shadow:  0 6px 8px 0 rgba(0,0,0,0.2);
  border-right: 12px solid #ffab48;
  margin-right: 10%;
}

.cardhight {
  min-height: 37%;
}

.cardl1{
  margin-top: 5%;
  width: 90%;
  border: 1px solid #eeeeee;
  box-shadow:  0 6px 8px 0 rgba(0,0,0,0.2);
  border-left: 12px solid #ffab48;
  margin-left: 10%;
}

.cardr1{
  margin-top: 5%;
  width: 90%;
  border: 1px solid #eeeeee;
  box-shadow:  0 6px 8px 0 rgba(0,0,0,0.2);
  border-right: 12px solid #ffab48;
  margin-right: 10%;
}

.h {
  font-family: 'Roboto',Arial, Helvetica, sans-serif;
  color: #000;
}
</style>
