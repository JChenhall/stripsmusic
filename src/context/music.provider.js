import { firestore } from "../firebase";


    export const createSong = (data,url) => {
        let docRef = firestore.collection("Songs").doc(data.songTitle.split(" ").join(""));
          
        docRef.get()
          .then((doc) => {
            if (doc.exists) {
              alert("Song is already stored");
            } else {
              // doc.data() will be undefined in this case
              docRef
                .set({
                  data,
                  imageUrl: url,
                })
                .then(() => {
                  console.log("Song successfully saved!");
                })
                .catch((error) => {
                  console.error("Error saving song: ", error);
                });
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      
        return 1;
      };

      export const createEP = (data,url) => {
        let docRef = firestore.collection("eplist").doc(data.EPTitle.split(" ").join(""));
          
        docRef.get()
          .then((doc) => {
            if (doc.exists) {
              alert("EP is already stored");
            } else {
              // doc.data() will be undefined in this case
              docRef
                .set({
                  data,
                  imageUrl: url,
                })
                .then(() => {
                  console.log("EP successfully saved!");
                })
                .catch((error) => {
                  console.error("Error saving EP: ", error);
                });
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      
        return 1;
      };

      export const addSongsToLibrary = (data) => {
        var collectionRef = firestore
          .collection("viewmusic")
          .doc('musiclibrary');
      
        collectionRef
          .get()
          .then((doc) => {
            collectionRef
              .set({
                EPSelect: {
                  songSelect1: data.epsong1,
                  songSelect2: data.epsong2,
                  songSelect3: data.epsong3,
                },
            })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    
      return 1;
    };

    export const getAllSongs = () => {
        var collectionRef = firestore.collection("Songs").get();
        return collectionRef.then((response) => {
          return response.docs.map((doc) => doc.id);
        });
      };

      export const getAllEPs = () => {
        var collectionRef = firestore.collection("eplist").get();
        return collectionRef.then((response) => {
          return response.docs.map((doc) => doc.id);
        });
      };

      export const deleteSong = (firebaseSongId) => {
        firestore.collection("Songs").doc(firebaseSongId).delete();
      };

      export const deleteEP = (firebaseEPId) => {
        firestore.collection("eplist").doc(firebaseEPId).delete();
      };