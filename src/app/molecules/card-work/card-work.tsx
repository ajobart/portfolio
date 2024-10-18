import { FC } from 'react';
import Image from '../../atom/image/image';
import { useNavigate } from 'react-router-dom';

interface CardBlogProps {
    // Slug of the card
    slug?: string;

    // Title of the card
    title: string;

    // Description of the card
    description: string;

    // Image of the card
    image: string;
}

const CardWork: FC<CardBlogProps> = ({ slug = '', title = '', description = '', image = '' }) => {

    // Navigate
    const navigate = useNavigate();

    /**
     * Function to navigate to the blog detail page
     */
    function handleNavigate() {
        navigate(`/work/${slug}`);
    }

    /**
     * Function to cut the description to 150 characters replacing by "..."
     * @param description - Description to cut
     * @returns - Description cut to 150 characters
     */
    function cutDescription(description: string) {
        if (description.length > 150) {
            return description.substring(0, 150) + '...';
        }
        return description;
    }

    return (
        <>
            {/* Card container */}
            {/* bg-[#222] */}
            <div className='cursor-pointer rounded-[12px] w-full h-full bg-[#202023] hover:bg-[#262626] transition ease-in-out border border-test/40' onClick={handleNavigate}>
                <div className='relative flex flex-col p-3 box-border'>
                    {/* Image container */}
                    <div className='rounded-[12px] overflow-hidden w-full h-[184px] overflow-hidden'>
                        <Image path={image} alt={image} />
                    </div>
                    {/* Text container */}
                    <div className='flex flex-col gap-1 mt-2'>
                        <div>
                            <h3 className='font-bold text-base'>{title}</h3>
                        </div>
                        <div>
                            <p className='font-normal text-[#9ca3af] text-sm'>{cutDescription(description)}</p>
                        </div>
                    </div>
                    <ul className='flex list-none mt-2 gap-1'>
                        <li>
                            <span className="blue-badge">
                                Badge
                            </span>
                        </li>
                        <li>
                            <span className="blue-badge">
                                Badge
                            </span>
                        </li>
                        <li>
                            <span className="blue-badge">
                                Badge
                            </span>
                        </li>
                    </ul>
                    <button className='absolute flex items-center justify-center hover:gap-2 transition ease-in-out duration-300 font-normal text-[#9ca3af] right-3 bottom-3 text-xs'>
                        View more
                        <Image path='/icons/right-chevron-light.svg' className='size-2.5' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardWork;