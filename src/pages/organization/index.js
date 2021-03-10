import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import ChatsItem from "../../components/chats";
import "../style.scss";

const Organization = () => {
  const [channelList, setChannelList] = useState([
    {
      title: "All Neutrino Staff",
      message: "Sender: Last message",
      time: "09:34",
    },
    {
      title: "All Neutrino Staff",
      message: "Sender: Last message",
      time: "09:34",
    },
    {
      title: "All Neutrino Staff",
      message: "Sender: Last message",
      time: "09:34",
    },
  ]);
  const [currentChannel, setCurrentChannel] = useState("All Neutrino Staff");
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Channels",
      icon_active: require("../../assets/images/channel.svg").default,
      icon_default: require("../../assets/images/channel_default.svg").default,
    },
    {
      id: 2,
      title: "Chats",
      icon_active: require("../../assets/images/chats.svg").default,
      icon_default: require("../../assets/images/chats_default.svg").default,
    },
    {
      id: 3,
      title: "Support",
      icon_active: require("../../assets/images/supporter.svg").default,
      icon_default: require("../../assets/images/supporter_default.svg").default,
    },
  ]);

  const [chatsText] = useState([
    {
      id: 1,
      type: "me",
      name: "chisom",
      chats: [{ text: "Hello" }, { text: "Welcome to our new channel!" }],
      time: "09:34",
    },
    {
      id: 2,
      type: "others",
      name: "Amarachi Olubayo",
      chats: [
        { text: "Hi everyone!" },
        { text: "It’s really great to be here" },
      ],
      time: "09:45",
    },
    // {
    //   id: 3,
    //   type: "others",
    //   name: "Fred Chibuzor",
    //   chats: [
    //     { text: "Thanks a lot for this, guys" },
    //   ],
    //   time: "09:46",
    // }
  ]);

  return (
    <div className="init__container">
      <Header />
      <div className="mini__container">
        <Sidebar menu={menu} channelList={channelList} />
        <section className="main__content">
          <header className="main__content__header">
            {/* left */}
            <div className="main__content__header__left">
              <div id="icon__holder">
                <img
                  src={require("../../assets/images/icon_holder.svg").default}
                  alt="icon__holder"
                />
              </div>
              <p>{currentChannel}</p>
              <span>
                <img
                  src={require("../../assets/images/info.svg").default}
                  alt="info"
                />
              </span>
            </div>

            {/* right */}
            <div className="main__content__header__right">
              <Button icon={<PlusOutlined />} className="btn_add">
                Add
              </Button>
              <div className="main__content__header__right user-icon">
                <span>
                  <img
                    src={require("../../assets/images/users.svg").default}
                    alt="user_icon"
                  />
                </span>
                <p id="user__number">97</p>
              </div>
            </div>
          </header>

          {/* chats container */}
          <div className="chat__content">
            {/* scrollable content */}
            <div className="chatItem__content">
              {chatsText.map((chat, i) => {
                return <ChatsItem chatsContent={chat} key={i} />;
              })}
            </div>

            <div className="chat__input">
              <Input
                className="chat__input_textField"
                placeholder="Send a message to All Neutrino Staff"
                allowClear
              />
              <span id="chat__send">
                <img
                  src={require("../../assets/images/send.svg").default}
                  alt="send"
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Organization;
