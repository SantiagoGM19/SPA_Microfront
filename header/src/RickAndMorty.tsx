import React, { useEffect, useState } from 'react'

function RickAndMorty() {

    const [list, setList] = useState([])


    useEffect(() => {
        fetch("https://don-rauls-hardware-store.herokuapp.com/product/getall")
            .then(response => response.json())
            .then(data => setList(data))
    }, [])

  return (
    <div>
        {list.map(element => {
            return <div>
                
            </div>
        })}
    </div>
  )
}

export default RickAndMorty