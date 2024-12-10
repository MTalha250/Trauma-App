import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Edit, Trash2, Heart as HeartIcon, Eye as EyeIcon, MessageSquare as MessageIcon, Calendar as CalendarIcon } from "lucide-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Article1Image from "../../../assets/stories_card_1.png";
import Article2Image from "../../../assets/stories_card_2.png";

interface IFormInput {
  title: string;
  category: string;
  image: File | null;
}

const ArticleManagement: React.FC = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "This sleep disorder puts people at ‘very high risk’ of Parkinson’s",
      category: "Diagnostic Radiology",
      date: "September 13, 2019",
      likes: 18,
      views: 1343,
      comments: 8,
      image: Article1Image,
    },
    {
      id: 2,
      title: "Common food additive may impact gut bacteria, increase anxiety",
      category: "Dermatology",
      date: "September 13, 2019",
      likes: 12,
      views: 939,
      comments: 1,
      image: Article2Image,
    },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [editorContent, setEditorContent] = useState(""); // Rich text editor content
  const quillRef = useRef(null); // ReactQuill ref

  const handleDelete = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newArticle = {
      id: articles.length + 1,
      title: data.title,
      content: editorContent,
      category: data.category,
      date: new Date().toLocaleDateString(),
      likes: 0,
      views: 0,
      comments: 0,
      image: data.image
        ? URL.createObjectURL(data.image)
        : "path/to/default-image.jpg",
    };

    setArticles((prevArticles) => [...prevArticles, newArticle]);
    reset();
    setEditorContent(""); // Clear editor content
  };

  return (
    <div className="md:p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Article Listing */}
        <div className="bg-white  rounded-lg shadow-md">
          <div className=" border-b-2 p-6">
      <h2 className="text-md font-prata font-thin">Article Listing</h2>
      </div>
      <div className="space-y-6 p-6">
        {articles.map((article: any) => (
          <div
            key={article.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="relative  md:w-3/5 h-52">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              {/* Profile Image */}
              <img
                src={article.profileImage}
                alt="Profile"
                className="absolute bottom-2 left-2 w-10 h-10 rounded-full border-2 border-white shadow"
              />
            </div>

            {/* Article Details */}
            <div className="flex-grow py-4 md:px-4 md:w-4/5 flex-col space-y-2">
              <h3 className="text-md font-semibold text-gray-900">
                {article.title}
              </h3>
              <p className="text-sm text-blue-600">{article.category}</p>
              <p className="text-sm text-gray-500 flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {article.date}
              </p>
              <div className="mt-7">
              <div className="border-t border-gray-300 my-4 "></div>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                
                <span className="flex items-center">
                  <HeartIcon className="w-4 h-4 text-red-500 mr-1" />
                  {article.likes} Likes
                </span>
                <span className="flex items-center">
                  <EyeIcon className="w-4 h-4 text-gray-500 mr-1" />
                  {article.views} Views
                </span>
                <span className="flex items-center">
                  <MessageIcon className="w-4 h-4 text-gray-500 mr-1" />
                  {article.comments} Comments
                </span>
              </div>
                {/* Action Buttons */}
            
            <div className="flex justify-end gap-5 items-end mt-4">
            
                <button className="p-2 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200 flex items-center">
                  <Edit size={16} />
                </button>
                <button
                  className="p-2 bg-red-100 text-red-500 rounded-lg hover:bg-red-200 flex items-center"
                  onClick={() => handleDelete(article.id)}
                >
                  <Trash2 size={16} />
                </button>
         
            </div>
            </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>


        {/* Article Form */}
        <div className="bg-white rounded-lg shadow-md">
        <div className=" border-b-2 p-6">
      <h2 className="text-md font-prata font-thin">Post a new article</h2>
      </div>

          <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-base font-medium mb-4 bg-gray-50 py-3 px-4 border-l-primary border-l-[.4rem]">Add Article Detail</label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter title"
                className="w-full p-3 border rounded-lg"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
            <div>
              
              <ReactQuill
                ref={quillRef} // Assigning ref
                value={editorContent}
                onChange={setEditorContent}
                className="mb-4 h-64"
                theme="snow"
                placeholder="Write your content here..."
              />
              {!editorContent && (
                <p className="text-red-500 text-sm">Content is required</p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium mb-4 bg-gray-50 py-3 px-4 border-l-primary border-l-[.4rem] mt-10">
                Featured Photo
              </label>
              <input
                type="file"
                {...register("image")}
                className="w-full p-3 border-2 rounded-lg border-dashed"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-4 bg-gray-50 py-3 px-4 border-l-primary border-l-[.4rem]">Select Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full p-3 border rounded-lg"
              >
                <option value="mental-health">Mental Health</option>
                <option value="ptsd">PTSD</option>
                <option value="grief-counseling">Grief Counseling</option>
                <option value="domestic-violence">Domestic Violence</option>
                <option value="addiction-recovery">Addiction Recovery</option>
                <option value="childhood-trauma">Childhood Trauma</option>
                <option value="other">Other</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              Save Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleManagement;
