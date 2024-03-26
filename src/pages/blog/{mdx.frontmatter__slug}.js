import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/solid";
import Layout from "../../components/core/layout";
import Seo from "../../components/core/seo";
import {
  Paragraf,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  NumberedList,
  DiscList,
  MyBlockquote,
  MyPRE,
} from "../../components/core/layout-mdx.js";
import { MDXProvider } from "@mdx-js/react";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-4xl font-bold text-slate-500 dark:text-slate-200 mb-2">
            {data.mdx.frontmatter.title}
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            {data.mdx.frontmatter.subtitle}
          </h2>
          <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
            {data.mdx.excerpt}
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-2 mb-4">
            <div className="flex flex-row text-slate-500">
              <CalendarDaysIcon className="h-4 w-4 mr-2" />
              <span className="text-xs">{data.mdx.frontmatter.date}</span>
            </div>
            <div className="flex flex-row text-slate-500 mt-2 md:mt-0 gap-1">
              <TagIcon className="h-4 w-4 mr-1" />
              {data.mdx.frontmatter.tags.map((tag, index) => (
                <span className="text-xs" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <GatsbyImage
            className="mb-8"
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />

          <MDXProvider
            components={{
              p: Paragraf,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              ol: NumberedList,
              ul: DiscList,
              blockquote: MyBlockquote,
              pre: MyPRE,
            }}
          >
            {children}
          </MDXProvider>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 250)
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
