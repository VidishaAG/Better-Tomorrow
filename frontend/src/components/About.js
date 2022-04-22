import React from 'react'


export const About = () => {

  
  return (
    <div className="About">
      <div className="row">
        <div className="containers col-lg-6 col-md-6">
          
          <div className="pic"></div>
          
          <div className="box1"></div>
          <div className="box2"></div>
          
          <div className="social1">
            <i className="fa fa-facebook" aria-hidden="true"></i> 
          </div>
          <div className="social2">
          <i className="fa fa-dribbble" aria-hidden="true"></i>
          </div>
          <div className="social3">
            <i className="fa fa-codepen" aria-hidden="true"></i>
          </div>
        </div>

        <div className="content col-md-offset-6 col-lg-offset-6">
          <center><h1 className="contentHead">ABOUT ME</h1></center>
          
          <h2>Hi Folks, <br/><br/>
            This is Shaik Maqsood. I'm a Freakin frontend developer, jus came up with this concept of having a 45<sup>o</sup> trasformed DIV with a -45<sup>o</sup> background.<br/><br/>
            Can't belive that it worked.
            <br/><br/>
            Show your L<span>&hearts;</span>VE if you like my pen.
            <br/><br/>
            <p>(NOTICE: The lady in the PIC is not me, I'm a guy :P)</p>
            <p><span>* No matter what u say, that gal is sorta cute.</span></p>
          </h2>
        </div>
      </div>   

    </div>
  )
}
