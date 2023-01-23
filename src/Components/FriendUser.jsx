import React from "react";

function FriendUser(props) {
    let content;
  if (props.status == "online") {
    content=<div className='h-[10px] w-[10px] rounded-full bg-online bg-cover'></div>
  } else if ((props.status == "dnb")) {
    content=<div className='h-[10px] w-[10px] rounded-full bg-dnb bg-cover'></div>
  } else if ((props.status == "invis")) {
    content=<div className='h-[10px] w-[10px] rounded-full bg-invis bg-cover'></div>
  } else {
    content=<div className='h-[10px] w-[10px] rounded-full bg-idle bg-cover'></div>
  }

  return (
    <div className="group flex rounded-md hover:bg-[#414348] h-10 w-full px-3 items-center cursor-pointer">
      <div className="absolute w-2.5 h-2.5">
        <div className="flex w-full h-full ">
            <div className="h-4 w-4 rounded-full z-10 bg-[#2e3137] flex items-center justify-center -bottom-[3px] -right-[3px] absolute">
            {content}
            </div>
          <img
            className="h-full w-full rounded-full bg-white"
            aria-hidden="true"
          ></img>
        </div>
      </div>
      <div className="ml-10 flex h-full items-center justify-start w-full">
        <a className="text-[#96989d] group-hover:text-white">{props.name}</a>
      </div>
    </div>
  );
}

export default FriendUser;
