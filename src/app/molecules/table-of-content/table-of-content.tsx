import React from 'react';
import { CmsDataType } from '../../types/cms.types';
import { generateHeaderId } from '../../../services/helper.service';

interface TableOfContentProps {
    body: CmsDataType[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ body }) => {

    // Filter the body to get only the headings
    const headings = body.filter(item => ['heading2', 'heading3', 'heading4', 'heading5', 'heading6'].includes(item.type));

    /**
     * Function to scroll to a heading
     * @param id - The id of the heading to scroll to
     */
    const scrollToHeading = (id: string) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className='h-fit flex flex-col'>
            <nav className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">On this page</h2>
                <ul className="flex flex-col gap-2">
                    {headings.map((heading, index) => {
                        // Generate the id of the heading
                        const id = generateHeaderId(heading.text);
                        return (
                            <li
                                key={index}
                                className={`cursor-pointer text-sm font-regular hover:text-blue-500 ${heading.type === 'heading3' ? 'ml-4' : ''}`}
                                onClick={() => scrollToHeading(id)}
                            >
                                {heading.text}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContent;
