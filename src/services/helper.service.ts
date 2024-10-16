/**
 * Function to format date in a more readable format
 * @param dateString - The date to format
 * @returns The formatted date
 */
export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Function to scroll to the top of the page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Function to generate an id
 * @param text - Text to generate id
 * @returns The generated id
 */
export const generateHeaderId = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}