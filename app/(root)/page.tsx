import Hero from "@/components/landing/Hero"
import SocialProof from "@/components/landing/SocialProof"
import PopularCategories from "@/components/landing/PopularCategories"

const page = () => {
    return (
        <div>
            <Hero />
            <SocialProof />
            <PopularCategories />
        </div>
    )
}

export default page