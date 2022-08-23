import React from 'react';
import Topbar from '../Home/topbar';
import { ImFilePicture } from 'react-icons/im';

export default function Write() {
  return (
    <div>
      <Topbar />

      <div className="mt-14 ml-36">
        <img
          className="h-60 w-4/5 rounded-xl object-none"
          src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg"
        />
        <form>
          <div className="flex items-center">
            <label htmlFor="fileInp">
              <ImFilePicture
                className="cursor-pointer"
                color="green"
                size="1.2rem"
              />
            </label>
            <input id="fileInp" type="file" name="fileInp" className="hidden" />
            <input
              type="text"
              name="title"
              placeholder="Title..."
              autoFocus={true}
              className="text-xl border-none p-5 outline-none text-slate-500"
            />
          </div>
          <div>
            <textarea
              id="title"
              name="title"
              placeholder="Tell your story..."
              className=" text-xl w-4/5 bg-slate-100 rounded-xl p-4 outline-none text-slate-400"
            ></textarea>
          </div>
          <button
            className="position cursor-pointer bg-lime-700 rounded-md p-1 text-white mt-5"
            type="submit"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
