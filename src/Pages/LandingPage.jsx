import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Section01 from "../Component/Section01"
import Section02 from "../Component/Section02"
import Section03 from "../Component/Section03"
import Section04 from "../Component/Section04"
import Section05 from "../Component/Section05"
import Section06 from "../Component/Section06"


function LandingPage() {
  return (
    <>
    <div className=" bg-[#F8F9FF]">
    <Header/>
    <div id="section1">
    <Section01/>
    </div>
    <div id="section2">
    <Section02/>
    </div>
    <div id="section3">
    <Section03/>
    </div>
    <div id="section4">
    <Section04/>
    </div>
    <div id="section5">
    <Section05/>
    </div>
    <div id="section6">
    <Section06/>
    </div>
    <div>
    <Footer/>
    </div>
       
    </div>
      

    </>
  )
}

export default LandingPage
