import EditorJsHtml from "editorjs-html";
import { dateformatter } from "../../../utils/formetteddates";

const editorJsHtml = EditorJsHtml();

const SingleBlog = ({ Blogs }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = Blogs || {};

  const contentHtml = editorJsHtml.parse(content).join("");

  return (
    <div className="bg-white p-8">
      <div>
        <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">
          {dateformatter(createdAt)} by
          <span className="text-blue-400 cursor-pointer">
            &nbsp; {"Author" || author}
          </span>
        </p>
      </div>
      <img
        src={coverImg}
        alt="blog images voyagers beat"
        className="w-full md:h-[520px] bg-cover"
      />
      <div className="mt-8 space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="space-y-3 editJSDiv"
        />
        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-semibold text-gray-700">
                Category:{" "}
              </span>
              <span className="text-blue-500 font-medium">
                {category || "General"}
              </span>
            </div>
            <div>
              <span className="text-lg font-semibold text-gray-700">
                Rating:{" "}
              </span>
              <span className="text-gray-900">{rating} </span>
              <span className="text-sm text-gray-600">
                (based on 489 reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
