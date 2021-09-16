import React, {Component} from 'react';
import './SigninCard.css'

export default class SigninCard extends Component {

    render() {
        return (    
                    <div class="d-flex" style={{width:"150%"}}>
                        <div class="row-content justify-content-center">
                            <div id="reservationcard" class="card">
                                <h3 class="card-header bg-warning text-white text-center">Sign in to your kloudstudio account</h3>
                                <div class="card-body">
                                    <div class="row mr-5 justify-content-left align-text-left">
                                       <p id="reservecardpars ">Signin with email </p>
                                       <br/>
  <input class="offset-4"type="text" id="fname" name="fname"/><br/>
                                       
                                    </div>
                                    {/* <div class="row justify-content-center">
                                    
                                    <>
                                    <button class=""></button>
                                    {/* <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label>
                                    <label class="radio-inline align-self-center"><input id="Radios1" type="radio" name="survey" value="1"/></label> *
                                    </>
                                    </div> */}
                                    <div class="row justify-content-center ">
                                    <button type="button" style={{width: "50%"}} class="btn btn-primary btn-sm">Small button</button>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


        )
    }

}