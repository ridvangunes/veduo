import Hero from "@/components/landing/Hero"
import SocialProof from "@/components/landing/SocialProof"
import PopularCategories from "@/components/landing/PopularCategories"
import Features from "@/components/landing/Features"

const page = () => {
    return (
        <div>
            <Hero />
            <SocialProof />
            <PopularCategories />
            <Features />
        </div>
    )
}

export default page