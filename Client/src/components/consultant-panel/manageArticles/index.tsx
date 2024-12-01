import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Edit, Trash2 } from "lucide-react";
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Article Listing */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Article Listing</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col sm:flex-row sm:items-start mb-4 border-b pb-4 border-gray-200 space-y-4 sm:space-y-0"
              >
                {/* Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full sm:w-1/2 h-28 rounded-lg sm:mr-4 object-cover"
                />
                {/* Article Info */}
                <div className="flex-grow">
                  <h3 className="text-md font-semibold">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.category}</p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span className="mr-4">{article.likes} Likes</span>
                    <span className="mr-4">{article.views} Views</span>
                    <span>{article.comments} Comments</span>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-2 justify-end sm:justify-start">
                  <button className="text-blue-500">
                    <Edit size={16} />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(article.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Post a new article</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium">Article Title</label>
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
              <label className="block text-sm font-medium">Article Content</label>
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
              <label className="block text-sm font-medium mt-10">
                Featured Photo
              </label>
              <input
                type="file"
                {...register("image")}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Select Category</label>
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
