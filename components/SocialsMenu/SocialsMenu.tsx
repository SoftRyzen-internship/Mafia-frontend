import SocialButton from "@/components/SocialButton/SocialButton";

import { SocialContact } from "@/types/commonData";

import data from "@/data/socials.json";

const SocialsMenu = () => {

    // Sort the array with Telegram first
    const shuffleSocials = (arr: SocialContact[]) : SocialContact[] => {
        const sortedArray = arr.slice(); // Create a new copy of the array
        const telegramIndex = sortedArray.findIndex(item => item.name === "telegram")
    
        if (telegramIndex !== -1) {
            const firstItem = sortedArray[telegramIndex];
            sortedArray.splice(telegramIndex, 1); // Remove "telegram" from its original position
            sortedArray.unshift(firstItem); // Add "telegram" to the beginning
        }
    
        return sortedArray;
    }
    
    const menuSocials = shuffleSocials(data);

    // border-radius: 6px 0px 0px 6px;
    // background: rgba(202, 187, 233, 0.33);
    // box-shadow: -2px 0px 8px 0px rgba(172, 136, 201, 0.13);
    
    return (
        <ul>
            {menuSocials.map(social => 
                <SocialButton 
                    key={social.name}
                    social={social}
                    className="w-8 h-8 text-black rounded"
                />
            )}
        </ul>
    )
}

export default SocialsMenu;