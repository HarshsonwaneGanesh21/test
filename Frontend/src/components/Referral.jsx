import React, { useState } from "react";
const Referral=()=>{
  return(
  <>
  <div className="content">
    <div className="card">
    <div className="card1">
      <h2 className="head1">Share & Win upto 12 Months of Yoga<br />Vouchers & Gifts.</h2>
      <button className="head2">See Rewards</button>
      </div>
      <div className="steps">
        <div className="step">
          <div className="circle">1</div>
          <div className="texts">Click on the Copy Button below to copy your personalised referral link.</div>
        </div>
        <div className="step">
          <div className="circle">2</div>
          <div className="texts">Share it with your Friends / Family members</div>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <div className="texts">Earn Karma Points when they join through your link</div>
        </div>
      </div>
      <div className="step2">
      <input className="inp"type="texts" value="https://habit.yoga/bvh_al2t6" readOnly />
      <button className="inp1">Copy</button>
      </div>
      <div className="step3">
      <button className="wa-story">WA Story</button>
      <button className="share-whatsapp">Share On WhatsApp</button>
      </div>
      <div className="impact">48,35,849+ lives impacted by YOGA.</div>
    </div>
    <div className="card3">
      <h4 className="step4">0 Karma Points</h4>
    </div>
    <div className="card4">
      <img src="https://assets.habit.yoga/freeyoga/referrals.png"></img>
      <div className="card5">
      <h5 className="step5">Your list of referrals will appear here</h5>
      <button className="step6"><p>Invite Your Friends and Family</p></button>
      <p className="step7">You Earn 10 Karma Point for every referral joining</p>
      </div>
    </div>
  </div>
</>
  )
}
export default Referral;