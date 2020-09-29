import React from "react";
import Chat from "../Chat/Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div>
      <Chat
        name="Margot"
        message="Would you like to go out today?"
        timestamp="40 seconds ago"
        profilePic="https://medias.fashionnetwork.com/image/upload/c_fill,g_face,h_600,w_600/v1/medias/30613b89565edbc12a253f14731b105e2719683.jpg"
      />
      <Chat
        name="Candice"
        message="Hey! How are you 😍?"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/originals/6b/9b/d8/6b9bd865cf39fc9f47f53313215faca5.jpg"
      />
      <Chat
        name="Mathilde"
        message="What's up ❤?"
        timestamp="3 days ago"
        profilePic="https://www.barbanews.com/wp-content/uploads/2020/06/Mathilde-Tantot.jpg"
      />
      <Chat
        name="Elsa"
        message="Hello😘"
        timestamp="1 week ago"
        profilePic="https://scstylecaster.files.wordpress.com/2016/05/elsa-hosk.jpg"
      />
    </div>
  );
};

export default Chats;
