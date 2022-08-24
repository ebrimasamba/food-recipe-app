import React, { useState } from "react";
import Container from "../../components/global/Container";

import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewRecipe = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="bg-zinc-50">
      <Container>
        <div className="py-6">
          <h1 className="font-bold text-2xl mb-5 text-teal-600">
            Add a new Recipe
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Name
              </label>
              <input
                type="text"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Image
              </label>
              <FilePond
                files={files}
                onupdatefiles={setFiles}
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
                name=""
                id=""
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
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
                // placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Description
              </label>
              <textarea
                name=""
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
                name=""
                id=""
                rows="5"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                // placeholder="Write here"
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-semibold block mb-1">
                Direction
              </label>
              <textarea
                name=""
                id=""
                rows="5"
                className="bg-white custom-shadow w-full border-none rounded-lg text-sm py-3"
                // placeholder="Write here"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <button className="bg-gray-200 py-3 rounded-lg font-semibold">
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

export default NewRecipe;
