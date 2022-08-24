import React, { useState } from "react";
import Container from "../../components/global/Container";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EditRecipe = () => {
  const [form, setForm] = useState({
    name: "",
    image: [],
    category: "",
    description: "",
    duration: "",
    ingredients: "",
    directions: "",
  });

  const onInputChange = (event) => {
    event.persist();
    setForm((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  // const fetchCategory = async () => {
  //   const repsonse = await fetch("http://localhost:8000/api/categories");
  //   const data = await repsonse.json();
  //   console.log(data);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="bg-zinc-50">
      <Container>
        <div className="py-6">
          <h1 className="font-bold text-2xl mb-5 text-teal-600">Edit Recipe</h1>
          <form action="" className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Name
              </label>
              <input
                type="text"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                placeholder="Name"
                name="name"
                onChange={onInputChange}
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Image
              </label>

              <FilePond
                files={form.image}
                onupdatefiles={(fileItems) => {
                  setForm((state) => ({
                    ...state,
                    image: fileItems,
                  }));
                }}
                allowMultiple={true}
                maxFiles={1}
                // server="/api"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Category
              </label>

              <select
                id=""
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                name="category"
                onChange={onInputChange}
              >
                <option value="">Select Category</option>

                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Duration
              </label>
              <input
                type="text"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                name="duration"
                onChange={onInputChange}
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Description
              </label>
              <textarea
                name="description"
                onChange={onInputChange}
                id=""
                rows="5"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                // placeholder="Write here"
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Ingredients
              </label>
              <textarea
                name="ingredients"
                onChange={onInputChange}
                id=""
                rows="5"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                // placeholder="Write here"
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Directions
              </label>
              <textarea
                name="directions"
                onChange={onInputChange}
                id=""
                rows="5"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                // placeholder="Write here"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <button
                className="bg-gray-200 py-3 rounded-lg font-semibold"
                type="reset"
              >
                Cancel
              </button>
              <button className="bg-primary py-3 rounded-lg font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditRecipe;
