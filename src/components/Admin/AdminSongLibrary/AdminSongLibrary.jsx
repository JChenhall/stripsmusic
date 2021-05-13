import React from 'react';
import './AdminSongLibrary.css';
import GoogleFontLoader from 'react-google-font-loader';
const AdminSongLibrary = () => {
    return (
        <section className="libraryPage">
            <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
            <div className="libraryTab" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
            
            <h1 for="epSelecting">Select an EP/Album</h1>
                <select className="EPSelector">
                    <option value="EP1">EP1</option>
                    <option value="EP2">EP2</option>
                    <option value="EP3">EP3</option>
                </select>

                <div className="track">
                    <h4>placeholder song 1</h4>
                        <div className="buttonBox">
                            <button className="edit">EDIT</button>
                            <button className="delete">DELETE</button>
                        </div>
                </div>

                <div className="track">
                    <h4>placeholder song 2</h4>
                        <div className="buttonBox">
                            <button className="edit">EDIT</button>
                            <button className="delete">DELETE</button>
                        </div>
                </div>

                <div className="track">
                    <h4>placeholder song 3</h4>
                        <div className="buttonBox">
                            <button className="edit">EDIT</button>
                            <button className="delete">DELETE</button>
                        </div>
                </div>

                <div className="track">
                    <h4>placeholder song 4</h4>
                        <div className="buttonBox">
                            <button className="edit">EDIT</button>
                            <button className="delete">DELETE</button>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default AdminSongLibrary
