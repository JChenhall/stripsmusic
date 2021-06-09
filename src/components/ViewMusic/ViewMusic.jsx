import React, { useState, useEffect} from "react";
import { firestore } from "../../firebase.js";

let songInfo;

const ViewMusic = () => {


const [loading, setLoading] = useState(false);

const getSongInfo =  async () => {
    await firestore
      .collection("Songs")
      .doc('Dadshottrack1')
      .get()
      .then((response) => {
        songInfo = response.data();
        setLoading(true)
        return songInfo;
      });
  };

  useEffect(() => { 
    const letsGo = async () => {
      await getSongInfo();
    }
    letsGo();
  }, []);

    return (
        <>
    { loading &&
      <div>
    {/* //     <img
    //       src={songInfo.imageUrl}
    //     /> */}

        <section>
            <>
            <div>
            <h2>{songInfo.data.songTitle}</h2> 
            <h3>{songInfo.data.songTimer}</h3> 
            <h3>{songInfo.data.songInfo}</h3> 
            <h3>{songInfo.data.songSpotify}</h3> 
            <h3>{songInfo.data.songAmazon}</h3> 
            <h3>{songInfo.data.songYouTube}</h3> 
            <h3>{songInfo.data.songYouTubeMusic}</h3> 
            <h3>{songInfo.data.songiTunes}</h3> 
           </div>
         </>
            
          
        </section>
      </div>
      } 
    </>
  );
};

export default ViewMusic
