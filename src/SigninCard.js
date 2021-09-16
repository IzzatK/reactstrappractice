import React, {Component} from 'react';
import './SigininCard.css'

export default class SigninCard extends Component {

    render() {
        return (    
                    <div class="d-flex">
                        <div class="row justify-content-center">
                            <div id="reservationcard" class="card" id="card1">
                                <h3 class="card-header bg-warning text-white text-center">Sign in to your kloudstudio account</h3>
                                <div class="card-body">
                                    <div class="col-3">
                                       <p id="reservecardpars ">With email </p>
                                       
  <input class=""type="text" id="fname" name="fname"/><br/>
  <p id="reservecardpars ">Password </p>
                                       
                                       <input class=""type="text" id="fname" name="fname"/><br/>
    </div>
                                       
                                    {/* <div class="row justify-content-center">
                                    
                                    <>
                                    <button class=""></button>
                                    {/* <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label>
                                    <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label> *
                                    </>
                                    </div> */}
                                    <div class="row justify-content-center ">
                                    <button type="button" style={{width: "27.7%"}} class="btn btn-primary btn-sm">Small button</button>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


        )
    }

}