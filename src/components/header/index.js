import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div id="header__inner_first">
          <div id="icon__holder">
            <img
              src={require("../../assets/images/briefcase.svg").default}
              alt="briefcase"
            />
          </div>
          <h5 id="header__title">NEUTRINO GROUP</h5>
        </div>

        <div className="header__inner_second__container">
          {/* search */}
          <div id="header__inner_second">
            <Input
              className="header__inner_search"
              prefix={<SearchOutlined className="header__inner_searchIcon" />}
              placeholder="Search Neutrino Group for teammates, channels, customers"
              allowClear
            />
          </div>

          <div id="header__inner_third">
            <Button icon={<UserAddOutlined />} className='btn__add' >Invite Teammates</Button>
            <div id='header__inner_third_profile'>
              <div id="profile__holder">
                <img src={require("../../assets/images/profile.svg").default} alt="profile"/>
              </div>

              <span id='arrow_dropdown'>
                <img src={require("../../assets/images/arrow_dropdown.svg").default} alt="arrow"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
