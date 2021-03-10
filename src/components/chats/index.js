import React from "react";

const ChatsItem = (props) => {
  return (
    <div
      className={[
        "chatItem__container ",
        props.chatsContent.type === "me" ? "chatItem__me" : "chatItem__others",
      ].join("")}
    >
      <div className="chatItem__inner">
        {props.chatsContent.type === "others" && (
          <span style={{ marginRight: "0.6rem" }}>
            <img
              src={require("../../assets/images/chat_pics.svg").default}
              alt="chat_pics"
            />
          </span>
        )}

        <div
          className={[
            "chatItem__card__container",
            props.chatsContent.type === "me"
              ? "chatItem__card__container__me"
              : "chatItem__card__container__others",
          ].join(" ")}
        >
          {props.chatsContent.chats &&
            props.chatsContent.chats.map((chat, i) => {
              return (
                <div
                  className={[
                    "chatItem__card",
                    props.chatsContent.type === "me"
                      ? "chatItem__me"
                      : "chatItem__others",
                    props.chatsContent.type === "me" && i == 0 && "me__first",
                    props.chatsContent.type === "others" &&
                      i == 0 &&
                      "others__first",
                  ].join(" ")}
                >
                  <p>{chat.text}</p>
                </div>
              );
            })}

          <span>{props.chatsContent.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatsItem;
