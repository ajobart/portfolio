import React from 'react';
import { CmsDataType, CmsHeadlineType } from '../../types/cms.types';
import DOMPurify from 'dompurify';
import { generateHeaderId } from '../../../services/helper.service';

interface CmsHtmlRendererProps {
    data: CmsDataType[];
    headline?: CmsHeadlineType[];
    colorTitle?: string;
}

const CmsHtmlRenderer: React.FC<CmsHtmlRendererProps> = ({ data, headline, colorTitle = 'dark' }) => {

    // List of generated ids
    const listGenerateId: string[] = [];

    const sanitizeOptions = {ADD_ATTR: ['target', 'rel'],};

    const addRelNoopener = (html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = doc.querySelectorAll('a[target="_blank"]');
    
        links.forEach((link) => {
            link.setAttribute('rel', 'noopener noreferrer');
        });
    
        return doc.body.innerHTML;
    };

    /**
     * Function to generate an id
     * @param text 
     * @param withoutPush 
     * @returns 
     */
    const generateId = (text: string, withoutPush = false): string => {
        const sanitizedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!listGenerateId.includes(sanitizedText) && !withoutPush) {
            listGenerateId.push(sanitizedText);
        }
        return sanitizedText;
    };

    /**
     * Function to scroll to an id
     * @param id 
     */
    const scrollToId = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    /**
     * Function to check if the text is a headline
     * @param text 
     * @returns 
     */
    const isHeadline = (text: string | undefined): boolean => {
        return text !== undefined && [
            "[headline-1]",
            "[headline-2]",
            "[headline-3]",
            "[headline-4]",
            "[headline-5]",
            "[headline-6]",
            "[headline-7]",
            "[headline-8]",
            "[headline-9]",
            "[headline-10]",
        ].includes(text.trim());
    };

    /**
     * Function to get the headline
     * @param text 
     * @returns 
     */
    const getHeadline = (text: string | undefined): CmsHeadlineType => {
        const headlineIndex = text?.replace('[', '').replace(']', '').split('-');
        if (headlineIndex && headline) {
            return headline[Number(headlineIndex[1]) - 1];
        }
        return {};
    };

    /**
     * Function to render the content
     * @param d
     * @param index 
     * @returns 
     */
    const renderContent = (d: CmsDataType, index: number) => {
        switch (d.type) {
            case 'heading4':
                return <h4 id={generateHeaderId(d.text)} key={index} className={`text-lg font-semibold text-${colorTitle} mb-2`}>{d.text}</h4>;
            case 'heading3':
                return <h3 id={generateHeaderId(d.text)} key={index} className={`text-xl font-semibold text-${colorTitle} mb-3`}>{d.text}</h3>;
            case 'heading2':
                return <h2 id={generateHeaderId(d.text)} key={index} className={`text-2xl font-semibold text-${colorTitle} mb-4`}>{d.text}</h2>;
            case 'paragraph':
                // Check if the paragraph is a special headline
                if (isHeadline(d.text)) {
                    const headlineData = getHeadline(d.text);
                    // Render a special headline block
                    return (
                        <div key={index} className="my-4 bg-blue-50 border border-blue-500 rounded-lg p-6">
                            <h4 className="flex items-center text-blue-500 mb-3 text-lg font-semibold">
                                <img src="/assets/images/icons/chat.svg" alt="chat" className="mr-3" />
                                {headlineData.headline_title}
                            </h4>
                            {headlineData.headline_body?.map((b, i) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(b.text || '') }} className="text-sm" />
                            ))}
                        </div>
                    );
                }
                // Render a regular paragraph
                const sanitizedHtml = DOMPurify.sanitize(d.text || '', sanitizeOptions);
                const processedHtml = addRelNoopener(sanitizedHtml);
                return (<p key={index} className="mb-4 text-sm"dangerouslySetInnerHTML={{ __html: processedHtml }}/>)
            case 'image':
                return <img key={index} src={d.url} alt={d.alt} className="w-auto h-auto rounded-lg my-4" />;
            case 'list-item':
            case 'o-list-item':
                // Skip rendering if it's not the first item of its type
                if (index > 0 && data[index - 1].type === d.type) {
                    return null;
                }
                // Determine if it's an ordered or unordered list
                const ListComponent = d.type === 'o-list-item' ? 'ol' : 'ul';
                const listClass = d.type === 'o-list-item' ? 'list-decimal' : 'list-disc';
                const listItems = [];
                let i = index;
                // Group consecutive list items of the same type
                while (i < data.length && data[i].type === d.type) {
                    listItems.push(data[i]);
                    i++;
                }
                // Render the list
                return (
                    <ListComponent key={index} className={`${listClass} list-inside mb-4`}>
                        {listItems.map((item, i) => (
                            <li key={i} className="mb-1 text-sm">
                                {listGenerateId.includes(generateId(item.text || '', true)) ? (
                                    // If the item is a link to another section, render it as an anchor
                                    <a href={`#${generateId(item.text || '', true)}`} onClick={() => scrollToId(generateId(item.text || '', true))} className="text-blue-500 hover:underline">
                                        {item.text}
                                    </a>
                                ) : (
                                    // Otherwise, render it as plain text
                                    item.text
                                )}
                            </li>
                        ))}
                    </ListComponent>
                );
            default:
                return null;
        }
    };

    return (
        <div className="cms-html-renderer-container w-full">
            {data.map((d, index) => renderContent(d, index))}
        </div>
    );
};

export default CmsHtmlRenderer;
