import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function singlePost() {
  return (
    <div className="mr-10 mx-6 mb-10">
      <div>
        <img
          className="rounded-xl"
          src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg"
        />
      </div>
      <p className="flex text-xl font-bold mt-3 mb-3">
        Hiiiiiiiiiii
        <div className="flex ml-auto cursor-pointer">
          <FaEdit className="mr-2" color="#22c55e" />
          <RiDeleteBin6Line color="#dc2626" />
        </div>
      </p>
      <div className="flex justify-between text-amber-600 mb-3 ">
        <span>
          Author: <b>Long</b>
        </span>
        <span>1 hour ago</span>
      </div>
      <p className="leading-6 ml-5">
        I have a best friend named Hoa, she is an introvert. She doesn’t like
        interacting with strangers. She can be silent for hours without being
        bored. Hoa has difficulty communicating with others and only answers
        when asked. She just talks and opens her heart to people close to her.
        Hoa likes the tranquility. She likes to be alone and listen to sad
        music. Noisy parties are like her “enemy”. She never went to these
        places. Due to being an introvert, Hoa has the ability to work
        independently, think, and observe very well. She is considerate and
        sympathetic to other people. However, I think she should change a bit.
        She should be more sociable, more communicative.
      </p>
    </div>
  );
}
