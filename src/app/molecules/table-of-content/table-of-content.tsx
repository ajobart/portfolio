import React, { useEffect, useState } from 'react';
import { CmsDataType } from '../../types/cms.types';
import { generateHeaderId } from '../../../services/helper.service';

interface TableOfContentProps {
    body: CmsDataType[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ body }) => {
    
    // State to store the active id of the heading
    const [activeId, setActiveId] = useState<string | null>(null);

    // Filter the body to get only the headings
    const headings = body.filter(item => ['heading2', 'heading3', 'heading4', 'heading5', 'heading6'].includes(item.type));

    /**
     * Function to set the active id of the heading and scroll to it
     */
    useEffect(() => {
        // Function to set the active id of the heading and scroll to it
        const handleScroll = () => {
            // Set the active id of the heading and scroll to it
            let currentActiveId = null;

            // Loop through the headings and set the active id of the heading and scroll to it
            headings.forEach((heading) => {
                // Generate the id of the heading
                const id = generateHeaderId(heading.text);
                // Get the element of the heading
                const element = document.getElementById(id);
                // If the element exists
                if (element) {
                    // Get the bounding client rect of the element
                    const rect = element.getBoundingClientRect();
                    // If the element is in the viewport (-100px)
                    if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
                        // Set the active id of the heading
                        currentActiveId = id;
                    }
                }
            });

            setActiveId(currentActiveId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    /**
     * Function to scroll to a heading
     * @param id - The id of the heading to scroll to
     */
    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -180; // adjust for fixed headers
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="h-fit flex flex-col">
            <nav className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">On this page</h2>
                <ul className="flex flex-col">
                    {headings.map((heading, index) => {
                        const id = generateHeaderId(heading.text);
                        const isActive = id === activeId;

                        return (
                            <li
                                key={index}
                                className={`py-2 ${isActive ? 'border-blue-500 text-blue-500' : 'dark:border-gray-300 border-table-of-content'} cursor-pointer text-sm font-regular hover:text-blue-500 pl-4 box-border border-l-2`}
                                onClick={() => scrollToHeading(id)}
                            >
                                <span className={`${heading.type === 'heading3' ? 'ml-4' : ''}`}>{heading.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContent;
