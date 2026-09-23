import HeroSection from '../components/home/HeroSection'
import IeltsVideoSection from '../components/ielts/IeltsVideoSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StudyDestinations from '../components/home/StudyDestinations'
import FeaturedUniversities from '../components/home/FeaturedUniversities'
import ServicesSection from '../components/home/ServicesSection'
import ConsultationForm from '../components/home/ConsultationForm'
import SocialPreviewSection from '../components/home/SocialPreviewSection'
import HomeFaqSection from '../components/home/HomeFaqSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <IeltsVideoSection />
      {/* <StatsSection /> */}
      <WhyChooseUs />
      <StudyDestinations />
      <FeaturedUniversities />
      <ServicesSection />
      <HomeFaqSection />
      <ConsultationForm />
      <SocialPreviewSection />
    </>
  )
}
