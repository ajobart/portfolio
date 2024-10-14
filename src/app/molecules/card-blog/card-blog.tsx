import { FC } from 'react';
import Image from '../../atom/image/image';
import { useNavigate } from 'react-router-dom';

interface CardBlogProps {
    // Slug of the card
    slug: string;

    // Title of the card
    title: string;

    // Description of the card
    description: string;

    // Image of the card
    image: string;
}

const CardBlog: FC<CardBlogProps> = ({slug = '', title = '', description = '', image = ''}) => {

    const navigate = useNavigate();

    /**
     * Function to navigate to the blog detail page
     */
    function handleNavigate() {
        navigate(`/blog/${slug}`);
    }

    return (
        <>
        {/* Card container */}
        <div className='cursor-pointer w-full h-full hover:scale-105 transition-all ease-in-out duration-300' onClick={handleNavigate}>
            {/* Image container */}
            <div className='rounded-[12px] overflow-hidden w-full h-[160px] overflow-hidden'>
               <Image path={image} alt={image}/>
            </div> 
            {/* Text container */}
            <div className='flex flex-col gap-1 mt-2'>
                <div>
                    <h3 className='font-bold text-xl'>{title}</h3>
                </div>
                <div>
                    <p className='font-normal text-sm'>{description}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardBlog;