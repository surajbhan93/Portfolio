// @flow strict
import { timeConverter } from '@/utils/time-converter';  // Assuming this utility converts the time
import Image from 'next/image';  // Next.js optimized image component
import Link from 'next/link';  // Next.js link component for routing
import { BsHeartFill } from 'react-icons/bs';  // Heart icon from react-icons
import { FaCommentAlt } from 'react-icons/fa';  // Comment icon from react-icons

function BlogCard({ blog }) {
  // Handling a fallback image in case the cover_image doesn't exist.
  const defaultImage = "/path/to/default-image.jpg";  // Replace with an actual default image URL

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      {/* Image Section with fallback */}
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image || defaultImage}  // Use default image if cover_image is not available
          height={1080}
          width={1920}
          alt={blog?.title || "Blog cover image"}  // Add alt text for accessibility
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        {/* Meta Information (Time, Likes, Comments) */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>

        {/* Blog Title as a Link */}
        <Link target='_blank' href={blog.url}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>

        {/* Reading Time */}
        <p className="mb-2 text-sm text-[#16f2b3]">
          {`${blog.reading_time_minutes} Min Read`}
        </p>

        {/* Description with line-clamp for truncation */}
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>

        {/* Optional "Read More" button if needed */}
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default BlogCard;
