import Image from "next/image";

import classNames from "classnames";

import { SocialButtonProps } from "@/types/SocialButton";

const SocialButton: React.FC<SocialButtonProps> = ({ social, className }) => {
    const socialButtonStyles = classNames({
        'flex items-center justify-center': true,
    }, className)

    return (
        <a 
            href={social.link}
            rel="noopener noreferrer" 
            target="_blank"
            className={socialButtonStyles}
            // temp while we don't have colors in talwind.config
            style={{backgroundColor: "#CABBE9"}}
        >
            <Image 
                width={32}
                height={32}
                src={social.icon}
                alt={`${social.name} icon`}
                className="w-[26px] h-[26px] text-current"
            />
        </a>
    )
}

export default SocialButton;