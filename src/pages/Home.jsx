import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StudyDestinations from '../components/home/StudyDestinations'
import FeaturedUniversities from '../components/home/FeaturedUniversities'
import ServicesSection from '../components/home/ServicesSection'
import SuccessStories from '../components/home/SuccessStories'
import ConsultationForm from '../components/home/ConsultationForm'
import StatsSection from '../components/home/StatsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <WhyChooseUs />
      <StudyDestinations />
      <FeaturedUniversities />
      <ServicesSection />
      <SuccessStories />
      <ConsultationForm />
    </>
  )
}
