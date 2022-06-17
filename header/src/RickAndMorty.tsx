import { useState, useEffect } from 'react'
import "./rickAndMorty.css"


export default function RickAndMorty(props) {

    const [list, setList] = useState([])

    const ROOT = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setList(data.results))
    }, [])

    return (
        <div className="container m-5 px-5">
            <div className="row">
                {list.map(item => {
                    return <div className="d-flex flex-row my-2 card stock-alert"
                        key={item.id}>
                        <div className="container">
                            <div className="row">
                                <div className="d-flex flex-row mt-1">
                                    <div className="col"><b>{item.name}</b></div>
                                    <img src={item.image}></img>
                                    <div className="col"><b>Gender: </b>{item.gender}</div>
                                </div>
                                <div className="d-flex flex-row mt-1">
                                    <div className="col"><b>Status: </b>{item.status}</div>
                                    <div className="col"><b>Species: </b>{item.species}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}