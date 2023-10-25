import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import LoaderStyleOne from "../../Helpers/Loaders/LoaderStyleOne";

export default function CommentBlog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reviewLoading, setLoading] = useState(false);
  const [commnets, setComments] = useState([
    {
      id: Math.random(),
      author: "Rafiqul Islam",
      comments: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining`,
      review: 4,
      replys: [
        {
          id: Math.random(),
          name: "Willium Kingson",
          comments: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
      ],
    },
    {
      id: Math.random(),
      author: "Abdullah Mamun",
      comments: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining`,
      review: 5,
    },
  ]);
  const reviewAction = () => {
    setLoading(true);
    setTimeout(() => {
      if ((name, message)) {
        setComments((prev) => [
          {
            id: Math.random(),
            author: name,
            comments: message,
          },
          ...prev,
        ]);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      }
      setLoading(false);
      return false;
    }, 2000);
  };
  return (
    <>
      <div className="write-review w-full mb-[30px]">
        <h1 className="text-2xl font-medium text-qblack mb-5">
          Leave a Comment
        </h1>
        <div className="w-full review-form ">
          <div className="sm:flex sm:space-x-[30px] items-center mb-5 w-full">
            <div className="w-full mb-5 sm:mb-0">
              <InputCom
                label="name*"
                placeholder=""
                type="text"
                name="name"
                inputClasses="h-[50px]"
                value={name}
                inputHandler={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <InputCom
                label="Email*"
                placeholder=""
                type="email"
                name="name"
                inputClasses="h-[50px]"
                value={email}
                inputHandler={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full mb-[30px]">
            <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
              Message*
            </h6>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="3"
              className="w-full focus:ring-0 focus:outline-none p-6"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              onClick={reviewAction}
              type="button"
              className="black-btn w-[300px] h-[50px]  flex justify-center"
            >
              <span className="flex space-x-1 items-center h-full">
                <span className="text-sm font-semibold">Submit Review</span>
                {reviewLoading && (
                  <span className="w-5 " style={{ transform: "scale(0.3)" }}>
                    <LoaderStyleOne />
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full comments">
        <h1 className="text-2xl font-medium text-qblack mb-5">Comments</h1>
        {commnets &&
          commnets.length > 0 &&
          commnets.map((comment) => (
            <div
              key={comment.id}
              className="comment-item bg-white px-10 py-[32px] mb-2.5"
            >
              <div className="comment-author flex justify-between items-center mb-3">
                <div className="flex space-x-3 items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[18px] font-medium text-qblack">
                      {comment.author}
                    </p>
                    <p className="text-[13px] font-normal text-qgray">
                      London,UK
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment mb-[30px]">
                <p className="text-[15px] text-qgray leading-7 text-normal">
                  {comment.comments}
                </p>
              </div>
              {comment.replys &&
                comment.replys.length > 0 &&
                comment.replys.map((reply) => (
                  <div
                    key={reply.id}
                    className="sub-comment-item bg-white px-10 pt-[32px] border-t"
                  >
                    <div className="comment-author  mb-3">
                      <div className="flex space-x-3 items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/comment-user-2.png`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium text-qblack">
                            {reply.author}
                          </p>
                          <p className="text-[13px] font-normal text-qgray">
                            London,UK
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comment mb-[30px]">
                      <p className="text-[15px] text-qgray leading-7 text-normal">
                        {reply.comments}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </>
  );
}
