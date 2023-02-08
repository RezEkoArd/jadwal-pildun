import React from 'react'
import groupBy from "lodash/groupBy"
import moment from 'moment'
import SectionRow from './SectionRow'

const getMatches = async () => {
    const res = await fetch('https://copa22.medeiro.tech/matches')
    return res.json()
}

export default async function SectionList() {
    const matches : Match[] = await getMatches() 
    
    const getMatchesDate = (item : Match) => moment(item.date).format("YYYY-MM-DD")
    const matchesByDate = groupBy(matches,getMatchesDate)

  return (
    <div>
        {Object.keys(matchesByDate).map((date,index) => (
            <div key={index}>
                <SectionRow matches={matchesByDate[date]} date={date}/>
            </div>
        ))}
    </div>
  )
}
