import React, { Component } from "react";
import "./SigininCard.css";

//try to use label HTML tag instead of header tags for the form inputs
const SigninCard = () => {
  const alertFuncn = () => {
    window.alert("Hey you've clicked form button");
  };
  const AuthCard = () => (
    <div class="d-flex">
      <div class="row justify-content-center">
        <div id="reservationcard" class="card" id="card1">
          <h3
            class="card-header bg-none text-white text-center mb-2"
            id="kloudheader"
          >
            Sign in to your kloudstudio account
          </h3>
          <p id="signupheader" class="mt-2">
            Don't have an account?{" "}
            <a href="#" id="freetrialtext">
              Start a free trial
            </a>
          </p>

          <div class="card-body">
            <div class="col-12" id="signinform">
              <p id="emailpar">With email </p>

              <input
                class=""
                type="text"
                id="fname"
                name="fname"
                style={{ width: "113%" }}
              />
              <br />

              <div id="lowerinputform">
                <p id="passpars" class="float-middle mt-2">
                  Password{" "}
                  <button id="forgotpass" class="btn btn-sm float-right ">
                    Forgot Password
                  </button>
                </p>

                <input
                  class="mb-1"
                  type="text"
                  style={{ width: "113%" }}
                  id="fname"
                  name="fname"
                />
                <br />
              </div>
            </div>

            {/* <div class="row justify-content-center">
                                    
                                    <>
                                    <button class=""></button>
                                     <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label>
                                    <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label> *
                                    </>
                                    </div>  */}
            <div class="row justify-content-center ">
              <button
                onClick={alertFuncn}
                id="smbutton"
                class="btn btn-primary  mt-1"
              >
                Small button
              </button>
              <div id="div1" class="mt-2">
                <span id="span1">Or continue with</span>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="btn-group-toggle">
                <button class="btn btn-lg justify-content-left">
                  <span class="fa fa-facebook"></span>
                </button>
                <button class="btn btn-lg justify-contentcenter">
                  <span class="fa fa-google"></span>
                </button>
                <button class="btn btn-lg justify-content-right">
                  <span class="fa fa-github"></span>
                </button>
              </div>
            </div>
            {/* <hr style={{color:"blue", poistion:"relative", top:"50px"}}/>  */}
          </div>
        </div>
      </div>
    </div>
  );
  //return statement is below
  return <>{AuthCard()}</>;
};
export default SigninCard;
