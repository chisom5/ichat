import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ListChannelItem from "../../components/channelItems";

const Sidebar = (props) => {
  const history = useHistory();

  return (
    <div className="sidebar__style">
      <div id="mini__sidebar">
        <div id="mini__sidebar__section">
          {props.menu &&
            props.menu.map((item, i) => {
              return (
                <div className="menu__holder" key={i}>
                  <span>
                    {/* if i am on the current route use icon_active else use icon_default */}
                    <img src={item.icon_active} alt="menu__img" />
                  </span>
                  <p>{item.title}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div id="max__sidebar">
        <span className="max__sidebar__header">
          <p id="max__sidebar__header__title">Channels</p>
          <Button icon={<PlusOutlined />} className="btn__add">
            {" "}
            New Channel
          </Button>
        </span>

        {/* component here */}
        {props.channelList.map((content, i) => {
          return <ListChannelItem content={content} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
