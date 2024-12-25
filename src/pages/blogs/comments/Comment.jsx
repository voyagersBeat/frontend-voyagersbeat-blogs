import React from "react";
import UserIcon from "../../../assets/user profile img.png";
import { dateformatter } from "../../../utils/formetteddates";
import PostComments from "./PostComments";
import { useSelector } from "react-redux";

const Comment = ({ comments }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="my-6 bg-white p-8">
        <div>
          {comments?.length > 0 ? (
            <div>
              <h3 className="text-lg font-medium">All Comments</h3>{" "}
              <p className="text-gray-600 my-5">
                Join the discussion! Share your thoughts and feedback below.
              </p>
              <div>
                {comments.map((comment, index) => (
                  <div key={index} className="mt-4">
                    <div className="flex gap-4 items-center">
                      <img
                        src={UserIcon}
                        alt="comment user icon"
                        className="w-12 h-12 rounded-full border object-cover"
                      />
                      <div>
                        <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                          {comment?.user?.username}
                        </p>
                        <p className="text-[13px] italic">
                          {dateformatter(comment.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-600 mt-5 border p-4">
                      <p className="md:w-4/5">{comment?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-lg font-medium">No Comments Found</div>
          )}
        </div>
        {/* for add comment  */}
        <PostComments />
      </div>
    </>
  );
};

export default Comment;
