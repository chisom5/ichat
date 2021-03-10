import React from "react";

const ListChannelItem = (props) => {
  return (
    <section className="listChannels__container">
      <div id="listChannels__info">
        <div id="icon__holder">
          <img
            src={require("../../assets/images/icon_holder.svg").default}
            alt="icon__holder"
          />
        </div>

        <span className="listChannels__info__text">
          <p className='listChannels__info__title'>{props.content.title}</p>
          <span>{props.content.message}</span>
        </span>
      </div>

      <div id="listChannels__time">
          <span>{props.content.time}</span>
      </div>
    </section>
  );
};
export default ListChannelItem;
