<template>
  <div class="row">
    <div class="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
    <div class="col-md-4 col-sm-4 col-xs-4 col-lg-4">
      <div class="row box">
        <div class="cover">

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
              <center>
                <img src="../assets/s.jpg" class="icon" alt="icn">
              </center>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
              <label class="padding">Email</label><br>
              <center>
                <input v-model="name" class="letter2" type="text"  placeholder="example@gmail.com" value=""/><br>
              </center>
              <br><label class="padding">Password</label><br>
              <center>
                <input v-model="pw" id="pw" class="letter" type="password" placeholder="Password" value=""/>
              </center>
              <br>
            </div>
          </div>

          <div class="row">
            <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <label  class="container">
                <div class="check">
                  <input  type="checkbox" name="gra" v-on:click="view()">
                  <span class="checkmark"></span>
                </div>
              </label>
            </div>
            <div  class="col-md-10 col-sm-10 col-xs-10 col-lg-10">
              <div>Show Password</div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
              <center>
              <div class="btn_lg" v-on:click="main()">
                  Signup
              </div>
              </center>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6"></div>
        <div class="col-md-5 col-sm-5 col-xs-5 col-lg-5">
          <div class="btn_sm" v-on:click="login()">
            Login
          </div>
        </div>
        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      pw: ''
    }
  },
  methods: {
    view: function () {
      var x = document.getElementById('pw')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    login: function () {
      // alert('h')
      this.$router.push('l')
    },
    main: function () {
      let e = this.name
      let p = this.pw
      alert(e)
      alert(p)
      let ve = this.validateEmail(e)
      let vp = this.validatepswd(p)
      this.store(e, p, ve, vp)
    },
    validateEmail: function (e) {
      var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      alert('hval')
      if (reg.test(e) === false) {
        alert('Please enter a valid email address..!!!')
        return false
      }
      return true
    },
    validatepswd: function (p) {
      var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/igm

      if (reg.test(p) === false) {
        alert('Password must contain Alphabats, digits and special characters(8-16)')
        return false
      }
      return true
    },
    store: function (e, p, ve, vp) {
      let v1 = ve
      let v2 = vp
      if (v1 === true && v2 === true) {
        this.$localStorage.set('s', true)
        this.$localStorage.set('uname', e)
        this.$localStorage.set('pswd', p)
        this.$router.push('l')
      } else {
        this.$router.push('')
      }
    }
  }
}
</script>

<style scoped>

.disable {
  user-select: none;
}

.eye {
  margin-bottom: 2px;
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 2px;
  margin-left: -3.3px;
  background-color: #fff;
}

.letter {
  padding-left: 20px;
  height: 3.3em;
  width: 20em;
  margin-top: .2em;
  border-radius: 1px;
  border: 2px solid #eeeeee;
}

.letter2 {
  padding-left: 20px;
  height: 3.3em;
  width: 20em;
  margin-top: .2em;
  border-radius: 1px;
  border: 2px solid #eeeeee;
}

.box {
  margin-top: 20%;
}

.cover {
  padding: 30px;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
}

.btn_lg {
  margin-top: 15px;
  padding-top: 3%;
  color:#fff;
  background-color: #ffab48;
  width: 280px;
  height: 46px;
  font-size: 23px;
  text-align: center;
  padding-top: 6px;
  border-radius: 2px;
  font-family: 'Slack-Lato','Roboto',Arial, Helvetica, sans-serif;
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  transition: 0.3s;
}

.btn_sm {
  margin-top:13px;
  color:#fff;
  background-color: #ffab48;
  width: 150px;
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

.icon {
  width: 11em;
  height: 10em;
}

.padding {
  padding-left: 6px;
}

.check {
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 6px;
}

.container {
  display: block;
  position: relative;
  padding-left: 23px;
  margin-bottom: 3px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Roboto',Arial, Helvetica, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ffcb67;
}

.container:hover input ~ .checkmark {
  background-color: #ffcb67;
}

.container input:checked ~ .checkmark {
  background-color: #fff;
}

.checkmark:after {
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 5px;
  top: 4px;
  width: 6px;
  height: 9px;
  border: solid #ffab48;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(55deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
