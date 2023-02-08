import React from 'react'
import SectionHeader from './section/SectionHeader'
import SectionList from './section/SectionList'

export default function page() {
  return (
    <div>
      <SectionHeader />
      
      {/* @ts-expect-error Server Component */}
      <SectionList />
    </div>
  )
}
