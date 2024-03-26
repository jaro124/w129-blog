import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/solid";

const PostHeader = ({
  title,
  subtitle,
  excerpt,
  date,
  tags,
  slug,
  hero_image,
  hero_image_alt,
}) => {
  const HeroImage = getImage(hero_image);
  return (
    <div>
      <Link to={"/blog/" + slug}>
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
          <div className="md:flex">
            <div className="md:shrink-0">
              <GatsbyImage
                className="h-48 w-full object-cover md:h-full md:w-48"
                image={HeroImage}
                alt={hero_image_alt}
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                {title}
              </h2>
              <h3 className="text-indigo-700 dark:text-indigo-300 font-semibold">
                {subtitle}
              </h3>
              <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                {excerpt}
              </p>
              <div className="flex flex-col md:flex-row justify-between mt-2">
                <div className="flex flex-row text-slate-500">
                  <CalendarDaysIcon className="h-4 w-4 mr-2" />
                  <span className="text-xs">{date}</span>
                </div>
                <div className="flex flex-row text-slate-500 mt-2 md:mt-0">
                  <TagIcon className="h-4 w-4 mr-1" />
                  {tags.map((tag, index) => (
                    <span className="text-xs pl-1" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostHeader;
