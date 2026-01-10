import Hero from "@/components/landing/Hero"
import SocialProof from "@/components/landing/SocialProof"
import PopularCategories from "@/components/landing/PopularCategories"
import Features from "@/components/landing/Features"
import CTA from "@/components/landing/CTA"

const page = () => {
    return (
        <div>
            <Hero />
            <SocialProof />
            <PopularCategories />
            <Features />
            <CTA />
        </div>
    )
}

export default page