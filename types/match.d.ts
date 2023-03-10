type Match={
    id: number,
      venue:string,
      location:string,
      status:string,
      stageName:string,
      time:string,
      timeExtraInfo:Time,
      homeTeam:Team,
      awayTeam:Team,
      officials:[
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         },
         {
            name:string,
            role:string,
            country:string
         }
      ],
      createdAt:string,
      date:string,
      updatedAt:string,
      winner:string,
      matchNumber:number
}