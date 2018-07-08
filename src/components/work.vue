<div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4 col-lg-4"> </div>
            <div class="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                <div class="row box">
                    <div class="cover"> 
                        <div class="row">  
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <center>
                                    <img src="../assets/login.png" class="icon">
                                </center>
                            </div>
                       </div> 
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <label class="padding">Email</label></br>
                                    <center>
                                         <input v-model="name" class="letter2" type="text"  placeholder="example@gmail.com" value=""/><br>
                                    </center>
                                    <br><label class="padding">Password</label></br>
                                    <center>
                                        <input  v-model="pw" id="pw"  class="letter" type="password" placeholder="Password" value=""/>
                                    </center>
                                   <br>
                             </div> 
                        </div>
                        <div class="row">
                            <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                                 <label  class="container">
                                    <div class="check">
                                        <input v-on:click="view()" type="checkbox" name="gra">
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
                                    <div class="btn_lg" v-on:click="login()">
                                    Login
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
                      
                    </div>  
                    <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1"></div>  
                </div>    
            </div>
  </div>