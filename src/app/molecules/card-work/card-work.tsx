import { FC } from "react";
import Image from "../../atom/image/image";
import { useNavigate } from "react-router-dom";
import BadgesList from "../../types/badgesList.types";

/**
 * Card work props
 * @param slug - Slug of the card
 * @param title - Title of the card
 * @param description - Description of the card
 * @param image - Image of the card
 * @param badges_list - Badges of the card
 */
interface CardWorkProps {
  slug?: string;
  title: string;
  description: string;
  image: string;
  badges_list: Array<BadgesList>;
}

const CardWork: FC<CardWorkProps> = ({
  slug = "",
  title = "",
  description = "",
  image = "",
  badges_list = [],
}) => {
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
      return description.substring(0, 150) + "...";
    }
    return description;
  }

  console.log("badgelit :", badges_list);

  return (
    <>
      {/* Card container */}
      {/* bg-[#222] bg-[#202023] */}
      <div
        className="cursor-pointer rounded-xl w-full h-full bg-[#363C46]/40 hover:bg-[#363C46]/60 hover:shadow-md hover:shadow-portfolio-blue-dark/20 transition ease-in-out border border-test/40"
        onClick={handleNavigate}
      >
        <div className="relative flex flex-col h-full p-3 box-border">
          {/* Image container */}
          <div className="rounded-xl w-full min-h-[184px] h-[184px] overflow-hidden">
            <Image path={image} alt={image} />
          </div>
          <div className="flex flex-col h-full items-start justify-between">
            {/* Text container */}
            <div className="flex flex-col gap-1 mt-2">
              <div>
                <h3 className="font-bold text-base">{title}</h3>
              </div>
              <div>
                <p className="font-normal text-[#9ca3af] text-sm">
                  {cutDescription(description)}
                </p>
              </div>
            </div>
            {/* Footer */}
            <div className="flex flex-row w-full items-end justify-between">
              <ul className="flex list-none mt-2 gap-1">
                {badges_list.map((item, index) => (
                  <li key={index}>
                    <span className="blue-badge">{item.badge}</span>
                  </li>
                ))}
              </ul>
              <button className="relative flex items-center justify-center font-normal text-[#71B8FF] text-xs">
                View more
                <Image
                  path="/icons/right-chevron-light.svg"
                  className="abosulte right-0 top-1/2 translate-x-1/2 size-2.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWork;
