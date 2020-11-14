//const testFunc = () =>{}

    const album=[
        {duration:120, title:'song name', artist:'Drake', album:{cover:'cover.png', year:2020}}, 
        {duration:140, title:'song name2', artist:'Drake2', album:{cover:'cover2.png', year:2021}}, 
        {duration:140, title:'song name2', artist:'Drake2', album:{cover:'cover3.png', year:2022}}, 
    ]
    let totalDuration = 0
 

    for(let i=0; i<album.length; i++ ) {
     totalDuration+=album[i].duration
     console.log(totalDuration)
    }
    
    