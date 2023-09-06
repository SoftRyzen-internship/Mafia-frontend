import classNames from "classnames";

import SocialButton from "@/components/SocialButton/SocialButton";

import { SocialsListProps } from "@/types/SocialsList";
import { SocialContact } from "@/types/commonData";

import data from "@/data/socials.json"

const SocialsList: React.FC<SocialsListProps> = ({ className = "gap-5" }) => {

    const listStyles = classNames({
        'flex': true,
    }, className)

    return (
        <ul className={listStyles}>
            {data.map((social: SocialContact) => 
                <SocialButton 
                    key={social.name}
                    social={social}
                    className="w-8 h-8 text-black rounded"
                />
            )}
        </ul>
    )
}

export default SocialsList;