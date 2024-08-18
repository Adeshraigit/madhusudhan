'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function Choose() {

  const featuredWebinars = [
    {
      title: 'DELIVERY ON TIME',
      description:
        'We consistently meet our deadlines for product delivery.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'GREAT TEAM WORK',
      description:
        'We attribute our success to the power of strong teamwork.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Quality Products',
      description:
        'We deliver high-quality products to our clients.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'MANPOWER',
      description:
        'We possess a skilled workforce to construct the project.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'NEW TECHNOLOGIES',
      description:
        'We embrace updated new technologies for project development.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'GREAT FACILITY',
      description:
        'We offer exceptional facilities to ensure our clients satisfaction and happiness.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#1E90FF] dark:text-[#1E90FF] sm:text-4xl">6 Reasons to Choose Us</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Choose;