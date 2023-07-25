import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Companies from '@/components/Companies'
import Frame from '@/components/Frame'
import HIW from '@/components/HIW'
import ChooseUs from '@/components/ChooseUs'
import Offer from '@/components/Offer'
import Opportunity from '@/components/Opportunity'


export default function Home() {
  return (
   <div>
    <Navbar />
    <Main />
    <Companies />
    <Frame />
    <HIW />
    <ChooseUs />
    <Offer />
    <Opportunity />
   </div>
  )
}
