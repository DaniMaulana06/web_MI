import React from 'react'
import { Hero } from './_sections/hero-video'
import Partners from './_sections/partners'
import Profile from './_sections/profile'
import Facilities from './_sections/facilities'
import Stats from './_sections/stats'
import News from './_sections/news'
import { getMessages } from 'next-intl/server'
import CTA from './_sections/cta'
import WelcomingWord from './_sections/welcome-words'
import StudyPrograms from './_sections/study-programs'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const messages = await getMessages({ locale })
  const title = messages.layout.navbar.title

  return {
    title,
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return (
    <div className="flex flex-col">
      <Hero locale={locale} />
      <Partners locale={locale} />
      <Profile locale={locale} />
      <WelcomingWord locale={locale}/>
      <StudyPrograms locale={locale} />
      <Facilities locale={locale} />
      <Stats locale={locale} />
      <News />
      <CTA locale={locale} />
    </div>
  )
}
